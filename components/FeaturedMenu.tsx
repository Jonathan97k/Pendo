import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function FeaturedMenu() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Menu"
          title="Crowd Favourites"
          description="Freshly prepared chapati, chicken shawarma and samosas — made with care, served with a smile."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/menu" className="btn-secondary">
            View Full Menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}