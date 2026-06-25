"use client";

import { Target, Eye, Heart, Award } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses with innovative software solutions that drive growth, efficiency, and competitive advantage in the digital age.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted technology partner for businesses worldwide, known for excellence, integrity, and transformative results.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, innovation, collaboration, and client success guide everything we do. We treat every project as if it were our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of code quality, design, and delivery. Good enough is never good enough.",
  },
];

const team = [
  { name: "Alex Thompson", role: "CEO & Founder", expertise: "Strategy & Leadership" },
  { name: "Priya Sharma", role: "CTO", expertise: "Architecture & Engineering" },
  { name: "David Kim", role: "Head of Design", expertise: "UI/UX & Product Design" },
  { name: "Maria Santos", role: "Lead Developer", expertise: "Full-Stack Development" },
];

export function AboutContent() {
  return (
    <>
      <Section variant="muted">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-bg text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2018, Nexora Technologies started with a simple belief:
                every business deserves access to world-class software development,
                regardless of size. What began as a small team of passionate
                developers has grown into a full-service agency serving clients
                across gyms, restaurants, clinics, startups, and enterprises.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we&apos;ve delivered over 150 projects, helped startups
                secure millions in funding, and transformed how businesses operate
                through technology. Our team of 50+ engineers, designers, and
                consultants brings deep expertise across modern tech stacks.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Leadership Team
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full gradient-bg text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-nexora-cyan">{member.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {member.expertise}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
