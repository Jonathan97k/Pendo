import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Pendo's Treats",
  description:
    "Get in touch with Pendo's Treats in Area 49, New Gulliver, Lilongwe. Call, WhatsApp or send us a message.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contact Us"
          title="We'd Love to Hear From You"
          description="Reach out for orders, questions or feedback — we're always happy to help."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-50 text-burgundy-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-charcoal-900">
                    Visit Us
                  </h2>
                  <p className="mt-1 text-sm text-charcoal-900/70">
                    {BUSINESS.locationShort}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-50 text-burgundy-600">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-charcoal-900">
                    Call or WhatsApp
                  </h2>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-1 block text-sm font-semibold text-burgundy-700 hover:underline"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <WhatsAppButton label="WhatsApp Us" />
                    <a
                      href={BUSINESS.phoneHref}
                      className="btn-secondary"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-50 text-burgundy-600">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-charcoal-900">
                    Email
                  </h2>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="mt-1 block break-all text-sm font-semibold text-burgundy-700 hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}