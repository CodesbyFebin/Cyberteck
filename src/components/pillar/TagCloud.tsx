"use client";

import type { BlogTag } from "@/lib/blog/types";

export function TagCloud({
  tags,
  onSelect,
}: {
  tags: BlogTag[];
  onSelect: (slug: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-text-primary">Popular Topics</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag.slug}>
            <button
              type="button"
              onClick={() => onSelect(tag.slug)}
              className="rounded-chip border border-border-subtle px-3 py-1.5 text-xs text-text-secondary hover:border-accent-blue-light hover:text-accent-blue-light"
            >
              {tag.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
