const CART_KEY = "pendos-treats-cart-v1";

export function loadCartFromStorage<T>(fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveCartToStorage<T>(value: T): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(value));
  } catch {
    // Storage may be unavailable (private mode); silently ignore.
  }
}

export function clearCartFromStorage(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.removeItem(CART_KEY);
  } catch {
    // ignore
  }
}