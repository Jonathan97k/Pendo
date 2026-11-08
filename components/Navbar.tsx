"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, House } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/context/CartContext";
import { classNames } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Reviews" },
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

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className={classNames("sticky top-0 z-40 w-full border-b border-[#eadfd3] bg-[#fffaf3] transition-shadow", scrolled ? "shadow-lg" : "shadow-sm")}>
      <nav className="container-site flex min-h-[76px] items-center justify-between gap-3 py-2 sm:min-h-[88px]" aria-label="Main navigation">
        <Logo className="scale-105 origin-left" />
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className={classNames("rounded-full px-4 py-3 text-sm font-bold transition-colors", active ? "bg-[#970f28] text-white shadow-sm" : "text-[#321d20] hover:bg-[#f5e8e3] hover:text-[#970f28]")}>
                {active && link.href === "/" ? <House className="mr-1 inline h-4 w-4" /> : null}{link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={openCart} className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-[#261719] hover:bg-[#f4e9df]" aria-label={`Open cart, ${itemCount} items`}>
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#a50f2a] px-1 text-[11px] font-bold text-white">{itemCount}</span>}
          </button>
          <Link href="/order" className="hidden items-center gap-2 rounded-full bg-[#970f28] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#760b1e] sm:inline-flex"><ShoppingCart className="h-4 w-4" /> Order Now</Link>
          <button type="button" onClick={() => setMobileOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#261719] hover:bg-[#f4e9df] lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu"><Menu className="h-6 w-6" /></button>
        </div>
      </nav>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </header>
  );
}