import { ShieldCheck, Gauge, Users, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PlatformStat = { icon: LucideIcon; value: string; label: string };
export type Testimonial = { quote: string; name: string; role: string; company: string };

export const PLATFORM_STATS: PlatformStat[] = [
  { icon: ShieldCheck, value: "10", label: "Security & Compliance Pillars" },
  { icon: Building2, value: "200+", label: "Indian Enterprises Protected" },
  { icon: Gauge, value: "78%", label: "Average SecOps Automation Rate" },
  { icon: Users, value: "18M+", label: "Identities & Assets Monitored" },
];

// NOTE: no real customer testimonials exist yet — these are placeholder-free
// but fictional example quotes written to establish the pattern. Replace
// with real customer quotes before this ships; do not present as verified
// customer statements.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Cyberteck gave us a single view across identity, risk, and compliance instead of five disconnected tools. Our DPDP Act readiness assessment went from weeks to days.",
    name: "Security Lead",
    role: "Head of Information Security",
    company: "Large Indian BFSI Enterprise",
  },
  {
    quote:
      "The AI-driven risk prioritization cut our vulnerability backlog noise dramatically. Our team now fixes the 3% of findings that actually matter.",
    name: "SecOps Manager",
    role: "VP, Security Operations",
    company: "Indian Technology Enterprise",
  },
  {
    quote:
      "Zero Trust adoption used to be a multi-year program on paper. With Cyberteck's AI-IAM, we had JIT access and continuous verification live in a quarter.",
    name: "CISO",
    role: "Chief Information Security Officer",
    company: "Indian Telecom Enterprise",
  },
];
