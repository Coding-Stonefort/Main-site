// app/(default)/changelog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllUpdates } from "@/lib/updates";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import "./changelog-article.css";

type ChangelogParams = { slug: string };

export function generateStaticParams() {
  const posts = getAllUpdates();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ChangelogParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllUpdates().find((p) => p.slug === slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ChangelogPostPage({
  params,
}: {
  params: Promise<ChangelogParams>;
}) {
  const { slug } = await params;

  const post = getAllUpdates().find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="cl-article">
      <div className="cl-inner">
        
        {/* ⭐ HERO IMAGE */}
        {post.image && (
          <div className="cl-hero">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="cl-hero-img"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="cl-title">{post.title}</h1>

        {/* Date */}
        {post.publishedAt && (
          <p className="cl-date">{post.publishedAt}</p>
        )}

        {/* Description */}
        {post.description && (
          <p className="cl-intro">{post.description}</p>
        )}

        {/* Body */}
        {post.body && (
          <article className="cl-body prose max-w-none">
            <MDXRemote source={post.body} />
          </article>
        )}
      </div>
    </main>
  );
}
