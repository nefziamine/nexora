"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { technologies } from "@/data/technologies";

export function TrustedTechnologies() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader
          label="Tech Stack"
          title="Trusted Technologies"
          description="We leverage industry-leading tools and frameworks to build robust, scalable solutions."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <FadeIn key={tech.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-lg hover:shadow-nexora-blue/10"
              >
                <div
                  className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-muted/50 p-2 ${
                    tech.name === "Next.js" ? "px-0" : ""
                  }`}
                >
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={48}
                    height={48}
                    className={
                      tech.name === "Next.js"
                        ? "h-10 w-20 max-w-none object-contain object-right"
                        : "h-full w-full object-contain"
                    }
                  />
                </div>
                <span className="text-sm font-semibold">{tech.name}</span>
                <span className="text-xs text-muted-foreground">
                  {tech.category}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
