"use client";

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioProjects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Fitness: "from-green-500 to-emerald-600",
  Hospitality: "from-orange-500 to-amber-600",
  EdTech: "from-blue-500 to-indigo-600",
  SaaS: "from-purple-500 to-violet-600",
};

export function PortfolioGrid() {
  return (
    <Section>
      <Container>
        <div className="space-y-16">
          {portfolioProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card
                id={project.id}
                className="overflow-hidden scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2">
                  <div
                    className={`flex min-h-[280px] flex-col justify-end bg-gradient-to-br p-8 ${
                      categoryColors[project.category] ??
                      "from-nexora-cyan to-nexora-purple"
                    }`}
                  >
                    <span className="inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
                      {project.title}
                    </h2>
                  </div>
                  <CardContent className="flex flex-col justify-center p-8">
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="mt-6">
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-3 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-nexora-cyan" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
