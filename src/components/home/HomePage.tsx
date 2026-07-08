import { HomeHero } from "./HomeHero";
import { HomeMoats } from "./HomeMoats";
import { HomeWhyTrust } from "./HomeWhyTrust";
import { HomeIndustries } from "./HomeIndustries";
import { HomeKnowledgeHub } from "./HomeKnowledgeHub";
import { HomeCTABand } from "./HomeCTABand";
import { Newsletter } from "@/components/shared/Newsletter";

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeMoats />
      <HomeWhyTrust />
      <HomeIndustries />
      <HomeKnowledgeHub />
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Newsletter layout="bar" />
      </div>
      <HomeCTABand />
    </main>
  );
}
