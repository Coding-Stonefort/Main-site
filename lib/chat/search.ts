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

function loadIndex() {
  if (mini) return;

  const p = path.join(process.cwd(), "public", "mdx-index.json");
  const raw = fs.readFileSync(p, "utf8");
  const parsed: IndexFile = JSON.parse(raw);

  mini = new MiniSearch<DocChunk>({
    fields: ["title", "heading", "content"],
    storeFields: ["id", "title", "url", "heading", "content"],
    searchOptions: {
      boost: { title: 6, heading: 4, content: 1 },
      fuzzy: 0.1,
      prefix: true,
    },
  });

  mini.addAll(parsed.docs);
}

function normalizeQuery(q: string) {
  return q
    .replace(/\bmt5\b/gi, "mt5 metatrader 5")
    .replace(/\bkyc\b/gi, "kyc verification")
    .replace(/\bwithdraw\b/gi, "withdraw withdrawal")
    .replace(/\bdeposit\b/gi, "deposit funding")
    .trim();
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
]);

function extractMeaningfulTerms(q: string) {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOPWORDS.has(t));
}

function extractWhatIsTopic(qRaw: string) {
  const q = qRaw.toLowerCase().trim().replace(/[?!.]+$/g, "");
  const m = q.match(/^(what\s+is|what\s+are)\s+(.+)$/i);
  if (!m) return null;
  return m[2].trim();
}

function makeSnippet(content: string, query: string) {
  const text = content.replace(/\s+/g, " ").trim();
  if (text.length <= 320) return text;

  const terms = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOPWORDS.has(t))
    .slice(0, 6);

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
 *  Hard relevance gate:
 * Require the top chunk to actually contain meaningful query terms
 * in its title/heading/content (not just fuzzy/prefix noise).
 */
function hasOverlap(terms: string[], text: string) {
  const t = text.toLowerCase();
  const strong = terms.filter((x) => x.length >= 3);

  if (strong.length === 0) return false;

  let hits = 0;
  for (const term of strong) {
    if (t.includes(term)) hits++;
  }

  // Stronger relevance gate:
  // - For short queries: allow 1 hit
  // - For longer queries: require ~40% of terms (min 2, max 6)
  const required =
    strong.length <= 2
      ? 1
      : Math.min(6, Math.max(2, Math.ceil(strong.length * 0.4)));

  return hits >= required;
}


export function searchMdx(query: string, limit = 5) {
  loadIndex();

  const qRaw = query.trim();
  if (!qRaw) return [];

  const topic = extractWhatIsTopic(qRaw);
  const baseQuery = normalizeQuery(topic ?? qRaw);

  //  Use meaningful terms only (prevents "what is a" from dominating)
  const meaningful = extractMeaningfulTerms(baseQuery);

  // If nothing meaningful (like "the and of"), return nothing.
  if (meaningful.length === 0) return [];

  const cleanQuery = meaningful.join(" ");

  const combineWith = meaningful.length >= 2 ? "AND" : "OR";

  //  stricter fuzzy when query is long (reduces unrelated matches)
  // MiniSearch doesn't let us change fuzzy per-search easily,
  // but we can enforce strictness via overlap gate below.
  const normal = mini!.search(cleanQuery, { combineWith }).slice(0, 40);

  const phrase = cleanQuery.length >= 5 ? mini!.search(`"${cleanQuery}"`).slice(0, 40) : [];

  const merged = new Map<string, any>();
  for (const r of normal) merged.set(r.id, { ...r });
  for (const r of phrase) {
    const prev = merged.get(r.id);
    merged.set(r.id, { ...(prev ?? r), score: (prev?.score ?? r.score) + 6 });
  }

  const topicTerms = topic ? extractMeaningfulTerms(topic) : [];

  const reranked = Array.from(merged.values()).map((r: any) => {
    let score = r.score ?? 0;

    if (topic) {
      const heading = String(r.heading ?? "").toLowerCase();
      const t = topic.toLowerCase();

      if (heading.includes(t)) score += 10;
      if (topicTerms.length && topicTerms.every((tt) => heading.includes(tt))) score += 5;
    }

    return { ...r, score };
  });

  const MIN_SCORE = meaningful.length >= 2 ? 2.8 : 1.2;

  const results = reranked
    .filter((r: any) => (r.score ?? 0) >= MIN_SCORE)
    .sort((a: any, b: any) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, limit);

  //  HARD GATE: if top result doesn't contain query terms, treat as no match
  if (results.length) {
    const top = results[0];
    const combined = `${top.title} ${top.heading} ${top.content}`;
    if (!hasOverlap(meaningful, combined)) return [];
  }

  return results.map((r: any) => ({
    title: r.title,
    url: r.url,
    heading: r.heading,
    snippet: makeSnippet(r.content, cleanQuery),
    score: r.score,
  }));
}
