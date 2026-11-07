import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Flame, Smartphone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About | Pendo's Treats",
  description:
    "Learn about Pendo's Treats in Lilongwe — passionate about preparing delicious, satisfying food for customers across the city.",
};

const VALUES = [
  {
    icon: Flame,
    title: "Fresh Preparation",
    description:
      "We prepare each order fresh so your food is always hot and full of flavour.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description:
      "Your happiness matters to us — we aim to serve every customer with care.",
  },
  {
    icon: Smartphone,
    title: "Convenient Ordering",
    description:
      "Order from your phone in minutes and pick it up or have it delivered.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="About Us"
            title="About Pendo's Treats"
            description="Passionate about preparing delicious and satisfying food for customers in Lilongwe."
          />
        </div>
      </section>

      <section className="pb-4">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/food-5.webp"
              alt="Freshly prepared food at Pendo's Treats"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-charcoal-900">
              Good Food, Made with Care
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal-900/70">
              Pendo&rsquo;s Treats is a proudly local food business based in Area
              49, New Shire, Lilongwe. We&rsquo;re passionate about
              preparing delicious and satisfying food — from soft chapatis to
              flavourful chicken shawarma and crispy samosas — using fresh
              ingredients and a lot of love.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-900/70">
              Whether you&rsquo;re grabbing a quick bite or ordering for the
              family, we keep our process simple: you choose, we cook it fresh,
              and it&rsquo;s ready when you are. Order by phone or WhatsApp, or
              visit us in person.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy-50 text-burgundy-600">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-charcoal-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-900/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton label="Order Now on WhatsApp" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}