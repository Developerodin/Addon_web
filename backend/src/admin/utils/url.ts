/**
 * Normalize any static asset URL to the current origin.
 * - If the URL (absolute or relative) resolves to a pathname under `/static`,
 *   rewrite it to `${window.location.origin}${pathname}`.
 * - Otherwise, return the original URL unchanged.
 */
export function coerceStaticUrlToOrigin(src?: string | null): string | undefined {
  if (!src) {
    return undefined;
  }

  try {
    const candidate = new URL(src, window.location.origin);
    const pathname = candidate.pathname || "";

    if (pathname.startsWith("/static/")) {
      return `${window.location.origin}${pathname}`;
    }

    return candidate.toString();
  } catch {
    // If URL parsing fails, fall back to original string
    return src || undefined;
  }
}


