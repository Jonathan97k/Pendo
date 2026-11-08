import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    description:
      "Freshly prepared chicken shawarma filled with delicious chicken, fresh vegetables and tasty ingredients.",
    price: 6000,
    image: "/images/chicken-shawarma-pendo.webp",
    altText: "Freshly prepared chicken shawarma from Pendo's Treats",
    category: "Shawarma",
    available: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "sausage-shawarma",
    name: "Sausage Shawarma",
    description:
      "Freshly prepared sausage shawarma wrapped with fresh vegetables and tasty ingredients.",
    price: 5500,
    image: "/images/sausage-shawarma-pendo.webp",
    altText: "Fresh sausage shawarma served with vegetables in a takeaway tray from Pendo's Treats",
    category: "Shawarma",
    available: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "chapati-with-2-eggs",
    name: "Chapati with 2 Eggs",
    description:
      "Freshly prepared soft chapati served with two delicious eggs.",
    price: 3000,
    image: "/images/chapati-eggs-pendo.webp",
    altText: "Fresh chapati served with eggs from Pendo's Treats",
    category: "Chapati",
    available: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "plain-chapati",
    name: "Plain Chapati",
    description: "Fresh, soft and delicious homemade chapati.",
    price: 1300,
    image: "/images/plain-chapati-1.jpg",
    altText: "Fresh plain chapati from Pendo's Treats",
    category: "Chapati",
    available: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "samosa",
    name: "Samosa",
    description: "Freshly prepared crispy and delicious samosas.",
    price: 1000,
    image: "/images/food-4.webp",
    altText: "Crispy freshly prepared samosas from Pendo's Treats",
    category: "Samosa",
    available: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/food-1.webp", alt: "Chicken shawarma" },
  { src: "/images/food-2.webp", alt: "Chapati with eggs" },
  { src: "/images/food-3.webp", alt: "Plain chapati" },
  { src: "/images/food-4.webp", alt: "Samosa" },
  { src: "/images/food-5.webp", alt: "Freshly prepared treats" },
  { src: "/images/plain-chapati-1.jpg", alt: "Plain chapati on a plate" },
  { src: "/images/plain-chapati-2.jpg", alt: "Fresh chapatis packed for takeaway" },
  { src: "/images/plain-chapati-3.jpg", alt: "Plain chapatis in foil takeaway packaging" },
];

export function getAvailableProducts(): Product[] {
  return PRODUCTS.filter((p) => p.available);
}
