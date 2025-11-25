"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/blogs";
import styles from "./BlogList.module.css";

type Props = {
  posts: Blog[];
};

export default function BlogList({ posts }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  // collect unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  // filter + search
  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return posts.filter((post) => {
      const matchTag = selectedTag ? post.tags?.includes(selectedTag) : true;
      const matchSearch = q
        ? post.title.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q)
        : true;

      return matchTag && matchSearch;
    });
  }, [posts, selectedTag, search]);

  const visiblePosts = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className={styles.wrapper}>
      {/* filters */}
      {allTags.length > 0 && (
        <div className={styles.filters}>
          <button
            type="button"
            onClick={() => {
              setSelectedTag(null);
              setVisibleCount(9);
            }}
            className={
              selectedTag === null
                ? `${styles.filterButton} ${styles.filterButtonActive}`
                : styles.filterButton
            }
          >
            Show All
          </button>

          {allTags.map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedTag(active ? null : tag);
                  setVisibleCount(9);
                }}
                className={
                  active
                    ? `${styles.filterButton} ${styles.filterButtonActive}`
                    : styles.filterButton
                }
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}

      {/* search bar */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by title or keyword"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(9);
          }}
        />
      </div>

      {/* cards */}
      {visiblePosts.length === 0 ? (
        <p className={styles.emptyText}>
          No articles found. Try another filter or search.
        </p>
      ) : (
        <>
          <div className={styles.grid}>
            {visiblePosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.cardImageWrapper}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImage}
                  />
                </Link>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    {post.publishedAt && (
                      <span className={styles.cardDate}>
                        {new Intl.DateTimeFormat("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }).format(new Date(post.publishedAt))}
                      </span>
                    )}

                    {post.tags?.length > 0 && (
                      <div className={styles.cardTags}>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={styles.cardTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                  </Link>

                  <p className={styles.cardExcerpt}>{post.description}</p>

                    <div className={styles.cardFooter}>
                    <div className={styles.authorBox}>
                        <Image
                        src="/images/sfs-logo.webp"
                        alt="Stonefort Logo"
                        width={18}
                        height={18}
                        className={styles.authorLogo}
                        />
                        <span className={styles.cardAuthor}>{post.author}</span>
                    </div>

                    <Link href={`/changelog/${post.slug}`} className={styles.readMore}>
                        Read article →
                    </Link>
                    </div>


                </div>
              </article>
            ))}
          </div>

          {canLoadMore && (
            <div className={styles.viewMoreWrapper}>
              <button
                type="button"
                className={styles.viewMoreButton}
                onClick={() => setVisibleCount((v) => v + 9)}
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
