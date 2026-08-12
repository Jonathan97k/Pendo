import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowToOrder from "@/components/HowToOrder";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <HowToOrder />
      <LocationSection />
      <FinalCTA />
    </>
  );
}