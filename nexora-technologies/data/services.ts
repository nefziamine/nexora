import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks and best practices.",
    icon: "Globe",
    features: [
      "Next.js & React applications",
      "E-commerce platforms",
      "Admin dashboards",
      "API integrations",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    icon: "Smartphone",
    features: [
      "React Native & Flutter",
      "iOS & Android native",
      "Push notifications",
      "Offline-first architecture",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Tailored software solutions designed to solve your unique business challenges and workflows.",
    icon: "Code2",
    features: [
      "Enterprise systems",
      "Workflow automation",
      "Legacy modernization",
      "Microservices architecture",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-powered features that give your business a competitive edge.",
    icon: "Brain",
    features: [
      "LLM integrations",
      "Predictive analytics",
      "Chatbots & assistants",
      "Computer vision",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love — from wireframes to polished design systems.",
    icon: "Palette",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Ongoing support, monitoring, and optimization to keep your digital products running flawlessly.",
    icon: "Shield",
    features: [
      "24/7 monitoring",
      "Security updates",
      "Performance optimization",
      "Feature enhancements",
    ],
  },
];
