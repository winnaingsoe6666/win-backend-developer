# Multi-Platform Scraping & Analytics Platform (TikTok Shop / EchoTik)

**Role:** Full-stack / systems engineer — designed and built the platform end to end
across three services and two datastores.

## Summary

Designed and built a production-oriented data pipeline that scrapes e-commerce and
creator data from TikTok Shop and EchoTik, and lands it in a canonical, audit-grade
analytics database for downstream reporting. The system spans three independently
deployable services — a React admin console, a NestJS/BullMQ scraping engine, and a
Spring Boot/Oracle analytics API — chosen deliberately rather than as a monolith,
because the three layers have genuinely different concerns: user-facing job control,
browser-automation orchestration under anti-bot pressure, and long-term relational
data integrity.

## Problem

The business needed recurring visibility into competitor/creator performance on
TikTok Shop and EchoTik: follower/engagement trends, GMV, and product-level
commerce data. That data only exists behind authenticated, rate-limited,
bot-defensive web UIs — there's no public API — so it has to be scraped, and scraped
in a way that survives the target platform's active anti-automation measures without
getting the scraping account banned, while still producing data clean enough to trust
for analytics.

## Architecture

I split the system into three layers along real fault- and concern-boundaries rather
than by convenience:

- **Client (React 19 + Vite + TanStack Query)** — an internal admin console for
  triggering scrape jobs, authenticating the EchoTik session, and polling job status
  in near-real-time. Deliberately thin: no business logic, no direct DB access, just
  a typed contract against the scraper's HTTP API.
- **`server(scrape-tool)` (NestJS + BullMQ + Puppeteer/Crawlee, Memurai/Redis-backed)**
  — an `api` app for HTTP intake and a separate `worker` app (no HTTP listener at all)
  for the actual browser automation, connected only through a Redis-backed queue.
  This is the layer that owns everything about *how* scraping happens: session
  management, retries, rate-limit backoff, and de-duplication.
- **`analytics-api` (Spring Boot + Oracle 19c)** — the system of record. A normalized,
  audit-first schema separating canonical master data (creators, stores, products)
  from insert-only daily snapshot tables (metrics, commerce), with every write traced
  back to a permanent job/audit trail that survives even when the write itself fails
  and rolls back.

I intentionally kept these three services independently deployable and only loosely
coupled through HTTP contracts — the scraper doesn't know Oracle exists, the analytics
API doesn't know BullMQ exists — so any one of them can be replaced or scaled without
touching the others.

## Key engineering problems I solved

**Surviving anti-bot defenses without treating it as an afterthought.**
EchoTik actively rate-limits and soft-bans automated sessions. I built a dedicated
session-coordination layer (Redis-backed) that serializes all EchoTik scraping to a
single active session — even though 5 worker processes run in parallel — using an
atomic lock with a Lua-scripted compare-and-delete for safe release, jittered
inter-page delays, a per-session API-call budget, and a circuit breaker that opens
after a configurable streak of rate-limit hits and forces a cool-down instead of
hammering a throttled endpoint. Rate-limit responses trigger a delayed re-queue
(via BullMQ's `moveToDelayed`) with exponential backoff, so a throttled job politely
waits its turn instead of burning a retry attempt or blocking a worker slot.

**Designing a queue architecture instead of a "just write to the DB" pipeline.**
I deliberately chose BullMQ/Redis over a polling database table for job
orchestration, because the actual bottleneck here isn't storage — it's coordinating
retries, backoff, delayed re-scheduling, and a cross-process lock across 5 concurrent
worker processes. That's a different problem than durable persistence, and I kept the
two concerns in the datastores best suited to each: Redis for fast, atomic,
short-lived execution state; Oracle for permanent business data. Getting this split
right matters — conflating them is a common source of either a slow audit database or
an unreliable queue.

**Idempotent, dedup-aware syncing instead of blind re-inserts.**
Every scraped record is content-hashed and checked against a freshness window before
being synced, so re-running a scrape against unchanged data doesn't create redundant
writes or noisy history. I designed this as an explicit two-check gate (freshness,
then content-hash) ahead of an idempotent upsert-by-natural-key call into the
analytics API, rather than relying on the destination database to silently
de-duplicate — that keeps the expensive/slow path (an HTTP round-trip into another
service) reserved for records that actually changed.

**An audit trail that survives failure, not just success.**
On the analytics-API side, I designed the import pipeline so that job/audit
bookkeeping (`SCRAPE_JOB`, raw-payload archive, process log) commits in its own
transaction, independent of the master-upsert/snapshot-insert step it's auditing —
using `REQUIRES_NEW` propagation deliberately, against the more "obvious" design of
one all-encompassing transaction. That distinction matters: a naive single-transaction
design would silently roll back the very audit rows meant to explain *why* an import
failed, defeating the point of having an audit trail at all.

**A canonical schema that separates identity from statistics.**
Rather than one wide table per platform, I designed a 3NF-oriented schema that
separates master business identity (a `CREATOR` can have accounts on multiple
platforms via `CREATOR_PLATFORM`) from insert-only daily snapshots
(`CREATOR_METRIC`, `CREATOR_COMMERCE`) — so historical trend data is never
overwritten, and a creator's identity doesn't need to be re-resolved every time a new
platform's metrics come in.

**Cross-service identity bridging.**
The scraper's BullMQ job id, the analytics API's own permanent `SCRAPE_JOB` audit
row, and the target platform's natural business key (e.g. an EchoTik `influencer_id`)
are three different identifier spaces belonging to three different systems. I treated
that as a deliberate boundary rather than trying to force one universal ID everywhere
— the queue layer needs a cheap, disposable id for execution tracking; the audit layer
needs a permanent one; the business layer needs the platform's own natural key for
idempotent upserts. Bridging them explicitly at each hand-off kept each layer's
identifier scheme simple and fit for its own purpose.

## Tech stack

| Layer | Stack |
|---|---|
| Client | React 19, Vite, TanStack Query, React Hook Form + Zod, Zustand, Tailwind v4, shadcn/ui, i18next (3 locales) |
| Scraper | NestJS 11 (multi-app monorepo: `api` + `worker`), BullMQ, Redis/Memurai, Puppeteer, Crawlee, PM2 |
| Analytics API | Spring Boot 3, Java 21, Spring Data JPA, Oracle 19c, springdoc/OpenAPI, MapStruct |
| Cross-cutting | Docker Compose (local Oracle), REST/JSON contracts between all three services, environment-driven config with fail-fast validation |

## Trade-offs and what I'd revisit

I hold myself to being honest about where the design has open edges, since that's
part of doing this at a senior level:

- The legacy `product`/`shop` scrape pipeline (Crawlee-based) currently has
  placeholder page extraction — it proves out the queueing, retry, and archival
  pipeline end-to-end, but real selector-based extraction per target site is the
  next real increment of work, not yet a "done" feature.
- Sync failures between the scraper and the analytics API are currently caught and
  counted per record rather than surfaced loudly in job status — good for not
  failing an entire batch over one bad record, but I'd add explicit visibility into
  that failure count in the job-status contract so "the job completed" and "the data
  actually landed" are never confused by whoever's watching the dashboard.
- The relational integrity between snapshot tables and their parent job/business
  entities is currently enforced at the application layer (explicit lookups,
  explicit foreign-key columns) rather than via database-level foreign key
  constraints in every environment — a deliberate speed-of-iteration trade-off
  during active schema development, with the constraints already defined and ready
  to enforce once the schema stabilizes.

## What this demonstrates

Designing multi-service systems along real operational boundaries rather than
convenience; building automation that respects and works around a hostile,
rate-limited target instead of just "scraping until it breaks"; making deliberate,
defensible choices about where state lives (queue vs. cache vs. permanent store) and
being able to articulate why; and designing for auditability and idempotency as
first-class requirements in a data pipeline, not afterthoughts bolted on once
something already broke in production.
