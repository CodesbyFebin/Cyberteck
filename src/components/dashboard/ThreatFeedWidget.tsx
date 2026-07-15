"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { ThreatAlert } from "../../lib/dashboard-types";

interface ThreatFeedWidgetProps {
  threats: ThreatAlert[];
  onMitigate: (id: string) => void;
}

export const ThreatFeedWidget: React.FC<ThreatFeedWidgetProps> = ({ threats, onMitigate }) => {
  const activeThreats = threats.filter(t => t.status !== "mitigated");
  
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-rose-500" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Sovereign SOC Threat Feed</h3>
          </div>
          <span className="rounded-full bg-rose-950/40 border border-rose-500/20 px-2.5 py-0.5 text-[9px] font-mono font-bold text-rose-400">
            {activeThreats.length} Active
          </span>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
          {threats.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs font-mono">
              No active security incidents detected.
            </div>
          ) : (
            threats.slice(0, 4).map((t) => (
              <div 
                key={t.id} 
                className={`rounded-lg border p-4 bg-slate-950 transition-all ${
                  t.status === "mitigated" 
                    ? "border-slate-850 opacity-50" 
                    : t.severity === "critical"
                    ? "border-rose-500/30 bg-rose-950/5 shadow-[0_0_10px_rgba(244,63,94,0.03)]"
                    : "border-amber-500/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.25 rounded ${
                        t.severity === "critical" 
                          ? "bg-rose-950 text-rose-400" 
                          : t.severity === "high"
                          ? "bg-amber-950 text-amber-400"
                          : "bg-slate-800 text-slate-400"
                      }`}>
                        {t.severity}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{t.id}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {new Date(t.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-white text-xs pt-1">{t.vector}</h4>
                    <p className="text-[10px] text-slate-500 font-mono">Source IP: {t.sourceIp}</p>
                  </div>

                  <div>
                    {t.status === "mitigated" ? (
                      <span className="inline-flex items-center space-x-1 rounded bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 text-[9px] text-emerald-400 font-bold uppercase font-mono">
                        <CheckCircle className="h-3 w-3" />
                        <span>Isolated</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => onMitigate(t.id)}
                        className="rounded bg-rose-600 hover:bg-rose-500 text-white px-2.5 py-1 text-[10px] font-bold uppercase transition-colors"
                      >
                        Mitigate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
