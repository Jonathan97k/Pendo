# Pendo's Treats 🧆🌮

A complete, modern, production-ready food ordering website for **Pendo's Treats**, a Malawi food business in Area 49, New Gulliver, Lilongwe.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** and **Lucide React** — fully responsive, mobile-first, and ready to deploy on Vercel.

## ✨ Features

- **Premium landing page** — hero with food photography, featured menu, "Why Choose Us", 3-step ordering guide, location section and a bold final CTA
- **Full menu page** — category-filtered product cards with add-to-cart
- **About & Gallery pages** — brand story, values, and a lightbox gallery of the provided food photos
- **Contact page** — working frontend contact form (backend-ready), call/WhatsApp/email shortcuts
- **Shopping cart** — add/remove items, quantity controls, subtotal, empty state, and **localStorage persistence**
- **WhatsApp checkout** — validates the form, then generates a properly URL-encoded WhatsApp order message and opens it in a new tab
- **Toast notifications** — "Added to cart" confirmations
- **Admin portal** (`/admin`) — demo frontend login, dashboard overview (totals + order placeholder), and product management (add/edit/delete/toggle availability) with a clean repository layer for later Supabase migration
- **SEO & accessibility** — metadata, Open Graph, semantic HTML, image alt text, keyboard-friendly modals, ARIA labels

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## 🧭 Pages

| Route           | Description                              |
| --------------- | ---------------------------------------- |
| `/`             | Home                                     |
| `/menu`         | Full menu with add-to-cart               |
| `/about`        | About the business                       |
| `/gallery`      | Food gallery with lightbox               |
| `/contact`      | Contact info + form                      |
| `/order`        | Checkout → WhatsApp order                |
| `/admin`        | Admin dashboard (demo login)             |
| `/admin/products` | Product management                     |

## 🔐 Admin demo login

Open `/admin` and sign in with the demo credentials:

```
Email:    admin@pendos.com
Password: demo1234
```

> **Important:** This is a **frontend-only demo auth**. It is NOT secure. Replace it with a real provider (Supabase, Firebase, Clerk) before going live — see below.

## 🗄️ Future steps for a real database & secure auth

1. **Supabase** — create a free project and add tables for `products`, `orders` and `order_items` (the types already exist in `types/product.ts`). Point the functions in `lib/product-store.ts` and the WhatsApp order submission at Supabase instead of localStorage.
2. **Authentication** — replace `lib/admin-auth.ts` (demo) with Supabase Auth / Clerk, and protect `/admin` with a server-side check.
3. **Contact form backend** — connect the form in `components/ContactForm.tsx` to an API route or email service (e.g. Resend). Right now it shows a success state without pretending to send email.
4. **Live order management** — orders currently arrive via WhatsApp; a Supabase `orders` table would let the admin dashboard list them.

Environment variables live in `.env.example` — copy it to `.env.local` and fill in real values as needed. No secrets are hard-coded.

## 📁 Key files

```
app/                    Pages (App Router)
components/             Reusable UI components (Navbar, Hero, CartDrawer, OrderForm, admin…)
context/CartContext.tsx Cart state + localStorage + toasts
lib/                    utils, whatsapp, storage, product-store, admin-auth, constants
data/products.ts        Initial menu products
types/product.ts        Shared TypeScript types (Product, Order, …)
public/images/          Provided food photos
```
