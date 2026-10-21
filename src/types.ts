export type ViewType = 'home' | 'about' | 'service' | 'product';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
}

export interface ProductItem {
  id: string;
  category: 'web' | 'mobile' | 'enterprise' | 'all';
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  badge: string;
  status: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
