import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "An overview of all the pages and sections available on the CyberTeck website.",
  alternates: { canonical: "/sitemap" },
};

type Group = { title: string; links: { label: string; href: string }[] };

const GROUPS: Group[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Integrations", href: "/platform" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "DPDP Act", href: "/compliance" },
      { label: "CERT-In", href: "/compliance" },
      { label: "RBI Guidelines", href: "/compliance" },
      { label: "SEBI Compliance", href: "/compliance" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { label: "View All Industries", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Webinars", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Documentation", href: "/support" },
      { label: "Status", href: "/support" },
      { label: "Trust Center", href: "/legal/security" },
    ],
  },
  {
    title: "Other Important Pages",
    links: [
      { label: "Security", href: "/legal/security" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Use", href: "/legal/terms-of-use" },
      { label: "Data Protection", href: "/legal/security" },
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      <section className="border-b border-border-subtle py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Sitemap
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
            Sitemap
          </h1>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Explore everything CyberTeck has to offer. This sitemap provides an
            overview of all the pages and sections available on our website.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-blue-light">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
