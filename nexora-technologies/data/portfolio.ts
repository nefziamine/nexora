import type { PortfolioProject } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gym-management",
    title: "FitPulse Gym Management Platform",
    description:
      "A comprehensive gym management system with member tracking, class scheduling, payment processing, and real-time analytics dashboard.",
    category: "Fitness",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe"],
    image: "/portfolio/gym.jpg",
    results: [
      "40% reduction in admin workload",
      "2,500+ active members managed",
      "98% member retention rate",
    ],
    href: "/portfolio#gym-management",
  },
  {
    id: "restaurant-system",
    title: "SavorPro Restaurant Management System",
    description:
      "End-to-end restaurant solution featuring online ordering, kitchen display system, inventory management, and multi-location support.",
    category: "Hospitality",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/portfolio/restaurant.jpg",
    results: [
      "35% increase in order volume",
      "15 min average order processing",
      "12 locations deployed",
    ],
    href: "/portfolio#restaurant-system",
  },
  {
    id: "skill-evaluator",
    title: "SkillForge Evaluator Platform",
    description:
      "An AI-powered skill assessment platform for technical hiring with automated coding challenges, proctoring, and detailed candidate reports.",
    category: "EdTech",
    technologies: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    image: "/portfolio/skill.jpg",
    results: [
      "60% faster hiring process",
      "10,000+ assessments completed",
      "92% employer satisfaction",
    ],
    href: "/portfolio#skill-evaluator",
  },
  {
    id: "startup-mvp",
    title: "LaunchPad MVP Builder",
    description:
      "A rapid prototyping platform that helps startups go from idea to functional MVP in weeks, with built-in analytics and user feedback tools.",
    category: "SaaS",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    image: "/portfolio/startup.jpg",
    results: [
      "4-week average MVP delivery",
      "50+ startups launched",
      "$2M+ in seed funding raised",
    ],
    href: "/portfolio#startup-mvp",
  },
];
