import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Bike, Smile } from "lucide-react";

export default function ComboBanner() {
  return (
    <section className="bg-[#fffaf3] px-4 pb-6 pt-4 sm:px-6">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#520710] via-[#970f22] to-[#650916] text-white shadow-lg lg:grid-cols-[1.05fr_1.2fr_0.9fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-7 sm:px-8">
          <h2 className="font-display text-3xl font-black italic leading-tight sm:text-4xl">Get More<br />with Our <span className="text-[#ffcf00]">Meal Combos!</span></h2>
          <p className="mt-2 text-sm font-semibold sm:text-base">Shawarma + Chips + Drink</p>
          <Link href="/menu" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#ffcf00] px-6 py-3 text-sm font-extrabold text-[#39070c] hover:bg-[#ffe15a]">Order Combo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="relative hidden min-h-[170px] sm:block">
          <Image src="/images/food-1.webp" alt="Pendo's freshly prepared shawarma" fill sizes="(min-width: 1024px) 35vw, 50vw" className="object-cover object-center mix-blend-screen opacity-95" />
        </div>
        <div className="relative z-10 flex flex-row items-center justify-around gap-3 px-4 py-5 text-xs font-bold sm:text-sm lg:flex-col lg:items-start lg:justify-center lg:px-6">
          <span className="flex items-center gap-2"><BadgeCheck className="h-7 w-7 shrink-0 text-[#ffcf00]" /> Quality Food Always</span>
          <span className="flex items-center gap-2"><Smile className="h-7 w-7 shrink-0 text-[#ffcf00]" /> Happy Customers</span>
          <span className="flex items-center gap-2"><Bike className="h-7 w-7 shrink-0 text-[#ffcf00]" /> On-Time Delivery</span>
        </div>
      </div>
    </section>
  );
}