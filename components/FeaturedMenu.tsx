import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function FeaturedMenu() {
  const featured = PRODUCTS.slice(0, 5);

  return (
    <section id="menu" className="bg-[#fffaf3] py-8 sm:py-10">
      <div className="container-site">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 text-center">
          <span className="hidden h-[2px] flex-1 bg-[#e4aa16] sm:block" />
          <h2 className="shrink-0 font-display text-3xl font-black italic tracking-tight text-[#970f28] sm:text-4xl">Our Menu</h2>
          <span className="hidden h-[2px] flex-1 bg-[#e4aa16] sm:block" />
        </div>
        <p className="mt-1 text-center text-sm font-medium text-[#4a2529] sm:text-base">Choose from our delicious selection</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}