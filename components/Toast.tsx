"use client";

import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 animate-fade-up"
    >
      <div className="flex items-center gap-2.5 rounded-full bg-charcoal-900 px-5 py-3 text-sm font-medium text-white shadow-lift">
        <CheckCircle2 className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
        {toast}
      </div>
    </div>
  );
}