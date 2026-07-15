/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { pillars } from "./content/pillars";
import { compliance } from "./content/compliance";
import { industries } from "./content/industries";
import { resources } from "./content/resources";
import { security } from "./content/security";
import { glossary } from "./content/glossary";
import { generatedClusters } from "./content/clusters";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentRoute {
  url: string;
  title: string;
  description: string;
  category: 'home' | 'workspace' | 'solutions' | 'compliance' | 'resources' | 'conversion' | 'company' | 'support' | 'legal' | 'sitemap' | 'pillars' | 'compliance-detail' | 'industries' | 'clusters' | 'security' | 'glossary';
  keywords: string[];
  summary: string;
  faqs: FAQItem[];
  parent: string | null;
  children: string[];
}

export interface KnowledgeGraphNode {
  url: string;
  title: string;
  category: string;
  parent: string | null;
  children: string[];
}

export class ContentIndexer {
  private static instance: ContentIndexer;
  private routes: ContentRoute[] = [];

  private constructor() {
    // 1. Register Core Root & Portal Pages
    const coreRoutes: ContentRoute[] = [
      {
        url: "/",
        title: "CyberTeck OS | Sovereign Cybersecurity & Compliance Platform",
        description: "Secure your enterprise core. Continuous compliance auditing against India DPDP Act (2023) and CERT-In directions on Mumbai sovereign cloud.",
        category: "home",
        keywords: ["Sovereign Cybersecurity", "DPDP Act Compliance", "CERT-In 6-Hour Reporting", "Zero Trust Identity", "Mumbai Cloud", "AI-SOC"],
        summary: "CyberTeck OS is India's premium enterprise-grade, AI-native cybersecurity platform. It integrates threat intelligence, identity security, cloud security, compliance automation, and real-time security telemetry to safeguard national critical digital infrastructure on localized sovereign cloud hosting.",
        faqs: [
          {
            question: "What is CyberTeck OS?",
            answer: "CyberTeck OS is an AI-native, enterprise-grade sovereign cybersecurity and compliance platform built to secure Indian enterprises and critical digital assets in alignment with statutory standards like DPDP Act (2023) and CERT-In."
          },
          {
            question: "Where is CyberTeck OS hosted?",
            answer: "CyberTeck OS is hosted strictly within sovereign Indian boundaries across Tier-IV secure datacenters in the Mumbai region, guaranteeing full data residency and immunity to foreign geopolitical storage risks."
          }
        ],
        parent: null,
        children: []
      },
      {
        url: "/dashboard",
        title: "Enterprise SOC Dashboard Cockpit | CyberTeck OS Console",
        description: "Access your centralized CyberTeck OS console. Real-time sovereign risk scoring, active threat isolation feeds, and automatic DPDP regulatory audits.",
        category: "workspace",
        keywords: ["Enterprise Dashboard", "SOC Telemetry", "Active Threat Isolation", "Sovereign Risk Score", "DPDP Audit Logs"],
        summary: "The CyberTeck OS Workspace Dashboard acts as the real-time mission control for CISOs and security teams, compiling live attack-surface analytics, automatic compliance checklists, threat mitigation controls, and an interactive generative AI Threat Copilot.",
        faqs: [
          {
            question: "What features are included in the CyberTeck OS Dashboard?",
            answer: "The dashboard contains the Real-Time Threat Intel Feed, the Compliance Audit Checklist, the CISO Executive Scoreboard, the Active Log Stream, and the AI Threat Hunting Copilot."
          }
        ],
        parent: "/",
        children: []
      },
      {
        url: "/solutions",
        title: "Sovereign Security Solutions & 10 Pillars | CyberTeck OS",
        description: "Explore CyberTeck's 10 integrated cybersecurity pillars. Advanced Zero-Trust identity verification, AI cloud security, and automated SecOps pipelines.",
        category: "solutions",
        keywords: ["Sovereign Identity", "Zero-Trust Architecture", "Attack Surface Management", "Cloud Security Posture", "SOAR Automation"],
        summary: "CyberTeck's product suite spans 10 cohesive AI-native security pillars. This architecture decouples traditional point solutions, linking identity governance, real-time SOC operations, cloud workload protection, and automated compliance auditing into a unified operating system.",
        faqs: [
          {
            question: "What are the core solutions of the CyberTeck platform?",
            answer: "Our core solution segments include Zero-Trust Identity Security (AI-PAM & IGA), Intelligent Threat Hunting, Cloud Workload Protection (CSPM), and Automated SecOps Orchestration (SOAR)."
          }
        ],
        parent: "/",
        children: []
      },
      {
        url: "/compliance",
        title: "Indian Statutory Compliance Alignments | CyberTeck OS",
        description: "Fulfill India's DPDP Act parameters, RBI cybersecurity frameworks, and immediate 6-hour CERT-In incident reporting mandates automatically.",
        category: "compliance",
        keywords: ["Statutory Compliance", "DPDP Act 2023", "CERT-In Mandates", "RBI Guidelines", "ISO 27001", "SEBI Cyber Security"],
        summary: "Our automated compliance matrices map system logs and identity states directly to specific sections of Indian cybersecurity law. It simplifies complex regulatory audits and compiles certified evidence vaults for statutory submission.",
        faqs: [
          {
            question: "Which frameworks does CyberTeck automate?",
            answer: "CyberTeck provides direct mapping and automated auditing for the Digital Personal Data Protection (DPDP) Act, CERT-In directions, RBI IT Guidelines, SEBI resilience circulars, IRDAI guidelines, and global standards like ISO 27001, SOC-2, and NIST CSF."
          }
        ],
        parent: "/",
        children: []
      },
      {
        url: "/resources",
        title: "Sovereign Security Library, Guides & Reports | CyberTeck OS",
        description: "Search our comprehensive knowledge base. Actionable executive CISO whitepapers, CERT-In response blueprints, and deep-dive cybersecurity research.",
        category: "resources",
        keywords: ["CISO Guides", "Whitepapers", "Threat Reports", "CERT-In Runbooks", "DPDP Checklists"],
        summary: "The CyberTeck Resource Center is an authoritative library of cybersecurity knowledge, featuring peer-reviewed whitepapers, statutory implementation roadmaps, and Threat Intelligence archives to educate and prepare security leaders.",
        faqs: [
          {
            question: "Can I download CERT-In and DPDP compliance templates?",
            answer: "Yes, our resource library includes downloadable procedural runbooks, incident response templates, and checklist tools designed specifically for Indian security executives."
          }
        ],
        parent: "/",
        children: []
      },
      {
        url: "/book-assessment",
        title: "CISO Posture Evaluator & Risk Score | CyberTeck OS",
        description: "Generate an instant, authoritative cyber posture report mapped to India DPDP Act and CERT-In. Evaluate active security gaps and get AI guidance.",
        category: "conversion",
        keywords: ["Risk Assessment", "CISO Risk Score", "Security Posture", "Vulnerability Triage", "Gemini Assessment"],
        summary: "The Posture Evaluator allows enterprise leaders to benchmark their security parameters. Mapped to Indian legal frameworks, the tool processes corporate profile metrics and uses Gemini AI to compile direct, boardroom-ready risk advisories.",
        faqs: [],
        parent: "/",
        children: []
      },
      {
        url: "/company-about",
        title: "Sovereign Operational Legacy & Team | CyberTeck OS",
        description: "Discover CyberTeck's legacy, built on sovereign Indian values, secure Mumbai headquarters, and high-fidelity protection of national infrastructure.",
        category: "company",
        keywords: ["Sovereign Values", "CyberTeck Leadership", "Bandra Kurla Complex", "SaaS Operations", "Security Milestones"],
        summary: "CyberTeck is India's pioneer in sovereign cyber-defense software. Headquartered in Bandra Kurla Complex (BKC), Mumbai, our mission is to build robust, secure, and fully compliant digital defense tools that align with national data sovereignty mandates.",
        faqs: [],
        parent: "/",
        children: []
      },
      {
        url: "/support",
        title: "Enterprise Uptime & Customer Support | CyberTeck OS",
        description: "Access customer support, check live system status across Mumbai regions, and log priority enterprise security response tickets.",
        category: "support",
        keywords: ["System Uptime", "Mumbai Datacenter Status", "Security Response Desk", "SLA Tracking", "Onboarding Ticket"],
        summary: "CyberTeck maintains 99.99% operational uptime across its regional processing zones. Our Enterprise Support Desk provides Tier-3 specialist response pipelines and active ticketing modules to resolve infrastructure and compliance alerts immediately.",
        faqs: [],
        parent: "/",
        children: []
      },
      {
        url: "/privacy-policy",
        title: "DPDP-Compliant Privacy & Data Disclosures | CyberTeck OS",
        description: "Comprehensive legal privacy policies demonstrating compliance with India's Digital Personal Data Protection Act (2023) mandates.",
        category: "legal",
        keywords: ["Privacy Policy", "Data Protection Officer", "DPDP Right to Erasure", "Explicit Consent", "Data Sovereignty"],
        summary: "Our Privacy Policy lays out our transparent and lawful procedures for data collection, handling, and erasure, conforming strictly with Section 8 of India's newly enacted DPDP Act (2023).",
        faqs: [],
        parent: "/",
        children: []
      },
      {
        url: "/terms-of-use",
        title: "Enterprise Service Agreements & Terms | CyberTeck OS",
        description: "Legal terms of use, software license conditions, and enterprise security operations agreements governing the CyberTeck OS workspace.",
        category: "legal",
        keywords: ["Terms of Use", "Software License", "SLA Agreement", "Usage Thresholds", "Liability Boundaries"],
        summary: "Our Terms of Use formulate the standard software-as-a-service operational agreements, liability bounds, and acceptable use constraints applicable to enterprise tenants utilizing the CyberTeck OS console.",
        faqs: [],
        parent: "/",
        children: []
      },
      {
        url: "/sitemap",
        title: "CyberTeck Platform Navigation Architecture | Sitemap",
        description: "Access the complete structure of the CyberTeck OS enterprise interface and statutory knowledge directories.",
        category: "sitemap",
        keywords: ["Sitemap", "Site Directory", "Information Architecture", "Knowledge Graph"],
        summary: "Our sitemap directory outlines the complete structural nodes of CyberTeck, highlighting our core solutions, regulatory databases, security library, and support panels.",
        faqs: [],
        parent: "/",
        children: []
      }
    ];

    // 2. Concatenate all modular content assets to assemble a 150+ Route Graph
    this.routes = [
      ...coreRoutes,
      ...pillars,
      ...compliance,
      ...industries,
      ...resources,
      ...security,
      ...glossary,
      ...generatedClusters
    ];

    // 3. Programmatically compile parent-child graph link structures
    this.routes.forEach(route => {
      if (route.parent) {
        const parentRoute = this.routes.find(p => p.url === route.parent);
        if (parentRoute) {
          if (!parentRoute.children.includes(route.url)) {
            parentRoute.children.push(route.url);
          }
        }
      }
    });
  }

  /**
   * Get the singleton instance of ContentIndexer
   */
  public static getInstance(): ContentIndexer {
    if (!ContentIndexer.instance) {
      ContentIndexer.instance = new ContentIndexer();
    }
    return ContentIndexer.instance;
  }

  /**
   * Get all registered routes in the sitemap/knowledge graph
   */
  public getAllRoutes(): ContentRoute[] {
    return this.routes;
  }

  /**
   * Get metadata and content for a specific URL/route
   * Supports both exact matches and matching without trailing slashes
   */
  public getRoute(url: string): ContentRoute | null {
    const cleanUrl = this.sanitizeUrl(url);
    const route = this.routes.find(r => this.sanitizeUrl(r.url) === cleanUrl);
    return route || null;
  }

  /**
   * Get routes filtered by their category
   */
  public getByCategory(category: string): ContentRoute[] {
    return this.routes.filter(r => r.category === category);
  }

  /**
   * Search across titles, descriptions, keywords, and summaries
   * Returns matching routes with an associated search relevance score
   */
  public search(query: string): { route: ContentRoute; score: number }[] {
    const terms = query.toLowerCase().trim().split(/\s+/);
    if (terms.length === 0 || terms[0] === "") {
      return [];
    }

    return this.routes
      .map(r => {
        let score = 0;
        const titleLower = r.title.toLowerCase();
        const descLower = r.description.toLowerCase();
        const summaryLower = r.summary.toLowerCase();
        const keywordsLower = r.keywords.map(k => k.toLowerCase());

        terms.forEach(term => {
          if (titleLower.includes(term)) score += 10;
          if (descLower.includes(term)) score += 5;
          if (summaryLower.includes(term)) score += 3;
          keywordsLower.forEach(k => {
            if (k.includes(term)) score += 4;
          });
          // Exact URL slug matching bonus
          if (r.url.toLowerCase().includes(term)) score += 8;
        });

        return { route: r, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  /**
   * Traverses the knowledge graph starting from a specific URL.
   * Leverages parent-child relationships to construct full tree topologies.
   */
  public getKnowledgeGraph(): KnowledgeGraphNode[] {
    return this.routes.map(r => ({
      url: r.url,
      title: r.title,
      category: r.category,
      parent: r.parent,
      children: r.children
    }));
  }

  /**
   * Returns a complete list of parent URLs starting from the target up to the root.
   * Perfect for dynamically constructing deep, semantic breadcrumb navigation.
   */
  public getBreadcrumbs(url: string): { title: string; url: string }[] {
    const breadcrumbs: { title: string; url: string }[] = [];
    let current = this.getRoute(url);

    while (current) {
      breadcrumbs.unshift({ title: current.title, url: current.url });
      if (current.parent) {
        current = this.getRoute(current.parent);
      } else {
        break;
      }
    }

    return breadcrumbs;
  }

  /**
   * Retrieves all sibling routes sharing the same parent
   */
  public getSiblings(url: string): ContentRoute[] {
    const current = this.getRoute(url);
    if (!current || !current.parent) return [];
    return this.routes.filter(r => r.parent === current.parent && r.url !== current.url);
  }

  /**
   * Retrieves all child routes for a given parent URL
   */
  public getChildRoutes(url: string): ContentRoute[] {
    const current = this.getRoute(url);
    if (!current) return [];
    return this.routes.filter(r => r.parent === current.url);
  }

  /**
   * Resolves answers from FAQs across the entire knowledge graph based on query words
   */
  public getAnswerReadyFAQs(query: string): { question: string; answer: string; sourceUrl: string; sourceTitle: string }[] {
    const terms = query.toLowerCase().trim().split(/\s+/);
    if (terms.length === 0 || terms[0] === "") return [];

    const results: { question: string; answer: string; sourceUrl: string; sourceTitle: string }[] = [];

    this.routes.forEach(r => {
      r.faqs.forEach(faq => {
        let matches = 0;
        const qLower = faq.question.toLowerCase();
        const aLower = faq.answer.toLowerCase();

        terms.forEach(term => {
          if (qLower.includes(term)) matches += 3;
          if (aLower.includes(term)) matches += 1;
        });

        if (matches > 0) {
          results.push({
            question: faq.question,
            answer: faq.answer,
            sourceUrl: r.url,
            sourceTitle: r.title
          });
        }
      });
    });

    return results;
  }

  /**
   * Formats and returns a high-fidelity Schema.org JSON-LD structured string for a page
   */
  public generateJsonLdSchema(url: string): string {
    const route = this.getRoute(url);
    if (!route) return "";

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": route.title,
      "description": route.description,
      "url": `https://cyberteck.in${route.url}`,
      "inLanguage": "en-IN"
    };

    if (route.url === "/") {
      return JSON.stringify({
        ...baseSchema,
        "@type": "SoftwareApplication",
        "applicationCategory": "CybersecurityApplication",
        "operatingSystem": "All",
        "publisher": {
          "@type": "Organization",
          "name": "CyberTeck",
          "alternateName": "CyberTeck Technologies Private Limited",
          "url": "https://cyberteck.in",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "IN"
          }
        }
      }, null, 2);
    }

    if (route.faqs && route.faqs.length > 0) {
      return JSON.stringify({
        ...baseSchema,
        "@type": "FAQPage",
        "mainEntity": route.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }, null, 2);
    }

    return JSON.stringify(baseSchema, null, 2);
  }

  /**
   * Helper to strip trailing slashes and bring URL to canonical form
   */
  private sanitizeUrl(url: string): string {
    if (url === "/") return url;
    let sanitized = url.trim();
    if (sanitized.endsWith("/")) {
      sanitized = sanitized.slice(0, -1);
    }
    if (!sanitized.startsWith("/")) {
      sanitized = "/" + sanitized;
    }
    return sanitized;
  }
}
