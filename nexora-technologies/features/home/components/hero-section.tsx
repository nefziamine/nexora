"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
      <div className="glow-orb -top-32 -left-32 h-96 w-96 bg-nexora-cyan" />
      <div className="glow-orb top-1/2 -right-32 h-80 w-80 bg-nexora-purple" />
      <div className="absolute inset-0 grid-pattern" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-nexora-cyan/30 bg-nexora-cyan/10 px-4 py-1.5 text-sm font-medium text-nexora-cyan">
              <Sparkles className="h-4 w-4" />
              Enterprise Software Solutions
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <GradientText as="span">Turning Ideas</GradientText>
              <br />
              Into Digital Reality
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/request-quote">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Expert Engineers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gradient-bg opacity-20 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Nexora Technologies"
                  width={400}
                  height={400}
                  className="mx-auto h-64 w-64 object-contain sm:h-80 sm:w-80"
                  priority
                />
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-nexora-blue">
                    Nexora Technologies
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {SITE_CONFIG.slogan}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
