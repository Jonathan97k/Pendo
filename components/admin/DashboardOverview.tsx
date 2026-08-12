"use client";

import { useEffect, useState } from "react";
import { Package, CheckCircle2, XCircle, ClipboardList } from "lucide-react";
import { fetchProducts } from "@/lib/product-store";

type Stat = {
  label: string;
  value: number;
  icon: typeof Package;
  accent: string;
};

export default function DashboardOverview() {
  const [total, setTotal] = useState(0);
  const [available, setAvailable] = useState(0);
  const [unavailable, setUnavailable] = useState(0);

  useEffect(() => {
    const products = fetchProducts();
    setTotal(products.length);
    setAvailable(products.filter((p) => p.available).length);
    setUnavailable(products.filter((p) => !p.available).length);
  }, []);

  const stats: Stat[] = [
    {
      label: "Total Products",
      value: total,
      icon: Package,
      accent: "bg-burgundy-50 text-burgundy-600",
    },
    {
      label: "Available",
      value: available,
      icon: CheckCircle2,
      accent: "bg-[#25D366]/15 text-[#1fb958]",
    },
    {
      label: "Unavailable",
      value: unavailable,
      icon: XCircle,
      accent: "bg-red-50 text-red-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card flex items-center gap-4 p-5">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.accent}`}>
              <stat.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-charcoal-900/60">{stat.label}</p>
              <p className="font-display text-2xl font-bold text-charcoal-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-burgundy-600" aria-hidden="true" />
          <h2 className="font-display text-lg font-bold text-charcoal-900">
            Recent Orders
          </h2>
        </div>
        <div className="mt-4 rounded-2xl bg-cream-50 p-6 text-center">
          <p className="text-sm text-charcoal-900/60">
            Orders placed through WhatsApp are managed from the WhatsApp app
            for now.
          </p>
          <p className="mt-1 text-xs text-charcoal-900/40">
            A live admin order list can be connected once a database backend is
            set up.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong className="font-semibold">Note:</strong> Products are currently
        saved in your browser (localStorage) as a stand-in for a real database.
        Data is not stored permanently on a production server.
      </div>
    </div>
  );
}