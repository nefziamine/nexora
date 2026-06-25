import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { Section } from "@/components/shared/section";
import { ServicesGrid } from "@/features/services/components/services-grid";
import { CTASection } from "@/features/home/components/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nexora Technologies' full range of software development services — web, mobile, AI, custom software, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-12 pt-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                Services
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Solutions That{" "}
                <GradientText as="span">Drive Growth</GradientText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                From concept to launch and beyond, we provide comprehensive
                software development services tailored to your industry and goals.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
