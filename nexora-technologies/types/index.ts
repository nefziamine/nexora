export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  results: string[];
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
  accentColor: string;
}

export interface Technology {
  name: string;
  category: string;
  icon: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}
