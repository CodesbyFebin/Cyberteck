# CyberTeck — Project Tracker

## Release Status

```
CyberTeck Website
Version 1.0 — PHASE 1 COMPLETE (feature-complete for available source assets)

Completed:
  • Discovery, Website Mapping, Design System, Component Inventory
  • Foundation (tokens, global styles, shared types/data)
  • Shared layout (Navbar, Footer, Button, Breadcrumb, LogoWall, Newsletter, ChecklistItem)
  • Pillar Detail template + dynamic routing + SEO metadata
  • ALL 10/10 Pillars now built:
      - Transcribed from source screenshots: AI-IAM (1), Identity Security & Zero Trust (7),
        Risk Management (5), GPC (6), SecOps (9)
      - Freshly designed, no source material (extends same design system/component contracts):
        Cloud Security (2), Data Security & Privacy (3), Application & DevSecOps Security (4),
        AI Security & LLM Governance (8), Vulnerability & Exposure Management (10)
  • Blog Listing page (search/filter/sort wired to real transcribed data)
  • Solutions nav (mega-menu + footer) now links to real pillar pages instead of placeholders

Still blocked on missing source material OR requiring net-new product decisions:
  • Homepage, About, Contact
  • Blog Detail page
  • Login, Signup, Dashboard, Admin, Settings, Profile — since "no reference exists, design
    fresh" is now the agreed mode, these are unblocked but not yet built; Dashboard/Admin/
    Settings/Profile need IA decisions (what does the dashboard show, what can an admin do)
    before component work starts
  • Search Results, 404, Empty States

Resume order (next up): About/Contact → Blog Detail → Login/Signup → Dashboard/Admin/Settings/Profile → Search/404/Empty States.
```

## Decisions Log (Fresh-Design Mode)

- **Homepage narrative**: Pillar/product tour (scroll through all 10 pillars), not a problem/breach-stats-led narrative. ✅ Built: `HomeHero`, `PlatformStatsBar`, `PillarTourGrid`, `Testimonials` (fictional quotes, explicitly flagged as placeholders in code comments — need real customer quotes before launch), `LogoWall`, `LatestBlogPreview`, `Newsletter`, `HomeCTABand`.
- **Enterprise Dashboard**: Per-pillar workspace switcher (not a unified cross-pillar score). User picks a pillar (IAM/Risk/GPC/etc.) and sees that pillar's own workspace/dashboard. Not yet built.
- **Admin Console**: TWO separate consoles — (1) CyberTeck internal ops admin (customer accounts, content, billing) and (2) customer org-admin / tenant admin (their own users/roles/integrations). Not yet built; will need two distinct route trees, e.g. `/admin/*` (internal) and `/dashboard/org-admin/*` or similar (tenant-scoped — exact routing TBD when built).
- Refactored `BottomCTABand` (pillar pages) to wrap the new shared `CTABand` component instead of duplicating CTA markup — Home/About/Contact CTA sections now share the same underlying component.



## Docs
- ✅ Phase 1: Project Discovery
- ✅ Phase 2: Website Mapping
- ✅ Phase 3: Design System & Component Inventory

## Phase 4/5 — Build

### Foundation
- ✅ Tailwind design tokens (`tailwind.config.ts`)
- ✅ Global styles / glass & glow utilities (`app/globals.css`)
- ✅ Shared types (`lib/types.ts`)
- ✅ Nav/footer/logo data (`lib/site-data.ts`)

### Shared layout components
- ✅ `Button` (primary/secondary)
- ✅ `ChecklistItem`
- ✅ `Breadcrumb`
- ✅ `LogoWall`
- ✅ `Newsletter` (unified card/bar variants)
- ✅ `Navbar` (mega-menus, mobile collapse, CTA-wrap bug fixed)
- ✅ `Footer` (unified 7-column schema, dynamic copyright year)

### Pillar Detail template + sub-components
- ✅ `PillarBadge`
- ✅ `PillarHero` (+ `FeatureChip`)
- ✅ `HeroGraphic` (+ `HeroStatCard`/`HeroScoreCard`, `HeroDonutCard`, `HeroRankedListCard`, `HeroProgressCard`, `Sparkline`)
- ✅ `ComplianceBadgeStrip`
- ✅ `ClusterGrid` / `ClusterCard`
- ✅ `WhyItMattersPanel` (+ `BenefitBullet`)
- ✅ `ResourceGrid` / `ResourceCard`
- ✅ `BottomCTABand`
- ✅ `PillarDetailPage` template assembly
- ✅ Dynamic route `app/pillars/[slug]/page.tsx` with per-pillar SEO metadata + breadcrumb JSON-LD
- ✅ Data objects transcribed for **all 5 confirmed pillars**: Pillar 1 (AI-IAM, status hero variant), Pillar 5 (Risk Mgmt), Pillar 6 (GPC), Pillar 7 (Identity & Zero Trust), Pillar 9 (SecOps)
- ✅ Added `HeroStatusPanel` variant + `StatusCard` component to support Pillar 1's simpler status-badge hero pattern
- ✅ Added `whyMattersIcon` / `bottomCTAIcon` per-pillar overrides (source varies icon by section, e.g. GPC: brain/scale/gavel)
- ✅ All 5 pillars registered in `lib/pillars/index.ts`, routable at `/pillars/[slug]`

### Blog Listing page
- ✅ `BlogHero`
- ✅ `CategoryList`, `TagCloud`, `SearchInput`, `SortDropdown`
- ✅ `BlogCard`, `Pagination` (results count inlined in page assembly)
- ✅ `BlogListingPage` assembly — client-side search/filter/sort wired to real data, routed at `/blogs`
- ⚠️ Only page 1's 9 posts are real transcribed content (matches source screenshot exactly). Pagination UI is honestly wired to the true total (56 posts / 7 pages) but pages 2–7 render the same 9 posts until more content or a CMS/API backs them — flagged in code comments, not silently faked.

### Backlog (blocked — source material not yet provided)
- ⬜ Home page
- ⬜ Pillars 2, 3, 4, 8, 10
- ⬜ Blog article detail page
- ⬜ Auth (login/signup)
- ⬜ Dashboard / Admin / Settings / Profile
- ⬜ 404 / Search results page
- ⬜ Real mega-menu content (Platform/Solutions/Compliance/Industries/Resources/Company dropdown contents are currently placeholders inferred from footer labels)
- ⬜ Real client logo assets (`/public/logos/*.svg` are referenced but not supplied)

## Notes / decisions log
- Unified the pillar-page vs. blog-page footer schemas into one 7-column footer (added "Support" + "Industries" everywhere).
- Unified the two newsletter presentations into one `Newsletter` component with a `layout` prop instead of two components.
- Copyright year is now computed at render time — eliminates the 2024/2026 mismatch found in discovery.
- Navbar CTA buttons given a `min-w` to stop "Book Assessment" wrapping at narrow widths.
