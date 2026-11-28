import type { Metadata } from 'next';
import { peerReviewed, preprints } from '@/data/publications';
import { journalEntries } from '@/data/journal';
import { SOCIAL_LINKS } from '@/data/nav';
import { groupByYear } from '@/lib/format';
import SubNav from '@/components/SubNav';
import { PaperRow } from '@/components/display';
import { Button, Entry, EntryList, Html, PageHeader, Section } from '@/components/ui';

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

/** "Won <em>top 1</em> at …" → the badge label. */
function resultOf(headHtml: string): string {
  const em = headHtml.match(/<em>([^<]+)<\/em>/)?.[1] ?? '';
  return /top 1/i.test(em) ? 'Top-1' : em.replace(/^\w/, (c) => c.toUpperCase());
}

/* =========================================================
   RESEARCH — papers by year, then challenge wins.
   ========================================================= */

export default function ResearchPage() {
  const years = groupByYear(peerReviewed, (p) => p.date);
  const awards = journalEntries.filter((e) => e.kind === 'Award');
  const count = NUMBER_WORDS[peerReviewed.length] ?? String(peerReviewed.length);

  return (
    <>
      <PageHeader
        name="Research"
        title={<em>Research</em>}
        dek={`${count} peer-reviewed papers on generative editing, multimodal retrieval and media authenticity, and the challenges they won.`}
        actions={<Button href={SCHOLAR}>Google Scholar</Button>}
      />
      <SubNav
        items={[
          ...years.map((y) => ({ id: `y${y.year}`, label: y.year, count: y.items.length })),
          ...(preprints.length > 0 ? [{ id: 'preprints', label: 'Preprints', count: preprints.length }] : []),
          { id: 'awards', label: 'Awards', count: awards.length },
        ]}
      />

      <Section id="papers" eyebrow="Papers" heading="Peer-reviewed research" count={`${peerReviewed.length} papers · newest first`}>
        {years.map((y) => (
          <div key={y.year} className="vl-yeargroup" id={`y${y.year}`}>
            <div className="vl-yearhead">
              <h3 className="vl-yearhead__year">{y.year}</h3>
              <span className="vl-meta">
                {y.items.length} paper{y.items.length === 1 ? '' : 's'}
              </span>
            </div>
            <div>
              {y.items.map((p) => (
                <PaperRow key={p.titleRest} p={p} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      {preprints.length > 0 && (
        <Section id="preprints" eyebrow="Preprints" heading="Under review" count={`${preprints.length} preprint${preprints.length === 1 ? '' : 's'} · not peer-reviewed`}>
          <div>
            {preprints.map((p) => (
              <PaperRow key={p.titleRest} p={p} />
            ))}
          </div>
        </Section>
      )}

      <Section id="awards" eyebrow="Awards" heading="Challenges won" count={`${awards.length} awards`}>
        <EntryList>
          {awards.map((a, i) => (
            <Entry
              key={i}
              compact
              meta={
                <>
                  <span className="vl-award">
                    <span aria-hidden="true">▲</span> {resultOf(a.headHtml)}
                  </span>
                  <span className="vl-entry__date">{a.date}</span>
                </>
              }
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
