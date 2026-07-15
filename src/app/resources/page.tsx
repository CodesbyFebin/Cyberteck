"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Resources.tsx. The remote fetched
 * resources from /api/resources; here we source them from a local static
 * dataset so the page works without a backend.
 */

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Download,
  Tag,
  Clock,
  Sparkles,
} from "lucide-react";

type ResourceType = "blog" | "guide" | "whitepaper";

interface ResourceItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime?: string;
  pagesCount?: number;
  tags: string[];
  type: ResourceType;
}

const RESOURCES: ResourceItem[] = [
  {
    id: "iso-27001-roadmap-bfsi",
    title: "ISO 27001:2022 Implementation Roadmap for Indian BFSI",
    category: "Compliance",
    excerpt:
      "A step-by-step master checklist and blueprint for implementing ISO 27001 ISMS and coordinating audits efficiently.",
    author: "CyberTeck Compliance Team",
    date: "2026-04-12",
    pagesCount: 24,
    tags: ["ISO 27001", "BFSI", "Audits"],
    type: "guide",
  },
  {
    id: "navigating-dpdp-act",
    title: "Navigating India's DPDP Act: Security Architecture & Requirements",
    category: "Data Protection",
    excerpt:
      "Comprehensive technical strategies for personal data consent capture, retention management, and compliance under India's DPDP Act.",
    author: "CyberTeck Governance Team",
    date: "2026-03-28",
    readTime: "12 min read",
    tags: ["DPDP Act", "Privacy", "PII Encryption"],
    type: "blog",
  },
  {
    id: "2026-threat-landscape-report",
    title: "2026 Threat Landscape Report: AI-Driven Cyber Threats in India",
    category: "Threat Intelligence",
    excerpt:
      "An in-depth analysis of advanced persistent threat (APT) activity targeting Indian critical financial infrastructure and government portals.",
    author: "CyberTeck Threat Labs",
    date: "2026-02-15",
    pagesCount: 42,
    tags: ["Threat Intel", "APT", "AI Security"],
    type: "whitepaper",
  },
  {
    id: "mfa-best-practices",
    title: "Multi-Factor Authentication (MFA) Best Practices for Hybrid Teams",
    category: "Identity",
    excerpt:
      "Why standard SMS OTP fails and how to deploy phishing-resistant hardware-based FIDO2 key configurations across large organizations.",
    author: "CyberTeck Identity Team",
    date: "2026-02-02",
    readTime: "9 min read",
    tags: ["IAM", "MFA", "FIDO2"],
    type: "blog",
  },
  {
    id: "building-phishing-resistant-core",
    title: "Building a Phishing-Resistant Enterprise Core Security Pipeline",
    category: "DevSecOps",
    excerpt:
      "How to inject software vulnerability scans directly into GitHub and GitLab workflows without throttling software release momentum.",
    author: "CyberTeck SecOps Team",
    date: "2026-01-20",
    pagesCount: 18,
    tags: ["DevSecOps", "CI/CD", "Vulnerability Scanner"],
    type: "guide",
  },
  {
    id: "cert-in-survival-guide",
    title: "CERT-In 6-Hour Incident Reporting Mandate: Survival Guide",
    category: "Incident Response",
    excerpt:
      "An operational SOP checklist for incident triage, forensic log packaging, and automatic reporting to CERT-In within mandated constraints.",
    author: "CyberTeck IR Team",
    date: "2026-01-08",
    pagesCount: 16,
    tags: ["CERT-In", "Incident Response", "Forensic Logs"],
    type: "whitepaper",
  },
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | ResourceType>("all");

  const filteredResources = RESOURCES.filter((res) => {
    const matchesFilter = activeFilter === "all" || res.type === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      res.title.toLowerCase().includes(q) ||
      res.excerpt.toLowerCase().includes(q) ||
      res.tags.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title area */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <BookOpen className="h-4 w-4" />
            <span>CyberTeck Enterprise Library & Research</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Knowledge, Insights, Stronger Security.
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Actionable executive whitepapers, CERT-In response blueprints, DPDP
            checklists, and deep-dive cybersecurity research.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-900">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Resources" },
              { id: "blog", label: "Security Blogs" },
              { id: "guide", label: "Sovereign Guides" },
              { id: "whitepaper", label: "Research Whitepapers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as "all" | ResourceType)}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${
                  activeFilter === tab.id
                    ? "border-cyan-500/40 bg-cyan-950/30 text-white"
                    : "border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tag..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-slate-900 bg-slate-900/20 text-slate-500 text-sm">
            No resources match your search parameters. Try adjusting filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.1)] group"
              >
                <div className="space-y-4">
                  {/* Category, Readtime */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wider ${
                        item.type === "whitepaper"
                          ? "bg-indigo-950/60 text-indigo-400 border border-indigo-500/10"
                          : item.type === "guide"
                          ? "bg-cyan-950/60 text-cyan-400 border border-cyan-500/10"
                          : "bg-emerald-950/60 text-emerald-400 border border-emerald-500/10"
                      }`}
                    >
                      {item.type}
                    </span>

                    <div className="flex items-center space-x-1 font-mono text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.readTime || `${item.pagesCount} pages`}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-400 leading-relaxed">{item.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center space-x-1 rounded bg-slate-950 border border-slate-800 px-2 py-0.5 text-[9px] text-slate-500"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer details */}
                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase">
                      Compiled by
                    </span>
                    <span className="text-xs font-semibold text-slate-300">{item.author}</span>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-slate-950 border border-slate-800 p-2.5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                    title="Download document PDF"
                    aria-label={`Download ${item.title}`}
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Section */}
        <div className="mt-20 rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(6,182,212,0.05),transparent_40%)]"></div>
          <div className="space-y-2 z-10 relative">
            <h4 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>Need Custom Regulatory Advice?</span>
            </h4>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              Generate a tailored regulatory posture audit directly addressing the new
              Digital Personal Data Protection Act (DPDP) and CERT-In directions in
              seconds.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 shrink-0 z-10 relative"
          >
            Start Dynamic Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
