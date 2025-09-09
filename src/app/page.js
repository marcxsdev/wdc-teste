import CarouselSection from "@/components/sections/CarouselSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import PpkaCard from "@/components/ui/PpkaCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <CTASection />
    </>
  );
}
