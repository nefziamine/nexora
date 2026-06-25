import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientText } from "@/components/shared/gradient-text";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/features/contact/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nexora Technologies. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-12 pt-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                Contact
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s Start a{" "}
                <GradientText as="span">Conversation</GradientText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a project in mind? We&apos;d love to hear from you. Reach out
                and let&apos;s discuss how we can help.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
