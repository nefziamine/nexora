"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Fitness: "from-green-500 to-emerald-600",
  Hospitality: "from-orange-500 to-amber-600",
  EdTech: "from-blue-500 to-indigo-600",
  SaaS: "from-purple-500 to-violet-600",
};

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Real solutions we've built for businesses like yours."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link href={project.href} className="group block">
                <article className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-nexora-cyan/50 hover:shadow-xl">
                  <div
                    className={`relative h-48 bg-gradient-to-br ${
                      categoryColors[project.category] ?? "from-nexora-cyan to-nexora-purple"
                    } p-6`}
                  >
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-nexora-cyan opacity-0 transition-opacity group-hover:opacity-100">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
