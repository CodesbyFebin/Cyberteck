import type { Pillar } from "@/lib/types";
import { CTABand } from "@/components/shared/CTABand";

/** Thin pillar-specific wrapper around the shared CTABand — avoids duplicating the CTA layout markup. */
export function BottomCTABand({ pillar }: { pillar: Pillar }) {
  return (
    <CTABand
      headline={pillar.bottomCTA.headline}
      description={pillar.bottomCTA.description}
      checklist={pillar.bottomCTA.checklist}
      primaryLabel={pillar.bottomCTA.primaryCTA}
      primaryHref="/book-assessment"
      secondaryLabel={pillar.bottomCTA.secondaryCTA}
      secondaryHref="/company/contact"
      icon={pillar.bottomCTAIcon ?? pillar.heroIcon}
    />
  );
}
