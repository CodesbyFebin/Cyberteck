import type { Metadata } from "next";
import DashboardConsole from "@/components/dashboard/DashboardConsole";

export const metadata: Metadata = {
  title: "Enterprise SOC Dashboard Cockpit | CyberTeck OS Console",
  description:
    "Access your centralized CyberTeck OS console. Real-time sovereign risk scoring, active threat isolation feeds, and automatic DPDP regulatory audits.",
  keywords: [
    "Enterprise Dashboard",
    "SOC Telemetry",
    "Active Threat Isolation",
    "Sovereign Risk Score",
    "DPDP Audit Logs",
  ],
};

export default function DashboardPage() {
  return <DashboardConsole />;
}
