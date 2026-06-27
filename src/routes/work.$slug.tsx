import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProjectBySlug, PROJECT_DETAILS, type ProjectDetail } from "@/lib/projects-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return {
        meta: [
          { title: "Project not found — Win Naing Soe" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${p.name} — Win Naing Soe`;
    const description = `${p.tagline} ${p.impact}`;
    const url = `/work/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "author", content: "Win Naing Soe" },
        {
          name: "keywords",
          content: [...p.tags, ...p.stack, "Win Naing Soe", "Case Study"].join(", "),
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: p.ogImage },
        { property: "og:image:width", content: "1216" },
        { property: "og:image:height", content: "640" },
        { property: "og:image:alt", content: p.ogImageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: p.ogImage },
        { name: "twitter:image:alt", content: p.ogImageAlt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            headline: p.name,
            description,
            url,
            image: p.ogImage,
            keywords: [...p.tags, ...p.stack].join(", "),
            author: {
              "@type": "Person",
              name: "Win Naing Soe",
              jobTitle: "Senior Backend / Full-Stack Software Engineer",
            },
            about: p.domain,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Work", item: "/#work" },
              { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-10">
      <div className="text-center max-w-md">
        <div className="font-mono-tight text-xs uppercase tracking-widest text-primary mb-3">
          / 404
        </div>
        <h1 className="font-display text-4xl mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">
          That case study doesn't exist. Browse the selected work instead.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-10">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl mb-3">Something broke loading this project.</h1>
        <p className="text-sm text-muted-foreground mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: ProjectDetail };
  const others = PROJECT_DETAILS.filter((x) => x.slug !== p.slug);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-mono-tight text-xs text-muted-foreground">[ wns ]</span>
            <span className="font-display text-lg">Win Naing Soe</span>
          </Link>
          <Link
            to="/"
            hash="work"
            className="font-mono-tight text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            ← All work
          </Link>
        </div>
      </header>

      {/* Hero with OG image */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono-tight text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-primary" />
            Case Study · {p.client}
          </div>
          <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] font-light max-w-4xl">
            {p.name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl italic font-display">
            {p.tagline}
          </p>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border ring-signal">
            <img
              src={p.ogImage}
              alt={p.ogImageAlt}
              width={1216}
              height={640}
              className="w-full aspect-[1216/640] object-cover"
            />
          </div>

          {/* Meta grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            <Meta k="Role" v={p.role} />
            <Meta k="Period" v={p.period} />
            <Meta k="Client" v={p.client} />
            <Meta k="Domain" v={p.domain} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <div className="font-mono-tight text-[11px] uppercase tracking-widest text-primary mb-3">
                / Overview
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">{p.description}</p>
            </div>

            <div>
              <div className="font-mono-tight text-[11px] uppercase tracking-widest text-primary mb-3">
                / Impact
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">{p.impact}</p>
            </div>

            <div>
              <div className="font-mono-tight text-[11px] uppercase tracking-widest text-primary mb-4">
                / Highlights
              </div>
              <ul className="space-y-3">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-primary mt-1">◆</span>
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-primary mb-4">
                Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono-tight uppercase tracking-wider px-2.5 py-1 rounded border border-border text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-accent">
                Outcomes
              </div>
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-3xl text-primary">{m.value}</div>
                  <div className="font-mono-tight text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="font-mono-tight text-[10px] uppercase tracking-widest text-primary mb-3">
                Open to work
              </div>
              <p className="text-sm text-foreground/90 mb-4">
                Hiring for a similar engagement? Let's talk.
              </p>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground font-mono-tight uppercase tracking-wider"
              >
                Get in touch →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-border py-20 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono-tight text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
            / More case studies
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/60 transition-all"
              >
                <img
                  src={o.ogImage}
                  alt={o.ogImageAlt}
                  width={1216}
                  height={640}
                  loading="lazy"
                  className="w-full aspect-[1216/640] object-cover group-hover:scale-[1.02] transition-transform"
                />
                <div className="p-5">
                  <h3 className="font-display text-xl leading-tight">{o.name}</h3>
                  <div className="text-sm text-muted-foreground mt-2">{o.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between font-mono-tight text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Win Naing Soe</div>
          <Link to="/" className="hover:text-primary">← Back to portfolio</Link>
        </div>
      </footer>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-card p-5">
      <div className="font-mono-tight text-[10px] uppercase tracking-widest text-muted-foreground">
        {k}
      </div>
      <div className="mt-2 text-sm text-foreground/90">{v}</div>
    </div>
  );
}
