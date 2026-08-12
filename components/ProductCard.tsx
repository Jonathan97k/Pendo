"use client";

import Image from "next/image";
import { Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  if (!product.available) {
    return (
      <div className="card overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
          <Image
            src={product.image}
            alt={product.altText}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-charcoal-900/70 px-3 py-1 text-xs font-semibold text-white">
            Unavailable
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-bold text-charcoal-900">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-charcoal-900/70">
            {product.description}
          </p>
          <p className="mt-3 font-semibold text-charcoal-900/50">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={product.altText}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-5">
        <h3 className="font-display text-xl font-bold text-charcoal-900">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 line-clamp-2 text-sm text-charcoal-900/70">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-burgundy-700">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 focus-visible:ring-offset-2"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}