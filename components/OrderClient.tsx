"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import OrderForm from "./OrderForm";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function OrderClient() {
  const { items, openCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="card mx-auto flex max-w-lg flex-col items-center gap-4 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-100 text-burgundy-600">
          <ShoppingBag className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-bold text-charcoal-900">
          Your cart is empty
        </h2>
        <p className="text-sm text-charcoal-900/60">
          Add some freshly prepared treats before placing an order.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/menu" className="btn-primary">
            Browse the Menu
          </Link>
          <button type="button" onClick={openCart} className="btn-secondary">
            Open Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <OrderForm />
      </div>
      <aside className="space-y-4">
        <div className="card sticky top-24 p-6">
          <h2 className="font-display text-lg font-bold text-charcoal-900">
            Order Summary
          </h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-charcoal-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-charcoal-900/50">
                    {item.quantity} × {formatPrice(item.price)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-charcoal-900">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t border-charcoal-900/10 pt-4">
            <span className="text-sm font-medium text-charcoal-900/70">Total</span>
            <span className="font-bold text-charcoal-900">
              {formatPrice(items.reduce((s, i) => s + i.price * i.quantity, 0))}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}