import type { ServiceItem, ProductItem, TeamMember, ProcessStep, FaqItem } from '../types';

export const HERO_TITLES: Record<string, { title: string; subtitle: string; badge: string }> = {
  home: {
    title: 'Hire a dedicated freelance development team for your next product',
    subtitle: 'Jexiratech Solutions connects you with senior freelance React, Flutter, and Full-Stack developers in India. We engineer custom web apps, startup MVPs, and business software with fixed milestones and 100% code ownership.',
    badge: 'Hire Remote Developers India · Startups & Enterprises',
  },
  about: {
    title: 'Senior freelance engineers with a direct line to you',
    subtitle: 'Meet the software developers in Maharashtra, India who plan, code, and support your digital product without middlemen or agency bloat.',
    badge: 'Maharashtra, India · Global Delivery',
  },
  service: {
    title: 'End-to-end web, mobile & custom software development',
    subtitle: 'From startup MVP prototyping and React web application development to Flutter mobile apps and custom CRM / ERP automation.',
    badge: 'Freelance Software Studio & Capabilities',
  },
  product: {
    title: 'Products, prototypes & live client systems',
    subtitle: 'Explore custom software architectures, SaaS platforms, and mobile apps engineered by our freelance team.',
    badge: 'Engineered for Performance & Scale',
  },
};

export const FEATURE_TICKER = [
  {
    icon: '/icons/custom.png',
    title: 'Freelance Web & App Developers',
    desc: 'Senior React, Flutter & Full-Stack engineers on demand',
  },
  {
    icon: '/icons/app-development.png',
    title: 'Startup MVP Development',
    desc: 'Launch investor-ready web & mobile MVPs in 4–8 weeks',
  },
  {
    icon: '/icons/automation.png',
    title: 'Custom CRM & ERP Software',
    desc: 'Tailored business automation that eliminates spreadsheets',
  },
  {
    icon: '/icons/infrastructure.png',
    title: 'Cloud Architecture & DevOps',
    desc: 'Scalable AWS infrastructure with 99.9% uptime and security',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'web-apps',
    icon: '/icons/app-development.png',
    title: 'React & Next.js Web Application Development',
    shortDesc: 'Hire freelance React developers & full-stack engineers for fast, responsive web apps and SaaS platforms.',
    fullDesc: 'Modern single-page applications, SaaS platforms, and enterprise client portals engineered with React, Next.js, and TypeScript. Optimized for lightning-fast speeds, SEO discoverability, bank-grade data security, and effortless customer onboarding.',
    deliverables: ['Next.js & React Web Apps', 'SaaS Platform Development', 'Interactive Portals & Dashboards', 'Progressive Web Apps (PWA)'],
    techStack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'mobile-apps',
    icon: '/icons/app-development.png',
    title: 'Flutter & React Native Mobile App Development',
    shortDesc: 'Cross-platform iOS and Android mobile apps engineered with native 60fps performance and offline sync.',
    fullDesc: 'Hire freelance Flutter and React Native developers for high-performance mobile applications. We deliver fluid native experiences, offline-first SQLite local caching, push notification integration, and direct Google Play and Apple App Store launches.',
    deliverables: ['Cross-Platform Apps (iOS & Android)', 'Offline-First Sync & SQLite', 'Push Notifications & Deep Linking', 'App Store & Play Store Launch'],
    techStack: ['Flutter', 'React Native', 'Firebase', 'Swift / Kotlin'],
  },
  {
    id: 'mvp-development',
    icon: '/icons/custom.png',
    title: 'MVP Development for Startups',
    shortDesc: 'Affordable, rapid prototype and MVP development services in India to validate ideas and raise funding.',
    fullDesc: 'Specialized freelance developers for startup MVPs. We take your concept from user journey mapping and clickable wireframes to a fully functioning production build in 4 to 8 weeks, ready for early user traction, feedback, and angel/VC pitches.',
    deliverables: ['Rapid 4-to-8 Week MVP Delivery', 'Interactive Figma Prototyping', 'Scalable Architecture & Clean Code', '100% Source Code Transfer'],
    techStack: ['React', 'Flutter', 'Node.js', 'Supabase / Firebase'],
  },
  {
    id: 'custom-software',
    icon: '/icons/automation.png',
    title: 'Custom CRM & ERP Software Development',
    shortDesc: 'ERP software development for small businesses and custom CRM development shaped to your operations.',
    fullDesc: 'Streamline your operations by unifying inventory, sales, customer relationships, and invoicing. We build custom CRM/ERP modules that replace fragile spreadsheets and connect your legacy workflows via automated webhooks.',
    deliverables: ['Custom CRM & ERP Modules', 'Automated GST Invoicing & POs', 'Third-Party API Integrations', 'Automated Email & WhatsApp Alerts'],
    techStack: ['Python', 'PostgreSQL', 'Node.js', 'Webhooks'],
  },
  {
    id: 'ui-ux',
    icon: '/icons/custom.png',
    title: 'UI/UX Design & Prototyping Services',
    shortDesc: 'Clean, intuitive interfaces and clickable Figma prototypes that users understand and love immediately.',
    fullDesc: 'User-centered design that minimizes friction. We craft interactive Figma prototypes, design tokens, and user journey maps so you can test, iterate, and approve every screen before engineering begins.',
    deliverables: ['Figma Clickable Prototypes', 'Design System & Component Library', 'User Journey Mapping', 'Mobile & Desktop Wireframes'],
    techStack: ['Figma', 'Design Systems', 'Micro-Interactions', 'Accessibility'],
  },
  {
    id: 'cloud-support',
    icon: '/icons/infrastructure.png',
    title: 'Cloud Architecture & DevOps Services',
    shortDesc: 'Scalable AWS cloud hosting, automated CI/CD deployment pipelines, and 24/7 server monitoring.',
    fullDesc: 'Production-ready cloud deployment with Docker, AWS, and serverless environments. We provide ongoing monitoring, vulnerability patching, automated backups, and cloud cost optimization for peace of mind.',
    deliverables: ['CI/CD Pipeline Setup (GitHub Actions)', 'AWS Cloud Server Optimization', '24/7 Server Health Monitoring', 'Automated Daily Backups'],
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
    icon: '/icons/guarantee.png',
  },
  {
    title: 'Open Communication',
    desc: 'Plain language, transparent updates, and direct access to the engineers building your product.',
    icon: '/icons/discussion.png',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We set realistic milestone-driven plans, keep you in the loop, and stick to them.',
    icon: '/icons/on-time.png',
  },
  {
    title: 'Your Code, Your Data',
    desc: 'Full intellectual property ownership from day one with strict non-disclosure agreements.',
    icon: '/icons/master-data.png',
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
    question: 'How much does it cost to build a mobile app in India?',
    answer: 'The cost to build a mobile app in India typically ranges from ₹1,50,000 to ₹8,00,000+ ($2,000 to $10,000+) depending on whether you need a startup MVP, cross-platform Flutter/React Native app, or a complex enterprise tool with custom APIs. As a dedicated freelance development team, Jexiratech offers transparent, milestone-based pricing without high agency overhead costs.',
  },
  {
    question: 'Freelancer vs agency for app development: Why choose a freelance team?',
    answer: 'Traditional software development agencies charge hefty premiums for account managers, sales commissions, and corporate overhead. Solo freelancers may lack full-stack capabilities or bandwidth. Jexiratech provides the perfect balance: a unified, senior freelance team of web and mobile engineers offering direct collaboration, fast sprints, reasonable pricing, and 100% intellectual property ownership.',
  },
  {
    question: 'How to hire a freelance developer or team for a startup MVP?',
    answer: 'To hire freelance developers for your startup MVP, outline your core value proposition and essential user flow. Book a free 30-minute consultation with us. We validate technical feasibility, create clickable Figma wireframes within days, and engineer your production-ready MVP in 4 to 8 weeks so you can test market fit and pitch investors.',
  },
  {
    question: 'Can you build a custom CRM or ERP software tailored for my business?',
    answer: 'Yes! We design and engineer bespoke CRM, ERP, and business automation platforms customized to your workflow. Unlike off-the-shelf software with expensive recurring user subscriptions, your custom CRM belongs entirely to you with zero licensing fees and unlimited user accounts.',
  },
  {
    question: 'Can I hire freelance React developers or Flutter developers on demand?',
    answer: 'Yes. Whether you need full end-to-end development or dedicated remote developers to augment your existing team for React, Next.js, Flutter, React Native, Python, or Node.js, we offer flexible milestone-based contracts and dedicated monthly sprints.',
  },
  {
    question: 'Do I own 100% of the source code and intellectual property?',
    answer: 'Yes, unconditionally. Upon completion and milestone settlement, you receive complete ownership of all repository source code, design assets, and documentation with strict non-disclosure agreements. There are no vendor lock-ins.',
  },
  {
    question: 'Where is Jexiratech located and what regions do you serve?',
    answer: 'Jexiratech Solutions is based in Maharashtra, India. We serve clients locally across Maharashtra and India, as well as global startups and enterprises across the United States, Europe, and the UAE with seamless remote communication and overlapping working hours.',
  },
  {
    question: 'How does the free first consultation work?',
    answer: 'You share your idea or business challenge through our form or direct message. Within one business day, our engineering lead reviews your requirements, schedules a 30-minute discovery call, and provides an actionable technical roadmap with budget estimates—completely free of obligation.',
  },
];
