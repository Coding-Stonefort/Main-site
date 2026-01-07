// lib/chat/search.ts
import MiniSearch from "minisearch";
import fs from "node:fs";
import path from "node:path";

type DocChunk = {
  id: string;
  title: string;
  url: string;
  heading: string;
  content: string;
};

type IndexFile = {
  generatedAt: number;
  docs: DocChunk[];
};

let mini: MiniSearch<DocChunk> | null = null;
let rawDocs: DocChunk[] | null = null;

/**
 * Normalize text so search becomes:
 * 1) case-insensitive
 * 2) spacing-insensitive (MetaTrader5 == MetaTrader 5)
 * 3) robust to common synonyms (mt5, kyc, pnl)
 */
function normalizeText(input: string) {
  return input
    .toLowerCase()
    // unify connectors
    .replace(/&/g, " and ")
    // normalize MetaTrader 5 variants => mt5
    .replace(/\bmeta\s*trader\s*5\b/g, " mt5 ")
    .replace(/\bmetatrader\s*5\b/g, " mt5 ")
    .replace(/\bmetatrader5\b/g, " mt5 ")
    // normalize P&L variants
    .replace(/\bp\s*&\s*l\b/g, " pnl profit loss ")
    .replace(/\bpnl\b/g, " pnl profit loss ")
    // normalize KYC variants
    .replace(/\bkyc\b/g, " kyc verification ")
    // normalize common finance ops
    .replace(/\bwithdraw\b/g, " withdraw withdrawal ")
    .replace(/\bdeposit\b/g, " deposit funding ")
    // remove punctuation but keep numbers/letters
    .replace(/[^a-z0-9\s]/g, " ")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Tokenizer that ignores punctuation AND spacing issues.
 * MiniSearch will index/search using these tokens.
 */
function tokenize(text: string) {
  const norm = normalizeText(text);
  if (!norm) return [];
  return norm.split(" ").filter(Boolean);
}

function loadIndex() {
  if (mini) return;

  const p = path.join(process.cwd(), "public", "mdx-index.json");
  const raw = fs.readFileSync(p, "utf8");
  const parsed: IndexFile = JSON.parse(raw);

  rawDocs = parsed.docs;

  mini = new MiniSearch<DocChunk>({
    fields: ["title", "heading", "content"],
    storeFields: ["id", "title", "url", "heading", "content"],
    tokenize, // critical for spacing/case robustness
    processTerm: (term) => normalizeText(term), // critical
    searchOptions: {
      boost: { title: 6, heading: 4, content: 1 },
      fuzzy: 0.08,
      prefix: true,
    },
  });

  mini.addAll(parsed.docs);
}

const STOPWORDS = new Set([
  "what",
  "is",
  "are",
  "the",
  "a",
  "an",
  "of",
  "to",
  "for",
  "in",
  "on",
  "and",
  "or",
  "with",
  "how",
  "do",
  "does",
  "can",
  "i",
  "we",
  "you",
  "your",
  "our",
  "about",
  "please",
  "tell",
  "me",
  "explain",
  "name",
  // keep "why" removed so results rely on meaningful terms
  "why",
]);

function extractMeaningfulTerms(q: string) {
  const tokens = tokenize(q);
  return tokens.filter((t) => t && !STOPWORDS.has(t));
}

function extractWhatIsTopic(qRaw: string) {
  const q = normalizeText(qRaw).replace(/[?!.]+$/g, "");
  const m = q.match(/^(what\s+is|what\s+are)\s+(.+)$/i);
  if (!m) return null;
  return m[2].trim();
}

function makeSnippet(content: string, query: string) {
  const text = content.replace(/\s+/g, " ").trim();
  if (text.length <= 320) return text;

  const terms = extractMeaningfulTerms(query).slice(0, 6);
  const lower = text.toLowerCase();
  const hitTerm = terms.find((t) => lower.includes(t));
  const idx = hitTerm ? lower.indexOf(hitTerm) : -1;

  if (idx > 60) {
    const start = Math.max(0, idx - 90);
    const end = Math.min(text.length, start + 340);
    return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  }

  return text.slice(0, 340) + "…";
}

/**
 * Exact heading override:
 * If user asks an FAQ that matches a heading (case/spacing-insensitive),
 * return it immediately. This prevents false "no results".
 */
function exactFindByHeading(query: string) {
  if (!rawDocs) return null;

  const q = normalizeText(query);
  if (!q) return null;

  // Perfect heading match
  for (const d of rawDocs) {
    const h = normalizeText(d.heading || "");
    if (h && h === q) return d;
  }

  // Soft heading match (contains) for slight rephrases
  // ex: "Can I use Performance Analytics with demo?" vs full heading
  for (const d of rawDocs) {
    const h = normalizeText(d.heading || "");
    if (!h) continue;
    if (h.includes(q) || q.includes(h)) return d;
  }

  return null;
}

/**
 * Hard relevance gate:
 * require enough keyword overlap for long queries, so generic sections don't win.
 */
function hasOverlap(terms: string[], text: string) {
  const t = normalizeText(text);
  const strong = terms.filter((x) => x.length >= 2);

  if (strong.length === 0) return false;

  let hits = 0;
  for (const term of strong) {
    if (t.includes(term)) hits++;
  }

  const required =
    strong.length <= 2 ? 1 : Math.min(6, Math.max(2, Math.ceil(strong.length * 0.45)));

  return hits >= required;
}

/**
 * Rerank: prefer chunks whose FULL TEXT contains more query terms.
 */
function keywordOverlapScore(
  terms: string[],
  doc: { title: string; heading: string; content: string }
) {
  const hay = normalizeText(`${doc.title} ${doc.heading} ${doc.content}`);
  let hits = 0;

  for (const term of terms) {
    if (term.length < 2) continue;
    if (hay.includes(term)) hits++;
  }

  const h = normalizeText(doc.heading);
  const ti = normalizeText(doc.title);
  let headHits = 0;
  let titleHits = 0;

  for (const term of terms) {
    if (term.length < 2) continue;
    if (h.includes(term)) headHits++;
    if (ti.includes(term)) titleHits++;
  }

  return hits + headHits * 1.5 + titleHits * 2;
}

/**
 * Returns ONLY ONE best result (single link)
 */
export function searchMdx(query: string, limit = 5) {
  loadIndex();

  const qRaw = query.trim();
  if (!qRaw) return [];

  //  1) Exact FAQ heading match first (guaranteed)
  const exact = exactFindByHeading(qRaw);
  if (exact) {
    return [
      {
        title: exact.title,
        url: exact.url,
        heading: exact.heading,
        snippet: makeSnippet(exact.content, qRaw),
        score: 999,
      },
    ];
  }

  const topic = extractWhatIsTopic(qRaw);
  const baseQuery = normalizeText(topic ?? qRaw);

  const meaningful = extractMeaningfulTerms(baseQuery);
  if (meaningful.length === 0) return [];

  // Use AND for multi-term queries for precision
  const combineWith = meaningful.length >= 2 ? "AND" : "OR";
  const cleanQuery = meaningful.join(" ");

  // Pull more candidates then rerank ourselves
  const normal = mini!.search(cleanQuery, { combineWith }).slice(0, 60);

  // Phrase boost for longer queries
  const phrase = cleanQuery.length >= 8 ? mini!.search(`"${cleanQuery}"`).slice(0, 60) : [];

  const merged = new Map<string, any>();
  for (const r of normal) merged.set(r.id, { ...r });
  for (const r of phrase) {
    const prev = merged.get(r.id);
    merged.set(r.id, { ...(prev ?? r), score: (prev?.score ?? r.score) + 6 });
  }

  const reranked = Array.from(merged.values()).map((r: any) => {
    const doc = {
      title: String(r.title ?? ""),
      heading: String(r.heading ?? ""),
      content: String(r.content ?? ""),
    };

    let score = Number(r.score ?? 0);

    // Our overlap score dominates relevance
    score += keywordOverlapScore(meaningful, doc) * 3.2;

    // If query is close to heading, boost strongly
    const headingNorm = normalizeText(doc.heading);
    const queryNorm = normalizeText(qRaw);
    if (headingNorm && queryNorm.includes(headingNorm)) score += 12;

    return { ...r, score };
  });

  const MIN_SCORE = meaningful.length >= 3 ? 6 : 2;

  const filtered = reranked
    .filter((r: any) => (r.score ?? 0) >= MIN_SCORE)
    .sort((a: any, b: any) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, Math.max(10, limit));

  if (!filtered.length) return [];

  //  Hard gate to avoid generic "trade/account" answers
  const top = filtered[0];
  const combined = `${top.title} ${top.heading} ${top.content}`;
  if (!hasOverlap(meaningful, combined)) return [];

  //  Requirement #4: only one link — dedupe by URL and pick best
  const bestByUrl = new Map<string, any>();
  for (const r of filtered) {
    const url = String(r.url ?? "");
    const prev = bestByUrl.get(url);
    if (!prev || (r.score ?? 0) > (prev.score ?? 0)) bestByUrl.set(url, r);
  }

  const best = Array.from(bestByUrl.values()).sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];

  return [
    {
      title: best.title,
      url: best.url,
      heading: best.heading,
      snippet: makeSnippet(best.content, cleanQuery),
      score: best.score,
    },
  ];
}
