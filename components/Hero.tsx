import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#241719] text-cream-50">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-burgundy-600/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#D8A85F]/10 blur-3xl" aria-hidden="true" />

      <div className="container-site relative grid min-h-[650px] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D8A85F]/35 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9C58F]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            A taste worth coming back for
          </p>

          <h1 className="mt-7 max-w-2xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            Good food.
            <br />
            <span className="italic text-[#E9C58F]">Good mood.</span>
            <br />
            Every time.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-cream-50/70 sm:text-lg">
            From soft, freshly made chapati to flavour-packed shawarma, find your
            next favourite bite at {BUSINESS.name}.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D8A85F] px-7 py-4 text-sm font-bold text-[#241719] shadow-[0_12px_35px_rgba(216,168,95,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E9C58F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C58F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#241719]"
            >
              Order your favourites
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Explore the menu
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#E9C58F]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-cream-50/45">Find us in</span>
              <span className="mt-0.5 block text-sm font-medium text-cream-50/90">{BUSINESS.locationShort}</span>
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] animate-fade-in lg:ml-auto">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-[#D8A85F]/20 sm:-inset-6" aria-hidden="true" />
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#3A2928] shadow-2xl">
            <Image
              src="/images/food-1.webp"
              alt="Freshly prepared food from Pendo's Treats"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1112]/65 via-transparent to-black/5" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E9C58F]">Made fresh for you</p>
                <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">A little joy in every bite.</p>
              </div>
              <span className="hidden rounded-full border border-white/25 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm sm:inline-flex">Pendo's Treats</span>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-4 w-36 overflow-hidden rounded-2xl border-4 border-[#241719] bg-white shadow-2xl sm:-left-10 sm:w-44">
            <div className="relative aspect-square">
              <Image
                src="/images/chapati-eggs-pendo.webp"
                alt="Chapati served with two eggs"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="px-3 py-2.5 text-[#241719]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-burgundy-600">Customer favourite</p>
              <p className="mt-0.5 text-xs font-semibold">Chapati &amp; 2 Eggs</p>
            </div>
          </div>

          <div className="absolute -right-2 top-8 rounded-full border border-[#E9C58F]/40 bg-[#241719]/90 px-4 py-3 text-center shadow-xl backdrop-blur sm:-right-5 sm:px-5">
            <span className="block font-display text-xl font-semibold text-[#E9C58F]">Fresh</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">Every day</span>
          </div>
        </div>
      </div>
    </section>
  );
}