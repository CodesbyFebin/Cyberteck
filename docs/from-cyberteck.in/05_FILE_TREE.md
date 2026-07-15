# CyberTeck.in - Detailed Source File Tree
# Document: 05_FILE_TREE.md

Our full-stack React + Express Vite application has the following source layout:

```
/
├── server.ts                 # Express full-stack entry point
├── package.json              # Full-stack dependencies & scripts
├── vite.config.ts            # Vite asset & dev routing configuration
├── index.html                # Main SPA mount point
├── src/
│   ├── main.tsx              # React mounting root
│   ├── App.tsx               # Primary Router & Shell
│   ├── index.css             # Tailwind CSS & global animations
│   ├── types.ts              # Shared typescript interfaces (threats, logs, compliance)
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive Mega-menu navigation header
│   │   ├── Footer.tsx        # Comprehensive enterprise legal/nav footer
│   │   ├── TrustBar.tsx      # Leading Indian organizations slider
│   │   └── ui/               # Lower level re-usable components (buttons, badges, cards)
│   ├── pages/
│   │   ├── Home.tsx          # High-fidelity Home page
│   │   ├── Dashboard.tsx     # CyberTeck OS Console (Risk, SOC, AI Copilot)
│   │   ├── Solutions.tsx     # Security pillars and products
│   │   ├── Compliance.tsx    # Indian standards matrix (DPDP, CERT-In)
│   │   ├── Resources.tsx     # Resource Hub (Whitepapers, Guides, Blogs)
│   │   ├── BookAssessment.tsx# Interactive Posture Evaluator with Gemini feedback
│   │   ├── Company.tsx       # About/Team page
│   │   ├── PrivacyPolicy.tsx # Complete legal policy
│   │   ├── TermsOfUse.tsx    # Complete service terms
│   │   ├── Sitemap.tsx       # Standard sitemap page
│   │   └── Support.tsx       # Customer support, status & ticketing
```
