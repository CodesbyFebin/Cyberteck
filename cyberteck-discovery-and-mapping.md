# CyberTeck — Project Discovery & Website Mapping
**Status:** Phase 1 (Discovery) + Phase 2 (Mapping) — COMPLETE
**Not started:** Phase 3 (Design System), Phase 4 (Implementation Plan), Phase 5 (Build)

---

## PHASE 1 — PROJECT DISCOVERY

### 1.1 Source materials reviewed

| # | Asset | Type | Content |
|---|---|---|---|
| 1 | `pilla7_-1.png` | Screenshot | Pillar 7/10 — AI Identity Security & Zero Trust |
| 2 | `pillar_1cybeer.png` | Screenshot | Pillar 1/10 — AI-Native Identity & Access Management (AI-IAM) |
| 3 | `AI_identity_security_and_zero_trust.png` | Screenshot | Duplicate of #1 (Pillar 7) |
| 4 | `AI-native_identity_security_dashboard_design.png` | Screenshot | Duplicate of #2 (Pillar 1) |
| 5 | `AI-powered_cybersecurity_dashboard_design.png` | Screenshot | Pillar 9/10 — AI Security Operations & Automation |
| 6 | `AI-powered_governance_and_compliance_dashboard.png` | Screenshot | Pillar 6/10 — AI-Powered Governance, Policy & Compliance (GPC) |
| 7 | `AI-powered_risk_management_platform_overview.png` | Screenshot | Pillar 5/10 — AI-Native Risk Management |
| 8 | `blog_UI_for_cybersecurity_insights.png` | Screenshot | Blog listing page |

Net result: **2 unique page types** (Pillar Detail template, Blog Listing template), with the Pillar template instantiated **4 unique times** (Pillars 1, 5, 6, 7, 9) and 2 exact duplicates (7, 1 again).

### 1.2 Product identity

- **Brand:** CyberTeck (stylized "CYBER TECK" in nav, hexagonal "C" logomark in gradient blue/purple)
- **Tagline:** "AI-Native Cybersecurity & Compliance OS"
- **Footer strapline:** "Securing India's Digital Future with AI."
- **Positioning:** B2B enterprise cybersecurity/compliance SaaS for the Indian market, organized as **10 "Pillars"** (product/solution pillars), each a deep-dive landing page.
- **Target buyer:** CISOs, compliance officers, IT/security leaders at Indian enterprises (BFSI, etc.) — evidenced by logo wall (SBI, TCS, Tech Mahindra, Airtel, Mahindra, NPCI, ISRO) and compliance frameworks referenced (DPDP Act, RBI Guidelines, SEBI, CERT-In, ISO 27001, NIST CSF/RMF, SOC 2, COSO ERM, ISO 31000, GDPR).
- **Primary conversion goals:** "Request Demo" / "Book Assessment" (global nav), plus pillar-specific CTAs ("Get Free [X] Assessment", "Talk to a [X] Expert").

### 1.3 The 10 Pillars (confirmed vs. unconfirmed)

| # | Pillar Name | Source | Status |
|---|---|---|---|
| 1 | AI-Native Identity & Access Management (AI-IAM) | Images 2, 4 | ✅ Confirmed |
| 2 | *Unknown* | — | ❌ Not provided |
| 3 | *Unknown* | — | ❌ Not provided |
| 4 | *Unknown* | — | ❌ Not provided |
| 5 | AI-Native Risk Management | Image 7 | ✅ Confirmed |
| 6 | AI-Powered Governance, Policy & Compliance (GPC) | Image 6 | ✅ Confirmed |
| 7 | AI Identity Security & Zero Trust | Images 1, 3 | ✅ Confirmed |
| 8 | *Unknown* | — | ❌ Not provided |
| 9 | AI Security Operations & Automation | Image 5 | ✅ Confirmed |
| 10 | *Unknown* | — | ❌ Not provided |

⚠️ **Gap flagged:** Pillars 2, 3, 4, 8, 10 have not been supplied. Given nav categories (Platform / Solutions / Compliance / Industries), plausible candidates — inferred only, NOT to be treated as fact — include things like Cloud Security, Data Security/Privacy, Threat Intelligence, SecOps sub-areas, or AI/LLM Security. This needs confirmation before those pages can be mapped or built.

### 1.4 Recurring template pattern — "Pillar Detail Page"

Every pillar screenshot (1, 5, 6, 7, 9) follows an **identical structural skeleton**, differing only in copy, iconography, color accent, and data values. This strongly implies a single componentized template driven by a per-pillar content/data object. Sections observed, top to bottom:

1. **Global Nav** — logo, 6 dropdown menus (Platform, Solutions, Compliance, Industries, Resources, Company), 2 CTA buttons (Request Demo — filled gradient; Book Assessment — outline)
2. **Breadcrumb** — `Home > Pillars > [Pillar Name]`
3. **Pillar badge** — "PILLAR X OF 10" pill with arrow (links to pillar index, presumably)
4. **Hero (split layout)**
   - Left: eyebrow-less H1 (two-color: white + gradient-blue span), bold tagline line (3–4 short imperative phrases separated by periods), 1-paragraph description, row of 4 mini feature icons+labels, 2 CTA buttons (primary gradient "Get Free X Assessment" + secondary outline "Explore All Pillars"), row of 3 trust checkmarks (No Credit Card / Personalized Walkthrough / 30-Minute Session)
   - Right: animated hero graphic — central glowing shield/brain/gavel/gear icon on a radiating base, orbiting small icons representing sub-concepts, 2–3 floating stat cards on the left of the graphic (metric + trend sparkline), 2–3 floating stat panels on the right (metric, plus one with a donut chart, one with a ranked bar list, one with a progress bar)
5. **Compliance badge strip** — left label ("[X] BY DESIGN"), followed by 6–8 framework badges (icon + name), e.g. ISO 27001, NIST CSF, SOC 2, DPDP Act, RBI Guidelines, SEBI, CERT-In, GDPR — the specific set varies by pillar
6. **"The 10 Clusters of [Pillar Name]"** — section heading + one-line subheading, 5×2 grid of 10 cluster cards. Each card: numbered badge (01–10), colored icon tile, title (2 lines max), 2-line description, "Explore Cluster →" link. (Note: sub-cluster naming convention — every pillar itself decomposes into exactly 10 "clusters," mirroring the 10-pillar structure.)
7. **"Why [Pillar Name] Matters"** — bordered panel, 2×3 grid of benefit bullets (icon + bold title + short description) flanking a centered illustrative icon/graphic
8. **"Deep Dive [Topic] Resources"** — row of 5–6 gated-content cards (icon + title + "Download Guide/eBook/Toolkit/Playbook/Template →" or "View Model/Dashboard →")
9. **"Trusted by India's Leading Organizations"** — logo strip: SBI, TCS, Tech Mahindra, Airtel, Mahindra, NPCI, ISRO
10. **Bottom conversion band** — 2-column: left = headline + description + 4-item checklist + 2 CTA buttons (primary + "Talk to a [X] Expert"); right = themed illustrative icon
11. **Footer** — logo + tagline + 4 social icons; 6 link columns (Platform, Solutions, Compliance, Resources, Company, Support); legal row (copyright, Privacy Policy, Terms of Use, Security, Sitemap)

### 1.5 Blog Listing page — distinct template

Structurally different from the Pillar template (no hero stat cards, no cluster grid):

1. Global Nav (same as pillar pages)
2. Breadcrumb: `Home > Blogs`
3. Page header: H1 "Cybersecurity Insights & Updates" + description + decorative illustration (laptop + floating doc/shield/globe icons)
4. **Left sidebar:** search input, Categories list w/ counts (All Topics 56, AI Security 12, Cloud Security 10, Data Protection 9, Compliance 8, Identity Security 7, Threat Intelligence 6, Industry Insights 4), Popular Topics tag cloud (Zero Trust, SOC 2, ISO 27001, GDPR, DevSecOps, Ransomware, Data Privacy, Cyber Resilience), Newsletter opt-in card
5. **Main content:** results count + sort dropdown ("Latest First"), 3×3 grid of article cards (category tag, icon thumbnail, title, excerpt, date, read time), pagination (numbered + prev/next)
6. Bottom newsletter CTA bar (full-width, email input + subscribe)
7. Footer — **structurally different from pillar-page footer**: adds an "Industries" column (BFSI, Healthcare, Retail & E-commerce, View All Industries) and a different Resources column (Blogs, Guides, Reports, Webinars vs. pillar pages' Blogs, Guides, Templates, Webinars)

### 1.6 Inconsistencies / open issues flagged during discovery

These are things a senior engineer joining this project should raise before build, not silently "fix":

1. **Footer schema mismatch** — Pillar-page footers have 6 columns (no Industries column); the Blog footer has an Industries column and a different Resources column. Need to decide: is Industries global (and pillar pages are missing it), or blog-specific?
2. **Copyright year mismatch** — Pillar pages show "© 2026 Cyberteck Technologies Private Limited." Blog page shows "© 2024 CyberTeck Technologies Private Limited." (also inconsistent capitalization: "Cyberteck" vs "CyberTeck"). Needs a single source of truth (likely a `SITE_NAME` / dynamic year constant).
3. **Nested "Book Assessment" button wraps to 2 lines** on the Blog page's narrower rendered width — sizing/breakpoint issue to watch in the shared `Navbar` component.
4. **Compliance badge sets differ per pillar** (e.g., Pillar 1 includes GDPR Ready; Pillar 5 includes ISO 31000/COSO ERM/AI RMF Ready; Pillar 9 includes MITRE ATT&CK Aligned/GDPR Aligned) — confirms this is a **data-driven, not hardcoded**, component; content model needs a flexible "frameworks[]" array per pillar.
5. **Cluster count is fixed at exactly 10 per pillar** in every sample — should be validated as a hard rule or coincidence once more pillars are seen.
6. **5 of 10 pillars still unknown** (#2, #3, #4, #8, #10) — blocks full nav/sitemap confirmation for the "Platform"/"Solutions" mega-menus.
7. No screenshots yet of: Home, Platform/Solutions/Compliance/Industries/Company landing or mega-menu pages, Pricing, Dashboard/Admin/Settings/Auth, Blog Detail (article) page, 404, Search results, individual Cluster detail pages, individual Resource/download landing pages. These are referenced structurally (via nav items, breadcrumbs, and "Explore Cluster" / "Download" links) but not visually confirmed.

---

## PHASE 2 — WEBSITE MAPPING

### 2.1 Site structure (as evidenced by nav, breadcrumbs, and in-page links)

```
Home
├── Platform (mega-menu) — Overview, Integrations, API, Pricing
├── Solutions (mega-menu) — AI Security, Identity Security, Cloud Security, Data Security
├── Compliance (mega-menu) — DPDP Act, CERT-In, RBI Guidelines, SEBI Compliance
├── Industries (mega-menu) — BFSI, Healthcare, Retail & E-commerce, [View All Industries]
├── Resources (mega-menu) — Blogs, Guides, Reports, Webinars, Templates(?)
├── Company (mega-menu) — About Us, Careers, Partners, Contact Us
├── Pillars/ (index page — not yet seen)
│   ├── /pillars/ai-iam                       (Pillar 1 — confirmed)
│   ├── /pillars/[unknown-2]                  (Pillar 2 — NOT PROVIDED)
│   ├── /pillars/[unknown-3]                  (Pillar 3 — NOT PROVIDED)
│   ├── /pillars/[unknown-4]                  (Pillar 4 — NOT PROVIDED)
│   ├── /pillars/risk-management              (Pillar 5 — confirmed)
│   ├── /pillars/governance-policy-compliance (Pillar 6 — confirmed)
│   ├── /pillars/identity-security-zero-trust (Pillar 7 — confirmed)
│   ├── /pillars/[unknown-8]                  (Pillar 8 — NOT PROVIDED)
│   ├── /pillars/secops-automation            (Pillar 9 — confirmed)
│   └── /pillars/[unknown-10]                 (Pillar 10 — NOT PROVIDED)
│         └── each pillar page implies 10 "Cluster" sub-pages (/pillars/[pillar]/clusters/[01-10]) — linked via "Explore Cluster →" but not yet visually confirmed as real pages vs. anchors
├── Blogs/
│   ├── / (listing — confirmed, this doc)
│   └── /[slug] (article detail — NOT PROVIDED, implied by card links)
├── Resources/ (guide/ebook/toolkit/report landing or gated-download pages — implied by "Download X →" links, not confirmed)
├── Auth (Login/Signup) — implied by "Request Demo"/"Book Assessment" but not confirmed as pages vs. modals/forms
├── Dashboard / Admin / Settings / Profile — mentioned in the operator prompt template as generic examples; NOT evidenced in any supplied screenshot — flag as unconfirmed, likely a logged-in product surface outside marketing site scope
├── Search — no search results page seen (only inline blog search box)
└── 404 — not seen
```

### 2.2 Page profile: **Pillar Detail Page** (template, 5 instances confirmed)

| Attribute | Detail |
|---|---|
| **Purpose** | Deep-dive marketing/education page per product pillar; build authority + drive assessment/demo conversion |
| **Target user** | CISO / compliance lead / IT security director evaluating vendors |
| **Inputs** | Pillar content object: name, index (1–10), tagline, description, 4 feature chips, hero stat values (5–7 metrics incl. one score/100, one trend, one count w/ delta, one donut breakdown, one ranked list, one progress %), compliance framework list, 10 cluster objects (icon, title, description, link), 6 "why it matters" bullets, 5–6 resource downloads, testimonial/logo list (likely global), bottom CTA copy |
| **Outputs** | CTA clicks → Demo/Assessment booking flow; Cluster link clicks → cluster detail (unconfirmed); Resource clicks → gated download (unconfirmed, likely email-gated) |
| **Navigation** | Reachable via global nav mega-menus (Platform/Solutions), a Pillars index, breadcrumb, and likely cross-links from other pillar pages ("Explore All Pillars") |
| **Dependencies** | Global Navbar, Footer, Logo-wall component, all shared across every page |
| **API requirements** | Live-looking metrics (24h counts, deltas, "Last Updated: Just Now") suggest either (a) a real-time analytics/demo-data API, or (b) static per-pillar mock data — needs product decision. Newsletter/lead-gen forms need a CRM/email-service endpoint. Resource downloads likely need a gated-content/lead-capture endpoint. |
| **Shared components** | Navbar, Footer, Breadcrumb, PillarBadge, HeroStatCard, HeroDonutCard, HeroRankedListCard, HeroProgressCard, AnimatedShieldGraphic, ComplianceBadgeStrip, ClusterCard (×10 grid), WhyItMattersPanel, ResourceDownloadCard, LogoWall, BottomCTABand |
| **SEO** | Needs unique title/meta description per pillar; breadcrumb schema; likely FAQ/Product schema given compliance-heavy B2B intent; canonical per pillar slug |
| **Accessibility** | Heavy use of icon-only status chips and color-coded donut/bar charts — will need text alternatives/aria-labels for all stat visuals; sufficient contrast on dark theme for small metric text; keyboard focus order through 10-card cluster grid and mega-menus |
| **Performance** | Animated hero graphic (orbiting icons, glow/pulse rings) — should be CSS/SVG-driven, not heavy JS/canvas, and respect `prefers-reduced-motion`; 10-card + 5-card + logo-wall grids should lazy-load below-the-fold images/icons |

### 2.3 Page profile: **Blog Listing Page** (1 instance confirmed)

| Attribute | Detail |
|---|---|
| **Purpose** | Content-marketing hub for SEO/inbound traffic and nurture |
| **Target user** | Prospects in research phase; existing customers seeking best-practice guidance |
| **Inputs** | Post objects (category, title, excerpt, date, read-time, thumbnail), category taxonomy w/ counts, popular-tag list, pagination state, sort order, search query |
| **Outputs** | Filtered/sorted/paginated list; navigation to article detail (unconfirmed page); newsletter subscription submission |
| **Navigation** | Global nav → Resources → Blogs; breadcrumb `Home > Blogs`; internal category/tag filters; pagination |
| **Dependencies** | Navbar, Footer (note: **different footer schema** than pillar pages, per 1.6), BlogCard, CategoryFilterList, TagCloud, NewsletterCard |
| **API requirements** | Blog CMS/API for posts + categories + search + pagination (56 posts across 7 pages, 9/page); newsletter subscribe endpoint |
| **Shared components** | Navbar, Footer, SearchInput, CategoryList, TagCloud, NewsletterCard, BlogCard, Pagination |
| **SEO** | Paginated list needs `rel=prev/next` or canonical strategy; category pages likely need their own indexable URLs (`/blogs/category/[slug]`) — not confirmed yet; each BlogCard should link to a real article URL with its own metadata |
| **Accessibility** | Category list and tag cloud need clear focus states and `aria-current` on active filter; pagination needs accessible labels ("Page 2 of 7"); search input needs a label, not just placeholder |
| **Performance** | 9 thumbnail icons per page — should be optimized/lazy-loaded; client-side filter/sort vs. server-paginated needs a decision (56 posts is small enough for either) |

### 2.4 Shared global components (present on every page seen)

- **Navbar**: logo + wordmark + tagline, 6 mega-menu triggers (Platform, Solutions, Compliance, Industries, Resources, Company), 2 CTA buttons (Request Demo, Book Assessment)
- **Footer**: logo + tagline + social icons (LinkedIn, X/Twitter, YouTube, GitHub), multi-column link groups, legal/copyright row
- **LogoWall** ("Trusted by India's Leading Organizations"): SBI, TCS, Tech Mahindra, Airtel, Mahindra, NPCI, ISRO — appears identical across all pillar pages, likely global/static
- **Breadcrumb**
- **CTA Button pair pattern**: filled-gradient primary + outlined secondary, repeated in nav, hero, and bottom band

### 2.5 What's needed before Phase 3 (Design System) can be fully authoritative

To move forward with full confidence, the following would materially improve accuracy:
1. At least one more pillar (any of #2, #3, #4, #8, #10) to confirm whether the exact-10-cluster and stat-card-count patterns hold everywhere.
2. One non-pillar, non-blog page (ideally **Home**) to validate global nav/footer assumptions and see the primary brand narrative.
3. One **Blog article detail** page to map that template.
4. Confirmation on whether Dashboard/Admin/Settings/Auth are in-scope at all (they appear only in the generic operator prompt template, not in any actual screenshot).

If you're ready, I can proceed as-is with the 5 confirmed pillars + blog listing and treat the rest as backlog/unknowns to fill in later — just confirm and I'll move to **Round 3: Design System & Component Inventory**.
