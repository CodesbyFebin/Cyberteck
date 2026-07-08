import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Cyberteck unifies identity, risk, compliance, cloud, data, application, and AI security into a single AI-native platform built for Indian enterprises.",
  alternates: { canonical: "/" },
};

export default function Page() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: "/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage />
    </>
  );
}
