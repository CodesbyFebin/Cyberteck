import type { BlogTag } from "@/lib/blog/types";

type TagCloudProps = {
  tags: BlogTag[];
  onSelect: (slug: string) => void;
};

export function TagCloud({ tags, onSelect }: TagCloudProps) {
  return (
    <div className="surface-card p-5">
      <p className="mb-3 text-sm font-semibold text-text-primary">Popular Tags</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.slug}
            type="button"
            onClick={() => onSelect(tag.slug)}
            className="rounded-chip border border-border-subtle px-3 py-1 text-xs text-text-secondary transition-colors hover:border-accent-blue-light hover:text-accent-blue-light"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
