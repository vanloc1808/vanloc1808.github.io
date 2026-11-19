import type { Metadata } from 'next';
import { NOW_ITEMS } from '@/data/profile';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { JOURNAL_TONES, journalEntries } from '@/data/journal';
import { EDITORIAL, SITE } from '@/data/nav';
import { personJsonLd } from '@/lib/agent';
import { shortDate } from '@/lib/format';
import { Button, Entry, EntryList, Html, More, NowCell, NowGrid, Section, Tag, Tags } from '@/components/ui';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    types: { 'text/markdown': '/index.md' },
  },
};

/* =========================================================
   HOME — introduce, show what's current, point onward.
   Hero · Now · Work · Research · Journal (footer via SiteShell)
   ========================================================= */

export default function Home() {
  const liveProjects = projects.filter((p) => p.group === 'live');
  const featuredPubs = publications.filter((p) => p.featuredOnHome).slice(0, 2);
  const recent = journalEntries.slice(0, 3);

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

      <Section id="now" eyebrow="Now" heading={<>What I&#39;m working on this <em>quarter</em>.</>}>
        <NowGrid>
          {NOW_ITEMS.map((item) => (
            <NowCell key={item.label} label={item.label} title={<Html html={item.titleHtml} />} meta={item.meta} />
          ))}
        </NowGrid>
      </Section>

      <Section id="work" eyebrow="Work" heading={<>A few <em>recent</em> projects.</>}>
        <EntryList>
          {liveProjects.map((p) => (
            <Entry
              key={p.num}
              href={p.href}
              meta={
                <>
                  <span className="vl-entry__date">{p.num} /</span>
                  {p.isLive && <Tag tone="live">● Live</Tag>}
                </>
              }
            >
              <h3 className="vl-entry__title">
                <em>{p.title}</em>
                {p.subtitle && <> <span className="mute">{p.subtitle}</span></>}
              </h3>
              <p className="vl-entry__text">{p.homeSummary ?? p.desc}</p>
              <Tags labels={(p.homeTags ?? p.tags).map((t) => t.label)} />
            </Entry>
          ))}
        </EntryList>
        <More href="/work">All work</More>
      </Section>

      <Section id="research" eyebrow="Research" heading={<>Recent <em>papers</em>.</>}>
        <EntryList>
          {featuredPubs.map((p) => (
            <Entry
              key={p.titleRest}
              href={p.href}
              meta={
                <>
                  <span className="vl-entry__date">{shortDate(p.date)}</span>
                  <Tag tone={p.status === 'Accepted' ? 'live' : undefined}>● {p.status}</Tag>
                </>
              }
            >
              <h3 className="vl-entry__title">
                {p.titleAbbrev ? <><em>{p.titleAbbrev}</em>: {p.titleRest}</> : p.titleRest}
              </h3>
              <span className="vl-entry__venue">{p.venue}</span>
              <Html as="p" className="vl-entry__text" html={p.homeAbstract ?? p.abstract} />
            </Entry>
          ))}
        </EntryList>
        <More href="/research">All papers</More>
      </Section>

      <Section id="journal" eyebrow="Journal" heading={<>What&#39;s <em>changed</em> recently.</>}>
        <EntryList>
          {recent.map((e, i) => (
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
