"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Support.tsx. The ticket submission
 * is handled client-side with a simulated reference number (no backend).
 */

import React, { useState } from "react";
import {
  HelpCircle,
  CheckCircle,
  Send,
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function Support() {
  const [ticketCategory, setTicketCategory] = useState("Vulnerability Management");
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketEmail, setTicketEmail] = useState("");
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Simulated status checks (last 30 days)
  const statusLogs = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    operational: i !== 14, // Simulate a minor maintenance gap on day 15
  }));

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketTitle.trim() || !ticketEmail.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      const ticketRef = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketRef);
      setSubmitting(false);
      setTicketTitle("");
      setTicketDesc("");
    }, 1000);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <HelpCircle className="h-4 w-4" />
            <span>CyberTeck Trust, Operations & Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            We're Here to Help. <br /> Every Step of the Way.
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Verify real-time system operational status, browse community links, or create
            high-priority support tickets below.
          </p>
        </div>

        {/* Uptime and Status Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Uptime stats */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-900 bg-slate-900/40 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                  System Operational
                </h2>
                <span className="inline-flex items-center space-x-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 text-xs text-emerald-400 font-bold uppercase font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>All Systems Operational</span>
                </span>
              </div>

              <div className="flex items-end justify-between font-mono">
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase">
                    Average Monthly Uptime
                  </span>
                  <span className="text-4xl font-bold text-cyan-400">99.98%</span>
                </div>
                <span className="text-xs text-slate-500">Last 30 Days Status Tracker</span>
              </div>

              {/* Status bar matrix */}
              <div className="grid grid-cols-10 gap-1.5 pt-4">
                {statusLogs.map((log) => (
                  <div
                    key={log.day}
                    className={`h-8 rounded ${
                      log.operational ? "bg-emerald-500/80" : "bg-amber-500/80"
                    }`}
                    title={
                      log.operational
                        ? `Day ${log.day}: 100% Operational`
                        : `Day ${log.day}: Scheduled Maintenance (99.2% Uptime)`
                    }
                  />
                ))}
              </div>
            </div>

            <p className="text-[10px] text-slate-500 font-mono mt-6 leading-relaxed">
              We guarantee 99.9% uptime on all active sovereign telemetry endpoints. Active
              nodes are continuously synchronized across both Mumbai-1 and Mumbai-2 server
              clusters.
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-900 bg-slate-900/40 p-6 space-y-6">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              Direct Assistance
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              For high-severity incident responses, contact our BKC operation desk
              immediately.
            </p>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase">
                    Emergency Hotline (24/7)
                  </span>
                  <span className="text-white font-bold">+91 (022) 4899-7200</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase">
                    Enterprise Support Desk
                  </span>
                  <span className="text-white font-bold">governance@cyberteck.in</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                <MessageSquare className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase">
                    Sovereign Slack Channel
                  </span>
                  <span className="text-white font-bold">cyberteck-in.slack.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Generation Form */}
        <div className="rounded-2xl border border-slate-900 bg-slate-900/60 p-6 sm:p-10 max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(6,182,212,0.05),transparent_40%)]"></div>

          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <ShieldCheck className="text-cyan-400 h-5 w-5" />
            <span>Submit Security Support Ticket</span>
          </h2>

          {submittedTicket ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">Ticket Submitted Successfully</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Your support reference number is <strong>{submittedTicket}</strong>. An
                incident coordinator will review your ticket and reply within 15 minutes.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
              >
                Submit Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-2">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    value={ticketEmail}
                    onChange={(e) => setTicketEmail(e.target.value)}
                    placeholder="e.g. ciso@yourbank.in"
                    className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-2">
                    Ticket Classification
                  </label>
                  <select
                    value={ticketCategory}
                    onChange={(e) => setTicketCategory(e.target.value)}
                    className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white"
                  >
                    <option value="Vulnerability Management">Vulnerability Management</option>
                    <option value="DPDP / Compliance Audits">DPDP / Compliance Audits</option>
                    <option value="Active Incident Containment">Active Incident Containment</option>
                    <option value="API Keys / Integrations">API Keys / Integrations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-2">Ticket Title</label>
                <input
                  type="text"
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  placeholder="e.g. Requesting automated DPDP consent log schema"
                  className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-2">
                  Description / Logs
                </label>
                <textarea
                  rows={4}
                  value={ticketDesc}
                  onChange={(e) => setTicketDesc(e.target.value)}
                  placeholder="Paste relevant security logs, console traces or regulatory directives here..."
                  className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none font-mono"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? "Submitting..." : "Submit Ticket"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
