/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Ported from cyberteck.in (Express) and adapted for the Next.js production app.
 * The Express-specific RBAC middleware (authSessionMiddleware / requireAuth /
 * authorizeRoles) was intentionally dropped because this workspace does not use
 * Express. The role model, auth-provider configuration, and a framework-agnostic
 * RBAC helper are preserved for use in Next.js Route Handlers / Server Actions.
 */

// Define the core roles allowed in CyberTeck OS RBAC
export type UserRole =
  | "Admin"
  | "Organization Admin"
  | "Security Engineer"
  | "Compliance Officer"
  | "Auditor"
  | "Viewer";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationId: string;
  avatarUrl?: string;
}

export interface AuthSession {
  user: AuthUser;
  expires: string;
}

// -------------------------------------------------------------
// AUTH PROVIDER CONFIGURATION (framework-agnostic descriptor)
// -------------------------------------------------------------
export const authConfig = {
  providers: [
    {
      id: "google",
      name: "Google",
      type: "oauth",
      authorization:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      token: "https://oauth2.googleapis.com/token",
      userinfo: "https://openidconnect.googleapis.com/v1/userinfo",
      clientId: process.env.AUTH_GOOGLE_ID || "GOOGLE_CLIENT_ID_PLACEHOLDER",
      clientSecret:
        process.env.AUTH_GOOGLE_SECRET || "GOOGLE_CLIENT_SECRET_PLACEHOLDER",
    },
    {
      id: "github",
      name: "GitHub",
      type: "oauth",
      authorization: "https://github.com/login/oauth/authorize",
      token: "https://github.com/login/oauth/access_token",
      userinfo: "https://api.github.com/user",
      clientId: process.env.AUTH_GITHUB_ID || "GITHUB_CLIENT_ID_PLACEHOLDER",
      clientSecret:
        process.env.AUTH_GITHUB_SECRET || "GITHUB_CLIENT_SECRET_PLACEHOLDER",
    },
    {
      id: "azure-ad",
      name: "Azure AD (Microsoft)",
      type: "oauth",
      authorization:
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      token: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      userinfo: "https://graph.microsoft.com/oidc/userinfo",
      clientId: process.env.AUTH_AZURE_AD_ID || "AZURE_AD_CLIENT_ID_PLACEHOLDER",
      clientSecret:
        process.env.AUTH_AZURE_AD_SECRET || "AZURE_AD_CLIENT_SECRET_PLACEHOLDER",
    },
    {
      id: "credentials",
      name: "Corporate Single Sign-On",
      type: "credentials",
      credentials: {
        email: {
          label: "Corporate Email",
          type: "email",
          placeholder: "ciso@cyberteck.in",
        },
        password: { label: "Password", type: "password" },
      },
    },
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 Days
    updateAge: 24 * 60 * 60, // Update session once per day
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
};

// -------------------------------------------------------------
// FRAMEWORK-AGNOSTIC RBAC HELPERS
// -------------------------------------------------------------

/**
 * High-fidelity local tenant session used for the developer cockpit until a
 * real auth provider is wired up.
 */
export function getMockSession(): AuthSession {
  return {
    user: {
      id: "usr-0921",
      email: "ciso@cyberteck.in",
      name: "Sovereign CISO",
      role: "Admin",
      organizationId: "org-bkc-1",
    },
    expires: new Date(Date.now() + 24 * 3600000).toISOString(),
  };
}

/**
 * Returns true if the given session holds one of the allowed roles.
 */
export function hasRole(
  session: AuthSession | null | undefined,
  ...allowedRoles: UserRole[]
): boolean {
  if (!session?.user) return false;
  return allowedRoles.includes(session.user.role);
}
