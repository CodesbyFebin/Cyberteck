/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Server } from "lucide-react";

export const SystemHealthWidget: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <Server className="h-4 w-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Sovereign System Health</h3>
          </div>
          <span className="text-[10px] text-emerald-500 font-mono font-bold">● ONLINE</span>
        </div>

        <div className="space-y-3 font-mono text-[10px]">
          <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded border border-slate-900">
            <span className="text-slate-500">Node Cluster</span>
            <span className="text-white font-bold">BKC-1 Datacenter (Mumbai)</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-950 p-2 rounded border border-slate-900">
              <span className="text-slate-500 block">CPU load</span>
              <span className="text-xs font-bold text-white">12.4%</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-900">
              <span className="text-slate-500 block">Memory</span>
              <span className="text-xs font-bold text-white">4.2 / 16 GB</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded border border-slate-900">
            <span className="text-slate-500">Sync Latency</span>
            <span className="text-emerald-400 font-bold">14 ms (Sovereign Cloud)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
