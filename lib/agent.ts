/* =========================================================
   AGENT-FACING CONTENT
   Single source of truth for the machine-readable surface of
   the site: robots.txt, sitemap.xml, llms.txt, per-page
   Markdown, and JSON-LD. Everything here is derived from the
   same `data/*` modules that render the HTML pages, so the
   Markdown an agent reads never drifts from what a human sees.
   ========================================================= */

import { BIO_PARAGRAPHS, BIO_META, NAME_VARIANTS, STATUS_ITEMS, NOW_ITEMS } from '@/data/profile';
import { SITE, SOCIAL_LINKS } from '@/data/nav';
import { projects, FEATURED_PROJECT_COUNT, type Tag } from '@/data/projects';
import { publications } from '@/data/publications';
import { journalEntries } from '@/data/journal';
import { contactChannels, contactInfo } from '@/data/contact';
import { experienceEntries } from '@/data/experience';
import { educationEntries } from '@/data/education';
import { toolCategories, additionalSkills } from '@/data/toolkit';

/** Canonical origin. The apex (nguyenvanloc.com) redirects here. */
export const SITE_URL = 'https://www.nguyenvanloc.com';

const SITE_TITLE = 'Van‑Loc Nguyen — AI Engineer · Research · Tokyo / Saigon';
const SITE_DESCRIPTION =
  'A computer‑vision and deep‑learning engineer working at the seam between research and production.';

/* ── Pages registry ──────────────────────────────────────── */

export interface PageMeta {
  slug: 'index' | 'background' | 'work' | 'journal' | 'contact';
  /** HTML route. */
  path: string;
  /** Markdown route. */
  md: string;
  title: string;
  description: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

export const PAGES: PageMeta[] = [
  {
    slug: 'index',
    path: '/',
    md: '/index.md',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    slug: 'background',
    path: '/background',
    md: '/background.md',
    title: 'Background — Van‑Loc Nguyen',
    description: 'Education, experience, and the thread connecting them.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    slug: 'work',
    path: '/work',
    md: '/work.md',
    title: 'Work & Publications — Van‑Loc Nguyen',
    description: 'A complete register of projects shipped and papers accepted.',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    slug: 'journal',
    path: '/journal',
    md: '/journal.md',
    title: 'Journal — Van‑Loc Nguyen',
    description: 'A running log of moves, papers, roles, awards, and moments worth noting.',
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    slug: 'contact',
    path: '/contact',
    md: '/contact.md',
    title: 'Contact — Van‑Loc Nguyen',
    description: 'All the ways to reach Van‑Loc Nguyen.',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
];

/* ── HTML → Markdown ─────────────────────────────────────── */

/**
 * Several `data/*` fields carry small HTML fragments (links,
 * <em>, entities). Convert them to inline Markdown so the
 * generated documents are clean prose, not escaped tag soup.
 */
export function htmlToMarkdown(html: string): string {
  return html
    .replace(/<a\b[^>]*?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<\/?(?:strong|b)\b[^>]*>/gi, '**')
    .replace(/<\/?(?:em|i)\b[^>]*>/gi, '*')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

const tagList = (tags: Tag[]): string => tags.map((t) => t.label.replace(/^[●•]\s*/, '').trim()).join(', ');

/* ── Per-page Markdown builders ──────────────────────────── */

function frontMatter(title: string, summary: string): string {
  return `# ${title}\n\n> ${summary}\n`;
}

function buildIndex(): string {
  const out: string[] = [frontMatter('Van‑Loc Nguyen (Nguyễn Văn Lộc) — Felix', SITE_DESCRIPTION)];

  out.push('## About\n\n' + BIO_PARAGRAPHS.join('\n\n'));

  out.push(
    '## At a glance\n\n' +
      STATUS_ITEMS.map((s) => `- **${s.key}:** ${htmlToMarkdown(s.valueHtml)}`).join('\n') +
      `\n- **Based in:** ${BIO_META.based}`
  );

  out.push(
    '## Now\n\n' +
      NOW_ITEMS.map((n) => {
        const link = n.titleLink ? `[${n.titleLink.text}](${n.titleLink.href})` : '';
        return `- **${n.label}:** ${(link + htmlToMarkdown(n.titleText)).trim()} (${n.meta})`;
      }).join('\n')
  );

  const featured = projects.slice(0, FEATURED_PROJECT_COUNT);
  out.push(
    '## Selected work\n\n' +
      featured
        .map((p) => {
          const title = p.subtitle ? `${p.title} ${p.subtitle}` : p.title;
          const tags = p.homeTags ?? p.tags;
          return `### ${p.num} · ${title}\n${htmlToMarkdown(p.homeSummary ?? p.desc)}\n- Tags: ${tagList(tags)}\n- Link: ${p.href}`;
        })
        .join('\n\n')
  );

  const featuredPubs = publications.filter((p) => p.featuredOnHome);
  out.push(
    '## Selected publications\n\n' +
      featuredPubs
        .map((p) => {
          const title = p.titleAbbrev ? `${p.titleAbbrev}: ${p.titleRest}` : p.titleRest;
          const head = p.href ? `[${title}](${p.href})` : title;
          return `### ${head}\n${p.venue} · ${p.status} · ${p.date}\n\n${htmlToMarkdown(p.homeAbstract ?? p.abstract)}`;
        })
        .join('\n\n')
  );

  out.push(
    '## Recent journal\n\n' +
      journalEntries
        .slice(0, 5)
        .map((j) => `- **${j.date}** · ${j.kind} — ${htmlToMarkdown(j.headHtml)} (${j.where})`)
        .join('\n')
  );

  out.push('## Elsewhere\n\n' + SOCIAL_LINKS.map((l) => `- ${l.label}: ${l.href}`).join('\n'));

  return out.join('\n\n') + '\n';
}

function buildBackground(): string {
  const out: string[] = [frontMatter('Background — Van‑Loc Nguyen', page('background').description)];

  out.push(
    '## Experience\n\n' +
      experienceEntries
        .map((e) => {
          const role = htmlToMarkdown(`${e.role} ${e.roleEmphasis ?? ''}`).replace(/\s*—\s*$/, '');
          const desc = e.descHtml ? `\n\n${htmlToMarkdown(e.descHtml)}` : '';
          return `### ${role} — ${e.institution}\n${e.period} · ${e.location}${desc}`;
        })
        .join('\n\n')
  );

  out.push(
    '## Education\n\n' +
      educationEntries
        .map((e) => {
          const degree = htmlToMarkdown(`${e.degree} ${e.degreeEmphasis ?? ''}`).replace(/\s*—\s*$/, '');
          return `### ${degree} — ${e.institution}\n${e.period} · ${e.location}\n\n${htmlToMarkdown(e.descHtml)}`;
        })
        .join('\n\n')
  );

  out.push(
    '## Toolkit\n\n' +
      toolCategories.map((t) => `### ${t.label} — ${t.meta}\n${t.items}\n\n${t.desc}`).join('\n\n') +
      `\n\n- **Human languages:** ${htmlToMarkdown(additionalSkills.humanLanguages)}` +
      `\n- **Also uses:** ${additionalSkills.alsoUses}` +
      `\n- **Interests:** ${additionalSkills.interests}`
  );

  return out.join('\n\n') + '\n';
}

function buildWork(): string {
  const out: string[] = [frontMatter('Work & Publications — Van‑Loc Nguyen', page('work').description)];

  out.push(
    '## Projects\n\n' +
      projects
        .map((p) => {
          const title = p.subtitle ? `${p.title} ${p.subtitle}` : p.title;
          return `### ${p.num} · ${title}\n${htmlToMarkdown(p.desc)}\n- Tags: ${tagList(p.tags)}\n- Link: ${p.href}`;
        })
        .join('\n\n')
  );

  out.push(
    '## Publications\n\n' +
      publications
        .map((p) => {
          const title = p.titleAbbrev ? `${p.titleAbbrev}: ${p.titleRest}` : p.titleRest;
          const head = p.href ? `[${title}](${p.href})` : title;
          return `### ${head}\n${p.venue} · ${p.status} · ${p.date}\n\n${htmlToMarkdown(p.abstract)}`;
        })
        .join('\n\n')
  );

  return out.join('\n\n') + '\n';
}

function buildJournal(): string {
  const out: string[] = [frontMatter('Journal — Van‑Loc Nguyen', page('journal').description)];
  out.push(
    journalEntries
      .map((j) => `- **${j.date}** · ${j.kind} — ${htmlToMarkdown(j.headHtml)} (${j.where})`)
      .join('\n')
  );
  return out.join('\n\n') + '\n';
}

function buildContact(): string {
  const out: string[] = [frontMatter('Contact — Van‑Loc Nguyen', page('contact').description)];

  out.push(
    '## Details\n\n' +
      `- **Email:** ${contactInfo.email}\n` +
      `- **Location:** ${contactInfo.location}\n` +
      `- **Timezone:** ${contactInfo.timezone}\n` +
      `- **Typical response:** ${contactInfo.responseTime} — ${contactInfo.responseNote}`
  );

  out.push(
    '## Channels\n\n' +
      contactChannels.map((c) => `- **${c.platform}** (${c.handle}) — ${c.note}: ${c.href}`).join('\n')
  );

  return out.join('\n\n') + '\n';
}

const BUILDERS: Record<PageMeta['slug'], () => string> = {
  index: buildIndex,
  background: buildBackground,
  work: buildWork,
  journal: buildJournal,
  contact: buildContact,
};

function page(slug: PageMeta['slug']): PageMeta {
  return PAGES.find((p) => p.slug === slug)!;
}

/** Markdown document for a single page. */
export function pageMarkdown(slug: PageMeta['slug']): string {
  return BUILDERS[slug]();
}

/* ── llms.txt ────────────────────────────────────────────── */

/** Concise index per the llmstxt.org convention. */
export function llmsTxt(): string {
  const lines: string[] = [];
  lines.push('# Van‑Loc Nguyen (Nguyễn Văn Lộc)', '');
  lines.push(`> ${SITE_DESCRIPTION}`, '');
  lines.push(
    'Felix is a computer-vision and deep-learning engineer (Python-first) currently a Software Engineer at Eurofins and an MSc AI researcher at HCMUS, recently a student researcher at NII Tokyo.',
    ''
  );

  lines.push('## Pages', '');
  for (const p of PAGES) {
    lines.push(`- [${p.title}](${SITE_URL}${p.md}): ${p.description}`);
  }
  lines.push('');

  lines.push('## Full text', '');
  lines.push(`- [Everything, concatenated](${SITE_URL}/llms-full.txt): all pages as a single Markdown document`);
  lines.push(`- [CV (PDF)](${SITE_URL}/CV.pdf): résumé`);
  lines.push('');

  lines.push('## Elsewhere', '');
  for (const l of SOCIAL_LINKS) {
    lines.push(`- [${l.label}](${l.href})`);
  }
  lines.push('');

  return lines.join('\n');
}

/** Every page concatenated into one Markdown document. */
export function llmsFullTxt(): string {
  const header = `# Van‑Loc Nguyen — full site (Markdown)\n\n> ${SITE_DESCRIPTION}\n\n> Source: ${SITE_URL} · Generated from structured data.\n`;
  return header + '\n' + PAGES.map((p) => pageMarkdown(p.slug)).join('\n---\n\n');
}

/* ── JSON-LD ─────────────────────────────────────────────── */

/** schema.org Person describing the site owner. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nguyễn Văn Lộc',
    alternateName: NAME_VARIANTS.map((n) => htmlToMarkdown(n.nameHtml).replace(/\*/g, '')).concat('Felix'),
    url: SITE_URL,
    jobTitle: 'Software Engineer',
    worksFor: { '@type': 'Organization', name: 'Eurofins', url: 'https://www.eurofins.com/' },
    email: `mailto:${contactInfo.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Ho Chi Minh City', addressCountry: 'VN' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Science, Vietnam National University Ho Chi Minh City',
    },
    knowsAbout: [
      'Computer Vision',
      'Deep Learning',
      'Diffusion Models',
      'Vision-Language Models',
      'Multimedia Retrieval',
      'Media Forensics',
      'Python',
    ],
    knowsLanguage: ['Vietnamese', 'English', 'Japanese', 'Chinese'],
    description: SITE_DESCRIPTION,
    sameAs: SOCIAL_LINKS.map((l) => l.href),
  } as const;
}

/* ── Response helpers (for route handlers) ───────────────── */

const COMMON_HEADERS = {
  'access-control-allow-origin': '*',
  'cache-control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
};

export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: { 'content-type': 'text/markdown; charset=utf-8', ...COMMON_HEADERS },
  });
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', ...COMMON_HEADERS },
  });
}

/** Keep `SITE` referenced so a colophon change is a single edit away. */
export const SITE_COLOPHON = SITE.copyright;
