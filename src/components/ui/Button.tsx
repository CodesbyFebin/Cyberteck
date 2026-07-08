import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "sm";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
};

type ButtonProps = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-chip font-semibold transition-all duration-150 focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-glow hover:brightness-110 hover:shadow-glow-violet",
  secondary:
    "bg-transparent text-text-primary border border-border-subtle hover:border-accent-blue-light hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

/**
 * Shared CTA button. Renders a Next.js <Link> when `href` is provided
 * (marketing CTAs), otherwise a native <button> (form submits, etc.).
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
