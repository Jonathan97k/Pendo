"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import AdminLogin from "./AdminLogin";
import AdminSidebar from "../AdminSidebar";
import { isAuthenticated } from "@/lib/admin-auth";

export default function AdminGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  if (authed === null) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-burgundy-600" aria-hidden="true" />
        <span className="sr-only">Loading admin area</span>
      </div>
    );
  }

  if (!authed) {
    return <AdminLogin />;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      <AdminSidebar />
      <div className="min-w-0">{children}</div>
    </div>
  );
}