import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import { PRODUCTS } from "@/data/products";

export default function FeaturedMenu() {
  const featured = PRODUCTS.slice(0, 5);

  return (
    <section id="menu" className="bg-[#fffaf3] py-8 sm:py-10">
      <div className="container-site">
        <SectionHeading
          title="Our Menu"
          description="Choose from our delicious selection"
        />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}