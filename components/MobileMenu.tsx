"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import Logo from "./Logo";
import { classNames } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" id="mobile-menu">
   <div
     className="absolute inset-0 bg-charcoal-900 animate-fade-in"
     onClick={onClose}
     aria-hidden="true"
   />
  <div
    ref={panelRef}
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation"
    className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-cream-50 shadow-2xl animate-fade-in border-l-4 border-burgundy-600"
  >
        <div className="flex h-16 items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal-900 transition-colors hover:bg-charcoal-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile menu">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
               <Link
                 key={link.href}
                 href={link.href}
                 onClick={onClose}
                 className={classNames(
                   "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                   active
                     ? "bg-burgundy-50 text-burgundy-700 font-semibold"
                     : "text-charcoal-900/80 hover:bg-charcoal-900/5",
                 )}
               >
                 {link.label}
               </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-charcoal-900/10 p-5">
          <Link
            href="/order"
            onClick={onClose}
            className="btn-primary w-full"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}