import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { PROJECT_DETAILS } from "@/lib/projects-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuroraBg } from "@/components/aurora-bg";
import { User, Code2, Briefcase, FolderOpen, Award, Mail } from "lucide-react";


const PROJECT_SLUG_BY_NAME: Record<string, string> = Object.fromEntries(
  PROJECT_DETAILS.map((p) => [p.name.split(" — ")[0], p.slug]),
);

function slugForProject(name: string): string | undefined {
  // Exact match first
  if (PROJECT_SLUG_BY_NAME[name]) return PROJECT_SLUG_BY_NAME[name];
  // Prefix match: find a key that starts with the given name or vice versa
  const lowerName = name.toLowerCase();
  for (const [key, slug] of Object.entries(PROJECT_SLUG_BY_NAME)) {
    if (key.toLowerCase().startsWith(lowerName) || lowerName.startsWith(key.toLowerCase())) {
      return slug;
    }
  }
  return undefined;
}

const PAGE_TITLE = "Win Naing Soe — Enterprise Software Engineer · FinTech & Core Banking";
const PAGE_DESCRIPTION =
  "Senior Backend / Full-Stack Engineer with 6+ years building secure, scalable systems for core banking, microfinance, and stock-exchange platforms. Java · Spring Boot · PostgreSQL · Microservices · Angular.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "author", content: "Win Naing Soe" },
      {
        name: "keywords",
        content:
          "Win Naing Soe, Senior Backend Engineer, Full-Stack Engineer, FinTech, Core Banking, Java, Spring Boot, PostgreSQL, Microservices, Angular, Mifos Fineract, Chiang Mai",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      {
        property: "og:image:alt",
        content: "Win Naing Soe — Enterprise Software Engineer, FinTech & Core Banking",
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Win Naing Soe",
          jobTitle: "Senior Backend / Full-Stack Software Engineer",
          description: PAGE_DESCRIPTION,
          url: "/",
          image: "/og-image.jpg",
          email: "mailto:winnaingsoe6666@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chiang Mai",
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
            "PostgreSQL",
            "Microservices",
            "Angular",
            "REST APIs",
            "Core Banking",
            "FinTech",
            "Mifos Fineract",
            "System Modernization",
            "Docker",
            "AWS",
          ],
          sameAs: [
            "https://linkedin.com/in/win-naing-soe",
            "https://github.com/winnaingsoe6666",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ----------------------------- DATA ----------------------------- */

const STACK = [
  {
    title: "Domain Expertise",
    code: "01",
    items: [
      "Core Banking",
      "Microfinance",
      "Loan Management",
      "Payment Integration",
      "Stock Exchange Systems",
      "Financial Reporting",
    ],
    tags: ["Business Analysis", "System Integration", "Compliance"],
  },
  {
    title: "Backend & Architecture",
    code: "02",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "Shell Scripting",
    ],
    tags: ["System Design", "SOLID", "Enterprise Apps"],
  },
  {
    title: "Web App Development",
    code: "03",
    items: ["Angular", "TypeScript / JS", "HTML5 / CSS / SCSS", "Responsive UI", "Single Page Apps"],
    tags: ["UI/UX Design", "Web Vitals", "Accessibility"],
  },
  {
    title: "Database & Storage",
    code: "04",
    items: [
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "Stored Procedures",
      "Query Optimization",
      "Database Migration",
    ],
    tags: ["Data Modeling", "Indexing", "Modernization"],
  },
  {
    title: "DevOps & Tools",
    code: "05",
    items: ["Docker", "Git", "AWS (EC2, S3)", "CI/CD Pipelines", "Linux / Unix", "Test Automation"],
    tags: ["Agile/Scrum", "Code Reviews", "Git Workflow"],
  },
];

const TIMELINE = [
  {
    role: "Senior Full-Stack Software Engineer",
    company: "MSIS Company",
    period: "Feb 2025 — Present",
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
    period: "Nov 2020 — May 2023",
    domain: "JLPT National Registration System",
    impact:
      "Engineered high-traffic backend supporting 5,000+ concurrent users with zero downtime. Integrated 2C2P payment gateway.",
    stack: ["Java 11", "Spring Boot", "PostgreSQL", "jQuery", "Cypress"],
    achievement: "🏆 President's Award · Best System Development.",
  },
  {
    role: "Junior Programmer",
    company: "DIR-ACE Technology",
    period: "Mar 2020 — Mar 2022",
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
    tags: ["FinTech", "Core Banking", "Open Source"],
    role: "Senior Full-Stack Engineer",
    impact: "Built and enhanced scalable banking modules for an open-source financial platform.",
    stack: ["Java", "Spring Boot", "Docker", "Angular"],
    featured: true,
  },
  {
    name: "Stock Exchange Operations Platform",
    tags: ["Enterprise", "FinTech"],
    role: "Senior Software Engineer",
    impact:
      "Enterprise platform managing stock exchange operations, resource allocation, and delivery tracking for Japanese clients.",
    stack: ["Java", "Spring Boot", "SQL", "Linux"],
    featured: true,
  },
  {
    name: "JLPT Registration System",
    tags: ["High Scale", "Enterprise"],
    role: "Full Stack Developer",
    impact:
      "National-scale examination registration supporting online applications, payments, and scheduling at peak load.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "jQuery"],
    featured: true,
  },
  {
    name: "KPI Management System",
    tags: ["Enterprise", "Analytics"],
    role: "Backend Developer",
    impact: "Performance tracking for monitoring KPIs across departments with interactive dashboards.",
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
    title: "ITPEC — Fundamental Information Technology Engineer (FE)",
    org: "IT Professionals Examination Council, Japan",
    date: "06 / 2023",
    note: "National-level IT certification. ID MMFE23S00159.",
  },
  {
    title: "Best System Development Award",
    org: "DIR-ACE Technology",
    date: "09 / 2021",
    note: "For outstanding contribution to the JLPT Registration System project.",
  },
  {
    title: "Quality Assurance Award",
    org: "DIR-ACE Technology",
    date: "09 / 2021",
    note: "Recognized for productivity and quality on the CstNavi team.",
  },
  {
    title: "Java Web Development — Talent Program",
    org: "ACE Group of Companies",
    date: "11 / 2019",
    note: "Selective intensive training in enterprise Java, Spring MVC, and architecture.",
  },
];

const FACTS = [
  { k: "Based in", v: "Chiang Mai, TH", icon: "◉" },
  { k: "Fuel", v: "Coffee & Curiosity", icon: "☕" },
  { k: "Focus", v: "FinTech · Core Banking", icon: "◆" },
  { k: "Languages", v: "Burmese · English · 日本語", icon: "⌘" },
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
        <Marquee />
        <About />
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
    <section id="top" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 md:min-h-0 md:pt-32 md:pb-20">
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
          <span className="hidden md:inline">Chiang Mai · 13.7°N</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono-tight text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-primary" />
              Enterprise Software Engineer
            </p>
            <h1 className="font-sans text-2xl md:text-6xl leading-[1.1] font-light tracking-tight">
              Engineering the{" "}
              <span className="italic font-normal text-primary">quiet machinery</span>
              <br />
              behind modern <span className="text-accent">finance</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Six years building secure, scalable backend systems for core banking, microfinance,
              and stock-exchange operations. Java · Spring Boot · PostgreSQL · Microservices ·
              Angular.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 sm:py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all touch-manipulation"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-5 py-3 sm:py-2.5 text-sm font-medium hover:border-primary/60 hover:text-primary active:scale-[0.97] transition-all touch-manipulation"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/winnaingsoe6666"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-5 py-3 sm:py-2.5 text-sm font-medium hover:border-primary/60 hover:text-primary active:scale-[0.97] transition-all touch-manipulation"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>

            {/* metric strip */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {[
                ["6+", "years shipping"],
                ["5,000+", "concurrent users"],
                ["3", "banking microservices"],
                ["11", "engineers mentored"],
              ].map(([n, l]) => (
                <div key={l} className="bg-card p-3 md:p-5">
                  <div className="font-display text-2xl md:text-5xl text-primary">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2 font-mono-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* profile terminal */}
          <div className="lg:col-span-5">
            <div className="relative animate-float">
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" style={{ animation: "glow-breathe 8s ease-in-out infinite" }} />
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
                    <span style={{ color: "var(--color-syntax-string)" }}>Senior Backend Engineer</span>
                    {" · "}
                    <span style={{ color: "var(--color-syntax-function)" }}>System Architect</span>
                  </TerminalOutput>

                  <TerminalLine prompt command="ls skills/" />
                  <TerminalOutput className="flex flex-wrap gap-x-3">
                    <span style={{ color: "var(--color-syntax-keyword)" }}>java</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>spring-boot</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>kafka</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>postgresql</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>kubernetes</span>
                    <span style={{ color: "var(--color-syntax-keyword)" }}>react</span>
                  </TerminalOutput>

                  <TerminalLine prompt command="uptime" />
                  <TerminalOutput>
                    <span style={{ color: "var(--color-syntax-number)" }}>8+</span> years in production
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

function Line({
  n,
  k,
  v,
  highlight,
}: {
  n: number;
  k: string;
  v: string;
  highlight?: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="code-line-number w-6">{n}</span>
      <span style={{ color: "var(--color-syntax-punctuation)" }}>{"  "}</span>
      <span style={{ color: "var(--color-syntax-keyword)" }}>"{k}"</span>
      <span style={{ color: "var(--color-syntax-punctuation)" }}>:</span>
      <span
        className="truncate"
        style={{
          color: highlight
            ? "var(--color-syntax-function)"
            : "var(--color-syntax-string)",
        }}
      >
        "{v}"
      </span>
    </div>
  );
}

function TerminalLine({ prompt, command, cursor }: { prompt?: boolean; command: string; cursor?: boolean }) {
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

function TerminalOutput({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`pl-4 ${className ?? ""}`} style={{ color: "var(--color-code-muted)" }}>
      {children}
    </div>
  );
}


/* ----------------------------- MARQUEE ----------------------------- */

function Marquee() {
  const words = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Microservices",
    "Angular",
    "Docker",
    "AWS",
    "Mifos Fineract",
    "Core Banking",
    "REST APIs",
    "Spring Security",
    "CI/CD",
    "System Design",
    "Linux",
  ];
  const row = [...words, ...words];
  return (
    <section aria-hidden className="marquee-wrapper marquee-3d border-y border-border bg-card/40 py-3 md:py-4 ticker-mask overflow-hidden">
      <div className="marquee-track flex gap-10 animate-marquee whitespace-nowrap font-display text-xl md:text-5xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={`marquee-word ${i % 2 === 0 ? "font-light" : "font-medium"}`}>{w}</span>
            <span className="marquee-sep text-sm">✦</span>
          </span>
        ))}
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
              I build the <span className="italic text-primary">reliable software</span> that quietly
              moves money, applications, and trust — for banks, exchanges, and the people who
              depend on them.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Over the last 6+ years I've worked primarily inside FinTech and core-banking
                environments, shipping secure, scalable systems with Java, Spring Boot, PostgreSQL,
                Microservices, and Angular.
              </p>
              <p>
                I've launched microservices into production, modernized legacy stacks, and led
                offshore teams for Japanese enterprise clients. What I enjoy most is the unglamorous
                work — performance, maintainability, and the long-tail of edge cases — because
                that's what holds a financial system together at 3am on month-end close.
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
                Architecting microservices on the{" "}
                <span className="text-primary">Mifos Fineract</span> core-banking platform at MSIS —
                expanding modular financial features for enterprise deployments.
              </p>
            </div>
          </div>
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
        <SectionLabel n="01" label="Technical Arsenal" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Tools I reach for — <span className="italic text-accent">sharpened by use</span>.
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
                Backend engineering, system modernization, financial systems, and technical
                leadership.
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Designing secure REST & microservice architectures · transforming legacy stacks ·
              building core banking, loan & payment platforms · leading teams and code reviews.
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
        <SectionLabel n="02" label="Interactive Career Timeline" />
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
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
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
        <SectionLabel n="03" label="Selected Work" />
        <h2 className="mt-4 font-sans text-2xl md:text-6xl font-light tracking-tight max-w-3xl">
          Projects spanning <span className="italic text-primary">FinTech</span>, core banking, and
          enterprise modernization.
        </h2>

        <div className="mt-10 projects-scroll md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 scrollbar-hide">
          {featured.map((p, i) => {
            const slug = slugForProject(p.name);
            const Card = (
              <article
                className="group relative rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/50 active:scale-[0.98] transition-all h-full touch-manipulation"
              >
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
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">{p.impact}</p>
                  <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-border flex flex-wrap gap-1 md:gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[9px] md:text-[10px] font-mono-tight text-foreground/80">
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
            {others.map((p) => (
              <div
                key={p.name}
                className="group grid md:grid-cols-12 gap-4 py-4 items-baseline hover:bg-card/50 active:bg-muted px-2 -mx-2 rounded transition-colors touch-manipulation"
              >
                <div className="md:col-span-4 font-display text-lg">{p.name}</div>
                <div className="md:col-span-2 font-mono-tight text-xs text-muted-foreground uppercase tracking-wider">
                  {p.role}
                </div>
                <div className="md:col-span-4 text-sm text-muted-foreground">{p.impact}</div>
                <div className="md:col-span-2 font-mono-tight text-xs text-primary text-left md:text-right">
                  {p.stack.join(" · ")}
                </div>
              </div>
            ))}
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
        <SectionLabel n="04" label="Recognition & Education" />
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
              <h3 className="font-display text-xl leading-tight">
                B.E. in Electronics
              </h3>
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
                {["Cloud Architecture", "AI-Assisted Dev", "System Design", "FinTech"].map((t) => (
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
    { label: "Email", v: "winnaingsoe6666@gmail.com", href: "mailto:winnaingsoe6666@gmail.com", icon: "✉" },
    { label: "WhatsApp", v: "+66 960 308 914", href: "https://wa.me/66960308914", icon: "✆" },
    { label: "LinkedIn", v: "/in/win-naing-soe", href: "https://linkedin.com/in/win-naing-soe", icon: "in" },
    { label: "GitHub", v: "@winnaingsoe6666", href: "https://github.com/winnaingsoe6666", icon: null },
  ];

  return (
    <section id="contact" className="relative py-12 md:py-24 border-t border-border bg-gradient-to-b from-background to-card/40">
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel n="05" label="Let's build something" />

        <h2 className="mt-6 font-sans text-2xl md:text-6xl font-light tracking-tight leading-[1]">
          Let's build <br />
          <span className="italic text-primary">something great</span> <br />
          together.
        </h2>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4 text-muted-foreground leading-relaxed max-w-xl">
            <p>
              I'm open to <span className="text-foreground">senior backend</span>,{" "}
              <span className="text-foreground">full-stack</span>, and{" "}
              <span className="text-foreground">FinTech</span> roles — remote, hybrid, or with
              relocation from Chiang Mai.
            </p>
            <p>
              If you're working on core banking, payments, microfinance, system modernization, or
              an enterprise platform that has to be{" "}
              <em className="text-accent not-italic">correct, fast, and quiet</em> — I'd love to
              talk.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Senior Software Engineer",
                "Backend Engineer",
                "Full-Stack Engineer",
                "FinTech Projects",
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
                      <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
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
          © {new Date().getFullYear()} Win Naing Soe · Crafted in Chiang Mai with{" "}
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
    const sections = TAB_ITEMS.map((t) => document.getElementById(t.id)).filter(Boolean) as Element[];
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
