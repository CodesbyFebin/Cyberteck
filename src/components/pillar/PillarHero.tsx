import type { Pillar } from "@/lib/types";
import { PillarBadge } from "./PillarBadge";
import { FeatureChip } from "./FeatureChip";
import { HeroGraphic } from "./HeroGraphic";
import { Button } from "@/components/ui/Button";
import { CircleCheck } from "lucide-react";

const TRUST_ITEMS = ["No Credit Card", "Personalized Walkthrough", "30-Minute Session"];

export function PillarHero({ pillar }: { pillar: Pillar }) {
  // Split the tagline on periods to render each short imperative phrase on
  // its own visual beat, matching the source pattern (e.g. "Verify Every
  // Identity. Authorize Every Action. Trust Nothing. Secure Everything.")
  const taglineParts = pillar.tagline
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:items-center">
      <div>
        <PillarBadge index={pillar.index} />

        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
          {pillar.name.split(pillar.nameHighlight).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-gradient">{pillar.nameHighlight}</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>

        <p className="mt-4 text-lg font-semibold text-text-secondary">
          {taglineParts.join(". ")}.
        </p>

        <p className="mt-4 max-w-xl text-text-secondary">{pillar.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pillar.featureChips.map((chip) => (
            <FeatureChip key={chip.label} {...chip} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/book-assessment">{pillar.heroPrimaryCTA}</Button>
          <Button href="/pillars" variant="secondary">
            Explore All Pillars
          </Button>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CircleCheck className="h-4 w-4 text-accent-green" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <HeroGraphic pillar={pillar} />
    </section>
  );
}
