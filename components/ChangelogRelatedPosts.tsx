// Server component – NO "use client"
import Link from "next/link";
import PostDate from "./post-date";
import { getAllUpdates } from "@/lib/updates";
import "./related-posts.css";

type Props = {
  title?: string;
  tag?: string;       // optional: filter by tag
  limit?: number;     // how many cards to show
};

export default async function ChangelogRelatedPosts({
  title = "Related articles",
  tag,
  limit = 3,
}: Props) {
  // Load all updates
  let posts = getAllUpdates();

  // Optional: filter by tag
  if (tag) {
    posts = posts.filter((p) => p.tags?.includes(tag));
  }

  // Limit the number of results
  const items = posts.slice(0, limit);

  // If nothing found, return nothing
  if (!items.length) return null;

  return (
    <section className="rp-section">
      <div className="rp-inner">
        <div className="rp-header">
          <h2 className="rp-title">{title}</h2>
        </div>

        <div className="rp-grid">
          {items.map((post) => (
            <article key={post.slug} className="rp-card">
              <div className="rp-meta">
                {post.publishedAt && (
                  <PostDate dateString={post.publishedAt} />
                )}
              </div>

              <h3 className="rp-card-title">
                <Link href={`/changelog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {post.description && (
                <p className="rp-card-desc">{post.description}</p>
              )}

              <Link
                href={`/changelog/${post.slug}`}
                className="rp-card-link"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
