import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-burgundy-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-cream-200/80 blur-3xl" aria-hidden="true" />

      <div className="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-burgundy-700 shadow-soft">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Area 49, Lilongwe, Malawi
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
            Freshly Made.
            <br />
            <span className="text-burgundy-600">Deliciously Served.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-900/70 sm:text-lg">
            Enjoy delicious chapati, chicken shawarma and freshly prepared
            treats from {BUSINESS.name} in Area 49, Lilongwe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/order" className="btn-primary px-8 py-4 text-base">
              Order Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/menu" className="btn-secondary px-8 py-4 text-base">
              View Menu
            </Link>
          </div>
          <p className="mt-6 text-sm text-charcoal-900/60">
            Call or WhatsApp{" "}
            <a
              href={BUSINESS.phoneHref}
              className="font-semibold text-burgundy-700 hover:underline"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-charcoal-900/10">
            <Image
              src="/images/food-1.webp"
              alt="Freshly prepared food from Pendo's Treats"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-lift ring-1 ring-charcoal-900/5 sm:-left-8">
            <p className="font-display text-lg font-bold text-charcoal-900">
              Hot &amp; Fresh
            </p>
            <p className="text-sm text-charcoal-900/60">
              Made to order every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}