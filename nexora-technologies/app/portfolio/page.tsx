import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { Section } from "@/components/shared/section";
import { PortfolioGrid } from "@/features/portfolio/components/portfolio-grid";
import { CTASection } from "@/features/home/components/cta-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Nexora Technologies' portfolio of successful projects across fitness, hospitality, edtech, and startups.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="pb-12 pt-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                Portfolio
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Projects That{" "}
                <GradientText as="span">Speak for Themselves</GradientText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Real solutions built for real businesses. See how we&apos;ve helped
                our clients achieve measurable results.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
