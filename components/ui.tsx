/* =========================================================
   UI BUILDING BLOCKS
   Server components that render the design system's vl-*
   classes. Every page is: PageHeader → Sections → Footer.
   ========================================================= */

import Link from 'next/link';
import type { ReactNode } from 'react';

/** A link that opens external URLs in a new tab and uses next/link for internal ones. */
export function SmartLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode; 'aria-label'?: string }) {
  if (/^(https?:|mailto:)/.test(href) || href.endsWith('.pdf')) {
    const external = !href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

const isExternal = (href: string) => /^https?:/.test(href) || href.endsWith('.pdf');

/* ── Button ─────────────────────────────────────────────── */

export function Button({
  href,
  children,
  variant = 'default',
}: {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'accent' | 'quiet';
}) {
  const cls = variant === 'default' ? 'vl-btn' : `vl-btn vl-btn--${variant}`;
  return (
    <SmartLink href={href} className={cls}>
      {children} <span className="arrow" aria-hidden="true">{isExternal(href) ? '↗' : '→'}</span>
    </SmartLink>
  );
}

/** Right-aligned "see all" button under a list. */
export function More({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="vl-more">
      <Button href={href}>{children}</Button>
    </div>
  );
}

/* ── Page structure ─────────────────────────────────────── */

export function PageHeader({
  name,
  title,
  dek,
  actions,
}: {
  /** Breadcrumb label; matches the nav label. */
  name: string;
  title: ReactNode;
  dek: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="vl-pagehead">
      <div className="vl-shell">
        <div className="vl-pagehead__crumb vl-meta">
          <Link href="/">Nguyễn Văn Lộc</Link>
          <span aria-hidden="true">/</span>
          <span className="vl-gold">{name}</span>
        </div>
        <h1 className="vl-pagehead__title">{title}</h1>
        <p className="vl-pagehead__dek">{dek}</p>
        {actions && <div className="vl-pagehead__actions">{actions}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="vl-sectionhead">
      <span className="vl-sectionhead__eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  heading,
  children,
}: {
  id?: string;
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="vl-section">
      <div className="vl-shell">
        <SectionHead eyebrow={eyebrow}>{heading}</SectionHead>
        {children}
      </div>
    </section>
  );
}

/* ── Lists ──────────────────────────────────────────────── */

export function EntryList({ children }: { children: ReactNode }) {
  return <div className="vl-list">{children}</div>;
}

/**
 * The one list row: meta column, body, optional aside.
 * With `href` the whole row is a link and the aside defaults to an arrow.
 */
export function Entry({
  href,
  meta,
  aside,
  compact,
  children,
}: {
  href?: string;
  meta: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
  children: ReactNode;
}) {
  const cls = compact ? 'vl-entry vl-entry--compact' : 'vl-entry';
  const inner = (
    <>
      <div className="vl-entry__meta">{meta}</div>
      <div className="vl-entry__body">{children}</div>
      {aside ??
        (href ? (
          <span className="vl-entry__arrow" aria-hidden="true">
            {isExternal(href) ? '↗' : '→'}
          </span>
        ) : (
          <span />
        ))}
    </>
  );
  return href ? (
    <SmartLink href={href} className={cls}>
      {inner}
    </SmartLink>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export type TagTone = 'live' | 'paper' | 'role' | 'award';

export function Tag({ tone, children }: { tone?: TagTone; children: ReactNode }) {
  return <span className={tone ? `vl-tag vl-tag--${tone}` : 'vl-tag'}>{children}</span>;
}

export function Tags({ labels }: { labels: string[] }) {
  return (
    <div className="vl-tags">
      {labels.map((l) => (
        <Tag key={l}>{l}</Tag>
      ))}
    </div>
  );
}

/** A year heading over an entry list (Research, Journal). */
export function YearGroup({
  year,
  count,
  noun,
  children,
}: {
  year: string;
  count: number;
  noun: [string, string];
  children: ReactNode;
}) {
  return (
    <div className="vl-yeargroup" id={`y${year}`}>
      <div className="vl-yearhead">
        <h3 className="vl-yearhead__year">{year}</h3>
        <span className="vl-meta">
          {count} {count === 1 ? noun[0] : noun[1]}
        </span>
      </div>
      <EntryList>{children}</EntryList>
    </div>
  );
}

/* ── Content blocks ─────────────────────────────────────── */

export function NowGrid({ children }: { children: ReactNode }) {
  return <div className="vl-nowgrid">{children}</div>;
}

export function NowCell({
  label,
  title,
  text,
  meta,
}: {
  label: string;
  title: ReactNode;
  text?: ReactNode;
  meta: ReactNode;
}) {
  return (
    <div className="vl-nowgrid__cell">
      <span className="vl-label vl-live">{label}</span>
      <h3>{title}</h3>
      {text && <p className="vl-entry__text" style={{ margin: 0 }}>{text}</p>}
      <span className="vl-meta">{meta}</span>
    </div>
  );
}

export function FieldList({ fields }: { fields: { k: ReactNode; v: ReactNode }[] }) {
  return (
    <div className="vl-fields">
      {fields.map((f, i) => (
        <div key={i} className="vl-field">
          <span className="vl-field__k">{f.k}</span>
          <span className="vl-field__v">{f.v}</span>
        </div>
      ))}
    </div>
  );
}

/** Authored HTML from the data files (em, a, strong only). */
export function Html({ html, as: As = 'span', className }: { html: string; as?: 'span' | 'p' | 'h3'; className?: string }) {
  return <As className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
