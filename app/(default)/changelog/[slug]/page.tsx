// app/(default)/changelog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllUpdates } from "@/lib/updates";
import type { Metadata } from "next";

import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  const posts = getAllUpdates();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = getAllUpdates().find((p) => p.slug === params.slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ChangelogPostPage({ params }: PageProps) {
  const posts = getAllUpdates();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {post.title}
      </h1>

      {/* Date */}
      {post.publishedAt && (
        <p className="text-sm text-slate-400 mb-6">
          {post.publishedAt}
        </p>
      )}

      {/* Short description */}
      {post.description && (
        <p className="text-base text-slate-300 mb-8">
          {post.description}
        </p>
      )}

      {/* 🔥 Full body */}
      {post.body && (
        <article className="prose prose-invert max-w-none">
          <MDXRemote source={post.body} />
        </article>

      )}
    </main>
  );
}
