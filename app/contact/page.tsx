import type { Metadata } from 'next';
import LinkedInBadge from '@/components/LinkedInBadge';
import { contactChannels, contactInfo } from '@/data/contact';
import { EDITORIAL } from '@/data/nav';

export const metadata: Metadata = {
  title: 'Contact — Van‑Loc Nguyen',
  description: 'All the ways to reach Van‑Loc Nguyen.',
};

/* =========================================================
   CONTACT PAGE
   ========================================================= */

export default function ContactPage() {
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
            <h1 className="display"><em>Contact</em></h1>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 26px)', color: 'var(--fg-mute)', marginTop: 'var(--s-4)', maxWidth: '60ch', marginBottom: 0 }}>
            I read every letter. Response time is usually under 24 hours on weekdays.
          </p>
        </div>
      </section>

      {/* ── § 01  PRIMARY ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 01</span>
              <span>Write to me</span>
            </div>
            <h2>The best way to reach me is still <em>email</em>.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 'var(--s-6)', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', lineHeight: 1.25, fontStyle: 'italic', color: 'var(--gold)', marginBottom: 'var(--s-5)', fontFamily: 'var(--serif)' }}>
                Working on something that needs computer vision, agent infrastructure, or a careful pair of hands? Let&#39;s talk — research collaborations, contract work, or just an interesting question.
              </p>
              <a className="btn btn-accent" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email} <span className="arrow">→</span>
              </a>
            </div>
            <aside style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 'var(--s-5)' }}>
              <span className="label label-gold" style={{ display: 'block', marginBottom: 'var(--s-3)' }}>Average response</span>
              <div className="display" style={{ fontSize: 'clamp(64px, 7vw, 96px)' }}><em>{contactInfo.responseTime}</em></div>
              <p className="mute" style={{ marginTop: 'var(--s-3)' }}>{contactInfo.responseNote}</p>
              <div style={{ marginTop: 'var(--s-4)', fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--fg-mute)' }}>
                {contactInfo.location}<br />{contactInfo.timezone}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── § 02  ALL CHANNELS ── */}
      <section className="section" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 02</span>
              <span>Elsewhere</span>
            </div>
            <h2>Other places to <em>find</em> me.</h2>
          </div>

          <div className="channel-list">
            {contactChannels.map((ch) => (
              <a key={ch.platform} className="channel-row" href={ch.href} target="_blank" rel="noopener noreferrer">
                <span className="kind">{ch.platform}</span>
                <span className="handle">{ch.handle}</span>
                <span className="note">{ch.note}</span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>

          <LinkedInBadge />
        </div>
      </section>
    </>
  );
}
