import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { categories } from "@/lib/menu-categories";

export const metadata: Metadata = {
  title: "Menu | Pendo's Treats",
  description:
    "Browse the full menu of freshly prepared chapati, chicken shawarma and samosas from Pendo's Treats in Lilongwe.",
};

export default function MenuPage() {
  const available = PRODUCTS.filter((p) => p.available);
  return (
    <>
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Menu"
            title="Freshly Prepared, Made to Order"
            description="Every dish is prepared fresh when you order. Pick your favourites and send your order straight to us on WhatsApp."
          />
        </div>
      </section>

      {categories.map((category) => {
        const items = available.filter((p) => p.category === category.name);
        if (items.length === 0) {
          return null;
        }
        return (
          <section
            key={category.name}
            className="pb-4"
            aria-label={`${category.name} category`}
          >
            <div className="container-site">
              <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-charcoal-900">
                <span className="flex h-2.5 w-2.5 rounded-full bg-burgundy-600" />
                {category.name}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}