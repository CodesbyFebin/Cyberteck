import type { Pillar } from "@/lib/types";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PillarHero } from "@/components/pillar/PillarHero";
import { ComplianceBadgeStrip } from "@/components/pillar/ComplianceBadgeStrip";
import { ClusterGrid } from "@/components/pillar/ClusterGrid";
import { WhyItMattersPanel } from "@/components/pillar/WhyItMattersPanel";
import { ResourceGrid } from "@/components/pillar/ResourceGrid";
import { LogoWall } from "@/components/shared/LogoWall";
import { BottomCTABand } from "@/components/pillar/BottomCTABand";

export function PillarDetailPage({ pillar }: { pillar: Pillar }) {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pillars", href: "/pillars" },
            { label: pillar.name },
          ]}
        />
      </div>

      <PillarHero pillar={pillar} />

      <ComplianceBadgeStrip
        eyebrow={`${pillar.clusterSectionLabel} by design`}
        frameworks={pillar.frameworks}
      />

      <ClusterGrid
        sectionLabel={pillar.clusterSectionLabel}
        subheading={pillar.clusterSubheading}
        clusters={pillar.clusters}
      />

      <WhyItMattersPanel
        sectionLabel={pillar.whyMattersLabel}
        benefits={pillar.whyItMatters}
        centerIcon={pillar.whyMattersIcon ?? pillar.heroIcon}
      />

      <ResourceGrid sectionLabel={pillar.resourceSectionLabel} resources={pillar.resources} />

      <LogoWall />

      <BottomCTABand pillar={pillar} />
    </main>
  );
}
