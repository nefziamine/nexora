import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { Section } from "@/components/shared/section";
import { QuoteForm } from "@/features/quote/components/quote-form";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Request a free project quote from Nexora Technologies. Tell us about your project and get a customized proposal.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Section className="pb-12 pt-16">
        <Container size="narrow">
          <FadeIn>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                Get Started
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Request a{" "}
                <GradientText as="span">Free Quote</GradientText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Share your project details and receive a tailored proposal within
                48 hours. No commitment required.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <Section>
        <Container size="narrow">
          <FadeIn>
            <QuoteForm />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
