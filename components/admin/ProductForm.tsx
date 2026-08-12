"use client";

import { useState, type FormEvent } from "react";
import type { Product, ProductCategory } from "@/types/product";
import { generateProductId } from "@/lib/product-store";

type Props = {
  initial: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
};

const CATEGORIES: ProductCategory[] = ["Shawarma", "Chapati", "Samosa", "Extras"];
const IMAGE_OPTIONS = [
  "/images/food-1.webp",
  "/images/food-2.webp",
  "/images/food-3.webp",
  "/images/food-4.webp",
  "/images/food-5.webp",
];

type Errors = Partial<Record<"name" | "price" | "image", string>>;

export default function ProductForm({ initial, onSave, onCancel }: Props) {
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [price, setPrice] = useState(initial ? String(initial.price) : "");
  const [category, setCategory] = useState<ProductCategory>(
    initial?.category ?? "Chapati",
  );
  const [image, setImage] = useState(initial?.image ?? IMAGE_OPTIONS[0]);
  const [available, setAvailable] = useState(initial?.available ?? true);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) {
      next.name = "Please enter a product name.";
    }
    const priceNum = Number(price);
    if (!price || Number.isNaN(priceNum) || priceNum <= 0) {
      next.price = "Please enter a valid price in MWK.";
    }
    if (!image.trim()) {
      next.image = "Please enter or choose an image path.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) {
      return;
    }

    onSave({
      id: initial?.id ?? generateProductId(),
      name: name.trim(),
      description: description.trim() || "Freshly prepared at Pendo's Treats.",
      price: priceNum,
      image: image.trim(),
      altText: `${name.trim()} from Pendo's Treats`,
      category,
      available,
      createdAt: initial?.createdAt ?? new Date().toISOString(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6" noValidate>
      <h3 className="font-display text-xl font-bold text-charcoal-900">
        {initial ? "Edit Product" : "Add Product"}
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="p-name" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Name
          </label>
          <input
            id="p-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          />
          {errors.name ? (
            <p className="mt-1 text-xs font-medium text-burgundy-700">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="p-price" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Price (MWK)
          </label>
          <input
            id="p-price"
            type="number"
            min="0"
            step="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-invalid={Boolean(errors.price)}
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          />
          {errors.price ? (
            <p className="mt-1 text-xs font-medium text-burgundy-700">{errors.price}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="p-desc" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Description
        </label>
        <textarea
          id="p-desc"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="p-category" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Category
          </label>
          <select
            id="p-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory)}
            className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="p-available" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
            Availability
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm">
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className="h-4 w-4 accent-burgundy-600"
            />
            <span className="text-charcoal-900/80">
              {available ? "Available" : "Unavailable"}
            </span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="p-image" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Image URL / Local Reference
        </label>
        <input
          id="p-image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          aria-invalid={Boolean(errors.image)}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {IMAGE_OPTIONS.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setImage(src)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                image === src
                  ? "bg-burgundy-600 text-white"
                  : "bg-cream-100 text-charcoal-900/70 hover:bg-cream-200"
              }`}
            >
              {src.split("/").pop()}
            </button>
          ))}
        </div>
        {errors.image ? (
          <p className="mt-1 text-xs font-medium text-burgundy-700">{errors.image}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          {initial ? "Save Changes" : "Add Product"}
        </button>
      </div>
    </form>
  );
}