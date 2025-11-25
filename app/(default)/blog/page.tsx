// app/(default)/blog/page.tsx
import { getAllBlogs } from "@/lib/blogs";
import BlogList from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Stonefort Securities",
  description: "Market insights, trading education, and platform updates.",
};

export const dynamic = "force-static";

export default function BlogIndexPage() {
  const posts = getAllBlogs();

  return (
    <section className="relative">
      {/* Radial gradient background (optional) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-emerald-500/30 rounded-full blur-[140px]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page heading */}
        <div className="pt-24 pb-10 md:pt-32 md:pb-8 text-center">
          <p className="inline-flex font-medium text-[#4d6e55] pb-2 tracking-wide uppercase text-xs">
            Stonefort Insights
          </p>
          <h1 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
            Market analysis &amp; trading education
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore Forex, indices, metals and more with in-depth guides,
            platform tips, and risk management insights.
          </p>
        </div>

        {/* Blog listing with filters + search + cards */}
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
