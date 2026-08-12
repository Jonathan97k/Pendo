import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
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
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo className="[&_span]:!text-cream-100" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
            {BUSINESS.tagline} Enjoy chapati, chicken shawarma and freshly
            prepared treats in Lilongwe.
          </p>
        </div>

        <nav aria-label="Footer links">
          <h3 className="font-display text-lg font-bold text-white">Links</h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-100/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-bold text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-burgundy-100" />
              <span>{BUSINESS.locationShort}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-burgundy-100" />
              <a
                href={BUSINESS.phoneHref}
                className="transition-colors hover:text-white"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-burgundy-100" />
              <a
                href={`mailto:${BUSINESS.email}`}
                className="break-all transition-colors hover:text-white"
              >
                {BUSINESS.email}
              </a>
            </li>
          </ul>
          <WhatsAppButton className="mt-6" label="WhatsApp Quick Order" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-cream-100/60 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Pendo&rsquo;s Treats. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Freshly made. Deliciously served.
          </p>
        </div>
      </div>
    </footer>
  );
}