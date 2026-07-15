import type { Config } from "tailwindcss";

// Cosmic Slate design system, ported from cyberteck.in.
// Colors use Tailwind's built-in slate/cyan/blue/indigo palettes.
// Fonts: Inter (sans) + JetBrains Mono (mono, for metrics/labels).
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34,211,238,0.45)",
        "glow-blue": "0 0 40px -8px rgba(59,130,246,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
