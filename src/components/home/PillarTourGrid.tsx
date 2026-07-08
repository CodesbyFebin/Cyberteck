import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/lib/pillars";

const ACCENT_TILE: Record<string, string> = {
  blue: "bg-accent-blue/15 text-accent-blue-light",
  violet: "bg-accent-violet/15 text-accent-violet-light",
  cyan: "bg-accent-cyan/15 text-accent-cyan",
  green: "bg-accent-green/15 text-accent-green",
  amber: "bg-accent-amber/15 text-accent-amber",
};

export function PillarTourGrid() {
  return (
    <section id="pillars" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
        Ten Pillars. One AI-Native Platform.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
        Every layer of enterprise security, unified — from identity and cloud to compliance,
        risk, and AI governance. Explore each pillar in depth.
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((pillar) => {
          const Icon = pillar.heroIcon;
          return (
            <li key={pillar.slug} className="surface-card flex flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-text-muted">
                  {String(pillar.index).padStart(2, "0")}
                </span>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${ACCENT_TILE[pillar.accentTheme]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="font-semibold text-text-primary">{pillar.name}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{pillar.tagline}</p>
              <Link
                href={`/pillars/${pillar.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light hover:gap-2"
              >
                Explore Pillar <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
