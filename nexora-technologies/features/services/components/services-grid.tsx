"use client";

import {
  Brain,
  Code2,
  Globe,
  Palette,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Code2,
  Brain,
  Palette,
  Shield,
};

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <FadeIn key={service.id} delay={index * 0.08}>
                <Card
                  id={service.id}
                  className="overflow-hidden scroll-mt-24"
                >
                  <div className="grid md:grid-cols-[auto_1fr]">
                    <div className="flex items-center justify-center bg-gradient-to-br from-nexora-cyan/10 to-nexora-purple/10 p-8 md:w-48">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl gradient-bg text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-nexora-cyan">
                          What&apos;s Included
                        </h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="h-1.5 w-1.5 rounded-full gradient-bg" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
