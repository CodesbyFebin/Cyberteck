"use client";

import type { BlogCategory } from "@/lib/blog/types";

export function CategoryList({
  categories,
  activeSlug,
  onSelect,
}: {
  categories: BlogCategory[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <nav aria-label="Blog categories">
      <p className="mb-3 text-sm font-semibold text-text-primary">Categories</p>
      <ul className="flex flex-col gap-1">
        {categories.map((cat) => {
          const isActive = cat.slug === activeSlug;
          return (
            <li key={cat.slug}>
              <button
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelect(cat.slug)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-accent-blue/15 font-medium text-accent-blue-light"
                    : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-xs text-text-muted">{cat.count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
