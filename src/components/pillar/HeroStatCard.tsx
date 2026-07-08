import type { HeroStat } from "@/lib/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Sparkline } from "./Sparkline";

/** Generic floating metric card (e.g. "HIGH RISK IDENTITIES 248 ↑18.3%") */
export function HeroStatCard({ label, value, delta, deltaDirection, trend }: HeroStat) {
  const isUp = deltaDirection === "up";
  return (
    <div className="glass-panel w-44 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-text-primary">{value}</p>
      {delta && (
        <p
          className={`mt-1 flex items-center gap-1 text-xs font-medium ${
            isUp ? "text-accent-green" : "text-accent-red"
          }`}
        >
          {isUp ? (
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          ) : (
            <ArrowDown className="h-3 w-3" aria-hidden="true" />
          )}
          {delta}
        </p>
      )}
      {trend && (
        <div className="mt-2">
          <Sparkline data={trend} color={isUp ? "green" : "red"} />
        </div>
      )}
    </div>
  );
}

/** The larger "score out of 100" card, e.g. "IDENTITY RISK SCORE 89/100" */
export function HeroScoreCard({
  label,
  value,
  max,
  delta,
  deltaDirection,
  trend,
}: HeroStat & { max: number }) {
  const isUp = deltaDirection === "up";
  return (
    <div className="glass-panel w-48 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
      <p className="mt-1">
        <span className="text-3xl font-bold text-text-primary">{value}</span>
        <span className="text-sm text-text-muted"> /{max}</span>
      </p>
      {delta && (
        <p className={`mt-1 text-xs font-medium ${isUp ? "text-accent-green" : "text-accent-red"}`}>
          {delta}
        </p>
      )}
      {trend && (
        <div className="mt-2">
          <Sparkline data={trend} color={isUp ? "green" : "red"} />
        </div>
      )}
    </div>
  );
}
