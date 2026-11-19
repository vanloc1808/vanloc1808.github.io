import type { Metadata } from 'next';
import { publications } from '@/data/publications';
import { journalEntries } from '@/data/journal';
import { SOCIAL_LINKS } from '@/data/nav';
import { groupByYear, shortDate } from '@/lib/format';
import SubNav from '@/components/SubNav';
import { Button, Entry, EntryList, Html, PageHeader, Section, Tag, YearGroup } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Research — Van-Loc Nguyen',
  description: 'Peer-reviewed papers on generative editing, multimodal retrieval and media authenticity, and the challenges they won.',
  alternates: {
    canonical: '/research',
    types: { 'text/markdown': '/research.md' },
  },
};

const SCHOLAR = SOCIAL_LINKS.find((l) => l.label.includes('Scholar'))!.href;

const NUMBER_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen'];

/* =========================================================
   RESEARCH — papers by year, then challenge wins.
   ========================================================= */

export default function ResearchPage() {
  const years = groupByYear(publications, (p) => p.date);
  const awards = journalEntries.filter((e) => e.kind === 'Award');
  const count = NUMBER_WORDS[publications.length] ?? String(publications.length);

  return (
    <>
      <PageHeader
        name="Research"
        title={<em>Research</em>}
        dek={`${count} peer-reviewed papers on generative editing, multimodal retrieval and media authenticity, newest first. Then the challenges they won.`}
        actions={<Button href={SCHOLAR}>Google Scholar</Button>}
      />
      <SubNav
        items={[
          ...years.map((y) => ({ id: `y${y.year}`, label: y.year, count: y.items.length })),
          { id: 'awards', label: 'Awards', count: awards.length },
        ]}
      />

      <Section id="papers" eyebrow="Papers" heading={<>Peer-reviewed <em>research</em>.</>}>
        {years.map((y) => (
          <YearGroup key={y.year} year={y.year} count={y.items.length} noun={['paper', 'papers']}>
            {y.items.map((p) => (
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
                {/* abstract may contain <strong> — authored content */}
                <Html as="p" className="vl-entry__text" html={p.abstract} />
              </Entry>
            ))}
          </YearGroup>
        ))}
      </Section>

      <Section id="awards" eyebrow="Awards" heading={<>Challenges <em>won</em>.</>}>
        <EntryList>
          {awards.map((a, i) => (
            <Entry
              key={i}
              compact
              meta={<span className="vl-entry__date">{a.date}</span>}
              aside={<span className="vl-entry__aside">{a.where}</span>}
            >
              <Html className="vl-entry__title" html={a.headHtml} />
            </Entry>
          ))}
        </EntryList>
      </Section>
    </>
  );
}
