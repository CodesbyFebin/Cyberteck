import Link from "next/link";
import { Shield, Linkedin, Twitter, Youtube, Github } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_STRAPLINE, SITE_NAME } from "@/lib/site-data";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "GitHub", href: "https://github.com", icon: Github },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Security", href: "/legal/security" },
  { label: "Sitemap", href: "/sitemap" },
];

export function Footer() {
  // Dynamic year — resolves the "© 2024" vs "© 2026" mismatch found in
  // discovery (Round 1, §1.6).
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent-blue-light" aria-hidden="true" />
              <span className="font-display text-base font-bold text-text-primary">
                {SITE_NAME.toUpperCase()}
              </span>
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-text-muted">{FOOTER_STRAPLINE}</p>
            <ul className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle text-text-muted hover:border-accent-blue-light hover:text-accent-blue-light"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-3 text-sm font-semibold text-text-primary">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-text-secondary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 text-xs text-text-muted md:flex-row">
          <p>
            © {year} {SITE_NAME} Technologies Private Limited. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
