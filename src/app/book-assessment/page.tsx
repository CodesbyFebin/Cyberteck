import type { Metadata } from "next";
import BookAssessmentWizard from "@/components/assessment/BookAssessmentWizard";

export const metadata: Metadata = {
  title: "CISO Posture Evaluator & Risk Score | CyberTeck OS",
  description:
    "Generate an instant, authoritative cyber posture report mapped to India DPDP Act and CERT-In. Evaluate active security gaps and get AI guidance.",
  keywords: [
    "Risk Assessment",
    "CISO Risk Score",
    "Security Posture",
    "Vulnerability Triage",
    "DPDP Assessment",
  ],
};

export default function BookAssessmentPage() {
  return <BookAssessmentWizard />;
}
