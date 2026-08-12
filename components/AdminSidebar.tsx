"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import { classNames } from "@/lib/utils";
import { logout } from "@/lib/admin-auth";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const items = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
  ];

  function handleLogout() {
    logout();
    router.refresh();
  }

  return (
    <aside className="w-full shrink-0 lg:w-60">
      <nav
        className="flex flex-row gap-2 overflow-x-auto lg:flex-col"
        aria-label="Admin navigation"
      >
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-burgundy-600 text-white"
                  : "text-charcoal-900/70 hover:bg-charcoal-900/5",
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium text-charcoal-900/50 transition-colors hover:bg-charcoal-900/5"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to site
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-left text-sm font-medium text-charcoal-900/50 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Log out
        </button>
      </nav>
    </aside>
  );
}