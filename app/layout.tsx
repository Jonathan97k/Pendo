import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Pendo's Treats | Fresh Chapati, Shawarma & Samosas in Lilongwe",
  description:
    "Order delicious freshly prepared chapati, chicken shawarma and samosas from Pendo's Treats in Area 49, Lilongwe, Malawi.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    title: "Pendo's Treats | Fresh Chapati, Shawarma & Samosas in Lilongwe",
    description:
      "Order delicious freshly prepared chapati, chicken shawarma and samosas from Pendo's Treats in Area 49, Lilongwe, Malawi.",
    type: "website",
    locale: "en_MW",
    siteName: "Pendo's Treats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendo's Treats | Fresh Chapati, Shawarma & Samosas in Lilongwe",
    description:
      "Order delicious freshly prepared chapati, chicken shawarma and samosas from Pendo's Treats in Area 49, Lilongwe, Malawi.",
  },
  other: {
    manifest: "/manifest.json",
  },
};

export const viewport: Viewport = {
  themeColor: "#7B2230",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
