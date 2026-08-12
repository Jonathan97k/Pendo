/// <reference types="next" />
/// <reference types="next/image-types/global" />

export type ProductCategory = "Shawarma" | "Chapati" | "Samosa" | "Extras";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  altText: string;
  category: ProductCategory;
  available: boolean;
  createdAt: string;
};

export type CartItem = Pick<Product, "id" | "name" | "price" | "image"> & {
  quantity: number;
};

export type OrderType = "Pickup" | "Delivery";

export type OrderDetails = {
  customerName: string;
  phone: string;
  orderType: OrderType;
  deliveryAddress?: string;
  notes?: string;
};

export type OrderItem = {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  customerName: string;
  phone: string;
  orderType: OrderType;
  deliveryAddress: string | null;
  items: OrderItem[];
  total: number;
  notes: string | null;
  status: "placed" | "preparing" | "completed";
  createdAt: string;
};