import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ChecklistItem } from "@/components/ui/ChecklistItem";

export function CTABand({
  headline,
  description,
  checklist,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  icon: Icon,
}: {
  headline: string;
  description: string;
  checklist: string[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  icon: LucideIcon;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="surface-card grid grid-cols-1 items-center gap-10 p-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-text-primary">{headline}</h2>
          <p className="mt-3 text-text-secondary">{description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {checklist.map((item) => (
              <ChecklistItem key={item} label={item} />
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>

        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-accent-blue/10 shadow-glow">
          <Icon className="h-16 w-16 text-accent-blue-light" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
