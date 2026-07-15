"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Sitemap.tsx, adapted for the Next.js
 * App Router (next/navigation useRouter instead of the custom navigateTo).
 */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Network,
  Home,
  Shield,
  Database,
  Users,
  MessageSquare,
  Terminal,
  Activity,
  Scale,
  Building2,
  Lock,
  Search,
  BookOpen,
  FileText,
} from "lucide-react";
import { ContentIndexer, type ContentRoute } from "@/lib/ContentIndexer";

export default function Sitemap() {
  const router = useRouter();
  const navigateTo = (url: string) => router.push(url);

  const indexer = ContentIndexer.getInstance();
  const allRoutes = indexer.getAllRoutes();
  const [searchQuery, setSearchQuery] = useState("");

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "home":
        return Home;
      case "workspace":
        return Activity;
      case "solutions":
        return Shield;
      case "compliance":
        return Database;
      case "resources":
        return Terminal;
      case "conversion":
        return Scale;
      case "company":
        return Users;
      case "support":
        return MessageSquare;
      case "legal":
        return Lock;
      case "pillars":
        return Shield;
      case "compliance-detail":
        return Scale;
      case "industries":
        return Building2;
      case "security":
        return Lock;
      case "glossary":
        return FileText;
      default:
        return Network;
    }
  };

  const searchResults = searchQuery.trim()
    ? indexer.search(searchQuery).map((res) => res.route)
    : [];

  const corePages = allRoutes.filter((r) =>
    ["home", "workspace", "conversion", "company", "support", "resources"].includes(
      r.category
    )
  );

  const pillars = indexer.getByCategory("pillars");
  const complianceDetails = indexer.getByCategory("compliance-detail");
  const industries = indexer.getByCategory("industries");
  const securityCommitments = indexer.getByCategory("security");
  const glossaryTerms = indexer.getByCategory("glossary");
  const legalPages = indexer.getByCategory("legal");
  const clusters = indexer.getByCategory("clusters");

  const renderRouteCard = (route: ContentRoute) => {
    const IconComponent = getIconForCategory(route.category);

    return (
      <div
        key={route.url}
        onClick={() => navigateTo(route.url)}
        className="rounded-xl border border-slate-900 bg-slate-900/40 p-5 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300 cursor-pointer flex items-start space-x-4 group h-full"
        id={`sitemap-node-${route.url.replace(/\//g, "-")}`}
      >
        <div className="rounded-lg bg-slate-950 p-2 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0">
          <IconComponent className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors line-clamp-1">
              {route.title.split("|")[0].trim()}
            </h3>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded uppercase">
              {route.category}
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {route.description}
          </p>
          <div className="flex flex-wrap gap-1 pt-1.5">
            {route.keywords.slice(0, 3).map((kw) => (
              <span
                key={kw}
                className="text-[9px] font-mono text-cyan-500/80 bg-cyan-500/5 px-1.5 py-0.5 rounded"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16" id="sitemap-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-slate-900 pb-8 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-cyan-400 mb-3">
              <Network className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">
                Knowledge Graph Explorer
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Sitemap Architecture
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Synchronously index and traverse the CyberTeck OS sovereign digital ecosystem
              ({allRoutes.length} nodes registered)
            </p>
          </div>

          {/* Real-time search engine wrapper */}
          <div className="relative max-w-md w-full mx-auto md:mx-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search knowledge graph..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-900 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Dynamic Search Results */}
        {searchQuery.trim() !== "" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
              <span>Search Results ({searchResults.length} matches)</span>
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((route) => renderRouteCard(route))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 py-6">
                No matching nodes found in the sitemap knowledge graph.
              </p>
            )}
          </div>
        )}

        {searchQuery.trim() === "" && (
          <div className="space-y-12">
            {/* Core Navigation Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                <BookOpen className="h-4 w-4" />
                <span>Primary Workspace & Portals</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {corePages.map((route) => renderRouteCard(route))}
              </div>
            </div>

            {/* Sovereign 10 Pillars */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                <Shield className="h-4 w-4" />
                <span>Sovereign Security Platforms (10 Pillars)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((route) => renderRouteCard(route))}
              </div>
            </div>

            {/* Regulatory Alignments */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                <Scale className="h-4 w-4" />
                <span>Statutory Compliance Automations</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceDetails.map((route) => renderRouteCard(route))}
              </div>
            </div>

            {/* Industries & Security Trust */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Target Verticals */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                  <Building2 className="h-4 w-4" />
                  <span>Target Industry Verticals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industries.map((route) => (
                    <div
                      key={route.url}
                      onClick={() => navigateTo(route.url)}
                      className="p-4 border border-slate-900 bg-slate-900/20 rounded-xl hover:border-cyan-500/20 hover:bg-slate-900/40 cursor-pointer group transition-all"
                    >
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {route.title.split("|")[0]}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {route.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Trust Disclosures */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                  <Lock className="h-4 w-4" />
                  <span>Security, Trust & Privacy Disclosures</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityCommitments.map((route) => (
                    <div
                      key={route.url}
                      onClick={() => navigateTo(route.url)}
                      className="p-4 border border-slate-900 bg-slate-900/20 rounded-xl hover:border-cyan-500/20 hover:bg-slate-900/40 cursor-pointer group transition-all"
                    >
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {route.title.split("|")[0]}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {route.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glossary Reference Terms */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 border-b border-slate-900 pb-2">
                <FileText className="h-4 w-4" />
                <span>
                  Cybersecurity Glossary Terms ({glossaryTerms.length} reference cards)
                </span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {glossaryTerms.map((route) => (
                  <div
                    key={route.url}
                    onClick={() => navigateTo(route.url)}
                    className="p-3.5 rounded-lg border border-slate-900 bg-slate-900/10 hover:border-cyan-500/20 hover:bg-slate-900/30 transition-all cursor-pointer text-center group"
                  >
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {route.title
                        .split("|")[0]
                        .trim()
                        .replace(" Definition", "")
                        .replace(" | CyberTeck OS Glossary", "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Semantic Clusters */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center space-x-2 pb-2">
                <Network className="h-4 w-4" />
                <span>
                  Semantic Cluster Network Pages ({clusters.length} Crawlable Sub-Nodes)
                </span>
              </h2>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                CyberTeck OS automates high-frequency SEO discovery via 100 programmatically
                synthesized cloud-workload cluster pathways linked directly back to their
                primary security pillars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {clusters.slice(0, 30).map((route) => (
                  <div
                    key={route.url}
                    onClick={() => navigateTo(route.url)}
                    className="p-3 text-xs border border-slate-900/80 bg-slate-900/5 rounded-lg hover:border-cyan-500/25 hover:bg-slate-900/20 cursor-pointer transition-all line-clamp-1 text-slate-400 hover:text-cyan-300"
                  >
                    {route.title.split("|")[0].trim()}
                  </div>
                ))}
                {clusters.length > 30 && (
                  <div className="p-3 text-xs border border-slate-900/40 bg-slate-950/10 rounded-lg italic text-slate-600 flex items-center justify-center">
                    + {clusters.length - 30} additional crawlable micro-nodes indexed in XML
                    Sitemaps
                  </div>
                )}
              </div>
            </div>

            {/* Legal Disclosures */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Platform Disclosures
              </h2>
              <div className="flex flex-wrap gap-4">
                {legalPages.map((route) => (
                  <button
                    key={route.url}
                    onClick={() => navigateTo(route.url)}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {route.title.split("|")[0].trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
