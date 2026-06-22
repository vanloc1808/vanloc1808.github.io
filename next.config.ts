import type { NextConfig } from "next";

/**
 * Pages served as both HTML and Markdown. Keep in sync with
 * `PAGES` in `lib/agent.ts` and the `*.md` route handlers.
 */
const PAGE_PATHS = ["/", "/background", "/work", "/journal", "/contact"];

const DISCOVERY_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"',
  '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
  '</auth.md>; rel="service-doc"; type="text/markdown"',
  '</llms.txt>; rel="alternate"; type="text/plain"',
].join(', ');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: DISCOVERY_LINK_HEADER,
          },
        ],
      },
    ];
  },

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
