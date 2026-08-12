"use client";

import { useEffect, useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { isAuthenticated, authenticate } from "@/lib/admin-auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [onSuccess, setOnSuccess] = useState<(() => void) | null>(null);

  useEffect(() => {
    setOnSuccess(() => () => window.location.reload());
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = authenticate(email, password);
    if (!ok) {
      setError("Invalid email or password.");
      return;
    }
    setError(null);
    onSuccess?.();
  }

  return (
    <div className="card mx-auto max-w-md p-8">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy-50 text-burgundy-600">
        <Lock className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-center font-display text-2xl font-bold text-charcoal-900">
        Admin Sign In
      </h2>
      <p className="mt-2 text-center text-sm text-charcoal-900/60">
        Demo login. Real authentication will be added with a backend service.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="admin-email" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Email
          </label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@pendos.com"
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          />
        </div>
        <div>
          <label htmlFor="admin-password" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="demo1234"
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          />
        </div>
        {error ? (
          <p className="text-sm font-medium text-burgundy-700" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" className="btn-primary w-full">
          Sign In
        </button>
      </form>
    </div>
  );
}