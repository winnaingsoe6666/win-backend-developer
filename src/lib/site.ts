/**
 * Canonical public origin of the site, without a trailing slash.
 * Set VITE_SITE_URL (e.g. https://winnaingsoe.dev) in .env so Open Graph,
 * canonical and sitemap URLs are absolute — social crawlers reject relative ones.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://winnaingsoe.dev").replace(
  /\/+$/,
  "",
);

/** Absolute URL for a site-relative path. Falls back to the relative path when SITE_URL is unset. */
export function absUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
