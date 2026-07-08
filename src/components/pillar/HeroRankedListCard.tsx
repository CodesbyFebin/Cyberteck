import type { RankedListItem } from "@/lib/types";

export function HeroRankedListCard({ label, items }: { label: string; items: RankedListItem[] }) {
  return (
    <div className="glass-panel w-56 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs text-text-secondary">
              <span>{item.label}</span>
              <span className="text-text-muted">{item.pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-primary"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
