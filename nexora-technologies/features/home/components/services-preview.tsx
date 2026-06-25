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
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
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

export function ServicesPreview() {
  return (
    <Section id="services">
      <Container>
        <SectionHeader
          label="What We Do"
          title="Our Services"
          description="End-to-end software development services tailored to your business needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <FadeIn key={service.id} delay={index * 0.08}>
                <Card className="group h-full hover:border-nexora-cyan/50 hover:shadow-lg hover:shadow-nexora-blue/10">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg gradient-bg text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
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
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
