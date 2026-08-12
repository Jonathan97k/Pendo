"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/context/CartContext";
import { classNames } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={classNames(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-cream-50/90 shadow-soft backdrop-blur-md"
          : "bg-cream-50/60 backdrop-blur-sm",
      )}
    >
      <nav
        className="container-site flex h-16 items-center justify-between gap-4 sm:h-20"
        aria-label="Main navigation"
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={classNames(
                  "relative text-sm font-medium transition-colors",
                  active
                    ? "text-burgundy-600"
                    : "text-charcoal-900/70 hover:text-charcoal-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal-900 transition-colors hover:bg-charcoal-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            aria-label={`Open cart, ${itemCount} item${
              itemCount === 1 ? "" : "s"
            }`}
          >
            <ShoppingBag className="h-6 w-6" aria-hidden="true" />
            {itemCount > 0 ? (
              <span className="absolute right-0.5 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-burgundy-600 px-1 text-[11px] font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </button>

          <Link href="/order" className="btn-primary hidden sm:inline-flex">
            Order Now
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal-900 transition-colors hover:bg-charcoal-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}