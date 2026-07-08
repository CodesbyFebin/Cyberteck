"use client";

import { Search } from "lucide-react";

export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <label htmlFor="blog-search" className="sr-only">
        Search blogs
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
        aria-hidden="true"
      />
      <input
        id="blog-search"
        type="search"
        placeholder="Search blogs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-chip border border-border-subtle bg-bg-surface py-2.5 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2"
      />
    </div>
  );
}
