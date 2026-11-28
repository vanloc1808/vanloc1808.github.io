/* =========================================================
   DISPLAY COMPONENTS (v2)
   Paper rows, project cards, one-line rows, highlights and
   the timeline. Mirrors the design system's cards of the
   same names.
   ========================================================= */

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Publication } from '@/data/publications';
import type { Project } from '@/data/projects';
import { shortDate } from '@/lib/format';
import { paperId, paperTitle } from '@/lib/papers';
import CiteButton from './CiteButton';
import { Entry, EntryList, Html, SmartLink, Tag } from './ui';

const ME = 'Van-Loc Nguyen';

/* ── helpers ────────────────────────────────────────────── */

function bibtex(p: Publication): string {
  const year = p.date.match(/\d{4}/)?.[0] ?? '';
  const family = (n: string) => n.split(' ').slice(-1)[0];
  const given = (n: string) => n.split(' ').slice(0, -1).join(' ');
  const key = `${family(p.authors[0]).toLowerCase()}${year}${(p.titleAbbrev ?? p.titleRest).split(/[^A-Za-z0-9]/)[0].toLowerCase()}`;
  const fields = [
    `  title     = {${paperTitle(p)}}`,
    `  author    = {${p.authors.map((a) => `${family(a)}, ${given(a)}`).join(' and ')}}`,
    p.status === 'Preprint' ? `  howpublished = {${p.venue}}` : `  booktitle = {${p.venue}}`,
    `  year      = {${year}}`,
    p.doi ? `  doi       = {${p.doi}}` : null,
    p.href ? `  url       = {${p.href}}` : null,
  ].filter(Boolean);
  return `@${p.status === 'Preprint' ? 'misc' : 'inproceedings'}{${key},\n${fields.join(',\n')}\n}`;
}

/* ── badges ─────────────────────────────────────────────── */

export function Venue({ children }: { children: ReactNode }) {
  return <span className="vl-venue">{children}</span>;
}

export function Award({ children }: { children: ReactNode }) {
  return (
    <span className="vl-award">
      <span aria-hidden="true">▲</span> {children}
    </span>
  );
}

/* ── figure ─────────────────────────────────────────────── */

/** A picture at its own shape: no fixed ratio, no padding. Opens full size on click. */
export function Figure({
  src,
  width,
  height,
  caption,
  alt,
  sizes = '(max-width: 980px) 100vw, 260px',
}: {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  sizes?: string;
}) {
  return (
    <a className="vl-figure vl-figure--img" href={src} target="_blank" rel="noopener noreferrer" title={caption}>
      <Image src={src} width={width} height={height} alt={alt} sizes={sizes} />
      <span className="vl-figure__cap">{caption}</span>
    </a>
  );
}

/* ── papers ─────────────────────────────────────────────── */

function Authors({ names, equal }: { names: string[]; equal?: string[] }) {
  return (
    <p className="vl-paper__authors">
      {names.map((n, i) => (
        <span key={n}>
          {i > 0 && ', '}
          {n === ME ? <b>{n}</b> : n}
          {equal?.includes(n) && <sup>*</sup>}
        </span>
      ))}
      {equal && equal.length > 0 && <span className="eq">* equal contribution</span>}
    </p>
  );
}

function PaperMeta({ p }: { p: Publication }) {
  return (
    <div className="vl-paper__meta">
      <Venue>{p.venueShort}</Venue>
      <span className="vl-entry__date">{shortDate(p.date)}</span>
      <Tag tone={p.status === 'Accepted' ? 'live' : undefined}>● {p.status}</Tag>
    </div>
  );
}

function PaperTitle({ p }: { p: Publication }) {
  return (
    <h3 className="vl-paper__title">
      {p.titleAbbrev ? (
        <>
          <em>{p.titleAbbrev}</em>: {p.titleRest}
        </>
      ) : (
        p.titleRest
      )}
    </h3>
  );
}

/** Full row for Research: venue, title, authors, one line, links, abstract on demand, figure. */
export function PaperRow({ p }: { p: Publication }) {
  return (
    <article className="vl-paper" id={paperId(p)}>
      <PaperMeta p={p} />
      <div>
        <PaperTitle p={p} />
        <Authors names={p.authors} equal={p.equalContribution} />
        <p className="vl-paper__tldr">{p.tldr}</p>
        {p.award && (
          <div className="vl-paper__badges">
            <Award>{p.award}</Award>
          </div>
        )}
        <div className="vl-links">
          {p.href && <a href={p.href} target="_blank" rel="noopener noreferrer">Paper ↗</a>}
          {p.projectHref && <a href={p.projectHref} target="_blank" rel="noopener noreferrer">Project ↗</a>}
          {p.codeHref && <a href={p.codeHref} target="_blank" rel="noopener noreferrer">Code ↗</a>}
          <CiteButton bibtex={bibtex(p)} />
        </div>
        <details className="vl-abstract">
          <summary>Abstract</summary>
          {/* abstract may contain <strong> — authored content */}
          <p dangerouslySetInnerHTML={{ __html: p.abstract }} />
        </details>
      </div>
      {p.figure ? (
        <Figure {...p.figure} alt={`${p.figure.caption}, from “${paperTitle(p)}”`} />
      ) : (
        <span />
      )}
    </article>
  );
}

/** Compact row for Home: links to the paper on Research. */
export function PaperRowCompact({ p }: { p: Publication }) {
  return (
    <Link className="vl-paper vl-paper--compact" href={`/research#${paperId(p)}`}>
      <PaperMeta p={p} />
      <div>
        <PaperTitle p={p} />
        <p className="vl-paper__tldr">{p.tldr}</p>
        {p.award && (
          <div className="vl-paper__badges">
            <Award>{p.award}</Award>
          </div>
        )}
      </div>
      <span className="vl-entry__arrow" aria-hidden="true">→</span>
    </Link>
  );
}

/* ── projects ───────────────────────────────────────────── */

export function CappedTags({ labels, cap = 4 }: { labels: string[]; cap?: number }) {
  const hidden = labels.length - cap;
  return (
    <div className="vl-tags">
      {labels.slice(0, cap).map((l) => (
        <Tag key={l}>{l}</Tag>
      ))}
      {hidden > 0 && <span className="vl-tag vl-tag--more" title={labels.slice(cap).join(', ')}>+{hidden}</span>}
    </div>
  );
}

/** A live product or research build as a card; the picture appears only when a screenshot exists. */
export function ProjectCard({
  p,
  summary,
  badge,
  wide,
}: {
  p: Project;
  summary?: string;
  badge?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="vl-card" style={wide ? { gridColumn: '1 / -1' } : undefined}>
      {p.screenshot && (
        <Figure
          {...p.screenshot}
          caption={`Screenshot · ${p.title}`}
          alt={`Screenshot of ${p.title}`}
          sizes="(max-width: 980px) 100vw, 640px"
        />
      )}
      <div className="vl-card__body">
        <div className="vl-card__head">
          <h3 className="vl-card__title">
            {p.title}
            {p.subtitle && <> <span className="mute">{p.subtitle}</span></>}
          </h3>
          {badge ?? (p.isLive && <Tag tone="live">● Live</Tag>)}
        </div>
        <p className="vl-card__text">{summary ?? p.desc}</p>
        <CappedTags labels={p.tags.map((t) => t.label)} />
        <div className="vl-links">
          {p.liveHref && <a href={p.liveHref} target="_blank" rel="noopener noreferrer">Visit ↗</a>}
          <a href={p.href} target="_blank" rel="noopener noreferrer">Code ↗</a>
        </div>
      </div>
    </div>
  );
}

/** One line per minor project. */
export function LineRow({ p }: { p: Project }) {
  return (
    <SmartLink className="vl-line" href={p.href}>
      <span className="vl-entry__date">
        {p.num} / {p.course}
      </span>
      <span className="vl-line__title">
        <em>{p.title}</em> <span className="mute">— {p.oneLine}</span>
      </span>
      <CappedTags labels={p.tags.map((t) => t.label)} cap={2} />
      <span className="vl-entry__arrow" aria-hidden="true">↗</span>
    </SmartLink>
  );
}

/* ── highlights ─────────────────────────────────────────── */

export function Highlights({ items }: { items: { num: string; label: string; href: string; more: string }[] }) {
  return (
    <div className="vl-stats">
      {items.map((s) => (
        <Link key={s.label} className="vl-stat" href={s.href}>
          <span className="vl-stat__num">{s.num}</span>
          <span className="vl-stat__label">{s.label}</span>
          <span className="vl-stat__more">{s.more} →</span>
        </Link>
      ))}
    </div>
  );
}

/* ── timeline ───────────────────────────────────────────── */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Apr 2026 — Present" → [start, end] as months since year 0. */
function parsePeriod(period: string, now: Date): [number, number] {
  const [a, b] = period.split(/\s+—\s+/);
  const toMonth = (s: string) => {
    if (/present/i.test(s)) return now.getFullYear() * 12 + now.getMonth();
    const [mon, year] = s.trim().split(/\s+/);
    return Number(year) * 12 + MONTHS.indexOf(mon.slice(0, 3));
  };
  return [toMonth(a), toMonth(b ?? a)];
}

export interface TimelineRow {
  label: string;
  period: string;
  kind: 'work' | 'study';
}

/** Year axis with every role and study as a bar; overlaps are visible at a glance. */
export function Timeline({ rows, startYear, endYear }: { rows: TimelineRow[]; startYear: number; endYear: number }) {
  const now = new Date();
  const start = startYear * 12;
  const span = (endYear - startYear + 1) * 12;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const currentEnd = now.getFullYear() * 12 + now.getMonth();

  const visible = rows
    .map((r) => ({ ...r, range: parsePeriod(r.period, now) }))
    .filter((r) => r.range[1] >= start);

  const bar = (r: (typeof visible)[number]) => {
    const [a, b] = r.range;
    const left = (Math.max(a, start) - start) / span;
    const right = (Math.min(b + 1, start + span) - start) / span;
    const cls = [
      'vl-timeline__bar',
      r.kind === 'study' ? 'vl-timeline__bar--study' : b >= currentEnd ? 'vl-timeline__bar--now' : '',
      a < start ? 'vl-timeline__bar--clipped' : '',
    ].join(' ');
    return <span className={cls} style={{ left: `${left * 100}%`, width: `${(right - left) * 100}%` }} />;
  };

  // One gridline per year, whatever the span.
  const grid = { backgroundSize: `${100 / years.length}% 100%` };

  const group = (kind: TimelineRow['kind'], title: string) => {
    const items = visible.filter((r) => r.kind === kind);
    if (items.length === 0) return null;
    return (
      <>
        <div className="vl-timeline__group">{title}</div>
        {items.map((r) => {
          const [org, role] = r.label.split(' · ');
          return (
            <div key={r.label + r.period} className="vl-timeline__row">
              <span className="vl-timeline__label">
                <b>{org}</b>
                {role && ` · ${role}`}
                {r.range[0] < start && ` (from ${Math.floor(r.range[0] / 12)})`}
              </span>
              <div className="vl-timeline__track" style={grid}>{bar(r)}</div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="vl-timeline" role="img" aria-label={`Timeline of roles and studies, ${startYear} to ${endYear}. Details are listed below.`}>
      <div className="vl-timeline__row vl-timeline__axis">
        <span className="vl-timeline__label" />
        <div className="vl-timeline__track" style={{ gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))` }}>
          {years.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>
      {group('work', 'Work')}
      {group('study', 'Study')}
      <div className="vl-timeline__legend" aria-hidden="true">
        <span><i style={{ background: 'var(--highlight)' }} />Current role</span>
        <span><i style={{ background: 'var(--accent-dim)' }} />Past role</span>
        <span>
          <i style={{ border: '1px solid var(--teal)', backgroundImage: 'repeating-linear-gradient(135deg, var(--teal) 0 1px, transparent 1px 4px)' }} />
          Study
        </span>
      </div>
    </div>
  );
}

/* ── experience & education rows ────────────────────────── */

export interface TimelineItem {
  period: string;
  institution: string;
  institutionHref?: string;
  location: string;
  title: string;
  emphasis?: string;
  descHtml?: string;
}

export function CareerList({ items }: { items: TimelineItem[] }) {
  return (
    <EntryList>
      {items.map((t, i) => (
        <Entry
          key={i}
          meta={
            <>
              <span className="vl-entry__date">{t.period}</span>
              <span className="vl-entry__sub">
                {t.institutionHref ? (
                  <a href={t.institutionHref} target="_blank" rel="noopener noreferrer">{t.institution}</a>
                ) : (
                  t.institution
                )}
              </span>
              <span className="vl-entry__place">{t.location}</span>
            </>
          }
        >
          <h3 className="vl-entry__title">
            {t.title}
            {t.emphasis && <>{' — '}<em>{t.emphasis}</em></>}
          </h3>
          {/* descHtml is authored content — may contain links */}
          {t.descHtml && <Html as="p" className="vl-entry__text" html={t.descHtml} />}
        </Entry>
      ))}
    </EntryList>
  );
}
