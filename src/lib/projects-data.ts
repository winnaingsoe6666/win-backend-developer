export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  client: string;
  domain: string;
  tags: string[];
  stack: string[];
  impact: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  ogImage: string;
  ogImageAlt: string;
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "mifos-fineract",
    name: "Mifos Fineract — Core Banking Platform",
    tagline: "Open-source core banking, hardened for enterprise scale.",
    description:
      "Architected and shipped scalable banking microservices on the Mifos Fineract platform — extending the open-source core for production-grade lending, savings, and accounting workflows used by financial institutions.",
    role: "Senior Full-Stack Software Engineer",
    period: "Feb 2025 — Present",
    client: "MSIS Company",
    domain: "Core Banking · Microfinance · Lending",
    tags: ["FinTech", "Core Banking", "Open Source"],
    stack: ["Java", "Spring Boot", "Angular", "Docker", "Gradle", "AWS", "PostgreSQL"],
    impact:
      "Launched 3 new microservices banking projects to production, with a focus on data integrity, auditability, and zero-downtime deployments.",
    highlights: [
      "Designed domain-driven banking modules on top of Apache Fineract.",
      "Containerised the full stack with Docker + Gradle for reproducible builds.",
      "Hardened REST APIs with Spring Security & granular role-based access.",
      "Modernised the Angular admin UI for daily operator workflows.",
    ],
    metrics: [
      { value: "3", label: "microservices in production" },
      { value: "100%", label: "audit-trail coverage" },
      { value: "0", label: "data-integrity incidents" },
    ],
    ogImage: "/og-mifos.jpg",
    ogImageAlt: "Mifos Fineract Core Banking — Win Naing Soe project case study",
  },
  {
    slug: "stock-exchange",
    name: "Stock Exchange Operations Platform",
    tagline: "Mission-critical operations tooling for Japanese capital markets.",
    description:
      "Led full SDLC of an enterprise platform managing stock exchange operations, resource allocation, and delivery tracking for offshore Japanese clients — combining backend rigor with operator-facing reliability.",
    role: "Senior Software Engineer",
    period: "Apr 2023 — Jan 2025",
    client: "DIR-ACE Technology · Offshore (Japan)",
    domain: "Stock Exchange · Enterprise Operations",
    tags: ["Enterprise", "FinTech", "Offshore"],
    stack: ["Java", "Spring Boot", "SQL", "Angular", "Linux", "Excel VBA"],
    impact:
      "Mentored a team of 11 engineers — including 4 juniors — and earned the President's Award for Productivity & Quality Assurance (2024).",
    highlights: [
      "Owned end-to-end delivery across analysis, design, build, and release.",
      "Established code-review standards and onboarding tracks for junior engineers.",
      "Tuned SQL & batch jobs for nightly settlement and reporting windows.",
      "Bridged Japanese business analysts and the offshore development team.",
    ],
    metrics: [
      { value: "11", label: "engineers led" },
      { value: "1", label: "President's Award (2024)" },
      { value: "21mo", label: "uninterrupted delivery cadence" },
    ],
    ogImage: "/og-stockexchange.jpg",
    ogImageAlt: "Stock Exchange Operations Platform — Win Naing Soe project case study",
  },
  {
    slug: "jlpt-registration",
    name: "JLPT National Registration System",
    tagline: "National-scale exam registration built for peak-day traffic.",
    description:
      "Engineered the high-traffic backend behind the JLPT (Japanese-Language Proficiency Test) national registration platform — supporting online applications, payments, and scheduling at exam-day load.",
    role: "Full Stack Developer",
    period: "Nov 2020 — May 2023",
    client: "DIR-ACE Technology · MAJA",
    domain: "Public Sector · High Scale",
    tags: ["High Scale", "Enterprise", "Payments"],
    stack: ["Java 11", "Spring Boot", "PostgreSQL", "jQuery", "Cypress", "2C2P"],
    impact:
      "Shipped a system that sustained 5,000+ concurrent users with zero downtime, and integrated the 2C2P payment gateway end-to-end. Earned the President's Award for Best System Development.",
    highlights: [
      "Designed registration backend for peak-day concurrent load.",
      "Integrated 2C2P payment flow with reconciliation & retries.",
      "Built Cypress end-to-end coverage of the candidate journey.",
      "Tuned PostgreSQL queries for slot-allocation hot paths.",
    ],
    metrics: [
      { value: "5,000+", label: "concurrent users" },
      { value: "0", label: "downtime incidents" },
      { value: "1", label: "President's Award" },
    ],
    ogImage: "/og-jlpt.jpg",
    ogImageAlt: "JLPT National Registration System — Win Naing Soe project case study",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS.find((p) => p.slug === slug);
}
