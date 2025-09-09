import Footer from "@/components/common/Footer";
import AboutSection from "@/components/sections/AboutSection";
import CarouselSection from "@/components/sections/CarouselSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import PpkaSection from "@/components/sections/PpkaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <CTASection />
      <PpkaSection />
      <AboutSection />
      <Footer />
    </>
  );
}
