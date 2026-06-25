"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { processSteps } from "@/data/process";

function StepNumber({ step, color }: { step: number; color: string }) {
  return (
    <span
      className="text-7xl font-black leading-none sm:text-8xl lg:text-9xl"
      style={{ color }}
    >
      {String(step).padStart(2, "0")}
    </span>
  );
}

function ProcessConnector({ flip }: { flip?: boolean }) {
  return (
    <div className="relative hidden h-24 w-full lg:block">
      <svg
        className="absolute left-1/2 h-full w-32 -translate-x-1/2"
        viewBox="0 0 128 96"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d={
            flip
              ? "M64 0 C64 48, 96 48, 96 96"
              : "M64 0 C64 48, 32 48, 32 96"
          }
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
        />
      </svg>
    </div>
  );
}

export function DevelopmentProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0c1222] py-20 text-white lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <Container>
        <SectionHeader
          label="How It Works"
          title="Our Development Process"
          description="From first conversation to launch and beyond — a proven five-step methodology."
          className="[&_h2]:text-white [&_p]:text-white/60 [&_span]:text-nexora-cyan"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 border-l border-dashed border-white/15 lg:block" />

          <div className="mb-8 hidden justify-center lg:flex">
            <div className="h-8 w-px border-l border-dashed border-white/30" />
          </div>

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.step}>
                <FadeIn delay={index * 0.1}>
                  <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
                    {/* Left column — desktop */}
                    <div
                      className={`hidden lg:flex lg:flex-col lg:justify-center ${
                        isEven ? "items-end text-right" : "items-start text-left"
                      }`}
                    >
                      {isEven ? (
                        <div className="flex items-center gap-3">
                          <StepNumber step={step.step} color={step.accentColor} />
                          <h3 className="text-xl font-bold sm:text-2xl">
                            {step.title}
                          </h3>
                        </div>
                      ) : (
                        <p className="max-w-xs text-sm leading-relaxed text-white/60 sm:text-base">
                          {step.description}
                        </p>
                      )}
                    </div>

                    {/* Center image */}
                    <motion.div
                      className="relative z-10 mx-auto"
                      whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-black/40 sm:h-44 sm:w-44">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 144px, 176px"
                        />
                      </div>
                    </motion.div>

                    {/* Right column — desktop */}
                    <div
                      className={`hidden lg:flex lg:flex-col lg:justify-center ${
                        isEven ? "items-start text-left" : "items-end text-right"
                      }`}
                    >
                      {isEven ? (
                        <p className="max-w-xs text-sm leading-relaxed text-white/60 sm:text-base">
                          {step.description}
                        </p>
                      ) : (
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold sm:text-2xl">
                            {step.title}
                          </h3>
                          <StepNumber step={step.step} color={step.accentColor} />
                        </div>
                      )}
                    </div>

                    {/* Mobile layout */}
                    <div className="flex flex-col items-center gap-3 text-center lg:hidden">
                      <div className="flex items-center gap-3">
                        {isEven ? (
                          <>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <StepNumber
                              step={step.step}
                              color={step.accentColor}
                            />
                          </>
                        ) : (
                          <>
                            <StepNumber
                              step={step.step}
                              color={step.accentColor}
                            />
                            <h3 className="text-lg font-bold">{step.title}</h3>
                          </>
                        )}
                      </div>
                      <p className="max-w-sm text-sm text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {index < processSteps.length - 1 && (
                  <ProcessConnector flip={index % 2 !== 0} />
                )}
              </div>
            );
          })}

          <div className="mt-8 hidden justify-center lg:flex">
            <div className="h-8 w-px border-l border-dashed border-white/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
