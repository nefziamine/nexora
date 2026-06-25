"use client";

import {
  CheckCircle2,
  DollarSign,
  Headphones,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { whyChooseItems } from "@/data/why-choose";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Zap,
  CheckCircle2,
  Headphones,
  TrendingUp,
  DollarSign,
};

export function WhyChooseNexora() {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Why Nexora"
          title="Why Choose Nexora"
          description="Partner with a team that treats your success as our own."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? CheckCircle2;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-nexora-cyan/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-nexora-purple/10 text-nexora-purple">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
