import type { Metadata } from 'next';
import { journalEntries } from '@/data/journal';
import { publications } from '@/data/publications';
import { paperId, paperTitle } from '@/lib/papers';
import { groupByYear, monthDay } from '@/lib/format';
import JournalBrowser from '@/components/JournalBrowser';
import SubNav from '@/components/SubNav';
import { PageHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Journal — Van-Loc Nguyen',
  description: 'A running log of moves, papers, roles, awards, and moments worth noting.',
  alternates: {
    canonical: '/journal',
    types: { 'text/markdown': '/journal.md' },
  },
};

/* =========================================================
   JOURNAL — the full log, grouped by year, filterable by kind.
   ========================================================= */

export default function JournalPage() {
  const groups = groupByYear(journalEntries, (e) => e.date).map((g) => ({
    year: g.year,
    entries: g.items.map((e) => {
      // Papers are described on Research: link there and drop the repeated "Paper" word.
      const em = e.headHtml.match(/<em>([^<]+)<\/em>/)?.[1];
      const paper = e.kind === 'Paper' ? publications.find((p) => paperTitle(p) === em) : undefined;
      const headHtml = e.kind === 'Paper' ? e.headHtml.replace(/^Paper /, '') : e.headHtml;
      return { ...e, headHtml, shortDate: monthDay(e.date), href: paper ? `/research#${paperId(paper)}` : undefined };
    }),
  }));

  return (
    <>
      <PageHeader
        name="Journal"
        title={<em>Journal</em>}
        dek="A running log of papers, roles, moves, awards and moments worth noting. Newest first."
      />
      <SubNav items={groups.map((g) => ({ id: `y${g.year}`, label: g.year, count: g.entries.length }))} />
      <section className="vl-section">
        <div className="vl-shell">
          <JournalBrowser groups={groups} />
        </div>
      </section>
    </>
  );
}
