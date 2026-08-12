import { MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";
import { BUSINESS } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="card overflow-hidden">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="relative min-h-72 bg-cream-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-burgundy-700 to-burgundy-800 p-8 text-center text-white">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <MapPin className="h-8 w-8" aria-hidden="true" />
                </span>
                <p className="max-w-sm font-display text-2xl font-bold">
                  Area 49, New Gulliver, Lilongwe
                </p>
                <p className="text-sm text-white/80">
                  Find us in Area 49, New Gulliver, Lilongwe, Malawi.
                </p>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <SectionHeading
                align="left"
                eyebrow="Find Us"
                title="Visit or Order From Us"
                description="Call, WhatsApp or walk in — we're ready to serve you."
              />
              <div className="mt-6 space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-4 rounded-2xl bg-cream-50 p-4 ring-1 ring-charcoal-900/5 transition-shadow hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-50 text-burgundy-600">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-charcoal-900/50">
                      Call or WhatsApp
                    </span>
                    <span className="font-semibold text-charcoal-900">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
                <div className="flex flex-wrap gap-3">
                  <WhatsAppButton label="WhatsApp Us" />
                  <a href="/contact" className="btn-secondary">
                    Contact Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}