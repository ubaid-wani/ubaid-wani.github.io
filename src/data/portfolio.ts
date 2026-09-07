export interface EngineeringMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "UBAID ASHRAF",
    title: "Software Developer",
    subtitle: "Full-Stack Engineer",
    shortBio: "Full-stack developer building high-scale web applications, low-latency REST APIs, and event-driven data systems.",
    location: "Srinagar, Kashmir, India",
    email: "ubaidwani133@gmail.com",
    phone: "+91-7006929877",
    linkedin: "https://linkedin.com/in/ubaidwani1",
    github: "https://github.com/ubaid-wani",
  },

  metrics: [
    {
      value: "~40%",
      label: "Performance Gain",
      detail: "State management optimization via TanStack Query",
    },
    {
      value: "~30%",
      label: "Scalability Boost",
      detail: "Async queue batch processing using AWS SQS",
    },
    {
      value: "3+",
      label: "Cloud Platforms",
      detail: "AWS, Cloudflare, and Firebase infrastructure",
    },
  ],

  aboutLines: [
    "Full-Stack Developer with 3+ years of experience building high-scale web products and resilient backend systems.",
    "Specialized in React, TypeScript, Node.js, and event-driven architectures with proven performance impact.",
  ],

  experience: [
    {
      company: "Eonyx Infotech",
      role: "Junior Software Engineer (SDE-I)",
      period: "July 2024 – Present",
      location: "Srinagar, India",
      highlights: [
        "Customer Data Platform (CDP): Maintained ingestion pipeline for 4M+ profiles; improved app performance by ~40% via TanStack Query.",
        "System Scalability: Integrated AWS SQS async batch processing (~30% DB write load reduction) and Redis caching layer.",
        "Browser Extension: Built Manifest V3 cross-browser extension to proxy fetches & test tracking scripts without CORS blocks.",
        "Prepx & Salah Times: Architected mock test engine (Elysia.js/Bun) and migrated prayer app to custom Hono backend.",
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "Hono", "Elysia", "Bun", "AWS SQS", "Redis", "MySQL"],
    },
    {
      company: "Zom-bi",
      role: "Junior Front-End Developer",
      period: "Jan 2023 – Mar 2024",
      location: "Srinagar, India",
      highlights: [
        "Developed responsive web interfaces using modern CSS Grid and Flexbox layouts across viewports.",
        "Integrated REST APIs with TanStack Query for background caching and server state sync.",
      ],
      techStack: ["JavaScript", "React", "TanStack Query", "Tailwind CSS", "HTML5/CSS3"],
    },
  ],

  projects: [
    {
      id: "surecatch-cdp",
      title: "Surecatch — Customer Data Platform",
      description: "Enterprise data ingestion system managing 4M+ customer profiles with real-time tracking.",
      tags: ["React", "Node.js", "AWS SQS", "Redis", "MySQL", "Manifest V3"],
      metrics: "4M+ Profiles · ~40% Speed Up · ~30% Scalability",
      highlights: [
        "Ingested browsing identity data for 4M+ visitor profiles",
        "AWS SQS batch queueing & Redis caching layer",
        "Manifest V3 cross-browser script testing proxy",
      ],
    },
    {
      id: "prepx",
      title: "Prepx — Exam Preparation Platform",
      description: "Online mock test & assessment engine built from architecture to production deployment.",
      tags: ["React", "Elysia.js", "Bun", "MySQL", "Turso", "Cloudflare R2"],
      metrics: "Full-Stack System Architecture & Deployment",
      highlights: [
        "Elysia.js REST API on Bun runtime with Turso/MySQL DB",
        "Resend email workflows & Cloudflare R2 media storage",
      ],
    },
    {
      id: "salah-times",
      title: "Salah Times — Islamic Utility & Cloud API",
      description: "High-performance prayer timing app migrated from Firebase to custom cloud backend.",
      tags: ["Hono", "Bun", "MySQL", "Turso", "Resend"],
      metrics: "Firebase → Hono/Bun Backend Migration",
      highlights: [
        "Migrated infrastructure to lightweight Hono/Bun server",
        "Optimized global coordinate location lookup queries",
      ],
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "TanStack Query", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Hono", "Elysia.js", "Bun", "REST APIs", "JWT"],
    },
    {
      category: "Databases & Cache",
      skills: ["MySQL", "Turso (libSQL)", "Redis", "Drizzle ORM", "Firebase DB"],
    },
    {
      category: "Cloud & Tools",
      skills: ["AWS SQS", "Cloudflare Workers/R2", "Git/GitHub", "Vite", "Manifest V3"],
    },
  ],

  education: {
    institution: "SSM College of Engineering and Technology",
    degree: "B.E. — Electronics and Communication Engineering",
    period: "2017 – 2021",
    location: "Baramulla, Kashmir",
    gpa: "CGPA: 7.83",
  },
};
