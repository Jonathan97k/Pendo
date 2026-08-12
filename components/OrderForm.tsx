"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { openWhatsAppOrder } from "@/lib/whatsapp";
import type { OrderDetails, OrderType } from "@/types/product";

type FormErrors = Partial<Record<"name" | "phone" | "address", string>>;

export default function OrderForm() {
  const { items, subtotal, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState<OrderType>("Pickup");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s-]{7,16}$/.test(phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (orderType === "Delivery" && !address.trim()) {
      next.address = "Please enter your delivery address.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const details: OrderDetails = {
      customerName: name.trim(),
      phone: phone.trim(),
      orderType,
      deliveryAddress: orderType === "Delivery" ? address.trim() : undefined,
      notes: notes.trim() || undefined,
    };
    setSubmitting(true);
    // Slight delay so the UI state change is visible before opening WhatsApp.
    window.setTimeout(() => {
      openWhatsAppOrder(items, details);
      clearCart();
      setSubmitting(false);
    }, 350);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="customer-name"
          className="mb-1.5 block text-sm font-semibold text-charcoal-900"
        >
          Your Name
        </label>
        <input
          id="customer-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jonathan"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="customer-phone"
          className="mb-1.5 block text-sm font-semibold text-charcoal-900"
        >
          Phone Number
        </label>
        <input
          id="customer-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +265 994 630 808"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Order Type
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {(["Pickup", "Delivery"] as OrderType[]).map((type) => (
            <label
              key={type}
              className={`flex cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                orderType === type
                  ? "border-burgundy-600 bg-burgundy-50 text-burgundy-700"
                  : "border-charcoal-900/15 bg-white text-charcoal-900/70 hover:border-charcoal-900/30"
              }`}
            >
              <input
                type="radio"
                name="order-type"
                value={type}
                checked={orderType === type}
                onChange={() => setOrderType(type)}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      {orderType === "Delivery" ? (
        <div>
          <label
            htmlFor="delivery-address"
            className="mb-1.5 block text-sm font-semibold text-charcoal-900"
          >
            Delivery Address / Location
          </label>
          <textarea
            id="delivery-address"
            rows={2}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. Area 49, New Gulliver, Lilongwe"
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "address-error" : undefined}
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          />
          {errors.address ? (
            <p id="address-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
              {errors.address}
            </p>
          ) : null}
        </div>
      ) : null}

      <div>
        <label
          htmlFor="order-notes"
          className="mb-1.5 block text-sm font-semibold text-charcoal-900"
        >
          Order Notes <span className="font-normal text-charcoal-900/50">(optional)</span>
        </label>
        <textarea
          id="order-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Please prepare it fresh."
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
      </div>

      <div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-charcoal-900/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-900/50">
          Order Summary
        </p>
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="text-charcoal-900/80">
                {item.name} <span className="text-charcoal-900/50">x {item.quantity}</span>
              </span>
              <span className="font-semibold text-charcoal-900">
                {formatPrice(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-charcoal-900/10 pt-3">
          <span className="text-sm font-medium text-charcoal-900/70">Total</span>
          <span className="font-bold text-charcoal-900">{formatPrice(subtotal)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={items.length === 0 || submitting}
        className="btn-whatsapp w-full px-8 py-4 text-base disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        )}
        Place Order via WhatsApp
      </button>
      <p className="text-center text-xs text-charcoal-900/50">
        Opens WhatsApp with your order details for confirmation.
      </p>
    </form>
  );
}

