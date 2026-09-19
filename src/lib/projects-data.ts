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
  problem?: string;
  architectureSummary?: string;
  tradeoffs?: string[];
  githubUrl?: string;
  liveUrl?: string;
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
    problem:
      "Financial institutions operating microfinance lending required localized interest calculations, flexible loan repayment schedules, and immutable double-entry ledger audits that default Apache Fineract distributions could not handle cleanly out-of-the-box.",
    architectureSummary:
      "Decomposed lending capabilities into modular Spring Boot microservices backed by an isolated PostgreSQL double-entry financial ledger, secured with Spring Security OAuth2/JWT and containerized with Docker for reproducible zero-downtime rollouts.",
    tradeoffs: [
      "Microservice Boundaries vs Monolithic Speed: Accepted the operational cost of inter-service network boundaries and distributed transaction logging in exchange for independent deployability and isolated financial domain auditing.",
      "Strict Synchronous Ledger Writes vs Eventual Consistency: Enforced ACID-compliant transactional ledger commits synchronously rather than async messaging queues to completely eliminate balance calculation races.",
    ],
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
      { value: "15+", label: "core banking endpoints" },
      { value: "1", label: "double-entry ledger DB" },
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
    problem:
      "Japanese securities and capital markets clients required daily trade reconciliation, strict resource allocation, and settlement processing across high-security legacy databases with zero margin for calculation discrepancy.",
    architectureSummary:
      "Built high-reliability backend batch calculation engines and interactive operator portals using Java, Spring Boot, optimized SQL, and Linux automation, bridging Japanese business analysts with the engineering team.",
    tradeoffs: [
      "Stored Procedures vs Application-Layer Batching: Retained mission-critical tuned SQL procedures for overnight balance reconciliation where network latency would exceed SLA windows, while encapsulating business rules in Spring Boot services for operator APIs.",
    ],
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
    problem:
      "National JLPT exam registration in Myanmar faced massive traffic spikes on opening day, historically causing system timeouts, database lock contention, and dropped payment transactions during high-stakes candidate registration.",
    architectureSummary:
      "Engineered high-throughput Java/Spring Boot backend with PostgreSQL connection pooling, pessimistic slot reservations, automated Cypress end-to-end validation, and 2C2P payment reconciliation with idempotency keys.",
    tradeoffs: [
      "Pessimistic vs Optimistic Locking for Exam Seats: Chose row-level locking on exam seat slots during the checkout window to guarantee zero over-booking, trading slight checkout latency for 100% seat allocation integrity.",
    ],
    impact:
      "Shipped a system that sustained 5,000+ peak concurrent payment users with zero downtime, and integrated the 2C2P payment gateway end-to-end. Earned the President's Award for Best System Development.",
    highlights: [
      "Designed registration backend for peak-day concurrent load.",
      "Integrated 2C2P payment flow with reconciliation & retries.",
      "Built Cypress end-to-end coverage of the candidate journey.",
      "Tuned PostgreSQL queries for slot-allocation hot paths.",
    ],
    metrics: [
      { value: "5,000+", label: "peak payment users" },
      { value: "2C2P", label: "payment gateway integrated" },
      { value: "1", label: "President's Award (2021)" },
    ],
    ogImage: "/og-jlpt.jpg",
    ogImageAlt: "JLPT National Registration System — Win Naing Soe project case study",
  },
  {
    slug: "tiktok-scraping-platform",
    name: "Multi-Platform Scraping & Analytics Platform",
    tagline:
      "Production data pipeline that scrapes TikTok Shop & EchoTik behind anti-bot defenses and lands audit-grade analytics.",
    description:
      "Designed and built a production-oriented data pipeline that scrapes e-commerce and creator data from TikTok Shop and EchoTik, and lands it in a canonical, audit-grade analytics database for downstream reporting. The system spans three independently deployable services — a React admin console, a NestJS/BullMQ scraping engine, and a Spring Boot/Oracle analytics API — chosen deliberately because the three layers have genuinely different concerns: user-facing job control, browser-automation orchestration under anti-bot pressure, and long-term relational data integrity.",
    role: "Full-Stack / Systems Engineer",
    period: "2025 — Present",
    client: "Personal / R&D",
    domain: "Data Engineering · E-Commerce Analytics · Web Scraping",
    tags: ["Data Pipeline", "Full Stack", "Systems Engineering"],
    stack: [
      "React 19",
      "NestJS 11",
      "BullMQ",
      "Puppeteer",
      "Crawlee",
      "Spring Boot 3",
      "Java 21",
      "Oracle 19c",
      "Redis / Memurai",
      "Docker",
    ],
    problem:
      "Scraping competitor intelligence across TikTok Shop and EchoTik required extracting deeply authenticated, rate-limited, anti-bot-protected data without triggering account suspensions or creating noisy duplicate rows in analytical records.",
    architectureSummary:
      "Separated concerns across 3 independently scalable services: a React admin UI, a NestJS/BullMQ scraper with Redis Lua-scripted locks and circuit breaker, and a Spring Boot/Oracle analytics API with isolated REQUIRES_NEW audit transactions.",
    tradeoffs: [
      "BullMQ/Redis vs Database Job Polling: Kept fast, atomic, short-lived execution state in Redis and permanent business data in Oracle, matching each datastore strictly to its operational strengths.",
      "Independent Audit Bookkeeping: Engineered import pipeline so job/audit bookkeeping commits in its own transaction (REQUIRES_NEW) independent of master-upsert steps, guaranteeing audit trail survival even on write failures.",
    ],
    impact:
      "Architected a three-service system along real operational boundaries, surviving hostile anti-bot defenses while producing data clean enough to trust for analytics — with an audit trail that survives failure, not just success.",
    highlights: [
      "Built a session-coordination layer (Redis-backed) that serializes all EchoTik scraping to a single active session across 5 parallel workers, using atomic Lua-scripted locks, jittered delays, per-session API-call budgets, and a circuit breaker with exponential backoff.",
      "Chose BullMQ/Redis over a polling database table for job orchestration — keeping fast, atomic, short-lived execution state in Redis and permanent business data in Oracle, each in the datastore best suited to its purpose.",
      "Every scraped record is content-hashed and checked against a freshness window before syncing, so re-running a scrape against unchanged data doesn't create redundant writes or noisy history.",
      "Designed the import pipeline so job/audit bookkeeping commits in its own transaction (REQUIRES_NEW), independent of the master-upsert step — so the audit trail survives even when the write itself fails and rolls back.",
      "Separated master business identity (CREATOR → CREATOR_PLATFORM) from insert-only daily snapshots (CREATOR_METRIC, CREATOR_COMMERCE) in a 3NF-oriented schema, so historical trend data is never overwritten.",
      "Bridged three identifier spaces (BullMQ job id, analytics SCRAPE_JOB audit row, platform natural business key) explicitly at each hand-off, keeping each layer's identifier scheme simple and fit for its own purpose.",
    ],
    metrics: [
      { value: "3", label: "independently deployable services" },
      { value: "5", label: "parallel worker processes" },
      { value: "2", label: "datastores (Redis + Oracle)" },
    ],
    ogImage: "/og-tiktok-scraping.jpg",
    ogImageAlt: "Multi-Platform Scraping & Analytics Platform — Win Naing Soe project case study",
  },
  {
    slug: "evolvia",
    name: "Evolvia — Personal AI OS & Multi-Agent Platform",
    tagline: "Autonomous multi-agent orchestration operating under strict architectural playbooks.",
    description:
      "Architected a Personal Life Operating System powered by autonomous multi-agent orchestration. Operating with Claude Code CLI, custom subagents, and Model Context Protocol (MCP), Evolvia enables AI agents to plan, execute, and verify tasks against strict operating manuals (AGENTS.md, CLAUDE.md) with sandbox safety and token discipline.",
    role: "AI Systems Architect & Backend Lead",
    period: "2026 — Present",
    client: "Personal / Open Innovation",
    domain: "Autonomous Agents · AI Orchestration · Developer Tools",
    tags: ["AI Agents", "MCP", "Claude Code", "Architecture"],
    stack: [
      "Claude Code CLI",
      "Model Context Protocol (MCP)",
      "Subagents",
      "Superpowers Framework",
      "TypeScript",
      "Docker",
      "PostgreSQL",
    ],
    problem:
      "Autonomous coding agents frequently suffer from hallucinated dependencies, schema drift, and context-window degradation when executing multi-step complex tasks without strict operational boundaries.",
    architectureSummary:
      "Engineered comprehensive agent operational playbooks and release gates, enabling autonomous task decomposition (GSD mode) with deterministic verification test harnesses and isolated context spaces.",
    tradeoffs: [
      "Role-Segregated Subagents vs Monolithic Prompting: Used isolated subagents for database administration, architecture, and testing, isolating each agent's context window to prevent reasoning degradation.",
    ],
    impact:
      "Engineered comprehensive agent operational playbooks and release gates, enabling autonomous task decomposition (GSD mode) with deterministic verification and zero hallucinated schema drifts.",
    highlights: [
      "Authored exhaustive AGENTS.md & CLAUDE.md operating manuals defining agent roles, permission boundaries, and quality gates.",
      "Configured Model Context Protocol (MCP) servers for isolated file operations, PostgreSQL schema inspection, and Playwright verification.",
      "Integrated Subagents (Architecture, DB Administrator, QA Bot) for segregated responsibility and context-window optimization.",
      "Established token budgeting and LiteLLM model routing to balance execution latency against reasoning costs.",
    ],
    metrics: [
      { value: "5", label: "coordinated subagent roles" },
      { value: "3", label: "custom MCP tools" },
      { value: "0", label: "untracked schema mutations" },
    ],
    ogImage: "/og-evolvia.jpg",
    ogImageAlt: "Evolvia Personal AI Operating System — Win Naing Soe project case study",
    githubUrl: "https://github.com/winnaingsoe6666/Evolvia",
  },
  {
    slug: "crossmart",
    name: "CrossMart — Cross-Border Marketplace",
    tagline: "High-velocity e-commerce built using Spec-Driven Development (SDD).",
    description:
      "Built a full-stack cross-border marketplace platform for Southeast Asian consumer logistics. Developed in an agile team leveraging Spec-Driven Development (SDD) and SpecKit to formalize business workflows (Requirements Definition) and acceptance criteria before implementation.",
    role: "Full-Stack Engineer & Team Co-Lead",
    period: "2026",
    client: "Vibe Code Tours Cohort 1 Flagship",
    domain: "E-Commerce · Logistics · Cross-Border Trade",
    tags: ["Next.js 15", "NestJS", "SDD", "SpecKit", "Full Stack"],
    stack: [
      "Next.js 15",
      "NestJS",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    problem:
      "Rapidly delivering a full-stack cross-border logistics marketplace across distributed team members risks requirement drift, integration mismatches, and regression bugs during fast-paced sprint cycles.",
    architectureSummary:
      "Employed Spec-Driven Development (SDD) and SpecKit to write complete user stories, database schemas, and API contracts before generating code, verified by automated GitHub Actions CI/CD pipelines.",
    tradeoffs: [
      "Spec-First Discipline vs Immediate Coding: Invested upfront in formal SpecKit specifications (/speckit.specify, /speckit.plan), eliminating code churn and misalignment across team members.",
    ],
    impact:
      "Delivered complete supplier tracking, order fulfillment, and multi-tier product catalogs with zero ambiguity in user stories prior to implementation.",
    highlights: [
      "Employed SpecKit workflow (/speckit.specify, /speckit.plan, /speckit.tasks) ensuring zero ambiguity in user stories prior to code generation.",
      "Architected NestJS backend REST APIs with Prisma ORM and BullMQ background workers for order tracking.",
      "Enforced automated CI/CD validation pipelines on GitHub Actions with automated linting, security audits, and regression tests.",
      "Integrated Supabase Auth and Row-Level Security (RLS) policies for cross-border merchant data isolation.",
    ],
    metrics: [
      { value: "12", label: "formal SDD user specifications" },
      { value: "3", label: "product catalog tiers" },
      { value: "100%", label: "automated CI pipeline pass" },
    ],
    ogImage: "/og-crossmart.jpg",
    ogImageAlt: "CrossMart Cross-Border Marketplace — Win Naing Soe project case study",
    githubUrl: "https://github.com/winnaingsoe6666/team-05-app",
  },
  {
    slug: "shareshelf",
    name: "ShareShelf — Community Resource Library",
    tagline: "Community asset-sharing powered by Spring Boot and PostgreSQL MCP.",
    description:
      "Engineered a community equipment-sharing platform leveraging Spring Boot, modern frontend, and custom Model Context Protocol (MCP) integrations for safe AI-assisted development and schema maintenance.",
    role: "Full-Stack Developer",
    period: "2026",
    client: "Community Platform / R&D",
    domain: "Community Sharing · Resource Optimization",
    tags: ["Spring Boot", "MCP", "PostgreSQL", "Full Stack"],
    stack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Model Context Protocol (MCP)",
      "Claude Subagents",
      "Tailwind CSS",
      "Vercel",
    ],
    problem:
      "Building a community asset library with complex reservation schedules and trust ratings while ensuring AI coding tools never inadvertently modify production database schemas or execute unvetted migrations.",
    architectureSummary:
      "Engineered Java 21 / Spring Boot backend with PostgreSQL, paired with a custom read-only MCP server allowing Claude subagents to inspect real schema metadata and validate SQL queries safely.",
    tradeoffs: [
      "Read-Only MCP Boundary vs Write Capability: Restrained AI tool execution to read-only schema introspection and query planning, requiring human-in-the-loop signoff for DDL migrations.",
    ],
    impact:
      "Integrated a local PostgreSQL MCP server allowing AI coding tools read-only schema introspection and query validation, ensuring 100% schema safety during backend migration and development.",
    highlights: [
      "Configured `@modelcontextprotocol/server-postgres` MCP server with strict read-only access for safe query optimization.",
      "Created specialized Claude Subagents (db-assistant, qa-bot) and skills for database analysis and TDD test execution.",
      "Implemented full reservation, item availability, and user trust-rating systems.",
      "Containerized database workflows and deployed production frontend to Vercel.",
    ],
    metrics: [
      { value: "1", label: "dedicated PostgreSQL MCP server" },
      { value: "Read-Only", label: "MCP safety boundary" },
      { value: "40+", label: "automated test suites" },
    ],
    ogImage: "/og-shareshelf.jpg",
    ogImageAlt: "ShareShelf Community Library — Win Naing Soe project case study",
    githubUrl: "https://github.com/winnaingsoe6666/ShareShelf",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS.find((p) => p.slug === slug);
}
