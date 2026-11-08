import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, ShieldCheck, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section className="pendo-hero relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-20">
        <Image src="/images/food-1.webp" alt="Freshly prepared shawarma from Pendo's Treats" fill priority sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4b0710] via-[#4b0710]/95 to-[#4b0710]/15" />
      <div className="container-site relative flex min-h-[390px] items-center py-12 sm:min-h-[440px] lg:min-h-[470px]">
        <div className="max-w-[570px]">
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Delicious
            <span className="mt-1 block text-[#ffcf00]">Shawarma &amp; More</span>
          </h1>
          <p className="mt-5 max-w-md text-lg font-medium leading-snug text-white sm:text-xl">
            Freshly made, perfectly seasoned, and delivered with love!
          </p>
          <Link href="/order" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ffcf00] px-8 py-4 text-lg font-extrabold text-[#35060b] shadow-lg transition hover:bg-[#ffe15a]">
            <Utensils className="h-5 w-5" /> Order Now <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-white sm:text-sm">
            <span className="inline-flex items-center gap-2"><Utensils className="h-6 w-6" /> Fresh Food</span>
            <span className="hidden h-8 w-px bg-white/50 sm:block" />
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-6 w-6" /> Secure Ordering</span>
            <span className="hidden h-8 w-px bg-white/50 sm:block" />
            <span className="inline-flex items-center gap-2"><Bike className="h-6 w-6" /> Fast Delivery</span>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden rotate-6 rounded-full border-4 border-white bg-[#a90e20] px-6 py-5 text-center font-display text-xl font-bold leading-tight shadow-xl xl:block">
          Taste<br />the<br /><span className="text-[#ffcf00]">Difference!</span>
        </div>
      </div>
      <div className="pendo-hero-wave absolute -bottom-1 left-0 h-8 w-full bg-[#fffaf3]" />
    </section>
  );
}