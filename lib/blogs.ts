// lib/blogs.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Blog = {
  title: string;
  slug: string;
  publishedAt: string;
  image: string;
  author: string;
  description: string;
  tags: string[];
};

const BLOGS_DIR = path.join(process.cwd(), "content", "update");

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  const files = fs.readdirSync(BLOGS_DIR);

  const blogs: Blog[] = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOGS_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      const slugFromFile = file.replace(/\.mdx?$/, "");

      return {
        title: data.title ?? slugFromFile,
        slug: data.slug ?? slugFromFile,
        publishedAt: data.publishedAt ?? "",
        image: data.image ?? "/images/default-blog.webp",
        author: data.author ?? "Stonefort Research Team",
        description: data.description ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => {
      // newest first
      if (!a.publishedAt || !b.publishedAt) return 0;
      return a.publishedAt < b.publishedAt ? 1 : -1;
    });

  return blogs;
}
