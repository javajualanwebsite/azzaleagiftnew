import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <ValueProps />
      <WorkflowSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
