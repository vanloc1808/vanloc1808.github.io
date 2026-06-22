import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/agent';

export const dynamic = 'force-static';

/**
 * Named AI / agent crawlers we explicitly welcome. A bare
 * `User-agent: * / Allow: /` already permits them, but listing
 * them makes the intent unambiguous to agent-readiness checks.
 */
const AI_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'Meta-ExternalAgent',
  'cohere-ai',
  'DuckAssistBot',
  'Diffbot',
  'YouBot',
  'Timpibot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_AGENTS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
