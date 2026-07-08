import type { Framework } from "@/lib/types";

export function ComplianceBadgeStrip({
  eyebrow,
  frameworks,
}: {
  eyebrow: string;
  frameworks: Framework[];
}) {
  return (
    <div className="border-y border-border-subtle bg-bg-surface/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          {eyebrow}
        </span>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {frameworks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-text-secondary">
              <Icon className="h-4 w-4 text-accent-blue-light" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
