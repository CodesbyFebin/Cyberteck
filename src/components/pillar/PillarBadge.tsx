import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PillarBadge({ index }: { index: number }) {
  return (
    <Link
      href="/pillars"
      className="inline-flex items-center gap-2 rounded-chip border border-accent-violet/40 bg-accent-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-violet-light hover:bg-accent-violet/20"
    >
      Pillar {index} of 10
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}
