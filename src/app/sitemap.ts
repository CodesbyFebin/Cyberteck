import type { MetadataRoute } from "next";
import { PILLARS } from "@/lib/pillars";
import { SITE_URL } from "@/lib/site-data";

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/compliance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
  { path: "/resources/guides", changeFrequency: "weekly", priority: 0.6 },
  { path: "/resources/whitepapers", changeFrequency: "weekly", priority: 0.6 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.8 },
  { path: "/company/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/company/contact", changeFrequency: "yearly", priority: 0.4 },
  { path: "/support", changeFrequency: "monthly", priority: 0.4 },
  { path: "/legal/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/legal/security", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal/terms-of-use", changeFrequency: "yearly", priority: 0.2 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const pillarEntries: MetadataRoute.Sitemap = PILLARS.map((pillar) => ({
    url: `${SITE_URL}/pillars/${pillar.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...pillarEntries];
}
