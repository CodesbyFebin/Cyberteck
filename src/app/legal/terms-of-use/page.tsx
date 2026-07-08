import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your access to and use of CyberTeck's website, products, and services.",
  alternates: { canonical: "/legal/terms-of-use" },
};

const SECTIONS = [
  { n: "1", title: "Acceptance of Terms", body: "These Terms of Use govern your access to and use of the CyberTeck website, products, and services. By accessing or using our services, you agree to these terms." },
  { n: "3", title: "User Accounts", body: "You are responsible for safeguarding your account credentials and for activity that occurs under your account." },
  { n: "4", title: "Acceptable Use", body: "You agree not to misuse the services, attempt to circumvent security controls, or use the platform for unlawful purposes." },
  { n: "5", title: "Intellectual Property", body: "All content, trademarks, and software are the property of CyberTeck or its licensors and are protected by applicable law." },
  { n: "6", title: "Third-Party Services", body: "The services may integrate with third-party products; their terms, not ours, govern your use of those products." },
  { n: "9", title: "Limitation of Liability", body: "To the maximum extent permitted by law, CyberTeck is not liable for indirect, incidental, or consequential damages arising from your use of the services." },
  { n: "10", title: "Indemnification", body: "You agree to indemnify CyberTeck against claims arising from your misuse of the services or violation of these terms." },
  { n: "11", title: "Termination", body: "We may suspend or terminate access for material violations of these terms, with notice where practicable." },
  { n: "12", title: "Governing Law", body: "These terms are governed by the laws of India, and disputes are subject to the exclusive jurisdiction of the courts of Mumbai." },
  { n: "13", title: "Changes to These Terms", body: "We may update these terms periodically. Continued use after changes constitutes acceptance of the revised terms." },
  { n: "14", title: "Contact Us", body: "Questions about these terms can be directed to legal@cyberteck.in." },
];

export default function TermsOfUsePage() {
  return (
    <main>
      <section className="border-b border-border-subtle py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
            Terms of Use
          </h1>
          <p className="mt-3 text-lg text-text-secondary">
            Trusted partnership.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.n}>
                <h2 className="text-xl font-semibold text-text-primary">
                  <span className="mr-2 text-accent-violet">{section.n}.</span>
                  {section.title}
                </h2>
                <p className="mt-2 text-text-secondary">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-text-muted">
            This is a template terms-of-use page for the marketing site and
            should be reviewed by legal counsel before launch.
          </p>
        </div>
      </section>
    </main>
  );
}
