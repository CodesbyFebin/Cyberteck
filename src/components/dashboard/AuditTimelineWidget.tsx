/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Terminal } from "lucide-react";
import { AuditLog } from "../../lib/dashboard-types";

interface AuditTimelineWidgetProps {
  logs: AuditLog[];
}

export const AuditTimelineWidget: React.FC<AuditTimelineWidgetProps> = ({ logs }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Central Audit Ledger</h3>
          </div>
          <span className="text-[9px] font-mono text-slate-500 uppercase">Immutable</span>
        </div>

        <div className="rounded bg-slate-950 p-3 font-mono text-[10px] space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
          {logs.slice(0, 5).map((log) => (
            <div key={log.id} className="border-b border-slate-900 pb-2 last:border-none last:pb-0 flex flex-col gap-1">
              <div className="flex items-center justify-between text-slate-500">
                <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                <span className={`px-1 rounded text-[8px] font-bold ${
                  log.status === "success" ? "bg-emerald-950/50 text-emerald-400" : "bg-rose-950/50 text-rose-400"
                }`}>
                  {log.status.toUpperCase()}
                </span>
              </div>
              <p className="text-white font-medium">{log.action}</p>
              <div className="text-[9px] text-slate-500 flex justify-between">
                <span>Actor: {log.user}</span>
                <span>ID: {log.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
