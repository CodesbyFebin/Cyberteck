# DESIGN_SYSTEM.md — CyberTeck OS Visual Design System

This design system establishes the visual identity, tokens, interactive states, layouts, and accessibility standards for **CyberTeck OS**. It guides engineering teams in implementing a premium, high-fidelity, and cohesive enterprise-grade workspace.

---

## 1. VISUAL THEME & COLOR SYSTEM

Our primary theme, **Cosmic Midnight**, is optimized for prolonged professional use by SecOps teams, SOC analysts, and compliance coordinators. It maintains high contrast, reduces eye strain, and focuses visual attention on priority alerts.

### A. Core Color Tokens

| Token Name | Tailwind Hex Code | Usage Scenario |
| :--- | :--- | :--- |
| **Primary Background** | `bg-slate-950` (`#020617`) | Universal canvas backdrop. Absolute dark. |
| **Surface Level 1 (Default Card)**| `bg-slate-900` (`#0f172a`) | Primary content cards, control panels, tables. |
| **Surface Level 2 (Inner Card)**  | `bg-slate-950` (`#020617`) | Forms inputs, inner grids, monospaced logs. |
| **Primary Accent (Cyan)** | `text-cyan-400` (`#22d3ee`) | Primary highlights, links, operational active state. |
| **Secondary Accent (Indigo)** | `text-indigo-500` (`#6366f1`)| Supporting graphics, interactive button states. |
| **Text Primary (White)** | `text-white` (`#ffffff`) | Page headers, main values, highlighted labels. |
| **Text Secondary (Slate Muted)** | `text-slate-400` (`#94a3b8`)| Body copy, supporting instructions, metadata. |

### B. Dynamic Status Indicator Colors
*   **Critical Severity Alert:** Electric Crimson/Rose (`#f43f5e`, `text-rose-500`). Used for unresolved vulnerabilities and active SQLi probes.
*   **High Severity Alert:** Bright Amber/Orange (`#f59e0b`, `text-amber-500`). Used for unpatched middle-tier API gates and DDoS warnings.
*   **Compliant & Operational:** Neon Emerald (`#10b981`, `text-emerald-500`). Used for isolated threats and compliant regulatory audits.

---

## 2. TYPOGRAPHY & SPACING SYSTEMS

### A. Font Families & Roles
1.  **Primary Interface Font:** **Inter** (sans-serif). Imported directly via Google Fonts in `src/index.css`.
    *   *Headings:* Semi-Bold (`font-semibold`, 600) or Bold (`font-bold`, 700) paired with tight tracking (`tracking-tight`) to project authority.
    *   *Body & Forms:* Regular (`font-regular`, 400) or Medium (`font-medium`, 500) for clean legibility.
2.  **Telemetry & Data Font:** **JetBrains Mono** (monospace). Applied to audit logs, IP addresses, timestamp counters, and code blocks.

### B. Spacing Scale (Tailwind Built-In)
We utilize a highly structured, non-robotic spacing layout to establish rhythm and clear hierarchy.
*   *Component Padding:* `p-4` (16px) or `p-5` (20px) for standard widget cards.
*   *Form Spacing:* `space-y-4` (16px) or `space-y-6` (24px) to separate inputs logically.
*   *Page Margins:* Fluid, adaptive horizontal spacing: `px-4 sm:px-6 lg:px-8` combined with maximum width containers: `max-w-7xl mx-auto`.

---

## 3. INTERACTIVE COMPONENT STYLING

### A. Form Controls
*   **Text Inputs & Selects:**
    *   *Default State:* `w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-500 transition-all duration-300`
    *   *Focus State:* `focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500`
*   **Button Actions:**
    *   *Primary Button (Gradient):* `rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-lg shadow-cyan-500/10`
    *   *Secondary Button (Outline):* `rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors`
    *   *Critical Incident Button:* `rounded-xl bg-rose-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-colors shadow-lg shadow-rose-600/15`

### B. Tables & Data Ledgers
*   **Audit Log Tables:**
    *   *Header Row:* Semi-transparent border-b (`border-slate-800`), monospaced labels (`font-mono text-[10px] text-slate-500 uppercase tracking-wider`).
    *   *Rows:* Subtle padding (`py-3`), hover row highlights (`hover:bg-slate-900/30`), alternating borders to maintain structure.

### C. Visual Elevation & Borders
*   *Border Radius:* Large, modern curved edges: `rounded-xl` (12px) for inner widgets; `rounded-2xl` (16px) for larger layout cards and dialog blocks.
*   *Neon Elevation (Glows):* Uses subtle box shadows instead of harsh standard gradients:
    *   *Default Card Shadow:* `shadow-[0_4px_30px_rgba(0,0,0,0.5)]`
    *   *Active Incident Glow:* `shadow-[0_0_15px_rgba(244,63,94,0.05)]`
    *   *AI Copilot Glow:* `shadow-[0_0_30px_-5px_rgba(6,182,212,0.1)]`

---

## 4. CHARTS, EMPTY, & LOADING STATES

### A. Charts & Progress Rings
*   All data visualizations use clean, flat SVG paths with explicit high-contrast strokes.
*   Avoid cluttered gridlines. Chart tracks should fade into the slate canvas (`text-slate-800` or `border-slate-900`).
*   Progress rings must transition smoothly when underlying scores update.

### B. Empty & Pending States
*   **Empty Feeds (e.g., No Active Threats):** Centered layout: `text-center p-12 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-500 text-sm`. Includes a simple illustrative icon (such as a Shield or Checkmark) styled with muted opacity.
*   **Loading Indicators:** Pulsing rings or spinning loaders styled in brand colors: `<RefreshCw className="h-6 w-6 animate-spin text-cyan-400 mx-auto" />`. Includes supporting text styled in `font-mono text-[10px] text-slate-500`.

---

## 5. MOTION, ACCESSIBILITY, & PREMIUM RIGOR

### A. Motion & Interaction Design
*   We utilize `motion/react` for elegant, non-intrusive layout transitions.
*   *Page Transitions:* Simple, eye-safe fade-ins (`opacity` from `0` to `1`) accompanied by a subtle vertical lift (`y` from `10` to `0` pixels) with `duration: 0.4` seconds.
*   *Click Feedback:* Subtle scale downs on button click (`whileTap={{ scale: 0.98 }}`) to mimic native system hardware buttons.

### B. Accessibility Standards (WCAG 2.1 AA Aligned)
*   **Contrast Ratios:** All body text maintains a minimum contrast ratio of `4.5:1` against the solid slate background. Important headers exceed `7:1`.
*   **Touch Targets:** Interactive buttons, input fields, and compliance state selectors provide a minimum touch target height of `44px` on mobile, preventing fat-finger errors during fast assessments.
*   **Screen Reader Friendly:** Meaningful HTML elements feature explicit descriptions and logical hierarchy (e.g., proper nested H1, H2, and H3 layout tags).
