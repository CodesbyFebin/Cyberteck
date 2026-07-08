"use client";

const OPTIONS = [
  { value: "latest", label: "Latest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "quickest-read", label: "Quickest Read" },
] as const;

export function SortDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="blog-sort" className="sr-only">
        Sort posts
      </label>
      <select
        id="blog-sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-chip border border-border-subtle bg-bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-2"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
