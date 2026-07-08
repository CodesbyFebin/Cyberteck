import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPillarBySlug, PILLARS } from "@/lib/pillars";
import { PillarDetailPage } from "@/components/pillar/PillarDetailPage";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) return {};

  return {
    title: pillar.name,
    description: pillar.description,
    alternates: { canonical: `/pillars/${pillar.slug}` },
  };
}

export default function Page({ params }: Props) {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) notFound();

  // Breadcrumb structured data — flagged as an SEO requirement in the
  // Round 2 mapping doc.
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Pillars", item: "/pillars" },
      { "@type": "ListItem", position: 3, name: pillar.name, item: `/pillars/${pillar.slug}` },
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
