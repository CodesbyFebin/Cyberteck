import type { BenefitBullet as BenefitBulletType } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

function BenefitBullet({ icon: Icon, title, description }: BenefitBulletType) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue-light">
        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold text-text-primary">{title}</p>
        <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

export function WhyItMattersPanel({
  sectionLabel,
  benefits,
  centerIcon: CenterIcon,
}: {
  sectionLabel: string;
  benefits: BenefitBulletType[];
  centerIcon: LucideIcon;
}) {
  const left = benefits.slice(0, 3);
  const right = benefits.slice(3, 6);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="surface-card p-10">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-text-primary">
          Why {sectionLabel} Matters
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-6">
            {left.map((b) => (
              <BenefitBullet key={b.title} {...b} />
            ))}
          </div>

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent-blue/10 shadow-glow">
            <CenterIcon className="h-12 w-12 text-accent-blue-light" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-6">
            {right.map((b) => (
              <BenefitBullet key={b.title} {...b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
