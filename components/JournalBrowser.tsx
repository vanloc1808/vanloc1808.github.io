'use client';

import { useState } from 'react';
import { JOURNAL_TONES, type JournalEntry, type JournalKind } from '@/data/journal';
import { Entry, Html, Tag, YearGroup } from './ui';

const KINDS: JournalKind[] = ['Paper', 'Award', 'Role', 'Move', 'Milestone', 'Event'];

export interface JournalGroup {
  year: string;
  entries: (JournalEntry & { shortDate: string; href?: string })[];
}

/** Year-grouped journal with a single-select filter by kind. */
export default function JournalBrowser({ groups }: { groups: JournalGroup[] }) {
  const [kind, setKind] = useState<JournalKind | 'All'>('All');
  const all = groups.flatMap((g) => g.entries);
  const count = (k: JournalKind) => all.filter((e) => e.kind === k).length;

  return (
    <>
      <div className="vl-sectionhead vl-sectionhead--compact">
        <span className="vl-sectionhead__eyebrow">Filter</span>
        <div className="vl-chips" role="group" aria-label="Filter entries by kind">
          {(['All', ...KINDS] as const).map((k) => (
            <button
              key={k}
              type="button"
              className="vl-chip"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
            >
              {k}
              <span className="count">{k === 'All' ? all.length : count(k)}</span>
            </button>
          ))}
        </div>
        <span className="vl-sectionhead__count">Paper rows open Research</span>
      </div>

      {groups.map((g) => {
        const entries = kind === 'All' ? g.entries : g.entries.filter((e) => e.kind === kind);
        if (entries.length === 0) return null;
        return (
          <YearGroup key={g.year} year={g.year} count={entries.length} noun={['entry', 'entries']}>
            {entries.map((e, i) => (
              <Entry
                key={`${e.date}-${i}`}
                compact
                href={e.href}
                meta={<span className="vl-entry__date">{e.shortDate}</span>}
                aside={
                  <span className="vl-entry__aside">
                    {e.where}
                    {e.href && <span className="vl-entry__arrow" aria-hidden="true">&nbsp; →</span>}
                  </span>
                }
              >
                <Tag tone={JOURNAL_TONES[e.kind]}>{e.kind}</Tag>{' '}
                <Html className="vl-entry__title" html={e.headHtml} />
              </Entry>
            ))}
          </YearGroup>
        );
      })}
    </>
  );
}
