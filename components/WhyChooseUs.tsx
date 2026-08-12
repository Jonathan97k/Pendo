import {
  Flame,
  BadgePercent,
  Smartphone,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Flame,
    title: "Freshly Prepared",
    description:
      "Every order is made fresh, so your food arrives hot, flavourful and satisfying.",
  },
  {
    icon: BadgePercent,
    title: "Delicious & Affordable",
    description:
      "Great tasting treats at fair prices, perfect for a quick bite or a full meal.",
  },
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description:
      "Build your order in seconds and send it straight to us through WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Located in Area 49, New Gulliver, Lilongwe — with pickup and delivery options.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-100 section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Pendo's Treats"
          title="Food People Keep Coming Back For"
          description="We keep it simple: good food, prepared fresh, and easy to order."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy-50 text-burgundy-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-charcoal-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-900/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}