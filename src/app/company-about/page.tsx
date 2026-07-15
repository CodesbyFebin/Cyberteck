/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Company.tsx.
 */

import React from "react";
import type { Metadata } from "next";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Company — Securing India's Digital Core",
  description:
    "CyberTeck is on a mission to build a highly secure, automated, and compliant digital world, fusing AI-native intelligence with deep sovereign compliance models.",
};

// lucide-react v1.x dropped brand icons, so we ship the LinkedIn mark inline.
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Company() {
  const stats = [
    { label: "Founded", value: "2015" },
    { label: "Enterprise Customers", value: "500+" },
    { label: "Countries Served", value: "20+" },
    { label: "Threat Interception Rate", value: "99.8%" },
    { label: "Events Analyzed Daily", value: "2.4B+" },
    { label: "Sovereign Operations", value: "24/7" },
  ];

  const values = [
    { title: "Customer First", desc: "We start with our customers and work backwards, ensuring their success is our absolute victory." },
    { title: "Innovate Relentlessly", desc: "We embrace complexity and continuous technical training to solve advanced enterprise threats." },
    { title: "Act with Integrity", desc: "Transparency, sovereign alignment, and the highest ethical and corporate benchmarks." },
    { title: "Stronger Together", desc: "We support cognitive diversity, respect, and cross-functional engineering excellence." },
    { title: "Secure the Future", desc: "We are committed to building a safer, compliant sovereign digital infrastructure." },
  ];

  const timeline = [
    { year: "2015", event: "CyberTeck founded with a vision to revolutionize enterprise cybersecurity." },
    { year: "2017", event: "Launched our proprietary AI-powered security threat intelligence engine." },
    { year: "2019", event: "Expanded globally and reached 100+ large financial clients." },
    { year: "2021", event: "Introduced integrated Sovereign Compliance OS for Indian regulations." },
    { year: "2023", event: "Reached milestone of 500+ enterprises and secured ISRO / sovereign integration." },
    { year: "2024", event: "Enacted real-time data compliance pipelines for India's DPDP Act." },
    { year: "2026", event: "CyberTeck OS deployed as the unified workspace for multiple banks and government nodes." },
  ];

  const leaders = [
    { name: "Vikram S.", role: "Chief Executive Officer", desc: "Ex-CISO at top global bank. 20+ years cyber operations experience.", linkedin: "#" },
    { name: "Anita R.", role: "Chief Product Officer", desc: "Data protection pioneer. Leading CyberTeck OS architecture.", linkedin: "#" },
    { name: "Rohit M.", role: "Chief Technology Officer", desc: "AI researcher & cryptography scholar. Designed predictive threat engines.", linkedin: "#" },
    { name: "Neha P.", role: "Chief Revenue Officer", desc: "Enterprise growth commander. Directing sovereign client alignment.", linkedin: "#" },
    { name: "Arjun K.", role: "Chief Customer Officer", desc: "SecOps support lead. Coordinates BKC support & IR operational command.", linkedin: "#" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Hero Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Users className="h-4 w-4" />
            <span>Securing India's Digital Core</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Built on <span className="text-cyan-400">Trust</span>. <br className="sm:hidden" />
            Driven by <span className="text-blue-500">Innovation</span>. <br />
            Securing What Matters.
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            CyberTeck is on a mission to build a highly secure, automated, and compliant
            digital world. We fuse advanced AI-native intelligence with deep sovereign
            compliance models.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 border-y border-slate-900 py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-mono font-bold text-cyan-400">{s.value}</div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block mt-2 tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Our Core Pillars
            </h2>
            <h3 className="text-2xl font-bold">The Standards Guiding Our Operations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="rounded-xl border border-slate-900 bg-slate-900/30 p-5 hover:border-slate-800 transition-colors"
              >
                <span className="text-xs font-mono text-cyan-500 font-bold">0{idx + 1}</span>
                <h4 className="font-bold text-white text-sm mt-2 mb-2">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Timeline Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Our Chronicle
            </h2>
            <h3 className="text-2xl font-bold">
              A Decade of Sovereign Cybersecurity Milestones
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Founded as a secure data protection startup, CyberTeck has scaled to anchor
              cybersecurity architectures across major national infrastructure nodes,
              critical financial gateways, and central databases.
            </p>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0 space-y-4">
            <div className="relative border-l-2 border-slate-900 pl-6 ml-2 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative group">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors"></div>
                  <span className="text-xs font-mono font-bold text-cyan-400">{item.year}</span>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Leadership Team
            </h2>
            <h3 className="text-2xl font-bold">Driven by Cybersecurity Specialists</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-xl border border-slate-900 bg-slate-900/60 p-5 hover:border-slate-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs text-cyan-400 font-bold uppercase font-mono">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <a
                      href={leader.linkedin}
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                  <h4 className="font-bold text-white text-sm">{leader.name}</h4>
                  <span className="text-[10px] text-cyan-400 block mt-0.5 font-mono uppercase tracking-tight">
                    {leader.role}
                  </span>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-8 flex flex-col items-center justify-center text-center space-y-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            industry validation & awards
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-40">
            <span className="text-sm font-bold tracking-wider font-mono uppercase">
              Gartner Cool Vendor
            </span>
            <span className="text-sm font-bold tracking-wider font-mono uppercase">
              Forrester Wave
            </span>
            <span className="text-sm font-bold tracking-wider font-mono uppercase">
              G2 Enterprise Leader
            </span>
            <span className="text-sm font-bold tracking-wider font-mono uppercase">
              Capterra Rated 4.9
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
