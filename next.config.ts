import type { NextConfig } from "next";

/**
 * Pages served as both HTML and Markdown. Keep in sync with
 * `PAGES` in `lib/agent.ts` and the `*.md` route handlers.
 */
const PAGE_PATHS = ["/", "/background", "/work", "/journal", "/contact"];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // `beforeFiles` is evaluated before the filesystem, so it can
      // serve Markdown in place of the HTML page when an agent sends
      // `Accept: text/markdown` (content negotiation). Browsers, which
      // never send that media type, are unaffected.
      beforeFiles: PAGE_PATHS.map((path) => ({
        source: path,
        has: [{ type: "header", key: "accept", value: ".*text/markdown.*" }],
        destination: path === "/" ? "/index.md" : `${path}.md`,
      })),
    };
  },
};

export default nextConfig;
