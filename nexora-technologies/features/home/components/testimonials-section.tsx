"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section variant="gradient">
      <Container>
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from businesses we've helped transform."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-sm font-bold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
