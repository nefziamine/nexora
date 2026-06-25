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
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseItems } from "@/data/why-choose";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Zap,
  CheckCircle2,
  Headphones,
  TrendingUp,
  DollarSign,
};

export function WhyChooseSection() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeader
            label="Why Nexora"
            title="Why Choose Nexora"
            description="We combine technical excellence with business understanding to deliver results that matter."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? CheckCircle2;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <Card className="h-full transition-all hover:border-nexora-cyan/30 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-nexora-cyan/10">
                      <Icon className="h-5 w-5 text-nexora-cyan" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
