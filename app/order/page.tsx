import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import OrderClient from "@/components/OrderClient";

export const metadata: Metadata = {
  title: "Order | Pendo's Treats",
  description:
    "Place your order at Pendo's Treats for fresh chapati, chicken shawarma and samosas in Lilongwe. Order via WhatsApp.",
};

export default function OrderPage() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Checkout"
          title="Complete Your Order"
          description="Fill in your details, review your order, then send it to us on WhatsApp to confirm."
        />
        <div className="mt-12">
          <OrderClient />
        </div>
      </div>
    </section>
  );
}