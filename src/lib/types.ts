import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavMenu = {
  label: string;
  links: NavLink[];
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type AccentTheme = "blue" | "violet" | "cyan" | "green" | "amber";

export type FeatureChip = {
  icon: LucideIcon;
  label: string;
};

export type TrendPoint = number;

export type HeroStat = {
  label: string;
  value: string | number;
  delta?: string;
  deltaDirection?: "up" | "down";
  trend?: TrendPoint[];
};

export type DonutSegment = {
  label: string;
  value: number;
  color: "green" | "red" | "amber";
};

export type RankedListItem = {
  label: string;
  pct: number;
};

export type StatusCard = {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "green" | "blue" | "amber";
};

export type HeroAnalyticsPanel = {
  primaryScore: HeroStat & { max: number };
  supportingStats: HeroStat[]; // exactly 2
  donut: { label: string; total: string | number; segments: DonutSegment[] };
  rankedList: { label: string; items: RankedListItem[] };
  progress: { label: string; value: number; sublabel: string };
};

export type HeroStatusPanel = {
  scoreCard?: { label: string; value: string | number; sublabel: string };
  left: StatusCard[]; // typically 3
  right: StatusCard[]; // typically 3
};

export type Cluster = {
  index: number; // 1-10
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export type BenefitBullet = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Resource = {
  icon: LucideIcon;
  title: string;
  ctaLabel: string; // e.g. "Download Guide", "View Model"
  href: string;
};

export type Framework = {
  icon: LucideIcon;
  label: string;
};

export type Pillar = {
  index: number; // 1-10
  slug: string;
  name: string; // full H1 text, e.g. "AI Identity Security & Zero Trust"
  nameHighlight: string; // substring of `name` rendered with the gradient span
  // Section copy varies per pillar in the source (sometimes full name,
  // sometimes an abbreviation, sometimes a shorter phrase) — kept explicit
  // per-field rather than derived from one "short name" to match reality.
  clusterSectionLabel: string; // "The 10 Clusters of {label}"
  clusterSubheading: string;
  whyMattersLabel: string; // "Why {label} Matters"
  resourceSectionLabel: string; // "Deep Dive {label} Resources"
  heroPrimaryCTA: string; // full button text, e.g. "Book a Demo" or "Get Free Identity Security Assessment"
  tagline: string;
  description: string;
  accentTheme: AccentTheme;
  heroIcon: LucideIcon;
  // Source screenshots sometimes use a different icon in the "why it
  // matters" center graphic and bottom CTA than the hero (e.g. Pillar 6
  // hero=brain, why-matters=scale, bottom-CTA=gavel). Falls back to
  // `heroIcon` when omitted.
  whyMattersIcon?: LucideIcon;
  bottomCTAIcon?: LucideIcon;
  featureChips: FeatureChip[]; // exactly 4
  // Exactly one of these two should be set — see PROJECT_TRACKER.md note on
  // Pillar 1's simpler status-badge hero pattern vs. the analytics pattern
  // used by Pillars 5/6/7/9.
  heroStats?: HeroAnalyticsPanel;
  heroStatusPanel?: HeroStatusPanel;
  frameworks: Framework[];
  clusters: Cluster[]; // exactly 10
  whyItMatters: BenefitBullet[]; // exactly 6
  resources: Resource[]; // 5-6
  bottomCTA: {
    headline: string;
    description: string;
    checklist: string[]; // exactly 4
    primaryCTA: string;
    secondaryCTA: string;
  };
};

export type ClientLogo = {
  name: string;
  src: string;
};
