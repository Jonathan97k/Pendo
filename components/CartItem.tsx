"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <li className="flex gap-4 rounded-2xl bg-cream-50 p-3 ring-1 ring-charcoal-900/5">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <p className="truncate text-sm font-semibold text-charcoal-900">
            {item.name}
          </p>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal-900/40 transition-colors hover:bg-burgundy-50 hover:text-burgundy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-burgundy-700">
          {formatPrice(item.price)}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-1">
          <div className="flex items-center rounded-full bg-white ring-1 ring-charcoal-900/10">
            <button
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-charcoal-900/70 transition-colors hover:text-burgundy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span
              className="min-w-6 text-center text-sm font-semibold"
              aria-live="polite"
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-charcoal-900/70 transition-colors hover:text-burgundy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
          <p className="ml-auto text-sm font-bold text-charcoal-900">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </li>
  );
}