import type { Metadata } from "next";
import AdminGate from "@/components/admin/AdminGate";
import ProductManager from "@/components/admin/ProductManager";

export const metadata: Metadata = {
  title: "Manage Products | Pendo's Treats",
  description: "Add, edit and manage products for Pendo's Treats.",
  robots: { index: false, follow: false },
};

export default function AdminProductsPage() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <AdminGate>
          <ProductManager />
        </AdminGate>
      </div>
    </section>
  );
}