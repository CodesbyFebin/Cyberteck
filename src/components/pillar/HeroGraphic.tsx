import type { Pillar } from "@/lib/types";
import { HeroScoreCard, HeroStatCard } from "./HeroStatCard";
import { HeroDonutCard } from "./HeroDonutCard";
import { HeroRankedListCard } from "./HeroRankedListCard";
import { HeroProgressCard } from "./HeroProgressCard";
import { StatusCard } from "./StatusCard";

const RING_COLOR: Record<Pillar["accentTheme"], string> = {
  blue: "rgba(59,130,246,0.35)",
  violet: "rgba(139,92,246,0.35)",
  cyan: "rgba(34,211,238,0.35)",
  green: "rgba(34,197,94,0.35)",
  amber: "rgba(245,158,11,0.35)",
};

function CenterIcon({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.heroIcon;
  const ringColor = RING_COLOR[pillar.accentTheme];
  const orbitIcons = pillar.featureChips.map((c) => c.icon);

  return (
    <div className="relative mx-auto flex h-64 w-64 shrink-0 items-center justify-center">
      {[0, 0.6, 1.2].map((delay) => (
        <span
          key={delay}
          className="pulse-ring absolute h-40 w-40 rounded-full border"
          style={{ borderColor: ringColor, animationDelay: `${delay}s` }}
          aria-hidden="true"
        />
      ))}

      <div
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full shadow-glow"
        style={{ background: `radial-gradient(circle, ${ringColor}, transparent 70%)` }}
      >
        <Icon className="h-14 w-14 text-white" aria-hidden="true" />
      </div>

      {orbitIcons.map((OrbitIcon, i) => {
        const angle = (i / orbitIcons.length) * 2 * Math.PI;
        const radius = 110;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={i}
            className="glass-panel absolute flex h-9 w-9 items-center justify-center"
            style={{ transform: `translate(${x}px, ${y}px)` }}
            aria-hidden="true"
          >
            <OrbitIcon className="h-4 w-4 text-accent-blue-light" />
          </div>
        );
      })}
    </div>
  );
}

/** Analytics pattern: score + 2 stats (left), donut + ranked list + progress (right) — Pillars 5/6/7/9 */
function AnalyticsHero({ pillar }: { pillar: Pillar }) {
  const stats = pillar.heroStats!;
  return (
    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center">
      <div className="flex flex-row gap-3 lg:flex-col">
        <HeroScoreCard {...stats.primaryScore} />
        <HeroStatCard {...stats.supportingStats[0]} />
        <HeroStatCard {...stats.supportingStats[1]} />
      </div>

      <CenterIcon pillar={pillar} />

      <div className="flex flex-row gap-3 lg:flex-col">
        <HeroDonutCard label={stats.donut.label} total={stats.donut.total} segments={stats.donut.segments} />
        <HeroRankedListCard {...stats.rankedList} />
        <HeroProgressCard {...stats.progress} />
      </div>
    </div>
  );
}

/** Status pattern: optional top score card + 3 status badges left/right — Pillar 1 */
function StatusHero({ pillar }: { pillar: Pillar }) {
  const panel = pillar.heroStatusPanel!;
  return (
    <div className="relative flex flex-col items-center gap-6">
      {panel.scoreCard && (
        <div className="glass-panel w-64 p-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
            {panel.scoreCard.label}
          </p>
          <p className="mt-1 text-2xl font-bold text-text-primary">{panel.scoreCard.value}</p>
          <p className="text-xs text-accent-green">{panel.scoreCard.sublabel}</p>
        </div>
      )}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center">
        <div className="flex flex-row gap-3 lg:flex-col">
          {panel.left.map((card) => (
            <StatusCard key={card.label} {...card} />
          ))}
        </div>

        <CenterIcon pillar={pillar} />

        <div className="flex flex-row gap-3 lg:flex-col">
          {panel.right.map((card) => (
            <StatusCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroGraphic({ pillar }: { pillar: Pillar }) {
  if (pillar.heroStatusPanel) return <StatusHero pillar={pillar} />;
  return <AnalyticsHero pillar={pillar} />;
}
