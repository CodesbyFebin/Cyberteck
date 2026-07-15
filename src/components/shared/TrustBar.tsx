/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Building2, Globe2, Landmark, Radio, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const partners = [
    { name: "State Bank of India (SBI)", icon: Landmark, tag: "BFSI Core Security" },
    { name: "Tata Consultancy Services (TCS)", icon: Building2, tag: "Strategic Integrator" },
    { name: "Tech Mahindra", icon: Building2, tag: "SecOps Operations" },
    { name: "Bharti Airtel", icon: Radio, tag: "Telco Threat Intel" },
    { name: "NPCI (Unified Payments)", icon: ShieldCheck, tag: "Transaction Audits" },
    { name: "Indian Space Research Org (ISRO)", icon: Globe2, tag: "National Defense" }
  ];

  return (
    <div className="w-full border-y border-slate-900 bg-slate-950/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Trusted by India's Leading Sovereign & Corporate Organizations
        </p>
        
        {/* Partners grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/80 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.15)] group"
              >
                <div className="mb-2 rounded-lg bg-slate-950 p-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-center text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {p.name.split(" ")[0]}
                </span>
                <span className="text-[9px] text-slate-500 mt-1 block tracking-tight font-mono uppercase">
                  {p.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
