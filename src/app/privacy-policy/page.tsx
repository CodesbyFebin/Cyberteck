/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/PrivacyPolicy.tsx.
 */

import React from "react";
import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & DPDP Alignment",
  description:
    "How CyberTeck protects, processes, and respects the privacy of enterprise partners in strict accordance with the Digital Personal Data Protection (DPDP) Act of 2023.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title */}
        <div className="border-b border-slate-900 pb-6">
          <div className="flex items-center space-x-2.5 text-cyan-400 mb-3">
            <Lock className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              Sovereign Data Protection Policies
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Privacy Policy & DPDP Alignment
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono uppercase">
            Last updated: May 6, 2026 | Compliant with India DPDP Act (2023)
          </p>
        </div>

        {/* Content body */}
        <div className="prose prose-invert prose-sm leading-relaxed text-slate-400 space-y-6 max-w-none">
          <p>
            At CyberTeck Technologies Private Limited ("CyberTeck", "we", "us",
            or "our"), data privacy, sovereignty, and trust are the cornerstones of
            our operational mission. This Privacy Policy details how we protect,
            process, and respect the privacy of our enterprise partners, CISOs, and
            operational stakeholders in strict accordance with the Digital Personal
            Data Protection (DPDP) Act of 2023.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">
            1. Collection and Safeguarding of Personal Data
          </h2>
          <p>
            In securing our corporate platform and administering CyberTeck OS consoles,
            we may collect the following classifications of processing data:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Enterprise Identity Credentials:</strong> Usernames, corporate
              email domains, single sign-on (SSO) indicators, and public encryption
              keys to authenticate analyst log sessions securely.
            </li>
            <li>
              <strong>Security Posture Telemetry Logs:</strong> Dynamic server IP
              addresses, unpatched network port counts, active attack signatures, and
              simulated vulnerability files which are processed solely to calculate
              corporate risk indices.
            </li>
            <li>
              <strong>Consent Management Data:</strong> Explicit logs recording the
              grant, modification, or revocation of consent details to fulfill Section
              6 and Section 8 provisions of the DPDP Act.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white pt-4">
            2. Processing Framework and Purpose
          </h2>
          <p>
            Sovereign personal data of Indian citizens is processed strictly based on
            the following statutory pillars:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Sovereign Consent:</strong> Data is handled purely based on
              explicit, clear, and revocable consent objects delivered during
              enterprise signup.
            </li>
            <li>
              <strong>Legitimate Uses:</strong> Information processing required for
              incident isolation, security forensic reporting, or fulfilling emergency
              directives from CERT-In.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white pt-4">
            3. Data Residency and Mumbai Sovereignty
          </h2>
          <p>
            In accordance with Indian regulatory mandates, all primary data storage,
            database backups, audit records, and security logs are hosted exclusively
            on highly secure AWS and GCP localized sovereign cloud infrastructure
            within the Mumbai, India geographic boundaries. We enforce absolute
            physical and digital data isolation from foreign access clusters.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">
            4. Right to Access, Correct, and Erase
          </h2>
          <p>
            Under Section 11 and Section 12 of the DPDP Act, stakeholders and data
            principals maintain absolute rights to access, correct, or request the
            irrevocable erasure of their collected personal data traces. To initiate
            these operations, please contact our local Data Protection Officer (DPO) at{" "}
            <strong>dpo@cyberteck.in</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
