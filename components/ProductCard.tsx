"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = { product: Product };

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_3px_14px_rgba(75,7,16,0.12)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[1.18/1] overflow-hidden bg-[#f0e5d8]">
        <Image
          src={product.image}
          alt={product.altText}
          fill
          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 48vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.available && <span className="absolute inset-x-2 bottom-2 rounded bg-black/70 px-2 py-1 text-center text-xs font-bold text-white">Unavailable</span>}
      </div>
      <div className="flex min-h-[126px] flex-col items-center px-2.5 py-3 text-center sm:px-3">
        <h3 className="text-sm font-extrabold leading-tight text-[#201315] sm:text-base">{product.name}</h3>
        <p className="mt-1.5 text-base font-black text-[#941329] sm:text-lg">{formatPrice(product.price)}</p>
        <button
          type="button"
          disabled={!product.available}
          onClick={() => addItem(product)}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#990f27] px-2 py-2 text-xs font-bold text-white transition hover:bg-[#710b1d] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </article>
  );
}