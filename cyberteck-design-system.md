# CyberTeck — Design System & Component Inventory
**Round 3 of 4** — derived entirely from the 5 confirmed pillar screenshots + blog listing. No code yet.

---

## 1. Visual Language

**Theme:** Dark, high-tech, enterprise-security aesthetic. Deep navy/near-black canvas, glowing cyan-blue/violet accents, glassmorphic cards, subtle grid/particle texture in hero backgrounds. Reads as "SOC command center at night," not playful.

### 1.1 Color tokens (inferred, name → approximate role)

| Token | Approx value | Usage |
|---|---|---|
| `--bg-base` | `#05070f` – `#0a0e1a` | Page background, near-black navy |
| `--bg-surface` | `#0f1424` – `#131a2e` | Card/panel background |
| `--bg-surface-elevated` | rgba(20,26,46,0.6) + blur | Glassmorphic stat cards, floating hero panels |
| `--border-subtle` | rgba(255,255,255,0.08) | Card borders, dividers |
| `--accent-blue` | `#3b82f6`–`#60a5fa` | Primary links, icons, glow |
| `--accent-cyan` | `#22d3ee` | Secondary glow, sparklines |
| `--accent-violet` | `#8b5cf6`–`#a855f7` | Gradient partner to blue, "Pillar" badges |
| `--gradient-primary` | linear-gradient(violet → blue) | Primary CTA buttons, headline highlight span, progress bars |
| `--accent-green` | `#22c55e` | Positive deltas, "Allowed"/"Compliant" states, checkmarks |
| `--accent-red** | `#ef4444` | Critical risk, "Blocked" states |
| `--accent-amber` | `#f59e0b`/`#eab308` | Medium-risk, "Challenged"/"In Progress" states |
| `--text-primary` | `#f8fafc` (near white) | Headlines |
| `--text-secondary` | `#94a3b8` (slate) | Body copy, descriptions |
| `--text-muted` | `#64748b` | Timestamps, captions, footer links |

Each pillar gets **one dominant accent hue** for its own icon badges/graphic (e.g., Pillar 7 leans blue/cyan shield; Pillar 6 leans violet/blue brain; Pillar 9 leans blue "AI SECOPS" shield; Pillar 5 leans violet risk-brain) while status colors (green/red/amber) stay constant system-wide. → confirms accent hue is a **per-pillar theme variable**, not hardcoded.

### 1.2 Typography

| Style | Observed usage |
|---|---|
| Display/H1 | Bold, ~40–48px, tight leading, two-tone (white text + gradient-blue span for the emphasized word/phrase) |
| Section H2 | Bold, ~28–32px, centered, white |
| Card title (H3) | Semibold, ~18–20px |
| Body | Regular, ~15–16px, slate-gray, relaxed leading |
| Micro-label | Uppercase, letterspaced, 11–12px, muted — used for eyebrows ("PILLAR 7 OF 10," "IDENTITY RISK SCORE," category tags) |
| Metric numerals | Bold, tabular, large (24–32px), often colored by status |

Typeface reads as a modern grotesque sans (Inter/Manrope/Sora family) — no serif or monospace observed in these particular screens, despite the general cyberpunk/terminal preference noted elsewhere; recommend confirming whether monospace should be introduced for metrics/data (would strengthen the "terminal" feel) or whether this brand intentionally stays clean-sans for enterprise credibility. **Decision needed before Phase 5.**

### 1.3 Spacing & layout

- Max content width ~1280–1320px, centered, generous outer gutters
- Section vertical rhythm: large (~80–100px) between major sections
- Card grids: consistent gap (~20–24px), 5-column cluster grid (desktop) collapsing presumably to 2-col/1-col on smaller breakpoints (not shown, must be designed)
- Hero split: ~45/55 left-content/right-graphic on desktop

### 1.4 Effects

- Soft outer glow (box-shadow blur, colored per-accent) on shield/icon hero graphics and on primary buttons on hover (implied)
- Glassmorphic panels: translucent fill + backdrop-blur + 1px subtle border, used for all floating hero stat cards
- Radiating concentric rings under the central hero icon (pure CSS/SVG rings, animatable pulse)
- Sparkline mini-charts inside stat cards (SVG path, colored per trend direction)
- Donut chart (Access Decisions), horizontal ranked bar list (Top Risk Factors), horizontal progress bar (Zero Trust Adoption / Audit Readiness) — all small embedded dataviz, not full chart-library dashboards

### 1.5 Iconography

- Line-style icons inside colored rounded-square or circular "badge" tiles, 5 rotating tile colors (blue, violet, green, amber/orange, cyan) cycling across the 10 cluster cards
- Compliance framework badges pair a small monochrome icon + short label in pill/chip form
- Hero central icon changes per pillar (shield = identity/zero-trust pillars, brain = governance/risk pillars, gavel = governance bottom-CTA, gear = SecOps) — **icon is thematic to pillar subject**, not fixed

---

## 2. Component Inventory

### 2.1 Global / cross-page components

| Component | Notes |
|---|---|
| `Navbar` | Logo+wordmark+tagline, 6 mega-menu triggers, 2 CTA buttons (filled-gradient + outline). Needs responsive collapse to hamburger; fix the button-wrap bug found in discovery. |
| `MegaMenu` | Dropdown content not yet seen — flagged unknown, needs real content before build |
| `Footer` | Logo+tagline+socials, 6–7 link columns (schema differs pillar vs blog — needs unification decision), legal row |
| `Breadcrumb` | `Home > Section > Page` pattern |
| `Button` | 2 variants: `primary` (gradient fill, glow on hover) and `secondary` (outline, transparent fill) |
| `TrustRow` | 3 inline checkmark+label items (No Credit Card / Personalized Walkthrough / 30-Minute Session) |
| `LogoWall` | Static/global list of 7 client logos, appears identical everywhere |
| `NewsletterCard` / `NewsletterBar` | Two presentations of the same subscribe form (sidebar card vs full-width bar) — should share one underlying component |

### 2.2 Pillar-page-specific components

| Component | Notes |
|---|---|
| `PillarBadge` | "PILLAR X OF 10" pill, links to pillar index |
| `PillarHero` | Orchestrates left copy block + right `HeroGraphic` |
| `FeatureChip` | Icon + short label, 4 per hero |
| `HeroGraphic` | Central animated icon + concentric rings + orbiting mini-icons; composes `HeroStatCard`, `HeroDonutCard`, `HeroRankedListCard`, `HeroProgressCard` around itself |
| `HeroStatCard` | Metric + label + sparkline + delta |
| `HeroDonutCard` | Small donut chart + legend (e.g. Access Decisions: Allowed/Blocked/Challenged) |
| `HeroRankedListCard` | Ranked bar list (e.g. Top Risk Factors) |
| `HeroProgressCard` | Single metric + horizontal progress bar (e.g. Zero Trust Adoption) |
| `ComplianceBadgeStrip` | Label + N framework chips, data-driven list |
| `ClusterCard` | Numbered badge, icon tile, title, description, "Explore Cluster →" — rendered ×10 in a grid |
| `WhyItMattersPanel` | Bordered box, 2×3 `BenefitBullet` items + center graphic |
| `BenefitBullet` | Icon + bold title + description, inline |
| `ResourceCard` | Icon + title + typed CTA ("Download Guide/eBook/Toolkit/Playbook/Template →" or "View Model/Dashboard →") |
| `BottomCTABand` | Headline + description + `ChecklistItem` ×4 + 2 buttons + side graphic |
| `ChecklistItem` | Checkmark + label |

### 2.3 Blog-page-specific components

| Component | Notes |
|---|---|
| `BlogHero` | H1 + description + decorative illustration |
| `SearchInput` | Blog search box (sidebar) |
| `CategoryList` | Filterable list with counts, active-state highlight |
| `TagCloud` | Pill-style clickable tags |
| `BlogCard` | Category tag, icon thumbnail, title, excerpt, date, read-time |
| `SortDropdown` | "Latest First" selector |
| `Pagination` | Numbered + prev/next, ellipsis for skipped ranges |
| `ResultsCount` | "Showing 1–9 of 56 posts" |

### 2.4 Component reuse map (what's shared vs. unique)

- **Truly global** (every page): `Navbar`, `Footer`, `Breadcrumb`, `Button`, `LogoWall`, `NewsletterCard/Bar`
- **Shared across all 5 pillar pages only**: everything in §2.2
- **Blog-only**: everything in §2.3
- **Design debt to resolve now, before coding**: unify `Footer` schema (§1.6 of discovery doc) and unify `NewsletterCard`/`NewsletterBar` into one component with a `layout` prop, rather than building two.

---

## 3. Theming model (for implementation)

Recommend a per-pillar config object so `PillarDetailPage` is a single template driven by data, not 10 hand-built pages:

```
Pillar {
  index: number (1-10)
  slug: string
  name: string
  tagline: string          // "Verify Every Identity. Authorize Every Action..."
  description: string
  accentTheme: 'blue' | 'violet' | 'cyan' | ...
  heroIcon: IconName        // shield | brain | gear | gavel ...
  featureChips: [{icon, label}]  // x4
  heroStats: {
    primaryScore: {value, max, label, trend[]},
    supportingStats: [{value, delta, label, trend[]}], // x2
    donut: {label, segments:[{label,value,color}]},
    rankedList: {label, items:[{label, pct}]},
    progress: {label, value, sublabel}
  }
  frameworks: [{icon, label}]     // compliance badge strip
  clusters: [{index, icon, title, description, href}] // exactly 10
  whyItMatters: [{icon, title, description}] // exactly 6
  resources: [{icon, title, ctaLabel, href}] // 5-6
  bottomCTA: {headline, description, checklist:[string], primaryCTA, secondaryCTA}
}
```

This is the artifact Phase 4/5 will consume — one template component + 5 (soon 10) data objects.

---

## Next: Phase 4 — Implementation Plan

Given no Home page or Auth/Dashboard screens exist yet, and the Pillar template is our most-evidenced, highest-reuse asset, I recommend this build order:

1. **Design tokens & global styles** (colors, type scale, spacing, glow/glass utilities)
2. **Shared layout components**: `Navbar`, `Footer`, `Breadcrumb`, `Button`, `LogoWall`, `NewsletterCard`
3. **Pillar Detail template** (built once, proven against Pillar 7 — most complete reference) + its sub-components (§2.2)
4. Wire the same template to **Pillars 1, 5, 6, 9** via data objects (proves reusability, zero new UI code)
5. **Blog Listing page** + its sub-components (§2.3)
6. Backlog (blocked on missing source material): Home, Pillars 2/3/4/8/10, Blog Detail, Auth, Dashboard/Admin/Settings, 404, Search

I'll now start Round 4 with step 1 (tokens) + step 2 (Navbar/Footer/Button/shared layout), then move to the Pillar template. Confirm and I'll begin, or tell me to jump straight to the Pillar page if you'd rather see the flagship page first.
