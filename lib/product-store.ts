import type { Product } from "@/types/product";
import { PRODUCTS } from "@/data/products";

const PRODUCTS_KEY = "pendos-treats-products-v1";

// Repository/service layer for products.
// Currently persists to localStorage as a stand-in until a real database
// (e.g. Supabase) is connected. Swap the functions below for Supabase calls
// without changing the UI.

function readProductsFromStorage(): Product[] | null {
  try {
    const raw = window.localStorage.getItem(PRODUCTS_KEY);
    return raw ? (JSON.parse(raw) as Product[]) : null;
  } catch {
    return null;
  }
}

function writeProductsToStorage(products: Product[]): void {
  try {
    window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  } catch {
    // ignore
  }
}

export function fetchProducts(): Product[] {
  if (typeof window === "undefined") {
    return PRODUCTS;
  }
  const stored = readProductsFromStorage();
  if (stored && Array.isArray(stored)) {
    return stored;
  }
  // Seed from defaults on first run.
  writeProductsToStorage(PRODUCTS);
  return PRODUCTS;
}

export function saveProducts(products: Product[]): void {
  writeProductsToStorage(products);
}

export function upsertProduct(
  product: Product,
  products: Product[],
): Product[] {
  const exists = products.some((p) => p.id === product.id);
  if (exists) {
    return products.map((p) => (p.id === product.id ? product : p));
  }
  return [...products, product];
}

export function deleteProduct(id: string, products: Product[]): Product[] {
  return products.filter((p) => p.id !== id);
}

export function generateProductId(): string {
  return `item-${Date.now().toString(36)}`;
}