import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#650b19] text-[#fff8f0]">
      <div className="container-site grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.3fr_1fr] lg:gap-10">
        <div>
          <Logo className="[&_span]:!text-white [&_span_span]:!text-[#ffcf00]" />
          <p className="mt-2 text-xs italic text-white/80">{BUSINESS.tagline}</p>
        </div>
        <nav aria-label="Footer links">
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-white/85">
            {FOOTER_LINKS.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-[#ffcf00]">{link.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="font-bold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Follow Us</h3>
          <p className="mt-3 text-sm text-white/80">Follow Pendo’s Treats for menu updates and special offers.</p>
        </div>
      </div>
      <div className="border-t border-white/15 bg-[#4b0710]">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-3 text-center text-xs text-white/75 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Pendo’s Treats. All rights reserved.</p>
          <p>Website built by <a href="https://kelnix.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold text-[#ffcf00] hover:underline">Kelnix</a></p>
        </div>
      </div>
    </footer>
  );
}