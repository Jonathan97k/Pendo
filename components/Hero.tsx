import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#241719] text-white">
      <div className="pointer-events-none absolute -right-24 -top-40 h-80 w-80 rounded-full bg-burgundy-600/20 blur-3xl" aria-hidden="true" />

      <div className="container-site relative grid min-h-[270px] items-center gap-7 py-8 sm:min-h-[300px] sm:py-9 lg:grid-cols-[1fr_0.82fr] lg:gap-12">
        <div className="relative z-10 max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E9C58F] sm:text-[11px]">
            Freshly made · Deliciously served
          </p>

          <h1 className="mt-3 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl">
            Your next favourite
            <span className="block italic text-[#E9C58F]">bite is waiting.</span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/70 sm:text-base">
            Chapati, shawarma and tasty treats made fresh at {BUSINESS.name}.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 rounded-full bg-[#D8A85F] px-5 py-3 text-sm font-bold text-[#241719] transition-colors hover:bg-[#E9C58F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C58F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#241719]"
            >
              Order now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/menu"
              className="rounded-full px-3 py-3 text-sm font-semibold text-white/85 transition-colors hover:text-[#E9C58F]"
            >
              Browse menu
            </Link>
          </div>
        </div>

        <div className="relative hidden h-[220px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#3A2928] shadow-xl sm:block lg:h-[230px]">
          <Image
            src="/images/food-1.webp"
            alt="Freshly prepared food from Pendo's Treats"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1112]/35 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0D5A9]">Made fresh for you</p>
            <p className="mt-1 font-display text-xl font-semibold text-white">A little joy in every bite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}