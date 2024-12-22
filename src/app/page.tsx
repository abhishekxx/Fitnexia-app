import AboutUs from "@/components/aboutus/AboutUs";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
// import NavBar from "@/components/navbar/NavBar";
import { PricingSection } from "@/components/pricing/PriceSection";
import { ProgramSection } from "@/components/program/ProgramSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { ChooseUs } from "@/components/whyus/ChooseUs";

export default function Home() {
  return (
      <div className="">
        <HeroSection />
        <AboutUs />
        <ProgramSection />
        <ChooseUs />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
      </div>
  );
}
