import Link from "next/link";
import Image from "next/image";
import Particles from "@/components/particles";
import Highlighter, { HighlighterItem02 } from "@/components/highlighter";
import { getAllUpdates } from "@/lib/updates";

export default async function RelatedPosts() {
  // Load MDX posts from /content/update
  const posts = getAllUpdates().slice(0, 3); 

  return (
    <aside>
      <h2 className="inline-flex font-bold text-lg bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
        Related stories
      </h2>

      <div className="mx-auto sm:max-w-[728px] lg:max-w-none">
        <Highlighter className="grid gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-3 group">
          {posts.map((post, index) => (
            <div key={index}>
              {/* Single post URL */}
              <Link href={`/changelog#${post.slug}`}>
                <HighlighterItem02>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10" quantity={3} />

                    <div className="p-4 flex flex-col gap-3">
                      {/* Title */}
                      <h3 className="text-slate-100 text-base font-semibold">
                        {post.title}
                      </h3>

                      {/* Date */}
                      {post.publishedAt && (
                        <p className="text-xs text-slate-400">
                          {post.publishedAt}
                        </p>
                      )}

                      {/* Description */}
                      {post.description && (
                        <p className="text-sm text-slate-400 line-clamp-3">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </div>
                </HighlighterItem02>
              </Link>
            </div>
          ))}
        </Highlighter>
      </div>
    </aside>
  );
}
