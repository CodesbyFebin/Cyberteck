# CyberTeck.in - Enterprise Monorepo Structure
# Document: 04_MONOREPO_STRUCTURE.md

The monorepo architecture organizes our codebase to scale from a marketing website to a secure enterprise dashboard workspace, with shared types, custom rules, and modular packages.

```
/
├── apps/
│   ├── web/           # React + Vite full-stack workspace (This package)
│   ├── admin/         # Security administration workspace
│   ├── dashboard/     # CyberTeck OS core telemetry workspace
│   └── api/           # Express server gateway
├── packages/
│   ├── ui/            # Reusable core enterprise component library
│   ├── auth/          # RBAC & MFA token handling package
│   ├── database/      # Schema definition and cloud SQL migration
│   ├── security/      # OWASP filters, rate limiters, security headers
│   └── seo/           # SEO and structured metadata builders
```
