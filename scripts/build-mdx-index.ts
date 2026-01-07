// scripts/build-mdx-index.ts
import fg from "fast-glob";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

//  Change this to match your site route for these MDX pages
// Your folder is content/update, so a sensible default is /updates/<slug>
const BASE_ROUTE = "";


// where your MDX files live
const CONTENT_GLOB = "content/**/*.mdx";

// output JSON
const OUT_FILE = path.join(process.cwd(), "public", "mdx-index.json");

// --- helpers ---
function stripMd(md: string) {
  return md
    .replace(/```[\s\S]*?```/g, " ") // code blocks
    .replace(/`[^`]*`/g, " ") // inline code
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ") // images
    .replace(/\[[^\]]*]\([^)]+\)/g, " ") // links (keep text removed, ok for search)
    .replace(/[*_~]+/g, "") // emphasis
    .replace(/^>\s?/gm, "") // blockquotes
    .replace(/^\s*[-*+]\s+/gm, "") // bullets
    .replace(/^\s*\d+\.\s+/gm, "") // numbered lists
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHeading(h: string) {
  return h
    .replace(/[*_~`]/g, "")
    .replace(/^\s*#+\s*/, "")
    .trim();
}

/**
 * Split markdown into sections by headings.
 * We treat both ## and ### as section starts.
 * For ### under a ##, we keep the ### heading as the section heading (e.g. "Pip").
 */
function splitByHeadings(markdown: string) {
  const lines = markdown.split(/\r?\n/);

  const sections: { heading: string; md: string }[] = [];
  let currentHeading = "Introduction";
  let buf: string[] = [];

  const push = () => {
    const md = buf.join("\n").trim();
    if (md) sections.push({ heading: currentHeading, md });
    buf = [];
  };

  for (const line of lines) {
    const isH1 = /^#\s+/.test(line);
    const isH2 = /^##\s+/.test(line);
    const isH3 = /^###\s+/.test(line);

    if (isH1 || isH2 || isH3) {
      push();
      currentHeading = cleanHeading(line);
      continue;
    }


    // ignore horizontal rules used as separators in your MDX (---)
    if (/^\s*---\s*$/.test(line)) continue;

    buf.push(line);
  }

  push();
  return sections;
}

function makeChunksFromFile(filePath: string): DocChunk[] {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

const title = String(data.title ?? "");

// slug from frontmatter OR filename
const rawSlug = String(
  data.slug ?? path.basename(filePath).replace(/\.mdx$/, "")
);

// URL: if slug already starts with "/", use it directly
const url = rawSlug.startsWith("/")
  ? rawSlug
  : `${BASE_ROUTE}/${rawSlug}`;

// clean slug for internal IDs (no leading "/")
const slug = rawSlug.replace(/^\//, "");


  const sections = splitByHeadings(content);

  // Create a chunk per section
  const chunks: DocChunk[] = [];
  for (const sec of sections) {
    const clean = stripMd(sec.md);
    if (!clean) continue;

    // keep chunks reasonably sized
    // If a section is very large, split it into smaller parts.
    const MAX = 900;
    if (clean.length <= MAX) {
      chunks.push({
        id: `${slug}::${sec.heading.toLowerCase().replace(/\s+/g, "-")}`,
        title,
        url,
        heading: sec.heading,
        content: clean,
      });
} else {
  let text = clean;
  let part = 1;

  while (text.length > 0) {
    if (text.length <= MAX) {
      chunks.push({
        id: `${slug}::${sec.heading.toLowerCase().replace(/\s+/g, "-")}::${part}`,
        title,
        url,
        heading: sec.heading,
        content: text.trim(),
      });
      break;
    }

    // try to cut at a nice boundary within MAX (paragraph → sentence → space)
    let cut = MAX;

    const paraCut = text.lastIndexOf("\n\n", MAX);
    if (paraCut > 200) cut = paraCut;

    const sentCut = text.lastIndexOf(". ", MAX);
    if (sentCut > 200) cut = Math.max(cut, sentCut + 1);

    const spaceCut = text.lastIndexOf(" ", MAX);
    if (spaceCut > 200) cut = Math.max(cut, spaceCut);

    const slice = text.slice(0, cut).trim();

    chunks.push({
      id: `${slug}::${sec.heading.toLowerCase().replace(/\s+/g, "-")}::${part}`,
      title,
      url,
      heading: sec.heading,
      content: slice,
    });

    text = text.slice(cut).trim();
    part++;
  }
}

  }

  return chunks;
}

async function main() {
  const files = await fg(CONTENT_GLOB, { onlyFiles: true });

  const docs: DocChunk[] = [];
  for (const file of files) {
    docs.push(...makeChunksFromFile(file));
  }

  const out: IndexFile = {
    generatedAt: Date.now(),
    docs,
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), "utf8");

  console.log("✅ MDX index built successfully");
  console.log("📄 Files scanned:", files.length);
  console.log("📦 Chunks created:", docs.length);
  console.log("📍 Output:", OUT_FILE);
}

main().catch((e) => {
  console.error("❌ Failed to build MDX index:", e);
  process.exit(1);
});
