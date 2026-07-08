import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CyberTeck collects, uses, and protects your data.",
  alternates: { canonical: "/legal/privacy-policy" },
};

const SECTIONS = [
  { n: "1", title: "Information We Collect", body: "We collect information you provide directly, data generated through your use of the platform, and limited telemetry needed to operate and secure our services." },
  { n: "2", title: "How We Use Your Information", body: "We use your information to provide, maintain, and improve the platform, to communicate with you, and to meet our compliance and legal obligations." },
  { n: "3", title: "How We Share Your Information", body: "We do not sell your personal data. We share information only with your consent, with vetted subprocessors under contract, or where required by law." },
  { n: "5", title: "Data Retention", body: "We retain personal data only as long as necessary for the purposes described here or as required by applicable law, then delete or anonymize it." },
  { n: "6", title: "Your Data Protection Rights", body: "Depending on your jurisdiction, you may have rights to access, correct, export, or erase your personal data, and to object to or restrict certain processing." },
  { n: "7", title: "Data Security", body: "We protect data with encryption in transit and at rest, least-privilege access controls, continuous monitoring, and a mature vulnerability-disclosure process." },
  { n: "8", title: "International Data Transfers", body: "Where data is transferred across borders, we rely on appropriate safeguards consistent with applicable data-protection law." },
  { n: "11", title: "Changes to This Policy", body: "We may update this policy from time to time. Material changes will be communicated through the platform or by other notice." },
  { n: "12", title: "Contact Us", body: "Questions about this policy can be directed to privacy@cyberteck.in." },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="border-b border-border-subtle py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-text-secondary">
            Privacy. Our priority.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.n}>
                <h2 className="text-xl font-semibold text-text-primary">
                  <span className="mr-2 text-accent-blue-light">{section.n}.</span>
                  {section.title}
                </h2>
                <p className="mt-2 text-text-secondary">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-text-muted">
            This is a template privacy policy for the marketing site and should
            be reviewed by legal counsel before launch.
          </p>
        </div>
      </section>
    </main>
  );
}
