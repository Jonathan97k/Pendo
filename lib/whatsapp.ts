import type { CartItem, OrderDetails } from "@/types/product";
import { formatPrice } from "./utils";
import { BUSINESS } from "./constants";

export function buildOrderMessage(
  items: CartItem[],
  details: OrderDetails,
): string {
  const lines: string[] = [];
  lines.push(`Hello ${BUSINESS.name}! 👋`);
  lines.push("I would like to place an order.");
  lines.push("");

  lines.push("Customer Details");
  lines.push(`Name: ${details.customerName}`);
  lines.push(`Phone: ${details.phone}`);
  lines.push(`Order Type: ${details.orderType}`);
  if (details.orderType === "Delivery" && details.deliveryAddress?.trim()) {
    lines.push(`Delivery Address: ${details.deliveryAddress.trim()}`);
  }
  lines.push("");

  lines.push("My Order");
  items.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.name} x ${item.quantity} — ${formatPrice(
        item.price * item.quantity,
      )}`,
    );
  });
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  lines.push(`Total: ${formatPrice(total)}`);
  if (details.notes?.trim()) {
    lines.push(`Notes: ${details.notes.trim()}`);
  }
  lines.push("");
  lines.push("Thank you!");
  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`;
}

export function openWhatsAppOrder(
  items: CartItem[],
  details: OrderDetails,
): boolean {
  const message = buildOrderMessage(items, details);
  const opened = window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  return opened !== null;
}