import type { Metadata } from 'next';
import { journalEntries, type JournalEntry } from '@/data/journal';
import { EDITORIAL } from '@/data/nav';

export const metadata: Metadata = {
  title: 'Journal — Van‑Loc Nguyen',
  description: 'A running log of moves, papers, roles, awards, and moments worth noting.',
  alternates: {
    canonical: '/journal',
    types: { 'text/markdown': '/journal.md' },
  },
};

/* =========================================================
   JOURNAL / DISPATCHES PAGE
   ========================================================= */

/** CSS modifier class for the kind badge. */
function kindClass(kind: JournalEntry['kind']): string {
  const coloured = new Set(['Paper', 'Role', 'Award']);
  return coloured.has(kind) ? `kind ${kind.toLowerCase()}` : 'kind';
}

export default function JournalPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="front" style={{ paddingBottom: 'var(--s-6)' }}>
        <div className="shell">
          <div className="front-top">
            <div className="col-l">{EDITORIAL.issueLabel}</div>
            <div className="col-c">{EDITORIAL.established}</div>
            <div className="col-r">{EDITORIAL.typeset}</div>
          </div>
          <hr className="rule-gold" />
          <div className="front-title">
            <h1 className="display"><em>Journal</em></h1>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 26px)', color: 'var(--fg-mute)', marginTop: 'var(--s-4)', maxWidth: '60ch', marginBottom: 0 }}>
            A running log of moves, papers, roles, awards, and moments worth noting.
          </p>
        </div>
      </section>

      {/* ── § 01  ALL DISPATCHES ── */}
      <section className="section" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 01</span>
              <span>Dispatches</span>
            </div>
            <h2>What&#39;s <em>changed</em>, in order.</h2>
          </div>

          <div className="journal-list">
            {journalEntries.map((entry, i) => (
              <div key={i} className="journal-item">
                <span className="date">{entry.date}</span>
                <span className={kindClass(entry.kind)}>{entry.kind}</span>
                {/* headHtml is authored content — safe to inject */}
                <span className="head" dangerouslySetInnerHTML={{ __html: entry.headHtml }} />
                <span className="where">{entry.where}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
