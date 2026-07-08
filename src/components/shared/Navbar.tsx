"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_MENUS, SITE_NAME, SITE_TAGLINE } from "@/lib/site-data";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-accent-blue-light" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-text-primary">
              {SITE_NAME.toUpperCase()}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-text-muted">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        {/* Desktop mega-menu nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_MENUS.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-text-secondary hover:text-text-primary"
                aria-expanded={openMenu === menu.label}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
              >
                {menu.label}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              {openMenu === menu.label && (
                <div className="absolute left-0 top-full w-64 rounded-card border border-border-subtle bg-bg-surface p-2 shadow-glow">
                  <ul>
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-white/5 hover:text-text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs — fixed-width min so "Book Assessment" never wraps (Round 1 bug) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/request-demo" size="sm" className="min-w-[130px]">
            Request Demo
          </Button>
          <Button href="/book-assessment" variant="secondary" size="sm" className="min-w-[130px]">
            Book Assessment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-subtle px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_MENUS.map((menu) => (
              <li key={menu.label}>
                <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                  {menu.label}
                </p>
                <ul className="mb-2 flex flex-col gap-0.5">
                  {menu.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-white/5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button href="/request-demo">Request Demo</Button>
            <Button href="/book-assessment" variant="secondary">
              Book Assessment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
