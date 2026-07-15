/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/TermsOfUse.tsx.
 */

import React from "react";
import type { Metadata } from "next";
import { Gavel } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the CyberTeck.in website and CyberTeck OS workspace console, operated by CyberTeck Technologies Private Limited.",
};

export default function TermsOfUse() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title */}
        <div className="border-b border-slate-900 pb-6">
          <div className="flex items-center space-x-2.5 text-cyan-400 mb-3">
            <Gavel className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              Enterprise Service agreements
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Terms of Use</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono uppercase">
            Last updated: May 6, 2026 | Governing Law: Republic of India
          </p>
        </div>

        {/* Content body */}
        <div className="prose prose-invert prose-sm leading-relaxed text-slate-400 space-y-6 max-w-none">
          <p>
            Welcome to CyberTeck.in (the "Website") and the associated CyberTeck OS
            workspace console (the "Service"), operated by CyberTeck Technologies
            Private Limited ("CyberTeck", "we", "us", or "our"). These Terms of Use
            ("Terms") govern your access to and use of our platform. By accessing the
            Website or registering for an enterprise workspace, you agree to comply with
            and be bound by these Terms and our Privacy Policy.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">
            1. Enterprise Account Administration
          </h2>
          <p>
            To activate and utilize the CyberTeck OS telemetry workspace, organizations
            must register an authorized enterprise account. You are responsible for
            safeguarding your administrative credentials, active PAM tokens, and session
            keys. Any threat simulation, manual alert triggering, or database quarantine
            initiated via your account will be deemed an authorized action under your
            corporate supervision.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">
            2. Permitted Use and Security Audits
          </h2>
          <p>
            The CyberTeck OS platform and its dynamic "Book Assessment" advisory reports
            are provided solely to evaluate, monitor, and harden your internal enterprise
            security posture. You are strictly forbidden from:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Utilizing threat-simulation endpoints or triggering test alerts against
              digital assets, networks, or databases you do not explicitly own or
              maintain legal authorization to test.
            </li>
            <li>
              Using extracted compliance checklists or generated advisories to bypass
              local statutory regulatory parameters.
            </li>
            <li>
              Attempting to reverse-engineer, alter, or extract the core machine learning
              configurations of the CyberTeck threat prediction engines.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white pt-4">
            3. Limitation of Liability and Indemnification
          </h2>
          <p>
            CyberTeck provides automated posture calculators and AI-grounded advisories
            as advisory security frameworks. While we strive to maximize the precision of
            our active threat engines, the final authorization of security remediations,
            IAM quarantines, and statutory CERT-In report submittals rests entirely with
            your CISO and operational teams. Under no circumstances will CyberTeck scale
            liability for consequential corporate data breaches or operational outages.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">
            4. Governing Jurisdiction and Disputes
          </h2>
          <p>
            These Terms, their interpretation, and any resulting disputes arising from
            platform usage are governed strictly by the laws of the Republic of India.
            Any litigation, arbitration, or regulatory filings must be filed exclusively
            within the competent courts of Mumbai, Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
}
