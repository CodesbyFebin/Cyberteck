import type { ClientLogo, FooterColumn, NavMenu } from "./types";

// NOTE: mega-menu link targets below are placeholders inferred from the
// footer link labels seen in the screenshots (Round 1/2 discovery). They are
// NOT confirmed page content — replace hrefs/labels once real menu content
// is provided. This keeps the Navbar buildable now without inventing fake
// marketing copy that could ship by accident.

export const NAV_MENUS: NavMenu[] = [
  {
    label: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "API", href: "/platform/api" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "AI Security", href: "/pillars/ai-security-governance" },
      { label: "Identity Security", href: "/pillars/identity-security-zero-trust" },
      { label: "Cloud Security", href: "/pillars/cloud-security" },
      { label: "Data Security", href: "/pillars/data-security" },
    ],
  },
  {
    label: "Compliance",
    links: [
      { label: "DPDP Act", href: "/compliance/dpdp-act" },
      { label: "CERT-In", href: "/compliance/cert-in" },
      { label: "RBI Guidelines", href: "/compliance/rbi-guidelines" },
      { label: "SEBI Compliance", href: "/compliance/sebi-compliance" },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { label: "View All Industries", href: "/industries" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Reports", href: "/resources/reports" },
      { label: "Webinars", href: "/resources/webinars" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
];

// Unified footer schema — resolves the pillar-page-vs-blog-page mismatch
// flagged in discovery by merging both variants into one column set.
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "API", href: "/platform/api" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Security", href: "/pillars/ai-security-governance" },
      { label: "Identity Security", href: "/pillars/identity-security-zero-trust" },
      { label: "Cloud Security", href: "/pillars/cloud-security" },
      { label: "Data Security", href: "/pillars/data-security" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "DPDP Act", href: "/compliance/dpdp-act" },
      { label: "CERT-In", href: "/compliance/cert-in" },
      { label: "RBI Guidelines", href: "/compliance/rbi-guidelines" },
      { label: "SEBI Compliance", href: "/compliance/sebi-compliance" },
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
      { label: "Reports", href: "/resources/reports" },
      { label: "Webinars", href: "/resources/webinars" },
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
      { label: "Help Center", href: "/support/help-center" },
      { label: "Documentation", href: "/support/documentation" },
      { label: "Status", href: "/support/status" },
      { label: "Trust Center", href: "/support/trust-center" },
    ],
  },
];

// Static client logo wall — identical across every pillar page in source
// screenshots. Replace `/logos/*` with real assets when available.
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "SBI", src: "/logos/sbi.svg" },
  { name: "TCS", src: "/logos/tcs.svg" },
  { name: "Tech Mahindra", src: "/logos/tech-mahindra.svg" },
  { name: "Airtel", src: "/logos/airtel.svg" },
  { name: "Mahindra", src: "/logos/mahindra.svg" },
  { name: "NPCI", src: "/logos/npci.svg" },
  { name: "ISRO", src: "/logos/isro.svg" },
];

export const SITE_NAME = "CyberTeck";
export const SITE_TAGLINE = "AI-Native Cybersecurity & Compliance OS";
export const FOOTER_STRAPLINE = "Securing India's Digital Future with AI.";

// Canonical production origin — single source of truth for metadataBase,
// canonical URLs, structured data, robots.ts, sitemap.ts, and llms.txt.
export const SITE_URL = "https://cyberteck.in";
