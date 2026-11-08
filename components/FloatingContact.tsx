import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingContact() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hello Pendo's Treats! 👋 I have a question about your menu.",
  );

  return (
    <div
      className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6"
      aria-label="Quick contact options"
    >
      <Link
        href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Enquiry for Pendo's Treats")}`}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-burgundy-700 text-white shadow-lg ring-2 ring-white/90 transition duration-200 hover:scale-105 hover:bg-burgundy-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-burgundy-300 sm:h-14 sm:w-14"
        aria-label={`Email Pendo's Treats at ${BUSINESS.email}`}
        title="Email us"
      >
        <Mail className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="pointer-events-none absolute right-16 rounded-lg bg-charcoal-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Email us
        </span>
      </Link>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/90 transition duration-200 hover:scale-105 hover:bg-[#1fb958] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:h-16 sm:w-16"
        aria-label="Chat with Pendo's Treats on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
        <span className="pointer-events-none absolute right-[4.5rem] rounded-lg bg-charcoal-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:right-20">
          WhatsApp us
        </span>
      </Link>
    </div>
  );
}
