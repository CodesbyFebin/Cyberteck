"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, RefreshCw, PlusCircle, ShieldAlert } from "lucide-react";

interface QuickActionsWidgetProps {
  onTriggerAlert: () => void;
  onSyncTelemetry: () => void;
  syncing: boolean;
  onAuditingCheck: () => void;
}

export const QuickActionsWidget: React.FC<QuickActionsWidgetProps> = ({
  onTriggerAlert,
  onSyncTelemetry,
  syncing,
  onAuditingCheck
}) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <Play className="h-4 w-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Sovereign Quick Actions</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onTriggerAlert}
            className="flex flex-col items-center justify-center p-3 rounded-lg border border-rose-500/20 bg-rose-950/10 hover:bg-rose-950/20 text-rose-400 transition-colors gap-1.5 text-center"
          >
            <PlusCircle className="h-5 w-5 shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Trigger Alert</span>
          </button>

          <button
            onClick={onSyncTelemetry}
            disabled={syncing}
            className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-300 disabled:opacity-50 transition-colors gap-1.5 text-center"
          >
            <RefreshCw className={`h-5 w-5 shrink-0 ${syncing ? "animate-spin" : ""}`} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Sync Feed</span>
          </button>

          <button
            onClick={onAuditingCheck}
            className="flex flex-col items-center justify-center p-3 rounded-lg border border-cyan-500/20 bg-cyan-950/10 hover:bg-cyan-950/20 text-cyan-400 transition-colors gap-1.5 text-center col-span-2"
          >
            <ShieldAlert className="h-5 w-5 shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Run Posture Scan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
