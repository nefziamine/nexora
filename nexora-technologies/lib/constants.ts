export const SITE_CONFIG = {
  name: "Nexora Technologies",
  slogan: "Turning Ideas Into Digital Reality",
  description:
    "Nexora Technologies helps businesses transform their ideas into digital products through custom web development, mobile applications, AI solutions, and software consulting.",
  email: "hello@nexoratech.com",
  phone: "+1 (555) 234-5678",
  address: "100 Innovation Drive, San Francisco, CA 94105",
  social: {
    linkedin: "https://linkedin.com/company/nexora-technologies",
    twitter: "https://twitter.com/nexoratech",
    github: "https://github.com/nexora-technologies",
  },
  logo: "/startup%20logo.png",
} as const;

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";
