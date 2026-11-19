import type { Metadata } from 'next';
import { HONORS_RANK, NOW_ITEMS } from '@/data/profile';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { JOURNAL_TONES, journalEntries } from '@/data/journal';
import { EDITORIAL, SITE } from '@/data/nav';
import { personJsonLd } from '@/lib/agent';
import { Highlights, PaperRowCompact, ProjectCard } from '@/components/display';
import { Button, Entry, EntryList, Html, More, NowCell, NowGrid, Section, Tag } from '@/components/ui';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    types: { 'text/markdown': '/index.md' },
  },
};

/* =========================================================
   HOME — introduce, show what's current, point onward.
   Hero · Highlights · Now · Work · Research · Journal
   ========================================================= */

const FIRST_PLACE = /\btop 1\b|first prize/i;

export default function Home() {
  const live = projects.filter((p) => p.group === 'live');
  const latestPapers = publications.slice(0, 3);
  const awards = journalEntries.filter((e) => e.kind === 'Award');
  // Papers live under Research; the journal strip shows everything else.
  const lately = journalEntries.filter((e) => e.kind !== 'Paper').slice(0, 3);
  const years = publications.map((p) => Number(p.date.match(/\d{4}/)?.[0]));

  const highlights = [
    { num: String(publications.length), label: `peer-reviewed papers, ${Math.min(...years)}–${Math.max(...years)}`, href: '/research', more: 'Research' },
    { num: String(awards.length), label: 'challenge awards at ACM MM, ACCV and more', href: '/research#awards', more: 'Awards' },
    { num: String(awards.filter((a) => FIRST_PLACE.test(a.headHtml)).length), label: 'first-place finishes', href: '/research#awards', more: 'Awards' },
    { num: HONORS_RANK.value, label: HONORS_RANK.label, href: '/about#education', more: 'About' },
  ];

  return (
    <>
      {/* Machine-readable identity for AI agents and search engines. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      <section className="vl-hero">
        <div className="vl-shell">
          <div className="vl-hero__strip vl-meta">
            <span>{EDITORIAL.issueLabel}</span>
            <span>
              <span className="vl-dot" aria-hidden="true" />
              &nbsp; {EDITORIAL.based}
            </span>
          </div>
          <h1 className="vl-hero__name">
            Van-Loc (Felix)
            <br />
            <em>Nguyen</em>, building
            <br />
            useful AI.
          </h1>
          <p className="vl-hero__sub">
            A computer-vision and deep-learning engineer working at the seam between research and production.
          </p>
          <div className="vl-hero__actions">
            <Button href={SITE.cvHref} variant="accent">Read CV</Button>
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </section>

      <section className="vl-section vl-section--tight" aria-label="Highlights">
        <div className="vl-shell">
          <Highlights items={highlights} />
        </div>
      </section>

      <Section id="now" eyebrow="Now" heading="This quarter" tight>
        <NowGrid>
          {NOW_ITEMS.map((item) => (
            <NowCell key={item.label} label={item.label} title={<Html html={item.titleHtml} />} meta={item.meta} />
          ))}
        </NowGrid>
      </Section>

      <Section id="work" eyebrow="Work" heading="Live projects" count={`${live.length} of ${projects.length}`}>
        <div className="vl-cards">
          {live.map((p) => (
            <ProjectCard key={p.num} p={p} summary={p.homeSummary} />
          ))}
        </div>
        <More href="/work">All {projects.length} projects</More>
      </Section>

      <Section id="research" eyebrow="Research" heading="Latest papers" count={`${latestPapers.length} of ${publications.length}`}>
        <div>
          {latestPapers.map((p) => (
            <PaperRowCompact key={p.titleRest} p={p} />
          ))}
        </div>
        <More href="/research">All {publications.length} papers</More>
      </Section>

      <Section id="journal" eyebrow="Journal" heading="Lately" count="Papers are under Research">
        <EntryList>
          {lately.map((e, i) => (
            <Entry
              key={i}
              compact
              meta={<span className="vl-entry__date">{e.date}</span>}
              aside={<span className="vl-entry__aside">{e.where}</span>}
            >
              <Tag tone={JOURNAL_TONES[e.kind]}>{e.kind}</Tag> <Html className="vl-entry__title" html={e.headHtml} />
            </Entry>
          ))}
        </EntryList>
        <More href="/journal">Full journal</More>
      </Section>
    </>
  );
}
