# CyberTeck.in - Design System Specification
# Document: 06_DESIGN_SYSTEM.md

## 1. Visual Theme (Cosmic Midnight)
- **Primary Background:** Solid deep blue-grey-black (`bg-[#020617]` or `bg-[#030712]`).
- **Surface Level 1:** Deep space indigo (`bg-[#0B1528]` or `bg-[#0F172A]`).
- **Surface Level 2:** Charcoal carbon (`bg-[#1E293B]`).
- **Primary Accent:** Cybernetic neon cyan (`text-[#06B6D4]`, `#38BDF8`).
- **Secondary Accent:** Electric royal blue-violet (`text-[#3B82F6]`, `#6366F1`).
- **Status Colors:**
  - Critical/High alert: Electric crimson-red (`text-[#F43F5E]`, `text-rose-500`).
  - Warning alert: Bright amber (`text-[#F59E0B]`, `text-amber-500`).
  - Compliant/Safe: Neon emerald (`text-[#10B981]`, `text-emerald-500`).

## 2. Typography Pairings
- **Display Typography (Headings):** "Inter" (sans-serif) or "Space Grotesk" for strong, clean, modern tracking.
- **Body & Controls:** "Inter" at varying weights (400 for text, 500/600 for labels).
- **Data & Telemetry:** "JetBrains Mono" or "SF Mono" for logs, scores, metrics, and risk charts.

## 3. Shadows & Glows (Neon Elevation)
- **Card Glows:** `shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]`
- **Button Hover Glows:** `hover:shadow-[0_0_25px_0_rgba(59,130,246,0.4)]`
- **Status Glows:** Pulsing indicators for active threats.

## 4. Animation Guidelines
- **Route Transitions:** Staggered fade-ins and subtle slide-ups using `motion` animations.
- **Hover Transitions:** Smooth transitions (`transition-all duration-300 ease-in-out`).
- **Pulse:** Ambient animations for threat maps and vulnerability beacons.
