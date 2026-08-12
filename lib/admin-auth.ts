const AUTH_KEY = "pendos-treats-admin-auth";

// NOTE: This is a DEMO, frontend-only "authentication". It is NOT secure.
// Real credentials must be handled on a server (e.g. Supabase, Firebase,
// Clerk) using a server-side secret. No secrets belong in client code.
const DEMO_EMAIL =
  process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@pendos.com";
const DEMO_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "demo1234";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    return window.sessionStorage.getItem(AUTH_KEY) === "true";
  } catch {
    return false;
  }
}

export function authenticate(email: string, password: string): boolean {
  const ok = email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
  if (ok) {
    try {
      window.sessionStorage.setItem(AUTH_KEY, "true");
    } catch {
      // ignore
    }
  }
  return ok;
}

export function logout(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.sessionStorage.removeItem(AUTH_KEY);
  } catch {
    // ignore
  }
}