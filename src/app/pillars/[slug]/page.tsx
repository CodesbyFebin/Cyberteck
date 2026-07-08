import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPillarBySlug, PILLARS } from "@/lib/pillars";
import { PillarDetailPage } from "@/components/pillar/PillarDetailPage";

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
