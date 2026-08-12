import {
  UtensilsCrossed,
  ShoppingCart,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Step = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: UtensilsCrossed,
    number: "1",
    title: "Choose your favourite food",
    description: "Browse the menu and pick the treats you're craving.",
  },
  {
    icon: ShoppingCart,
    number: "2",
    title: "Add it to your cart",
    description: "Set your quantities and review your order in the cart.",
  },
  {
    icon: MessageCircle,
    number: "3",
    title: "Send your order through WhatsApp",
    description:
      "Confirm your details and we'll start preparing your order.",
  },
];

export default function HowToOrder() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="How It Works"
          title="Ordering in Three Simple Steps"
          description="From craving to doorstep in minutes."
        />
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lift ring-1 ring-charcoal-900/5">
                <step.icon className="h-9 w-9 text-burgundy-600" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-burgundy-600 text-sm font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-charcoal-900">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-charcoal-900/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}