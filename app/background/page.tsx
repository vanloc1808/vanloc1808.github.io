import type { Metadata } from 'next';
import { educationEntries } from '@/data/education';
import { experienceEntries } from '@/data/experience';
import { toolCategories, additionalSkills } from '@/data/toolkit';
import { EDITORIAL } from '@/data/nav';

export const metadata: Metadata = {
  title: 'Background — Van‑Loc Nguyen',
  description: 'Education, experience, and the thread connecting them.',
  alternates: {
    canonical: '/background',
    types: { 'text/markdown': '/background.md' },
  },
};

/* =========================================================
   BACKGROUND PAGE
   ========================================================= */

export default function BackgroundPage() {
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
            <h1 className="display"><em>Background</em></h1>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 26px)', color: 'var(--fg-mute)', marginTop: 'var(--s-4)', maxWidth: '60ch', marginBottom: 0 }}>
            Education, experience, and the thread connecting them.
          </p>
        </div>
      </section>

      {/* ── § 01  EXPERIENCE ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 01</span>
              <span>Experience</span>
            </div>
            <h2>From notebook to <em>production</em>.</h2>
          </div>

          <div className="tl-list">
            {experienceEntries.map((exp, i) => (
              <div key={i} className="tl-item">
                <div className="meta-col">
                  <span className="period">{exp.period}</span>
                  <span className="inst">
                    {exp.institutionHref ? (
                      <a href={exp.institutionHref} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', borderBottom: '1px solid var(--rule)' }}>
                        {exp.institution}
                      </a>
                    ) : exp.institution}
                  </span>
                  <span className="loc">{exp.location}</span>
                </div>
                <div>
                  <h3>
                    {exp.role}{exp.roleEmphasis && <> <em>{exp.roleEmphasis}</em></>}
                  </h3>
                  {/* descHtml is authored content — safe to inject */}
                  {exp.descHtml && <p dangerouslySetInnerHTML={{ __html: exp.descHtml }} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 02  EDUCATION ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 02</span>
              <span>Education</span>
            </div>
            <h2>Trained in <em>science</em>, drawn to engineering.</h2>
          </div>

          <div className="tl-list">
            {educationEntries.map((edu, i) => (
              <div key={i} className="tl-item">
                <div className="meta-col">
                  <span className="period">{edu.period}</span>
                  <span className="inst">
                    {edu.institutionHref ? (
                      <a href={edu.institutionHref} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', borderBottom: '1px solid var(--rule)' }}>
                        {edu.institution}
                      </a>
                    ) : edu.institution}
                  </span>
                  <span className="loc">{edu.location}</span>
                </div>
                <div>
                  <h3>
                    {edu.degree}{edu.degreeEmphasis && <> <em>{edu.degreeEmphasis}</em></>}
                  </h3>
                  {/* descHtml is authored content — safe to inject */}
                  <p dangerouslySetInnerHTML={{ __html: edu.descHtml }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 03  TOOLKIT ── */}
      <section className="section" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 03</span>
              <span>Toolkit</span>
            </div>
            <h2>The instruments I <em>reach for</em>.</h2>
          </div>

          <div className="now-grid">
            {toolCategories.map((cat) => (
              <div key={cat.label} className="now-cell">
                <span className="label label-accent">{cat.label}</span>
                <h3>{cat.items}</h3>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1em', lineHeight: 1.5, color: 'var(--fg-mute)', margin: 0 }}>
                  {cat.desc}
                </p>
                <span className="meta">{cat.meta}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s-6)' }}>
            <div className="bio-aside" style={{ borderLeft: 0, paddingLeft: 0 }}>
              <div className="field">
                <span className="k">Human languages</span>
                <span className="v">
                  Vietnamese <span className="mute">native ·</span>{' '}
                  English <span className="mute">fluent ·</span>{' '}
                  日本語 <span className="mute">conversational ·</span>{' '}
                  中文 <span className="mute">basic</span>
                </span>
              </div>
              <div className="field">
                <span className="k">Also uses</span>
                <span className="v">{additionalSkills.alsoUses}</span>
              </div>
              <div className="field">
                <span className="k">Interests</span>
                <span className="v">{additionalSkills.interests}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
