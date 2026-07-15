/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/components/Footer.tsx, adapted for the
 * Next.js App Router (next/link instead of the custom navigateTo).
 */

import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

/**
 * lucide-react v1.x dropped brand icons from core, so we ship the four brand
 * marks used in the footer as small inline SVGs to preserve the exact design.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

function Linkedin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Twitter(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.13 1.19a4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.96 4.96 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59l-.05-.02z" />
    </svg>
  );
}

function Github(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function Youtube(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center space-x-2 cursor-pointer"
              id="footer-logo"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-700 shadow-lg shadow-cyan-500/10">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  CYBER<span className="text-cyan-400">TECK</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-slate-400 uppercase">
                  AI-NATIVE CYBERSECURITY & COMPLIANCE OS
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm text-slate-400">
              India's premier AI-Native security architecture, securing
              high-risk environments for Banking, Government entities, healthcare
              conglomerates, and enterprises nationwide.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                <span>
                  Level 7, Cyber Arena, Bandra Kurla Complex (BKC), Mumbai,
                  Maharashtra 400051
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-500 shrink-0" />
                <span>+91 (022) 4899-7200</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-500 shrink-0" />
                <span>governance@cyberteck.in</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Platform
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
                    Identity & Zero Trust
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
                    Cloud & Data Protection
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
                    Threat Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-cyan-400 transition-colors">
                    AI-SOC Automation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Compliance
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/compliance" className="hover:text-cyan-400 transition-colors">
                    DPDP Act (2023)
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-cyan-400 transition-colors">
                    CERT-In Incident SOP
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-cyan-400 transition-colors">
                    RBI Cyber Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-cyan-400 transition-colors">
                    SEBI & IRDAI Rules
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/resources" className="hover:text-cyan-400 transition-colors">
                    Blogs & Research
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-cyan-400 transition-colors">
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-cyan-400 transition-colors">
                    Deployment Guides
                  </Link>
                </li>
                <li>
                  <Link href="/book-assessment" className="hover:text-cyan-400 transition-colors">
                    Self-Service Audits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/company-about" className="hover:text-cyan-400 transition-colors">
                    About Us & Story
                  </Link>
                </li>
                <li>
                  <Link href="/company-about" className="hover:text-cyan-400 transition-colors">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Operational Status
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Trust Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-xs space-y-4 md:space-y-0">
          <p className="order-last md:order-first text-slate-500">
            &copy; {currentYear} CyberTeck Technologies Private Limited. Securing
            India's digital core. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors" id="footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors" id="footer-terms">
              Terms of Use
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Security Disclosure
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors" id="footer-sitemap">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
