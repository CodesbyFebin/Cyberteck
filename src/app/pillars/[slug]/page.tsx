import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPillarBySlug, PILLARS } from "@/lib/pillars";
import { PillarDetailPage } from "@/components/pillar/PillarDetailPage";
import { SITE_URL } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};

  return {
    title: pillar.name,
    description: pillar.description,
    alternates: { canonical: `/pillars/${pillar.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  // Breadcrumb structured data — flagged as an SEO requirement in the
  // Round 2 mapping doc. Item URLs must be absolute per schema.org; the
  // middle crumb points at /solutions since that's the real pillar hub
  // page (there is no standalone /pillars index route).
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: pillar.name, item: `${SITE_URL}/pillars/${pillar.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PillarDetailPage pillar={pillar} />
    </>
  );
}
