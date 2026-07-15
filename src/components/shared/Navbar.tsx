"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/components/Navbar.tsx, adapted for the
 * Next.js App Router (next/link + usePathname instead of the custom navigateTo).
 */

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  ChevronDown,
  Menu,
  X,
  Terminal,
  Lock,
  Database,
  Activity,
} from "lucide-react";

export default function Navbar() {
  const currentPath = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const toggleMegaMenu = (menu: string) => {
    setActiveMegaMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex cursor-pointer items-center space-x-2"
          id="nav-logo"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-700 shadow-lg shadow-cyan-500/20">
            <Shield className="h-6 w-6 text-white" />
            <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-emerald-500"></div>
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-500"></div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              CYBER<span className="text-cyan-400">TECK</span>
            </span>
            <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase">
              Compliance OS
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {/* Platform Mega Menu */}
          <div className="relative">
            <button
              onClick={() => toggleMegaMenu("platform")}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeMegaMenu === "platform" ? "text-cyan-400" : "text-slate-300"
              }`}
              id="btn-nav-platform"
            >
              <span>Platform</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeMegaMenu === "platform" && (
              <div className="absolute left-1/2 top-full mt-3 w-[600px] -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/50 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-bold tracking-wider text-cyan-400 uppercase">
                    Security Pillars
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/solutions"
                        onClick={closeMenus}
                        className="group flex items-start text-left space-x-3 rounded-lg p-2 transition-colors hover:bg-slate-800 w-full"
                      >
                        <Lock className="h-5 w-5 mt-0.5 text-blue-400" />
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                            Identity Security
                          </div>
                          <p className="text-xs text-slate-400">
                            Zero Trust Identity Governance and PAM
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions"
                        onClick={closeMenus}
                        className="group flex items-start text-left space-x-3 rounded-lg p-2 transition-colors hover:bg-slate-800 w-full"
                      >
                        <Database className="h-5 w-5 mt-0.5 text-cyan-400" />
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                            Cloud & Data Security
                          </div>
                          <p className="text-xs text-slate-400">
                            Continuous CSPM and automated DPI
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-bold tracking-wider text-cyan-400 uppercase">
                    Operations & AI
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/solutions"
                        onClick={closeMenus}
                        className="group flex items-start text-left space-x-3 rounded-lg p-2 transition-colors hover:bg-slate-800 w-full"
                      >
                        <Terminal className="h-5 w-5 mt-0.5 text-indigo-400" />
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                            Threat Intelligence
                          </div>
                          <p className="text-xs text-slate-400">
                            Predictive analysis and threat feeds
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard"
                        onClick={closeMenus}
                        className="group flex items-start text-left space-x-3 rounded-lg p-2 transition-colors hover:bg-slate-800 w-full"
                      >
                        <Activity className="h-5 w-5 mt-0.5 text-rose-400" />
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                            AI-SOC Command
                          </div>
                          <p className="text-xs text-slate-400">
                            Autonomous Security Operations
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Compliance Menu */}
          <div className="relative">
            <button
              onClick={() => toggleMegaMenu("compliance")}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeMegaMenu === "compliance"
                  ? "text-cyan-400"
                  : "text-slate-300"
              }`}
              id="btn-nav-compliance"
            >
              <span>Compliance</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeMegaMenu === "compliance" && (
              <div className="absolute left-0 top-full mt-3 w-80 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-2xl shadow-black/50">
                <h4 className="mb-2 px-3 text-xs font-bold tracking-wider text-cyan-400 uppercase">
                  Indian Frameworks
                </h4>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/compliance"
                      onClick={closeMenus}
                      className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white w-full text-left"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-900/50 text-[10px] font-bold text-blue-400">
                        DPDP
                      </span>
                      <div>
                        <div className="font-medium">DPDP Act (2023)</div>
                        <p className="text-[10px] text-slate-400">
                          Data protection frameworks
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliance"
                      onClick={closeMenus}
                      className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white w-full text-left"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-cyan-900/50 text-[10px] font-bold text-cyan-400">
                        CERT
                      </span>
                      <div>
                        <div className="font-medium">CERT-In Directives</div>
                        <p className="text-[10px] text-slate-400">
                          Incident report within 6 hours
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliance"
                      onClick={closeMenus}
                      className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white w-full text-left"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-900/50 text-[10px] font-bold text-indigo-400">
                        RBI
                      </span>
                      <div>
                        <div className="font-medium">RBI & SEBI</div>
                        <p className="text-[10px] text-slate-400">
                          Mandated finance requirements
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/resources"
            onClick={closeMenus}
            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
              currentPath === "/resources" ? "text-cyan-400" : "text-slate-300"
            }`}
            id="btn-nav-resources"
          >
            Resources
          </Link>

          <Link
            href="/company-about"
            onClick={closeMenus}
            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
              currentPath === "/company-about"
                ? "text-cyan-400"
                : "text-slate-300"
            }`}
            id="btn-nav-company"
          >
            Company
          </Link>

          <Link
            href="/support"
            onClick={closeMenus}
            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
              currentPath === "/support" ? "text-cyan-400" : "text-slate-300"
            }`}
            id="btn-nav-support"
          >
            Support
          </Link>
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href="/dashboard"
            onClick={closeMenus}
            className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-colors"
            id="btn-nav-login"
          >
            <Terminal className="h-4 w-4" />
            <span>CyberTeck OS</span>
          </Link>

          <Link
            href="/book-assessment"
            onClick={closeMenus}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/30 transition-all duration-300"
            id="btn-nav-book-assessment"
          >
            Book Assessment
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden space-x-3">
          <Link
            href="/dashboard"
            onClick={closeMenus}
            className="rounded-md border border-slate-700 p-1 text-slate-300 hover:bg-slate-800"
            title="Dashboard Workspace"
          >
            <Terminal className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-1.5 text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 p-4 space-y-3 lg:hidden">
          <Link
            href="/"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            Home Overview
          </Link>
          <Link
            href="/solutions"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            Security Solutions
          </Link>
          <Link
            href="/compliance"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            Regulatory Compliance
          </Link>
          <Link
            href="/resources"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            Resource Center
          </Link>
          <Link
            href="/company-about"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            About Company
          </Link>
          <Link
            href="/support"
            onClick={closeMenus}
            className="block w-full text-left rounded-lg p-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
          >
            Uptime Status & Support
          </Link>

          <div className="border-t border-slate-800 pt-3 flex flex-col space-y-2">
            <Link
              href="/dashboard"
              onClick={closeMenus}
              className="flex items-center justify-center space-x-2 rounded-lg bg-slate-900 py-3 text-sm font-bold uppercase tracking-wider text-slate-200 border border-slate-800"
            >
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span>CyberTeck OS Dashboard</span>
            </Link>
            <Link
              href="/book-assessment"
              onClick={closeMenus}
              className="flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-bold uppercase tracking-wider text-white"
            >
              <span>Book Free Assessment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
