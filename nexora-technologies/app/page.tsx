import { CTASection } from "@/features/home/components/cta-section";
import { DevelopmentProcess } from "@/features/home/components/development-process";
import { FeaturedProjects } from "@/features/home/components/featured-projects";
import { HeroSection } from "@/features/home/components/hero-section";
import { IndustriesSection } from "@/features/home/components/industries-section";
import { ServicesPreview } from "@/features/home/components/services-preview";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { TrustedTechnologies } from "@/features/home/components/trusted-technologies";
import { WhyChooseNexora } from "@/features/home/components/why-choose-nexora";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedTechnologies />
      <ServicesPreview />
      <IndustriesSection />
      <FeaturedProjects />
      <DevelopmentProcess />
      <WhyChooseNexora />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
