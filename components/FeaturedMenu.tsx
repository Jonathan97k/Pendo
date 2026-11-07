import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function FeaturedMenu() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="bg-cream-50 py-10 sm:py-14">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Straight from our kitchen"
            title="The good stuff."
            description="Freshly prepared favourites for breakfast, lunch, a quick bite or whenever the craving hits."
          />
          <Link
            href="/menu"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-charcoal-900/15 px-5 py-3 text-sm font-semibold text-charcoal-900 transition-all hover:border-burgundy-600 hover:bg-white hover:text-burgundy-700 md:self-auto"
          >
            See the full menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-900/45">
          <Utensils className="h-4 w-4 text-burgundy-600" aria-hidden="true" />
          Made with care. Served with love.
        </div>
      </div>
    </section>
  );
}