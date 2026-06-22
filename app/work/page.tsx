import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { EDITORIAL } from '@/data/nav';

export const metadata: Metadata = {
  title: 'Work & Publications — Van‑Loc Nguyen',
  description: 'A complete register of projects shipped and papers accepted.',
  alternates: {
    canonical: '/work',
    types: { 'text/markdown': '/work.md' },
  },
};

/* =========================================================
   WORK & PUBLICATIONS PAGE
   ========================================================= */

export default function WorkPage() {
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
            <h1 className="display">Work &amp; <em>Publications</em></h1>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 26px)', color: 'var(--fg-mute)', marginTop: 'var(--s-4)', maxWidth: '60ch', marginBottom: 0 }}>
            A complete register of projects shipped, papers accepted, and systems built.
          </p>
        </div>
      </section>

      {/* ── § 01  PROJECTS ── */}
      <section id="projects" className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 01</span>
              <span>Projects</span>
            </div>
            <h2>Systems built to <em>solve</em> real problems.</h2>
          </div>

          <div className="work-list">
            {projects.map((project) => (
              <a key={project.num} className="work-row" href={project.href} target="_blank" rel="noopener noreferrer">
                <span className="num">{project.num} /</span>
                <span className="title">
                  <em>{project.title}</em>
                  {project.subtitle && <> <span className="mute">{project.subtitle}</span></>}
                </span>
                <span className="desc">{project.desc}</span>
                <span className="meta">
                  {project.tags.map((tag) => (
                    <span key={tag.label} className={tag.isLive ? 'tag live' : 'tag'}>
                      {tag.label}
                    </span>
                  ))}
                </span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 02  PUBLICATIONS ── */}
      <section id="publications" className="section" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 02</span>
              <span>Publications</span>
            </div>
            <h2>Peer‑reviewed <em>research</em>.</h2>
          </div>

          <div>
            {publications.map((pub, i) => {
              const titleNode = pub.titleAbbrev ? (
                <><em>{pub.titleAbbrev}</em>: {pub.titleRest}</>
              ) : (
                pub.titleRest
              );

              return (
                <article key={i} className="pub">
                  <div className="meta-col">
                    <span className="date">{pub.date}</span>
                    <span className="venue">{pub.venue}</span>
                    <span className="status">● {pub.status}</span>
                  </div>
                  <div>
                    <h3>
                      {pub.href ? (
                        <a href={pub.href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--gold-dim)' }}>
                          {titleNode}
                        </a>
                      ) : titleNode}
                    </h3>
                    {/* abstract may contain <strong> — authored content, safe to inject */}
                    <p className="abstract" dangerouslySetInnerHTML={{ __html: pub.abstract }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
