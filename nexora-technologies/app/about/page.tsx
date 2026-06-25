import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { Section } from "@/components/shared/section";
import { AboutContent } from "@/features/about/components/about-content";
import { CTASection } from "@/features/home/components/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexora Technologies — our mission, values, and the team behind your digital success.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-12 pt-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                About Us
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Building the Future,{" "}
                <GradientText as="span">One Project at a Time</GradientText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Nexora Technologies is a full-service software development agency
                dedicated to helping businesses of all sizes transform their
                ideas into powerful digital products.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <AboutContent />
      <CTASection />
    </>
  );
}
