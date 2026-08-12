"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Product } from "@/types/product";
import {
  deleteProduct,
  fetchProducts,
  saveProducts,
  upsertProduct,
} from "@/lib/product-store";
import { formatPrice } from "@/lib/utils";
import ProductForm from "./ProductForm";

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  function handleSave(product: Product) {
    const next = upsertProduct(product, products);
    setProducts(next);
    saveProducts(next);
    setEditing(null);
    setShowForm(false);
  }

  function handleDelete(id: string) {
    const next = deleteProduct(id, products);
    setProducts(next);
    saveProducts(next);
  }

  function handleToggleAvailability(product: Product) {
    const next = upsertProduct({ ...product, available: !product.available }, products);
    setProducts(next);
    saveProducts(next);
  }

  function resetAndClose() {
    setEditing(null);
    setShowForm(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl font-bold text-charcoal-900">
          Product Management
        </h2>
        <button
          type="button"
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="btn-primary"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add Product
        </button>
      </div>

      {showForm ? (
        <ProductForm
          initial={editing}
          onSave={handleSave}
          onCancel={resetAndClose}
        />
      ) : null}

      <div className="card overflow-hidden">
        <ul className="divide-y divide-charcoal-900/5">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                <Image
                  src={product.image}
                  alt={product.altText}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-charcoal-900">
                    {product.name}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      product.available
                        ? "bg-[#25D366]/15 text-[#1fb958]"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {product.available ? "Available" : "Unavailable"}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-sm text-charcoal-900/60">
                  {product.category} · {formatPrice(product.price)}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleAvailability(product)}
                  className="rounded-full bg-cream-100 px-3.5 py-2 text-xs font-semibold text-charcoal-900/70 transition-colors hover:bg-cream-200"
                >
                  {product.available ? "Set Unavailable" : "Set Available"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditing(product);
                    setShowForm(true);
                  }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal-900/60 transition-colors hover:bg-cream-100 hover:text-burgundy-700"
                  aria-label={`Edit ${product.name}`}
                >
                  <Pencil className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal-900/60 transition-colors hover:bg-red-50 hover:text-red-600"
                  aria-label={`Delete ${product.name}`}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-charcoal-900/50">
        Changes are saved in your browser and will not affect other visitors
        until a real database backend is connected.
      </p>
    </div>
  );
}