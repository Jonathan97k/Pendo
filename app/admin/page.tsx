import type { Metadata } from "next";
import AdminGate from "@/components/admin/AdminGate";
import DashboardOverview from "@/components/admin/DashboardOverview";

export const metadata: Metadata = {
  title: "Admin Dashboard | Pendo's Treats",
  description: "Admin dashboard for Pendo's Treats.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <AdminGate>
          <DashboardOverview />
        </AdminGate>
      </div>
    </section>
  );
}