import fs from "fs";
import path from "path";
import matter from "gray-matter";


export type UpdateMeta = {
  image?: string;      
  body: string;
  title: string;
  slug: string;
  publishedAt: string;
  description?: string;
  tags?: string[];
};

const updatesDir = path.join(process.cwd(), "content", "update");

export function getAllUpdates(): UpdateMeta[] {
  if (!fs.existsSync(updatesDir)) return [];

  const files = fs.readdirSync(updatesDir).filter((file) =>
    file.endsWith(".mdx")
  );

  const posts: UpdateMeta[] = files.map((file) => {
    const fullPath = path.join(updatesDir, file);
    const raw = fs.readFileSync(fullPath, "utf8");

    // ⬅ get both frontmatter (data) AND content
    const { data, content } = matter(raw);

    const slug =
      (data.slug as string | undefined) ?? file.replace(/\.mdx$/, "");

    return {
      body: content,
      title: (data.title as string) ?? slug,
      slug,
      publishedAt:
        (data.publishedAt as string | undefined) ||
        (data.date as string | undefined) ||
        "",
      description: (data.description as string | undefined) ?? "",
      tags: (data.tags as string[] | undefined) ?? [],
      image: data.image as string | undefined,    
    };
  });

  // newest first
  posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return posts;
}
