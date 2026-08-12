"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    itemCount,
    subtotal,
    clearCart,
  } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-lift animate-fade-in"
      >
        <div className="flex items-center justify-between border-b border-charcoal-900/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-burgundy-600" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-charcoal-900">
              Your Cart
            </h2>
            {itemCount > 0 ? (
              <span className="rounded-full bg-burgundy-50 px-2 py-0.5 text-xs font-semibold text-burgundy-700">
                {itemCount}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal-900/60 transition-colors hover:bg-charcoal-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-100 text-burgundy-600">
              <ShoppingBag className="h-8 w-8" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-charcoal-900">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm text-charcoal-900/60">
                Add some freshly prepared treats to get started.
              </p>
            </div>
            <Link
              href="/menu"
              onClick={closeCart}
              className="btn-primary"
            >
              Browse the Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>

            <div className="border-t border-charcoal-900/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-charcoal-900/70">
                  Subtotal
                </span>
                <span className="font-bold text-charcoal-900">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-charcoal-900/50">
                Delivery orders are confirmed on WhatsApp after checkout.
              </p>
              <Link
                href="/order"
                onClick={closeCart}
                className="btn-primary mt-4 w-full"
              >
                Proceed to Checkout
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-medium text-charcoal-900/50 transition-colors hover:text-burgundy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 rounded-full py-2"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}