"use client";

import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Newsletter } from "@/components/shared/Newsletter";
import { BlogHero } from "./BlogHero";
import { SearchInput } from "./SearchInput";
import { CategoryList } from "./CategoryList";
import { TagCloud } from "./TagCloud";
import { SortDropdown } from "./SortDropdown";
import { BlogCard } from "./BlogCard";
import { Pagination } from "./Pagination";
import { BLOG_CATEGORIES, POPULAR_TAGS, BLOG_POSTS, TOTAL_POSTS, POSTS_PER_PAGE } from "@/lib/blog/data";

export function BlogListingPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE);

  // NOTE: TOTAL_POSTS/BLOG_CATEGORIES counts are derived from the real
  // BLOG_POSTS array (see lib/blog/data.ts) — only 9 posts have transcribed
  // content today. Add more entries there (and, once built, /blogs/[slug]
  // detail pages) as real posts become available; pagination and counts
  // will update automatically.
  const filtered = useMemo(() => {
    let posts = [...BLOG_POSTS];

    if (category !== "all") {
      const label = BLOG_CATEGORIES.find((c) => c.slug === category)?.label;
      posts = posts.filter((p) => p.category === label);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      posts = posts.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      );
    }

    if (sort === "latest") posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    if (sort === "oldest") posts.sort((a, b) => +new Date(a.date) - +new Date(b.date));
    if (sort === "quickest-read") posts.sort((a, b) => a.readTimeMinutes - b.readTimeMinutes);

    return posts;
  }, [search, category, sort]);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blogs" }]} />
      </div>

      <BlogHero />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          <SearchInput value={search} onChange={setSearch} />
          <CategoryList
            categories={BLOG_CATEGORIES}
            activeSlug={category}
            onSelect={(slug) => {
              setCategory(slug);
              setPage(1);
            }}
          />
          <TagCloud tags={POPULAR_TAGS} onSelect={(slug) => setSearch(slug.replace(/-/g, " "))} />
          <Newsletter layout="card" />
        </aside>

        {/* Main content */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-text-secondary">
              Showing {filtered.length ? 1 : 0}–{filtered.length} of {TOTAL_POSTS} posts
            </p>
            <SortDropdown value={sort} onChange={setSort} />
          </div>

          {filtered.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </ul>
          ) : (
            <p className="py-16 text-center text-text-secondary">
              No posts match your search. Try a different keyword or category.
            </p>
          )}

          <div className="mt-10">
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <Newsletter
          layout="bar"
          heading="Get the latest insights delivered"
          description="Subscribe to our newsletter and never miss an update."
        />
      </div>
    </main>
  );
}
