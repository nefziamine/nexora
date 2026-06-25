"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <Container className="relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Let&apos;s discuss your project and create a digital solution that
              drives real business results. Get a free consultation today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-nexora-blue hover:bg-white/90"
              >
                <Link href="/request-quote">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
