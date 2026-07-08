"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

type NewsletterProps = {
  layout?: "card" | "bar";
  heading?: string;
  description?: string;
};

/**
 * Single subscribe form used in two presentations:
 * - "card": vertical sidebar card (blog listing page)
 * - "bar": full-width horizontal band (bottom of blog listing, and
 *   potentially other content pages)
 */
export function Newsletter({
  layout = "card",
  heading = "Stay Updated",
  description = "Subscribe to our newsletter and get the latest insights delivered to your inbox.",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // TODO: wire to real newsletter/CRM endpoint (see design-system.md §2.1)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const isBar = layout === "bar";

  return (
    <div
      className={clsx(
        "glass-panel p-6",
        isBar && "flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left"
      )}
    >
      <div className={clsx("flex items-start gap-3", isBar && "md:items-center")}>
        <Mail className="h-5 w-5 shrink-0 text-accent-blue-light" aria-hidden="true" />
        <div>
          <p className="font-semibold text-text-primary">{heading}</p>
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={clsx("mt-4 flex gap-2", isBar ? "mt-0 w-full max-w-md" : "flex-col")}
      >
        <label htmlFor={`newsletter-email-${layout}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-email-${layout}`}
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-chip border border-border-subtle bg-bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2"
        />
        <Button
          type="submit"
          size="sm"
          disabled={status === "submitting"}
          className="whitespace-nowrap"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>
      </form>

      {status === "success" && (
        <p role="status" className="mt-2 text-sm text-accent-green">
          Subscribed. Check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-2 text-sm text-accent-red">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}
