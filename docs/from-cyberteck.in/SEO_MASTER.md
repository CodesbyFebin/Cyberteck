# SEO_MASTER.md — CyberTeck OS SEO & Discovery Strategy

This document outlines the Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) strategies for **CyberTeck.in**. It defines how CyberTeck captures organic search demand, satisfies search intent, structures data schemas, and optimizes for LLM-powered answer engines.

---

## 1. THE TOPIC CLUSTER ARCHITECTURE

CyberTeck's organic strategy is built around three distinct **Pillar Pages** representing our core value propositions. Each pillar is supported by a cluster of high-intent secondary articles.

```
                  +----------------------------------------------+
                  |         CYBERTECK SOVEREIGN ARCHITECTURE     |
                  +----------------------+-----------------------+
                                         |
         +-------------------------------+-------------------------------+
         |                               |                               |
+--------v--------+             +--------v--------+             +--------v--------+
|  PILLAR PAGE 1  |             |  PILLAR PAGE 2  |             |  PILLAR PAGE 3  |
| India DPDP Act  |             |  CERT-In Audit  |             | RBI Cyber Sec   |
|   Compliance    |             |    Readiness    |             |   Alignments    |
+--------+--------+             +--------+--------+             +--------+--------+
         |                               |                               |
         | (Internal Links)              | (Internal Links)              | (Internal Links)
         |                               |                               |
  +------+------+                 +------+------+                 +------+------+
  | Sub-Cluster |                 | Sub-Cluster |                 | Sub-Cluster |
  | - Penalties |                 | - 6hr Mandt |                 | - MFA Rules |
  | - Consent   |                 | - Log Store |                 | - PAM Audit |
  | - Erasure   |                 | - Forensics |                 | - WAF Isoln |
  +-------------+                 +-------------+                 +-------------+
```

### A. Pillar 1: India DPDP Act (2023) Compliance
*   **Target Core Keyword:** `India DPDP Act compliance software` (Search Volume: High | Intent: Commercial)
*   **Core Pillar URL:** `/compliance/dpdp-compliance-framework`
*   **Supporting Sub-Cluster Articles:**
    1.  *URL:* `/resources/dpdp-act-penalties-financial-impact` (Target: `DPDP Act penalties scale`)
    2.  *URL:* `/resources/consent-manager-architecture-dpdp-compliance` (Target: `DPDP consent manager standard`)
    3.  *URL:* `/resources/citizen-data-erasure-rights-mumbai-hosting` (Target: `DPDP data erasure logs`)

### B. Pillar 2: CERT-In Incident Mandate Reporting
*   **Target Core Keyword:** `CERT-In compliance and incident response guidelines` (Search Volume: Medium-High | Intent: Commercial)
*   **Core Pillar URL:** `/compliance/cert-in-incident-mandate`
*   **Supporting Sub-Cluster Articles:**
    1.  *URL:* `/resources/cert-in-6-hour-incident-reporting-guide` (Target: `6 hour security incident reporting India`)
    2.  *URL:* `/resources/centralized-syslog-standards-cert-in` (Target: `CERT-In log storage retention laws`)
    3.  *URL:* `/resources/forensic-log-packaging-under-cert-in` (Target: `forensically verified incident reports`)

### C. Pillar 3: RBI Cyber Security Framework
*   **Target Core Keyword:** `RBI cyber security framework banking compliant` (Search Volume: Medium | Intent: Commercial)
*   **Core Pillar URL:** `/compliance/rbi-cyber-security-framework`
*   **Supporting Sub-Cluster Articles:**
    1.  *URL:* `/resources/rbi-mfa-requirements-banking-consoles` (Target: `RBI multi-factor authentication rules`)
    2.  *URL:* `/resources/privileged-access-management-compliance-rbi` (Target: `RBI PAM session records`)
    3.  *URL:* `/resources/web-application-firewall-transaction-isolation` (Target: `WAF transaction monitoring RBI`)

### D. Internal Linking Strategy
*   Every supporting sub-cluster article **MUST** contain a contextual anchor text link back to its respective Parent Pillar Page within the first 150 words (e.g., "...implementing our verified [India DPDP Act compliance software](/compliance/dpdp-compliance-framework)...").
*   The Parent Pillar Page **MUST** link out to all supporting sub-cluster articles using structured list formats to pass link equity (PageRank) bi-directionally.

---

## 2. STRUCTURAL META OPTIMIZATION & ON-PAGE ASSETS

To maximize search click-through rates (CTR) and guarantee clean crawling, every page must adhere to precise metadata limits and utilize semantic HTML5 elements.

### A. Title Tag and Meta Description Rules
*   **Length Restrictions:** Page Title: `50-60 characters` (including brand postfix); Meta Description: `150-160 characters` (including strong active verb call-to-action).
*   **Prefix Keyword Target:** The target core keyword for the specific page **MUST** occupy the leftmost portion of the Title tag.

| Page URL | Targeted Meta Title Tag | Targeted Meta Description Tag |
| :--- | :--- | :--- |
| **`/` (Home)** | `CyberTeck OS | Sovereign Cybersecurity & Compliance Platform` | `Secure your enterprise core. Continuous compliance auditing against India DPDP Act (2023) and CERT-In directions on Mumbai sovereign cloud. Learn more.` |
| **`/dashboard`** | `Enterprise SOC Dashboard Cockpit | CyberTeck OS Console` | `Access your centralized CyberTeck OS console. Real-time sovereign risk scoring, active threat isolation feeds, and automatic DPDP regulatory audits.` |
| **`/solutions`** | `Sovereign Security Solutions & 10 Pillars | CyberTeck` | `Explore CyberTeck's 10 integrated cybersecurity pillars. Advanced Zero-Trust identity verification, AI cloud security, and automated SecOps pipelines.` |
| **`/compliance`** | `Indian Statutory Compliance Alignments | CyberTeck` | `Fulfill India's newly enacted DPDP Act parameters, RBI cybersecurity frameworks, and immediate 6-hour CERT-In incident reporting mandates automatically.` |
| **`/resources`** | `Sovereign Security Library, Guides & Reports | CyberTeck` | `Search our comprehensive knowledge base. Actionable executive CISO whitepapers, CERT-In response blueprints, and deep-dive cybersecurity research.` |

### B. Standard On-Page SEO Elements
1.  **Canonical Tags:** Every page **MUST** declare a self-referencing canonical tag to prevent duplicate content issues arising from URL parameters (e.g., `<link rel="canonical" href="https://cyberteck.in/compliance" />`).
2.  **Breadcrumb Navigation:** Breadcrumbs must use structural schemas (`BreadcrumbList`) and be rendered textually to allow search crawlers to map the site hierarchy.
3.  **Open Graph (OG) & Twitter Cards:**
    *   `<meta property="og:type" content="website" />`
    *   `<meta property="og:title" content="CyberTeck OS | Sovereign Indian Cybersecurity Platform" />`
    *   `<meta property="og:description" content="Securing enterprise topologies on Mumbai sovereign clouds." />`
    *   `<meta property="og:image" content="https://cyberteck.in/assets/og_image_launch.png" />`
    *   `<meta name="twitter:card" content="summary_large_image" />`
    *   `<meta name="twitter:site" content="@CyberTeckOS" />`

---

## 3. ADVANCED SCHEMA MARKUP (JSON-LD)

We embed high-fidelity structured data in the `<head>` block of our HTML templates to power rich search results snippets.

### A. Organization Schema (Home Page Only)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CyberTeck",
  "alternateName": "CyberTeck Technologies Private Limited",
  "url": "https://cyberteck.in",
  "logo": "https://cyberteck.in/assets/logo_light_theme.png",
  "sameAs": [
    "https://www.linkedin.com/company/cyberteck-os",
    "https://twitter.com/CyberTeckOS"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-22-4899-7200",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 8, Platina Building, Bandra Kurla Complex",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400051",
    "addressCountry": "IN"
  }
}
```

### B. Article Schema (Resource Blog Detail Pages Only)
```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Navigating India's DPDP Act: A Practical Guide for CISOs",
  "image": [
    "https://cyberteck.in/assets/blog_dpdp_guide_cover.png"
  ],
  "datePublished": "2026-07-01T09:00:00+05:30",
  "dateModified": "2026-07-08T18:44:43+05:30",
  "author": {
    "@type": "Person",
    "name": "Anita R.",
    "jobTitle": "Chief Product Officer",
    "sameAs": "https://www.linkedin.com/in/anita-r-cyberteck"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CyberTeck",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cyberteck.in/assets/logo_light_theme.png"
    }
  }
}
```

### C. FAQ Schema (Compliance Page Only)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the penalties for non-compliance under the India DPDP Act (2023)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Failures to safeguard personal data or prevent data breaches under Section 8(5) of the DPDP Act expose organizations to statutory financial penalties up to ₹250 Crores, adjudicated by the Data Protection Board of India."
      }
    },
    {
      "@type": "Question",
      "name": "What is the CERT-In incident reporting timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under current CERT-In directions, all primary cybersecurity incidents—including ransomware, database exfiltrations, and privileged session hijacking—must be forensically compiled and reported to CERT-In within 6 hours of first detection."
      }
    }
  ]
}
```

---

## 4. LLM-OPTIMIZATION, AEO, & GEO STRATEGIES

With the rise of Gemini, Perplexity, and ChatGPT search features, organic discovery is no longer limited to Google. CyberTeck targets Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) using the following techniques:

### A. Authoritative Formatting & direct Question-Answer Blocks
LLMs favor clear, concise, objective answers that can be extracted easily to satisfy user prompts.
*   **Sentence-First Definition:** We introduce key concepts with high-density, single-sentence definitions before expanding. (e.g., "India's Digital Personal Data Protection (DPDP) Act is a statutory framework enacted in 2023 that mandates explicit citizen consent, localized data residency, and strict penalties up to ₹250 Cr for corporate data breaches.")
*   **The "Bullet-Proof" Format:** Bullet points and tables are prioritized. LLMs use these structures to format summaries in their replies.

### B. Dynamic Information Grounding (BKC Datacenter Analogy)
*   LLMs seek verified telemetry details. We ground our application interfaces and mock data models with specific local details (e.g., referencing "BKC-1 Datacenter telemetry", "Mumbai cloud region", "CERT-In localized logging formats") to sound authoritative to both human auditors and crawler algorithms.

### C. GEO Targeting & Regional Authority
*   **Local Intent Keywords:** We optimize content specifically for local regional terminology (e.g., "Data Protection Officer in Mumbai", "RBI audit compliance systems", "Sovereign cloud setups in India"). This guarantees high visibility in Geo-Targeted Search queries.
*   **Trust and Entity Association:** Our content links outbound to official government statutory files (such as meity.gov.in and cert-in.org.in). This helps search engine entity-graphs associate the "CyberTeck" brand with official regulatory standards.
