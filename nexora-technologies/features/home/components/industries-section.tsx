"use client";

import {
  Building2,
  Dumbbell,
  GraduationCap,
  Rocket,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { industries } from "@/data/industries";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  UtensilsCrossed,
  Stethoscope,
  Rocket,
  Building2,
  GraduationCap,
};

export function IndustriesSection() {
  return (
    <Section variant="gradient">
      <Container>
        <SectionHeader
          label="Who We Serve"
          title="Industries We Serve"
          description="Specialized solutions for businesses across diverse sectors."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? Building2;
            return (
              <FadeIn key={industry.id} delay={index * 0.08}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-nexora-purple/50 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-nexora-blue/10 text-nexora-blue transition-colors group-hover:gradient-bg group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
