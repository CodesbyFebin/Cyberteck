import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the CyberTeck team for demos, partnerships, and support.",
  alternates: { canonical: "/company/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(59,130,246,0.16), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue-light">
            Contact Us
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Let's Talk Security.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Whether you're evaluating the platform or exploring a
            partnership, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-blue-light" aria-hidden="true" />
                support@cyberteck.in
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-blue-light" aria-hidden="true" />
                +91 1800 123 4567
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent-blue-light" aria-hidden="true" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/book-assessment">
                Book a Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <form
            className="rounded-card border border-border-subtle bg-bg-surface p-8"
            // Static marketing form — wire to your CRM/email handler.
            action="#"
            method="post"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border-subtle bg-bg-base px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-border-subtle bg-bg-base px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue-light"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-text-primary">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-border-subtle bg-bg-base px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue-light"
                  placeholder="Tell us about your security and compliance needs"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
