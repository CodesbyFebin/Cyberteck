import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/lib/blog/data";

export function LatestBlogPreview() {
  const latest = BLOG_POSTS.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-3xl font-bold text-text-primary">Latest Insights</h2>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light hover:gap-2"
        >
          View All Posts <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {latest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
