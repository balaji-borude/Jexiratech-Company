import type { ServiceItem, ProductItem, TeamMember, ProcessStep, FaqItem } from '../types';

export const HERO_TITLES: Record<string, { title: string; subtitle: string; badge: string }> = {
  home: {
    title: 'Software that turns ideas into working products',
    subtitle: 'Jexiratech Solutions designs and builds custom web, mobile, and business software with transparent milestones and code you own.',
    badge: 'Custom software studio, built for growing teams',
  },
  about: {
    title: 'A dedicated team with a direct line to you',
    subtitle: 'Meet the engineers and designers who plan, build, and support your software without intermediaries.',
    badge: 'Our Mission & Story',
  },
  service: {
    title: 'From first sketch to ongoing support',
    subtitle: 'Everything you need to design, build, launch, and scale dependable digital products.',
    badge: 'End-to-End Capabilities',
  },
  product: {
    title: 'Products, prototypes & live demos',
    subtitle: 'Explore our recent platforms and request a tailored walkthrough for your company.',
    badge: 'Engineered for Performance',
  },
};

export const FEATURE_TICKER = [
  {
    icon: '🧩',
    title: 'Custom Software',
    desc: 'Built specifically around your team’s workflow',
  },
  {
    icon: '📱',
    title: 'Web & Mobile Apps',
    desc: 'High-performance apps for Browser, Android & iOS',
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    desc: 'ERP & CRM integrations that eliminate manual errors',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure with 99.9% uptime and security',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    icon: '🧩',
    title: 'Custom Software Development',
    shortDesc: 'Tools shaped to your workflow, from internal portals to customer platforms.',
    fullDesc: 'We build tailored software architectures that solve complex business challenges, replace fragile spreadsheets, and consolidate disparate systems into one seamless application.',
    deliverables: ['Custom Web Portals', 'Automated Workflows', 'Role-Based Access Control', 'REST & GraphQL APIs'],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'web-apps',
    icon: '🌐',
    title: 'Web Application Development',
    shortDesc: 'Fast, secure and responsive web apps and company portals.',
    fullDesc: 'Modern single-page applications and responsive platforms designed for lightning-fast load times, bank-grade data security, and effortless user onboarding.',
    deliverables: ['Interactive Dashboards', 'SaaS Platforms', 'Progressive Web Apps (PWA)', 'High-Conversion Landing Pages'],
    techStack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'mobile-apps',
    icon: '📱',
    title: 'Mobile App Development',
    shortDesc: 'Android and iOS apps, native or cross-platform, built to feel ultra smooth.',
    fullDesc: 'Native-feel iOS and Android applications utilizing Flutter and React Native. Enjoy native performance, offline sync capabilities, and seamless app store releases.',
    deliverables: ['Cross-Platform Apps', 'Offline-First Sync', 'Push Notifications', 'App Store & Play Store Publishing'],
    techStack: ['Flutter', 'React Native', 'Firebase', 'Swift / Kotlin'],
  },
  {
    id: 'ui-ux',
    icon: '🎨',
    title: 'UI/UX Design & Prototyping',
    shortDesc: 'Clean, simple interfaces people understand and love the first time.',
    fullDesc: 'User-centered design that minimizes friction. We craft interactive Figma prototypes, design tokens, and user journey maps so you can test and approve before writing a single line of code.',
    deliverables: ['Figma Clickable Prototypes', 'Design System & Component Library', 'User Journey Mapping', 'Mobile & Desktop Wireframes'],
    techStack: ['Figma', 'Design Systems', 'Micro-Interactions', 'Accessibility'],
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'ERP / CRM & Business Automation',
    shortDesc: 'CRM, ERP and integrations that remove repeated manual work and errors.',
    fullDesc: 'Streamline your operations by unifying inventory, sales, customer support, and invoicing. We build custom ERP/CRM modules and connect your legacy software via custom webhooks.',
    deliverables: ['Custom CRM/ERP Modules', 'Third-Party API Integrations', 'Automated Email & WhatsApp Alerts', 'Automated Financial Reports'],
    techStack: ['Python', 'PostgreSQL', 'Celery', 'Webhooks'],
  },
  {
    id: 'cloud-support',
    icon: '☁️',
    title: 'Cloud Architecture & Support',
    shortDesc: 'Hosting, monitoring, automated backups, and an on-call team for peace of mind.',
    fullDesc: 'Production-ready cloud deployment with Docker, Kubernetes, and serverless environments. We provide ongoing monitoring, vulnerability patching, and performance optimization.',
    deliverables: ['CI/CD Pipeline Setup', 'Cloud Server Optimization', '24/7 Server Health Monitoring', 'Automated Daily Backups'],
    techStack: ['AWS', 'Docker', 'Nginx', 'GitHub Actions'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We learn your goals, users, and technical constraints.',
    detail: 'Through an initial in-depth consultation, we map out your requirements, user roles, business logic, and timeline constraints to form a solid roadmap.',
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'Scope, timeline, and fixed/milestone estimates in writing.',
    detail: 'No hidden costs or scope creep. You receive a clear proposal with phased deliverables, milestones, tech stack recommendations, and exact delivery dates.',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Interactive screens you review and approve before we build.',
    detail: 'We provide clickable wireframes and high-fidelity mockups so you experience the look, feel, and user journey before production code is written.',
  },
  {
    step: '04',
    title: 'Build & Test',
    desc: 'Bi-weekly demo builds, continuous integration, and rigorous testing.',
    detail: 'We build in transparent sprints. You receive staging links to test real builds, backed by automated unit and security testing.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    desc: 'Zero-downtime deployment, code handover, and ongoing care.',
    detail: 'We handle production deployment, domain/SSL setup, transfer 100% of the repository and IP rights to you, and remain on-call for continuous improvements.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'jexiflow',
    category: 'enterprise',
    title: 'JexiFlow ERP',
    tagline: 'Multi-branch inventory and smart billing platform for distributors.',
    problem: 'Manual inventory tracking across 4 warehouses resulted in stock discrepancies, lost invoices, and delayed customer deliveries.',
    solution: 'Built an unified ERP with real-time barcode scanning, automated PO generation, role-based branch security, and GST invoicing.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    badge: 'Enterprise Platform',
    status: 'Live Deployment',
  },
  {
    id: 'omnisync',
    category: 'mobile',
    title: 'OmniSync Mobile',
    tagline: 'Offline-first field operations & order capture mobile suite.',
    problem: 'Field sales representatives struggled in low-connectivity rural zones, resulting in delayed orders and missed follow-ups.',
    solution: 'Engineered an offline-first mobile app using SQLite local caching that auto-synchronizes securely whenever cellular signal returns.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    badge: 'iOS & Android',
    status: 'In Production',
  },
  {
    id: 'pulsepay',
    category: 'web',
    title: 'PulsePay Gateway Hub',
    tagline: 'Ultra-fast payment orchestration & recurring subscription portal.',
    problem: 'Subscription SaaS startups lost 15% revenue due to failed recurring payments, unclear dunning logic, and manual reconciliations.',
    solution: 'Created an intelligent payment gateway router with smart retries, multi-currency checkout, and automated customer receipt management.',
    tech: ['React', 'TypeScript', 'Python', 'AWS Lambda'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    badge: 'FinTech Suite',
    status: 'Demo Available',
  },
  {
    id: 'medconnect',
    category: 'web',
    title: 'MedConnect Pro Portal',
    tagline: 'HIPAA-compliant telemedicine & automated patient appointment suite.',
    problem: 'Healthcare clinics were overwhelmed by phone scheduling, lost records, and fragmented doctor-patient video consultations.',
    solution: 'Designed an encrypted patient portal with WebRTC high-definition video calls, integrated calendar booking, and digital prescriptions.',
    tech: ['React', 'Next.js', 'WebRTC', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    badge: 'HealthTech',
    status: 'Client Showcase',
  },
];

export const TECH_CATEGORIES = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5/CSS3', 'Vue.js'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI', 'Express', 'Java', 'Go'],
  },
  {
    name: 'Mobile',
    items: ['Flutter', 'React Native', 'Android (Kotlin)', 'iOS (Swift)'],
  },
  {
    name: 'Database & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Firebase'],
  },
];

export const VALUES = [
  {
    title: 'Quality First',
    desc: 'Tested, well-documented, and maintainable code built to scale with your business.',
    icon: '✨',
  },
  {
    title: 'Open Communication',
    desc: 'Plain language, transparent updates, and direct access to the engineers building your product.',
    icon: '💬',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We set realistic milestone-driven plans, keep you in the loop, and stick to them.',
    icon: '⏱️',
  },
  {
    title: 'Your Code, Your Data',
    desc: 'Full intellectual property ownership from day one with strict non-disclosure agreements.',
    icon: '🔒',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Balaji & Engineering Leads',
    role: 'Founder & Principal Architect',
    bio: 'Specialized in building fullstack scalable systems, business automation software, and robust mobile architectures.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    skills: ['Architecture', 'React', 'Node.js', 'Cloud Infrastructure'],
  },
  {
    name: 'Full-Stack Team',
    role: 'Product & Web Engineering',
    bio: 'Dedicated engineers transforming technical specifications into responsive, resilient web and mobile applications.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    skills: ['React Native', 'Python', 'PostgreSQL', 'APIs'],
  },
  {
    name: 'UI/UX & Design Studio',
    role: 'Product Design & Experience Lead',
    bio: 'Obsessed with human-computer interaction, clean typography, intuitive user journeys, and pixel-perfect design systems.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    skills: ['Figma', 'Design Systems', 'Micro-Animations', 'User Research'],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do I own 100% of the source code and intellectual property?',
    answer: 'Yes, unconditionally. Upon completion and milestone settlement, you receive complete ownership of all repository source code, assets, design files, and documentation. There are no vendor lock-ins or recurring licensing fees.',
  },
  {
    question: 'How do you price projects and structure milestones?',
    answer: 'We believe in transparent, fixed-scope milestones for clearly defined projects, or flexible sprint-based pricing for evolving products. You will always know the exact deliverables and cost before work begins.',
  },
  {
    question: 'How does the free first consultation work?',
    answer: 'You share your idea or business challenge through our form or WhatsApp. Within one business day, we review your requirements, schedule a direct 30-minute discovery call, and provide initial feasibility guidance and an estimated budget range—completely free of obligation.',
  },
  {
    question: 'Can you maintain, scale, or refactor our existing software?',
    answer: 'Absolutely. We regularly audit existing codebases, patch vulnerabilities, improve page speeds, add new features, or re-architect legacy systems into modern React and cloud architectures.',
  },
  {
    question: 'Where is Jexiratech located and what regions do you serve?',
    answer: 'Jexiratech Solutions is based in Maharashtra, India. We collaborate with clients across India, North America, Europe, and the Middle East, maintaining clear asynchronous updates and real-time support windows.',
  },
];
