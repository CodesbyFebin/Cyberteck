import { HomeHero } from "./HomeHero";
import { PlatformStatsBar } from "./PlatformStatsBar";
import { PillarTourGrid } from "./PillarTourGrid";
import { Testimonials } from "./Testimonials";
import { LatestBlogPreview } from "./LatestBlogPreview";
import { HomeCTABand } from "./HomeCTABand";
import { LogoWall } from "@/components/shared/LogoWall";
import { Newsletter } from "@/components/shared/Newsletter";

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <PlatformStatsBar />
      <PillarTourGrid />
      <Testimonials />
      <LogoWall />
      <LatestBlogPreview />
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Newsletter layout="bar" />
      </div>
      <HomeCTABand />
    </main>
  );
}
