import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Pendo's Treats",
  description:
    "Take a look at the freshly prepared chapati, chicken shawarma and samosas from Pendo's Treats in Lilongwe.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Gallery"
            title="Freshly Made Treats"
            description="A look at the delicious food we prepare every day at Pendo's Treats."
          />
        </div>
      </section>
      <Gallery />
    </>
  );
}