import type { Config } from "tailwindcss";

// Design tokens sourced from cyberteck-design-system.md (Round 3).
// Keep this file as the single source of truth for color/type/spacing —
// components should never hardcode hex values.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#05070f",
          surface: "#0f1424",
          elevated: "#131a2e",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
        },
        accent: {
          blue: "#3b82f6",
          "blue-light": "#60a5fa",
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          "violet-light": "#a855f7",
          green: "#22c55e",
          red: "#ef4444",
          amber: "#f59e0b",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)",
        "gradient-primary-vert": "linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(59,130,246,0.45)",
        "glow-violet": "0 0 40px -8px rgba(139,92,246,0.45)",
      },
      borderRadius: {
        card: "16px",
        chip: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
