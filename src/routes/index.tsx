import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { PROJECT_DETAILS } from "@/lib/projects-data";
import { absUrl } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuroraBg } from "@/components/aurora-bg";
import { User, Code2, Briefcase, FolderOpen, Award, Mail } from "lucide-react";

const PROJECT_SLUG_MAP: Record<string, string> = {
  "Mifos Fineract — Core Banking": "mifos-fineract",
  "Mifos Fineract": "mifos-fineract",
  "Stock Exchange Operations Platform": "stock-exchange",
  "Stock Exchange": "stock-exchange",
  "JLPT National Registration System": "jlpt-registration",
  "JLPT Registration System": "jlpt-registration",
  JLPT: "jlpt-registration",
  "Multi-Platform Scraping & Analytics Platform": "tiktok-scraping-platform",
  "TikTok Scraping Platform": "tiktok-scraping-platform",
  "Evolvia — Personal AI OS": "evolvia",
  Evolvia: "evolvia",
  "CrossMart — Cross-Border Marketplace": "crossmart",
  CrossMart: "crossmart",
  "ShareShelf — Community Resource Library": "shareshelf",
  ShareShelf: "shareshelf",
};

function slugForProject(name: string): string | undefined {
  if (PROJECT_SLUG_MAP[name]) return PROJECT_SLUG_MAP[name];
  const direct = PROJECT_DETAILS.find(
    (p) =>
      p.name.toLowerCase() === name.toLowerCase() ||
      p.name.toLowerCase().startsWith(name.toLowerCase()) ||
      name.toLowerCase().startsWith(p.name.toLowerCase()) ||
      p.slug === name,
  );
  if (direct) return direct.slug;
  const lower = name.toLowerCase();
  for (const [k, v] of Object.entries(PROJECT_SLUG_MAP)) {
    if (lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower)) {
      return v;
    }
  }
  return undefined;
}

const PAGE_TITLE =
  "Win Naing Soe — Senior Backend & FinTech Engineer · Microservices & AI-Augmented Systems";
const PAGE_DESCRIPTION =
  "Senior Backend & FinTech Engineer with 6+ years building mission-critical core banking, high-throughput microservices, and AI-accelerated delivery systems. Java · Spring Boot · PostgreSQL · Oracle · GCP · Claude Code · MCP · SpecKit · Next.js.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "author", content: "Win Naing Soe" },
      {
        name: "keywords",
        content:
          "Win Naing Soe, Senior AI-Assisted Engineer, Senior Full-Stack Engineer, AI Systems Architect, FinTech, Core Banking, Java, Spring Boot, Claude Code, Model Context Protocol, MCP, SpecKit, SDD, GCP, PostgreSQL, Microservices, Angular, Next.js",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: absUrl("/") },
      { property: "og:image", content: absUrl("/og-image.jpg") },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      {
        property: "og:image:alt",
        content: "Win Naing Soe — Senior Backend & FinTech Engineer",
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: absUrl("/og-image.jpg") },
    ],
    links: [{ rel: "canonical", href: absUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Win Naing Soe",
          jobTitle: "Senior Backend & FinTech Engineer",
          description: PAGE_DESCRIPTION,
          url: absUrl("/"),
          image: absUrl("/og-image.jpg"),
          email: "mailto:winnaingsoe6666@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "TH",
          },
          nationality: "Myanmar",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Technological University, Kalay",
          },
          knowsAbout: [
            "Java",
            "Spring Boot",
            "Anthropic Claude Code",
            "Model Context Protocol (MCP)",
            "Spec-Driven Development (SDD)",
            "SpecKit",
            "Multi-Agent Systems",
            "Google Cloud Platform (GCP)",
            "Test-Driven Development (TDD)",
            "PostgreSQL",
            "Microservices",
            "Next.js",
            "Angular",
            "REST APIs",
            "Core Banking",
            "FinTech",
            "Docker",
            "AWS",
          ],
          sameAs: ["https://linkedin.com/in/win-naing-soe", "https://github.com/winnaingsoe6666"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ----------------------------- DATA ----------------------------- */

const STACK = [
  {
    title: "AI & Agentic Engineering",
    code: "01",
    items: [
      "Anthropic Claude Code (CLI)",
      "Model Context Protocol (MCP)",
      "Multi-Agent & Subagents",
      "SpecKit (SDD) & Superpowers",
      "LiteLLM Proxy & Token Budgeting",
      "AI Code Review & Verification",
    ],
    tags: ["Agentic Workflows", "Prompt Playbooks", "Context Discipline"],
  },
  {
    title: "Domain & Financial Systems",
    code: "02",
    items: [
      "Core Banking & Microfinance",
      "Mifos Fineract Platform",
      "Stock Exchange Operations",
      "Payment Gateway (2C2P)",
      "SIMM Risk Calculations",
      "Requirements Definition (BRD / SRS)",
    ],
    tags: ["FinTech", "Offshore SDLC", "Compliance"],
  },
  {
    title: "Backend & Architecture",
    code: "03",
    items: [
      "Java (8/11/17/21) · Spring Boot",
      "Spring Security & Spring Batch",
      "RESTful APIs & Microservices",
      "Spec-Driven Development (SDD)",
      "Test-Driven Development (TDD)",
      "NestJS & Node.js",
    ],
    tags: ["System Design", "SOLID", "Clean Code"],
  },
  {
    title: "Cloud, GCP & DevOps",
    code: "04",
    items: [
      "Google Cloud Platform (GCP)",
      "Cloud Run & Cloud Storage",
      "AWS (Lightsail, EC2)",
      "Docker & Docker Compose",
      "CI/CD (GitHub Actions, GitLab)",
      "Linux / Bash Automation",
    ],
    tags: ["GCP", "Containers", "DevOps"],
  },
  {
    title: "Database & Storage",
    code: "05",
    items: [
      "PostgreSQL & PostgreSQL MCP",
      "Oracle PL/SQL & Stored Procs",
      "Supabase & Prisma ORM",
      "Redis & BullMQ Queues",
      "Query Optimization & Indexing",
      "Database Migrations (Flyway)",
    ],
    tags: ["Data Modeling", "High Concurrency", "Integrity"],
  },
  {
    title: "Frontend & Web Engineering",
    code: "06",
    items: [
      "Angular (TS / JS)",
      "React 19 & Next.js 15",
      "TypeScript & Tailwind CSS",
      "shadcn/ui & Radix UI",
      "Automated Testing (Playwright, Cypress)",
      "Responsive & Accessible UI",
    ],
    tags: ["Next.js", "Angular", "Modern UI"],
  },
];

const TIMELINE = [
  {
    role: "Full-Stack / Backend Engineer",
    company: "Confidential Client · NDA",
    period: "Jul 2026 — Present",
    domain: "Enterprise ERP & Warehouse Management System",
    impact:
      "Developing enterprise ERP modules (MFG, BOM, Inventory, WMS, Procurement, Order Management) and modernizing legacy Java EE into a Spring Boot REST architecture.",
    stack: ["Spring Boot", "React", "Oracle PL/SQL", "Java EE"],
    achievement: "Modernized legacy Java EE (JSP/Servlet) into Spring Boot REST APIs.",
  },
  {
    role: "Senior Full-Stack Software Engineer",
    company: "MSIS Company",
    period: "Feb 2025 — Jun 2026",
    domain: "Mifos Fineract — Core Banking Platform",
    impact:
      "Architected and shipped scalable banking microservices on an open-source financial platform serving enterprise operations.",
    stack: ["Java", "Spring Boot", "Angular", "Docker", "Gradle", "AWS"],
    achievement: "Launched 3 new microservices banking projects to production.",
  },
  {
    role: "Senior Software Engineer",
    company: "DIR-ACE Technology",
    period: "Apr 2023 — Jan 2025",
    domain: "Stock Exchange Operations · Offshore (Japan)",
    impact:
      "Led full SDLC for Japanese enterprise clients. Mentored a team of 11 — including 4 junior engineers — through code reviews and standards.",
    stack: ["Java", "Spring Boot", "SQL", "Angular", "Linux", "Excel VBA"],
    achievement: "🏆 President's Award · Productivity & Quality Assurance (2024).",
  },
  {
    role: "Software Engineer",
    company: "DIR-ACE Technology",
    period: "Apr 2022 — Mar 2023",
    domain: "Financial Margin Reporting (SIMM)",
    impact:
      "Optimized complex financial calculations and shipped interactive KPI dashboards. Refactored legacy Oracle SQL for maintainability.",
    stack: ["Java", "Spring Boot", "Angular", "PostgreSQL", "JBoss"],
    achievement: "Enhanced system stability and core application performance.",
  },
  {
    role: "Full Stack Developer",
    company: "DIR-ACE Technology · MAJA",
    period: "Nov 2020 — Mar 2022",
    domain: "JLPT National Registration System",
    impact:
      "Engineered high-traffic backend supporting 5,000+ concurrent payment users with zero downtime. Integrated 2C2P payment gateway.",
    stack: ["Java 11", "Spring Boot", "PostgreSQL", "jQuery", "Cypress"],
    achievement: "🏆 President's Award · Best System Development (2021).",
  },
  {
    role: "Junior Programmer",
    company: "DIR-ACE Technology",
    period: "Mar 2020 — Oct 2020",
    domain: "Stock Price Derivative Calculation",
    impact:
      "Streamlined daily trade processing with automated testing (Selenium), shell automation, and legacy refactoring.",
    stack: ["Java 8", "Java Swing", "Spring Boot", "SQL", "Shell"],
    achievement: "Improved legacy database performance & maintainability.",
  },
];

const PROJECTS = [
  {
    name: "Mifos Fineract — Core Banking",
    slug: "mifos-fineract",
    tags: ["FinTech", "Core Banking", "Open Source"],
    role: "Senior Full-Stack Engineer",
    impact:
      "Built and enhanced scalable banking microservices on an open-source financial platform.",
    stack: ["Java", "Spring Boot", "Docker", "Angular", "PostgreSQL"],
    featured: true,
  },
  {
    name: "Multi-Platform Scraping & Analytics Platform",
    slug: "tiktok-scraping-platform",
    tags: ["Distributed Systems", "Full Stack", "Data Pipeline"],
    role: "Full-Stack / Systems Engineer",
    impact:
      "Production data pipeline scraping TikTok Shop & EchoTik behind anti-bot defenses, landing audit-grade analytics across 3 independently deployable services.",
    stack: ["React 19", "NestJS 11", "BullMQ", "Spring Boot 3", "Oracle 19c", "Redis"],
    featured: true,
  },
  {
    name: "Stock Exchange Operations Platform",
    slug: "stock-exchange",
    tags: ["Enterprise", "FinTech", "Offshore"],
    role: "Senior Software Engineer",
    impact:
      "Enterprise platform managing stock exchange operations, resource allocation, and delivery tracking for Japanese clients.",
    stack: ["Java", "Spring Boot", "SQL", "Linux", "Angular"],
    featured: true,
  },
  {
    name: "JLPT National Registration System",
    slug: "jlpt-registration",
    tags: ["High Scale", "Enterprise", "Payments"],
    role: "Full Stack Developer",
    impact:
      "National-scale examination registration supporting online applications, payments, and scheduling with 5,000+ peak concurrent payment users.",
    stack: ["Java 11", "Spring Boot", "PostgreSQL", "jQuery", "2C2P"],
    featured: true,
  },
  {
    name: "Evolvia — Personal AI OS",
    slug: "evolvia",
    tags: ["AI Agents", "MCP", "Architecture"],
    role: "AI Systems Architect",
    impact:
      "Personal Life OS with autonomous multi-agent orchestration, Claude Code CLI, and custom Model Context Protocol (MCP) integrations.",
    stack: ["Claude Code", "MCP", "Subagents", "Superpowers", "TypeScript", "Docker"],
    featured: true,
  },
  {
    name: "CrossMart — Cross-Border Marketplace",
    slug: "crossmart",
    tags: ["E-Commerce", "SDD", "Next.js 15"],
    role: "Full-Stack Engineer & Team Co-Lead",
    impact:
      "Cross-border marketplace platform built with Spec-Driven Development (SDD) & SpecKit, Next.js 15, NestJS, and Supabase.",
    stack: ["Next.js 15", "NestJS", "Supabase", "Prisma", "BullMQ", "SpecKit"],
    featured: true,
  },
  {
    name: "ShareShelf — Community Resource Library",
    slug: "shareshelf",
    tags: ["MCP", "Spring Boot", "Full Stack"],
    role: "Full-Stack Developer",
    impact:
      "Community tool library utilizing a PostgreSQL MCP server and specialized Claude Subagents for safe schema maintenance and query analysis.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "PostgreSQL MCP", "Subagents"],
    featured: true,
  },
  {
    name: "KPI Management System",
    tags: ["Enterprise", "Analytics"],
    role: "Backend Developer",
    impact:
      "Performance tracking for monitoring KPIs across departments with interactive dashboards.",
    stack: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    name: "Offshore Development System",
    tags: ["Enterprise"],
    role: "Backend Developer",
    impact: "Platform managing offshore software projects, resources, and delivery tracking.",
    stack: ["Java", "Spring Boot", "Angular"],
  },
  {
    name: "Smart Attendance System",
    tags: ["AI", "IoT"],
    role: "Developer",
    impact: "Automated attendance with facial recognition and real-time reporting.",
    stack: ["Python", "OpenCV", "TensorFlow", "Flask"],
  },
];

const RECOGNITION = [
  {
    title: "Anthropic Academy / Skilljar (7 Courses Completed)",
    org: "Anthropic Academy / Skilljar",
    date: "2026",
    note: "Completed courses: Claude Code 101, Claude Code in Action, Model Context Protocol (MCP) Intro, Subagents Intro, Agent Skills Intro, Claude Platform 101, and Claude 101.",
  },
  {
    title: "ITPEC — Fundamental Information Technology Engineer (FE)",
    org: "IT Professionals Examination Council, Japan",
    date: "06 / 2023",
    note: "National-level IT engineer credential under mutual recognition agreement with Japan Information-technology Promotion Agency (IPA). ID MMFE23S00159.",
  },
  {
    title: "President's Award for Productivity & Quality Assurance",
    org: "DIR-ACE Technology (Daiwa Institute of Research Group)",
    date: "2024",
    note: "Recognized for leading offshore delivery with zero critical defects and exemplary engineering standards.",
  },
  {
    title: "President's Award for Best System Development",
    org: "DIR-ACE Technology",
    date: "09 / 2021",
    note: "For outstanding contribution to the JLPT National Registration System project handling 5,000+ peak concurrent payment users.",
  },
  {
    title: "Quality Assurance Award",
    org: "DIR-ACE Technology",
    date: "09 / 2021",
    note: "Recognized for productivity, test automation, and code quality on the CstNavi financial system team.",
  },
  {
    title: "Java Web Development — Talent Program",
    org: "ACE Group of Companies",
    date: "11 / 2019",
    note: "Selective intensive training in enterprise Java, Spring MVC, and architecture.",
  },
];

const FACTS = [
  { k: "Based in", v: "Bangkok, TH", icon: "◉" },
  { k: "Fuel", v: "Coffee & Curiosity", icon: "☕" },
  { k: "Focus", v: "Core Banking · FinTech · ERP · AI", icon: "◆" },
  { k: "Languages", v: "Burmese · English · Japanese", icon: "⌘" },
];

/* ----------------------------- COMPONENT ----------------------------- */

function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setShowBackToTop(scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      {/* Skip to content */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <AuroraBg />
      <Nav />
      <main id="main-content">
        <Hero />
        <StatementBanner />
        <About />
        <FinTechSystems />
        <AiCapabilities />
        <Arsenal />
        <Timeline />
        <Projects />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <BottomTabBar />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */

const NAV_LINKS: [string, string][] = [
  ["About", "about"],
  ["FinTech Systems", "fintech-systems"],
  ["AI Engineering", "ai-engineering"],
  ["Stack", "stack"],
  ["Career", "career"],
  ["Work", "work"],
  ["Awards", "awards"],
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between safe-area-top">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-mono-tight text-xs text-muted-foreground">[ wns ]</span>
          <span className="font-display text-lg">Win Naing Soe</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-muted-foreground hover:text-foreground transition-colors relative group font-mono-tight text-xs uppercase tracking-widest"
            >
              <span className="text-primary mr-1.5">·</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-mono-tight uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <span className="size-1.5 rounded-full bg-primary pulse-dot" />
            Available
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 md:min-h-0 md:pt-32 md:pb-20"
    >
      <div
        aria-hidden
        className="hero-bg-wave absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle at 70% 40%, #000 20%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
        {/* meta row */}
        <div className="flex items-center gap-4 mb-6 font-mono-tight text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">◆</span>
          <span>Portfolio · v2026.06</span>
          <span className="hidden md:block flex-1 hairline" />
          <span className="hidden md:inline">Bangkok · 13.7°N</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono-tight text-xs uppercase tracking-[0.25em] text-primary mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-primary" />
              Senior Backend &amp; FinTech Engineer
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Win Naing Soe
            </h1>

            <p className="mt-3 font-sans text-xl sm:text-2xl text-foreground/90 font-light leading-snug">
              Architecting mission-critical{" "}
              <span className="italic font-normal text-primary">core banking</span>, FinTech,{" "}
              <span className="text-accent">Enterprise ERP</span> &amp; AI-assisted engineering.
            </p>

            <p className="mt-5 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Six years architecting secure, scalable backend systems for core banking,
              microfinance, stock-exchange operations, and Enterprise ERP. Built on Java, Spring
              Boot, PostgreSQL, and distributed microservices — accelerated with modern AI-agent
              orchestration (Claude Code, MCP, SpecKit, Agentic).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all touch-manipulation"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 active:scale-[0.97] transition-all touch-manipulation"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Get in touch
              </a>
              <a
                href="https://github.com/winnaingsoe6666"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:border-primary/60 hover:text-primary active:scale-[0.97] transition-all touch-manipulation"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* metric strip */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {[
                ["6+", "years shipping"],
                ["5,000+", "peak payment users"],
                ["11", "engineers mentored"],
                ["2", "President's Awards"],
              ].map(([n, l]) => (
                <div key={l} className="bg-card p-3 md:p-4">
                  <div className="font-display text-2xl md:text-4xl text-primary">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1.5 font-mono-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* profile terminal */}
          <div className="lg:col-span-5">
            <div className="relative animate-float">
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl"
                style={{ animation: "glow-breathe 8s ease-in-out infinite" }}
              />
              <div className="relative rounded-2xl overflow-hidden code-surface ring-signal">
                <div className="flex items-center justify-between px-4 py-2.5 code-chrome font-mono-tight text-[10px] uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-destructive/70" />
                    <span className="size-2 rounded-full bg-accent/70" />
                    <span className="size-2 rounded-full bg-primary/70" />
                  </div>
                  <span>~/wns — zsh</span>
                </div>
                <div className="px-5 py-4 font-mono-tight text-xs space-y-2.5 min-h-[180px] md:min-h-[220px]">
                  <TerminalLine prompt command="whoami" />
                  <TerminalOutput>Win Naing Soe</TerminalOutput>

                  <TerminalLine prompt command="cat role.txt" />
                  <TerminalOutput>
                    <span style={{ color: "var(--color-syntax-string)" }}>Senior Backend</span>
                    {" & "}
                    <span style={{ color: "var(--color-syntax-function)" }}>FinTech Engineer</span>
                  </TerminalOutput>

                  <TerminalLine prompt command="ls skills/" />
                  <TerminalOutput className="flex flex-wrap gap-x-3">
                    <span style={{ color: "var(--color-syntax-keyword)" }}>java-21</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>spring-boot-3</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>microservices</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>postgresql</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>oracle-19c</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>GCP</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>claude-code</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>mcp</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>speckit-sdd</span>
                  </TerminalOutput>

                  <TerminalLine prompt command="uptime" />
                  <TerminalOutput>
                    <span style={{ color: "var(--color-syntax-number)" }}>6+</span> years in
                    production
                  </TerminalOutput>

                  <TerminalLine prompt command="" cursor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalLine({
  prompt,
  command,
  cursor,
}: {
  prompt?: boolean;
  command: string;
  cursor?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {prompt && (
        <span>
          <span style={{ color: "var(--color-syntax-function)" }}>~</span>
          <span style={{ color: "var(--color-syntax-punctuation)" }}> $</span>
        </span>
      )}
      <span style={{ color: "var(--color-code-fg)" }}>{command}</span>
      {cursor && <span className="terminal-cursor" />}
    </div>
  );
}

function TerminalOutput({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`pl-4 ${className ?? ""}`} style={{ color: "var(--color-code-muted)" }}>
      {children}
    </div>
  );
}

/* ----------------------------- ARCHITECTURAL STATEMENT BANNER ----------------------------- */

function StatementBanner() {
  return (
    <section className="relative border-y border-border/70 bg-card/25 py-4 md:py-5 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="size-2 rounded-full bg-primary pulse-dot shrink-0" />
          <p className="text-sm md:text-base font-light text-foreground/90 leading-snug">
            Designing{" "}
            <span className="font-normal text-primary">deterministic backend systems</span> where
            financial accuracy, concurrency, and auditability are non-negotiable.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-wider text-muted-foreground flex-wrap shrink-0">
          <span className="px-2.5 py-1 rounded-md border border-border/70 bg-background/80 text-foreground/80">
            Core Banking
          </span>
          <span className="px-2.5 py-1 rounded-md border border-border/70 bg-background/80 text-foreground/80">
            Stock Exchange
          </span>
          <span className="px-2.5 py-1 rounded-md border border-border/70 bg-background/80 text-foreground/80">
            Enterprise ERP
          </span>
          <span className="px-2.5 py-1 rounded-md border border-border/70 bg-background/80 text-foreground/80">
            Agentic AI
          </span>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */

function About() {
  return (
    <section id="about" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="00" label="About" />
        <div className="grid lg:grid-cols-12 gap-10 mt-6">
          <div className="lg:col-span-7">
            <h2 className="font-sans text-2xl md:text-6xl leading-[1.1] font-light tracking-tight">
              I build the <span className="italic text-primary">reliable software</span> that
              quietly moves money &amp; trust.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Over the last 6+ years, I've engineered backend platforms across open-source core
                banking (<span className="text-foreground font-medium">Mifos Fineract</span>), stock
                exchange operations, payment gateways, and enterprise{" "}
                <span className="text-foreground font-medium">ERP &amp; WMS</span>.
              </p>
              <p>
                From architecting backends for 5,000+ peak concurrent payment users (2 President's
                Awards) to automating batch workflows that cut manual ops by 60%, I focus on
                high-stakes reliability: double-entry ledger consistency, financial risk models
                (SIMM), and edge-case resilience.
              </p>
              <p>
                Today, I pair enterprise engineering (Java, Spring Boot, PostgreSQL, Oracle) with
                modern <span className="text-foreground font-medium">AI-agent orchestration</span>{" "}
                (Claude Code, MCP, SpecKit) to accelerate delivery without sacrificing precision.
              </p>
              <p>
                When I'm not coding I'm probably reading, exploring mountains, playing football, or
                quietly judging IEEE-754 because{" "}
                <code className="code-inline">0.1 + 0.2 !== 0.3</code>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {FACTS.map((f, i) => (
                <div
                  key={f.k}
                  className={`px-6 py-5 flex items-center gap-5 ${
                    i !== FACTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-display text-2xl text-primary w-8">{f.icon}</span>
                  <div className="flex-1">
                    <div className="font-mono-tight text-[10px] uppercase tracking-widest text-muted-foreground">
                      {f.k}
                    </div>
                    <div className="text-base mt-0.5">{f.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-primary mb-3">
                Currently
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                Delivering enterprise{" "}
                <span className="text-accent font-medium">ERP / Warehouse Management (WMS)</span>{" "}
                solutions for a confidential enterprise client — building on 6+ years including core
                banking on <span className="text-primary font-medium">Mifos Fineract</span> at MSIS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINTECH & ENTERPRISE SYSTEMS ARCHITECTURE ----------------------------- */

const FINTECH_EXPERIENCES = [
  {
    code: "01",
    badge: "Core Banking Engine",
    title: "Mifos Fineract Core Banking Platform",
    role: "Senior Full-Stack Software Engineer · MSIS Company",
    period: "Feb 2025 — Jun 2026",
    desc: "Architect and deliver production banking microservices on the open-source Mifos Fineract financial engine. Implemented double-entry general ledger accounting, loan/deposit lifecycle management, and automated Spring Batch processing schedulers that reduced manual operational intervention by 60%.",
    highlights: [
      "3 banking microservices in production",
      "15+ core banking endpoints (Loans, Deposits, GL)",
      "Strict ACID transactions & zero ledger drift",
    ],
    tags: [
      "Java 21",
      "Spring Boot 3",
      "Mifos Fineract",
      "Spring Batch",
      "PostgreSQL",
      "Docker",
      "Angular",
    ],
  },
  {
    code: "02",
    badge: "Capital Markets & Settlement",
    title: "Stock Exchange Operations & Offshore Delivery",
    role: "Software Engineer · DIR-ACE Technology (DAT)",
    period: "Mar 2020 — Jan 2025",
    desc: "Led offshore engineering delivery for Tokyo/Japanese enterprise financial clients through full SDLC. Managed requirements definition, automated regression test suites with Selenium, and refactored mission-critical legacy Oracle PL/SQL databases for high-precision stock trade derivative calculations.",
    highlights: [
      "11 engineers mentored & led across full SDLC",
      "🏆 President's Award for Productivity & QA (2024)",
      "Automated regression suite with Selenium & Shell",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Oracle 19c PL/SQL",
      "Selenium",
      "JBoss",
      "Shell Automation",
      "Requirements Definition",
    ],
  },
  {
    code: "03",
    badge: "High Scale & Payments",
    title: "Payment Gateways & High-Concurrency Systems",
    role: "Full Stack Developer · MAJA (JLPT Platform)",
    period: "Nov 2020 — May 2023",
    desc: "Engineered high-concurrency backend architecture supporting 5,000+ peak concurrent payment users under national rush registration with zero downtime. Integrated the 2C2P payment gateway with automated reconciliation and re-engineered PostgreSQL stored procedures for SIMM (Standard Initial Margin Model) derivative risk calculations.",
    highlights: [
      "5,000+ peak concurrent payment users with zero downtime",
      "2C2P payment gateway & automated reconciliation",
      "🏆 President's Award for Best System Development (2021)",
    ],
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "2C2P Gateway",
      "SIMM Risk Model",
      "Cypress",
      "Rocky Linux",
    ],
  },
  {
    code: "04",
    badge: "Supply Chain & Operations",
    title: "Enterprise ERP & Warehouse Management System",
    role: "Full-Stack / Backend Engineer · Confidential Client (NDA)",
    period: "Jul 2026 — Present",
    desc: "Develop and maintain enterprise ERP modules covering Manufacturing (MFG), Bill of Materials (BOM), Inventory, Warehouse Management (WMS), Procurement, and Order Management. Spearheaded legacy modernization converting Java EE (JSP/Servlet) into a clean Spring Boot REST architecture with optimized Oracle PL/SQL stored procedures and triggers.",
    highlights: [
      "6 enterprise modules (MFG, BOM, Inventory, WMS, Procurement, Orders)",
      "Modernized legacy Java EE (JSP/Servlet) to Spring Boot REST APIs",
      "Optimized Oracle PL/SQL stored procedures & data patch scripts",
    ],
    tags: ["Spring Boot", "React", "Oracle PL/SQL", "Java EE", "WMS & Inventory", "REST APIs"],
  },
];

function FinTechSystems() {
  return (
    <section
      id="fintech-systems"
      className="relative py-12 md:py-24 bg-card/20 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="01" label="Financial & Enterprise Systems Architecture" />
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono-tight text-xs uppercase tracking-[0.25em] text-primary mb-2">
              Mission-Critical Financial Experience
            </div>
            <h2 className="font-sans text-2xl md:text-5xl font-light tracking-tight max-w-2xl">
              Battle-tested <span className="italic text-primary">core banking</span> &amp;
              enterprise architectures.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Six years designing and scaling production backends for financial institutions, stock
            exchanges, payment providers, and enterprise supply-chain ERPs where data consistency
            and zero-downtime are non-negotiable.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {FINTECH_EXPERIENCES.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col justify-between hover:border-primary/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono-tight text-[11px] text-primary tracking-widest">
                    / ARCHITECTURE {item.code}
                  </span>
                  <span className="text-[11px] font-mono-tight px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tight text-xs text-muted-foreground">
                  <span>{item.role}</span>
                  <span>·</span>
                  <span className="text-primary/90">{item.period}</span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

                {/* Architectural Highlights */}
                <div className="mt-5 space-y-2 pt-4 border-t border-border/60">
                  <div className="font-mono-tight text-[10px] uppercase tracking-wider text-muted-foreground">
                    Engineering Highlights &amp; Impact:
                  </div>
                  <ul className="space-y-1.5 font-mono-tight text-xs text-foreground/90">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono-tight uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-card/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ENTERPRISE AI CAPABILITIES ----------------------------- */

const AI_CAPABILITIES = [
  {
    code: "01",
    badge: "System Integration",
    enTitle: "Production AI & Agentic Integration",
    desc: "Architect and implement autonomous subagents and custom Model Context Protocol (MCP) servers connected directly to enterprise databases (PostgreSQL/Oracle) and REST APIs, avoiding brittle chat prompts.",
    tags: ["Claude Code CLI", "MCP Servers", "Subagents", "REST APIs"],
  },
  {
    code: "02",
    badge: "Verification & QA",
    enTitle: "AI Output Verification & Code Review",
    desc: "Apply 6+ years of FinTech rigor to audit and verify AI-generated code. Eliminate hallucinations, race conditions, and vulnerabilities via automated TDD test suites (JUnit, Cypress, Playwright).",
    tags: ["TDD", "Code Review", "Regression Testing", "OWASP"],
  },
  {
    code: "03",
    badge: "Requirements & SDD",
    enTitle: "Requirements Definition & Spec-Driven Development",
    desc: "Translate complex business domain workflows into unambiguous specifications using SpecKit (/speckit.specify, /speckit.plan, /speckit.tasks) and formal PRDs before writing or generating code.",
    tags: ["SpecKit", "SDD", "Requirements Spec", "Business Flow"],
  },
  {
    code: "04",
    badge: "Context & Memory",
    enTitle: "Data & Context Engineering",
    desc: "Prevent context rot and hallucination by structuring project knowledge graphs (claude-mem), active state trackers (Context7), and relational schema indexing across PostgreSQL and Supabase.",
    tags: ["claude-mem", "Context7", "PostgreSQL", "Supabase"],
  },
  {
    code: "05",
    badge: "Security & Governance",
    enTitle: "Security, Access Control & AI Governance",
    desc: "Enforce least-privilege tool boundaries (read-only MCP permissions, isolated environments), safeguard proprietary banking data against model leakage, and implement audit logging.",
    tags: ["Least Privilege", "Read-Only MCP", "Spring Security", "Audit"],
  },
  {
    code: "06",
    badge: "LLMOps & Cost",
    enTitle: "Cost Management & LLMOps",
    desc: "Manage token economics with LiteLLM proxies, intelligent model routing (cost-efficient models for tasks vs. reasoning models for architecture), and resilient fallback strategies.",
    tags: ["LiteLLM Proxy", "Token Budgeting", "Model Routing", "Monitoring"],
  },
  {
    code: "07",
    badge: "Tooling & Velocity",
    enTitle: "AI Tooling Mastery & Engineering Velocity",
    desc: "Leverage Claude Code, Cursor, and the Superpowers framework for autonomous GSD (Get Stuff Done) execution, backed by 7 completed Anthropic Skilljar courses.",
    tags: ["Claude Code CLI", "Cursor", "Superpowers", "7 Courses Completed"],
  },
];

function AiCapabilities() {
  return (
    <section
      id="ai-engineering"
      className="relative py-12 md:py-24 bg-card/20 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="02" label="Enterprise AI Engineering" />
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono-tight text-xs uppercase tracking-[0.25em] text-accent mb-2">
              Enterprise Engineering Standards
            </div>
            <h2 className="font-sans text-2xl md:text-5xl font-light tracking-tight max-w-2xl">
              Senior <span className="italic text-primary">AI-Assisted</span> Systems Engineering.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Moving beyond ad-hoc prompting — integrating autonomous subagents, Model Context
            Protocol (MCP), and Spec-Driven Development (SDD) into real production architectures
            while preserving banking-grade stability.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {AI_CAPABILITIES.map((c, i) => (
            <div
              key={c.code}
              className={`bg-background p-6 group hover:bg-card transition-colors flex flex-col justify-between ${
                i === 6
                  ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/5 via-background to-accent/5"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tight text-[11px] text-primary tracking-widest">
                    / PILLAR {c.code}
                  </span>
                  <span className="text-[11px] font-mono-tight px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
                  {c.enTitle}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tight uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-card/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ARSENAL ----------------------------- */

function Arsenal() {
  return (
    <section id="stack" className="relative py-12 md:py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="03" label="Technical Arsenal" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Tools I reach for <span className="italic text-accent">sharpened by use</span>.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {STACK.map((s) => (
            <div key={s.title} className="bg-background p-5 group hover:bg-card transition-colors">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-lg">{s.title}</h3>
                <span className="font-mono-tight text-[10px] text-muted-foreground tracking-widest">
                  / {s.code}
                </span>
              </div>
              <ul className="space-y-2 font-mono-tight text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-foreground/90">
                    <span className="text-primary text-xs">▸</span>
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tight uppercase tracking-wider px-2 py-0.5 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* core expertise tile */}
          <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 p-5 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-primary mb-2">
                Core Expertise
              </div>
              <h3 className="font-display text-lg leading-tight">
                Backend engineering, financial systems, distributed pipelines, and AI-accelerated
                delivery.
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Designing secure microservice architectures · building core banking, loan & payment
              platforms · orchestrating autonomous agent workflows · leading engineering teams and
              code reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TIMELINE ----------------------------- */

function Timeline() {
  return (
    <section id="career" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="04" label="Career History & Systems Experience" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Six years, one through-line:{" "}
          <span className="italic text-primary">make finance software trustworthy.</span>
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          {TIMELINE.map((t, i) => (
            <div
              key={t.role + t.period}
              className={`relative grid md:grid-cols-2 gap-6 mb-10 last:mb-0 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`absolute left-4 md:left-1/2 top-3 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-background pulse-dot`}
              />
              <div
                className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <div className="font-mono-tight text-[11px] uppercase tracking-widest text-primary">
                  {t.period}
                </div>
                <h3 className="font-display text-xl md:text-2xl mt-1 leading-tight">{t.role}</h3>
                <div className="text-muted-foreground mt-1 text-sm">{t.company}</div>
              </div>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="rounded-xl border border-border bg-card p-4 md:p-5 hover:border-primary/40 active:scale-[0.98] transition-all touch-manipulation">
                  <div className="font-mono-tight text-[10px] uppercase tracking-widest text-accent mb-2">
                    Domain · Impact
                  </div>
                  <div className="font-medium text-foreground">{t.domain}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.impact}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono-tight px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-border text-sm text-primary">
                    {t.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */

function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-12 md:py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="05" label="Selected Work" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Projects spanning <span className="italic text-primary">AI Agents</span>, FinTech, and
          enterprise modernization.
        </h2>

        <div className="mt-10 projects-scroll md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 scrollbar-hide">
          {featured.map((p, i) => {
            const slug = (p as { slug?: string }).slug || slugForProject(p.name);
            const Card = (
              <article className="group relative rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/50 active:scale-[0.98] transition-all h-full touch-manipulation">
                <div className="aspect-[3/2] md:aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-4xl md:text-6xl text-primary/30 group-hover:text-primary/60 transition-colors">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono-tight uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 size-2 rounded-full bg-primary pulse-dot" />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="font-display text-base md:text-lg leading-tight">{p.name}</h3>
                  <div className="font-mono-tight text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                    {p.role}
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                    {p.impact}
                  </p>
                  <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-border flex flex-wrap gap-1 md:gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] md:text-[10px] font-mono-tight text-foreground/80"
                      >
                        {s}
                        <span className="text-border mx-1 md:mx-1.5 last:hidden">/</span>
                      </span>
                    ))}
                  </div>
                  {slug && (
                    <div className="mt-2 md:mt-3 font-mono-tight text-[10px] md:text-[11px] uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                      Read case study →
                    </div>
                  )}
                </div>
              </article>
            );
            return slug ? (
              <Link key={p.name} to="/work/$slug" params={{ slug }} className="block">
                {Card}
              </Link>
            ) : (
              <div key={p.name}>{Card}</div>
            );
          })}
        </div>

        {/* others as list */}
        <div className="mt-10">
          <div className="font-mono-tight text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
            / Other notable builds
          </div>
          <div className="divide-y divide-border border-y border-border">
            {others.map((p) => {
              const slug = (p as { slug?: string }).slug || slugForProject(p.name);
              const Row = (
                <div className="group grid md:grid-cols-12 gap-4 py-4 items-baseline hover:bg-card/50 active:bg-muted px-2 -mx-2 rounded transition-colors touch-manipulation">
                  <div className="md:col-span-4 font-display text-lg flex items-center gap-2">
                    {p.name}
                    {slug && (
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        →
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2 font-mono-tight text-xs text-muted-foreground uppercase tracking-wider">
                    {p.role}
                  </div>
                  <div className="md:col-span-4 text-sm text-muted-foreground">{p.impact}</div>
                  <div className="md:col-span-2 font-mono-tight text-xs text-primary text-left md:text-right">
                    {p.stack.join(" · ")}
                  </div>
                </div>
              );
              return slug ? (
                <Link key={p.name} to="/work/$slug" params={{ slug }} className="block">
                  {Row}
                </Link>
              ) : (
                <div key={p.name}>{Row}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- RECOGNITION ----------------------------- */

function Recognition() {
  return (
    <section id="awards" className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="06" label="Recognition & Education" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Awards, certifications, and the{" "}
          <span className="italic text-accent">long road of learning</span>.
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 mt-10">
          <div className="lg:col-span-3 space-y-4">
            {RECOGNITION.map((r) => (
              <div
                key={r.title}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 active:scale-[0.98] transition-all touch-manipulation"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg leading-tight">{r.title}</h3>
                  <span className="font-mono-tight text-xs text-primary shrink-0">{r.date}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{r.org}</div>
                <p className="text-sm mt-3 text-foreground/80">{r.note}</p>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 via-card to-primary/10 p-5">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-accent mb-3">
                Education
              </div>
              <h3 className="font-display text-xl leading-tight">B.E. in Electronics</h3>
              <div className="text-sm text-muted-foreground mt-1">
                Technological University, Kalay · 2012 — 2018
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">✦</span>
                  Project Award · Smart Home Automation
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✦</span>
                  Student Union Leader
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-primary mb-3">
                Continuous Learning
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Constantly expanding into Cloud Architecture, AI-assisted development, advanced
                System Design, and deeper Financial Technology.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "Anthropic Claude Code",
                  "Model Context Protocol (MCP)",
                  "SpecKit & SDD",
                  "Google Cloud (GCP)",
                  "FinTech",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tight uppercase tracking-wider px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ----------------------------- */

function Contact() {
  const channels = [
    {
      label: "Email",
      v: "winnaingsoe6666@gmail.com",
      href: "mailto:winnaingsoe6666@gmail.com",
      icon: "✉",
    },
    { label: "WhatsApp", v: "+66 960 308 914", href: "https://wa.me/66960308914", icon: "✆" },
    {
      label: "LinkedIn",
      v: "/in/win-naing-soe",
      href: "https://linkedin.com/in/win-naing-soe",
      icon: "in",
    },
    {
      label: "GitHub",
      v: "@winnaingsoe6666",
      href: "https://github.com/winnaingsoe6666",
      icon: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 md:py-24 border-t border-border bg-gradient-to-b from-background to-card/40"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel n="07" label="Let's build something" />

        <h2 className="mt-6 font-sans text-2xl md:text-6xl font-light tracking-tight leading-[1]">
          Let's build <br />
          <span className="italic text-primary">something great</span> <br />
          together.
        </h2>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4 text-muted-foreground leading-relaxed max-w-xl">
            <p>
              I'm open to <span className="text-foreground">senior backend / FinTech</span>,{" "}
              <span className="text-foreground">distributed microservices</span>, and{" "}
              <span className="text-foreground">AI-assisted engineering</span> roles — remote,
              hybrid, or with relocation from Bangkok.
            </p>
            <p>
              If you're working on core banking, payments, microfinance, autonomous agent systems,
              or an enterprise platform that has to be{" "}
              <em className="text-accent not-italic">correct, fast, and quiet</em> — I'd love to
              talk.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Senior Backend Engineer",
                "FinTech & Core Banking",
                "Distributed Microservices",
                "AI-Assisted Delivery",
                "GCP & Cloud Architecture",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono-tight uppercase tracking-wider px-3 py-1.5 rounded-full border border-primary/40 text-primary bg-primary/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="flex items-center gap-4 px-5 py-4 md:py-4 hover:bg-background active:bg-muted active:scale-[0.98] transition-all group touch-manipulation"
                >
                  <span className="size-10 rounded-full border border-border flex items-center justify-center font-mono-tight text-sm text-primary group-hover:border-primary/60 transition-colors">
                    {c.label === "GitHub" ? (
                      <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ) : (
                      c.icon
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono-tight text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="truncate">{c.v}</div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4 flex items-center gap-3">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="font-mono-tight text-xs uppercase tracking-widest text-primary">
                Status: Open to opportunities · responding within 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tight text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Win Naing Soe · Crafted in Bangkok with{" "}
          <span className="text-accent">☕</span> &amp; <span className="text-primary">code</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-primary" />
          <span>built · v2026.06</span>
          <span className="animate-blink text-primary">▍</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- BOTTOM TAB BAR (mobile) ----------------------------- */

const TAB_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "stack", label: "Stack", icon: Code2 },
  { id: "career", label: "Career", icon: Briefcase },
  { id: "work", label: "Work", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

function BottomTabBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = TAB_ITEMS.map((t) => document.getElementById(t.id)).filter(
      Boolean,
    ) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bottom-tab-bar md:hidden" aria-label="Section navigation">
      <div className="flex items-center justify-around px-2">
        {TAB_ITEMS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`bottom-tab-item ${active === id ? "active" : ""}`}
            aria-current={active === id ? "page" : undefined}
          >
            <Icon className="size-[18px]" strokeWidth={active === id ? 2 : 1.5} />
            <span>{label}</span>
            <span className="bottom-tab-indicator" />
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ----------------------------- SHARED ----------------------------- */

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono-tight text-xs text-primary tracking-widest">/ {n}</span>
      <span className="font-mono-tight text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <span className="flex-1 hairline" />
    </div>
  );
}
