import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-burgundy-700 to-burgundy-800 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Hungry? Your Favourite Treat Is Just a Few Clicks Away.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
            Freshly prepared chapati, chicken shawarma and samosas, ready when
            you are.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-burgundy-700 shadow-soft transition-all duration-200 hover:shadow-lift"
            >
              Order Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}