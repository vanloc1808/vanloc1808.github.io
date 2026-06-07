import Link from 'next/link';
import { BIO_PARAGRAPHS, BIO_META, NAME_VARIANTS, STATUS_ITEMS, NOW_ITEMS } from '@/data/profile';
import { projects, FEATURED_PROJECT_COUNT } from '@/data/projects';
import { publications } from '@/data/publications';
import { journalEntries, type JournalEntry } from '@/data/journal';
import { EDITORIAL, SITE, SOCIAL_LINKS } from '@/data/nav';
import { contactInfo } from '@/data/contact';

/* =========================================================
   HOMEPAGE — index.html
   Editorial personal site for Van‑Loc Nguyen
   ========================================================= */

/** CSS modifier class for the kind badge on the journal strip. */
function kindClass(kind: JournalEntry['kind']): string {
  const coloured = new Set(['Paper', 'Role', 'Award']);
  return coloured.has(kind) ? `kind ${kind.toLowerCase()}` : 'kind';
}

export default function Home() {
  const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT);
  const featuredPubs = publications.filter((p) => p.featuredOnHome);
  const recentDispatches = journalEntries.slice(0, 5);

  return (
    <>
      {/* ── FRONT PAGE ── */}
      <section className="front">
        <div className="shell">

          {/* editorial top strip */}
          <div className="front-top">
            <div className="col-l">{EDITORIAL.issueLabel}</div>
            <div className="col-c">{EDITORIAL.established}</div>
            <div className="col-r">{EDITORIAL.typeset}</div>
          </div>
          <hr className="rule-gold" />

          {/* name display */}
          <div className="front-title">
            <h1 className="front-name">
              <span className="row">Van‑Loc (Felix)</span>
              <span className="row"><em>Nguyen</em>,</span>
              <span className="row">building useful AI.</span>
            </h1>
            <p className="front-subtitle">An engineer — a sun chaser — <em>and a lover</em></p>
          </div>

          {/* lede + console */}
          <div className="front-tag">
            <p className="lede">
              A computer‑vision and deep‑learning engineer working at the seam between research
              and production — currently at <span className="pill">Eurofins</span> in Ho Chi Minh City,
              recently a student researcher in Tokyo, presently chasing a Master&#39;s in AI.
            </p>

            <div className="console" aria-label="self description">
              <div className="console-head">
                <span className="dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot live" />
                </span>
                <span>~ / whoami.py</span>
                <span>utf‑8</span>
              </div>
              <div className="console-body">
                <div className="ln"><span className="n">1</span><span><span className="k">class</span> <span className="v">Engineer</span><span className="p">:</span></span></div>
                <div className="ln"><span className="n">2</span><span className="ind"><span className="v">name</span>      <span className="p">=</span> <span className="s">&quot;Van‑Loc Nguyen&quot;</span></span></div>
                <div className="ln"><span className="n">3</span><span className="ind"><span className="v">based</span>     <span className="p">=</span> <span className="s">&quot;Ho Chi Minh / Tokyo&quot;</span></span></div>
                <div className="ln"><span className="n">4</span><span className="ind"><span className="v">focus</span>     <span className="p">=</span> <span className="p">[</span><span className="s">&quot;vision&quot;</span><span className="p">,</span> <span className="s">&quot;deep‑learning&quot;</span><span className="p">,</span> <span className="s">&quot;agents&quot;</span><span className="p">]</span></span></div>
                <div className="ln"><span className="n">5</span><span className="ind"><span className="v">stack</span>     <span className="p">=</span> <span className="p">&#123;</span><span className="s">&quot;py&quot;</span><span className="p">,</span> <span className="s">&quot;torch&quot;</span><span className="p">,</span> <span className="s">&quot;django&quot;</span><span className="p">,</span> <span className="s">&quot;docker&quot;</span><span className="p">,</span> <span className="s">&quot;git&quot;</span><span className="p">&#125;</span></span></div>
                <div className="ln"><span className="n">6</span><span className="ind"><span className="v">writes</span>    <span className="p">=</span> <span className="p">[</span><span className="s">&quot;papers&quot;</span><span className="p">,</span> <span className="s">&quot;systems&quot;</span><span className="p">,</span> <span className="s">&quot;docs&quot;</span><span className="p">]</span></span></div>
                <div className="ln"><span className="n">7</span><span className="ind"><span className="v">curious</span>   <span className="p">=</span> <span className="k">True</span></span></div>
                <div className="ln"><span className="n">8</span><span className="ind"><span className="v">shipping</span>  <span className="p">=</span> <span className="k">True</span></span></div>
                <div className="ln"><span className="n">9</span><span className="ind"><span className="c"># speaks vi · en · 中文 (a little)</span></span></div>
                <div className="ln"><span className="n">10</span><span className="ind"><span className="k">def</span> <span className="v">hireable</span><span className="p">(</span><span className="v">self</span><span className="p">):</span></span></div>
                <div className="ln"><span className="n">11</span><span className="ind2"><span className="k">return</span> <span className="v">curious</span> <span className="k">and</span> <span className="v">shipping</span></span></div>
              </div>
            </div>
          </div>

          {/* CV call to action */}
          <div className="front-cta">
            <a className="btn btn-accent" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              View CV <span className="arrow">→</span>
            </a>
          </div>

          {/* status bar */}
          <div className="front-status">
            {STATUS_ITEMS.map((item) => (
              <div key={item.key} className="cell">
                <span className="k">{item.key}</span>
                {/* valueHtml is authored content — safe to inject */}
                <span className="v" dangerouslySetInnerHTML={{ __html: item.valueHtml }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── § 01  BIO ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 01</span>
              <span>The Subject</span>
            </div>
            <h2>An engineer, a <em>researcher</em>, a perpetual student of useful systems.</h2>
          </div>

          <div className="bio">
            <div className="bio-body">
              {BIO_PARAGRAPHS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <aside className="bio-aside">
              {NAME_VARIANTS.map((v) => (
                <div key={v.lang} className="field">
                  <span className="k">{v.lang}</span>
                  {/* nameHtml is authored content — safe to inject */}
                  <span className="v" dangerouslySetInnerHTML={{ __html: v.nameHtml }} />
                </div>
              ))}
              <div className="field"><span className="k">Based</span><span className="v">{BIO_META.based}</span></div>
              <div className="field"><span className="k">Handle</span><span className="v">{BIO_META.handle}</span></div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── § 02  NOW ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 02</span>
              <span>Currently</span>
            </div>
            <h2>What I&#39;m working on this <em>quarter</em>.</h2>
          </div>

          <div className="now-grid">
            {NOW_ITEMS.map((item) => (
              <div key={item.label} className="now-cell">
                <span className="label label-accent">{item.label}</span>
                <h3>
                  {item.titleLink ? (
                    <>
                      <a href={item.titleLink.href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.titleLink.text}
                      </a>
                      {item.titleText}
                    </>
                  ) : item.titleText}
                </h3>
                <span className="meta">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 03  SELECTED WORK ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 03</span>
              <span>Recent projects</span>
            </div>
            <h2>A few <em>recent</em> projects.</h2>
          </div>

          <div className="work-list">
            {featuredProjects.map((project) => (
              <Link key={project.num} className="work-row" href="/work">
                <span className="num">{project.num} /</span>
                <span className="title">
                  <em>{project.title}</em>
                  {project.subtitle && <> <span className="mute">{project.subtitle}</span></>}
                </span>
                <span className="desc">{project.homeSummary ?? project.desc}</span>
                <span className="meta">
                  {(project.homeTags ?? project.tags).map((tag) => (
                    <span key={tag.label} className={tag.isLive ? 'tag live' : 'tag'}>
                      {tag.label}
                    </span>
                  ))}
                </span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s-5)', display: 'flex', justifyContent: 'flex-end' }}>
            <Link className="btn btn-accent" href="/work">
              View the full register <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── § 04  RECENT PUBLICATIONS ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 04</span>
              <span>From the bibliography</span>
            </div>
            <h2>Recent <em>writings</em> &amp; accepted papers.</h2>
          </div>

          <div>
            {featuredPubs.map((pub, i) => (
              <article key={i} className="pub">
                <div className="meta-col">
                  <span className="date">{pub.date}</span>
                  <span className="venue">{pub.venue}</span>
                  <span className="status">● {pub.status}</span>
                </div>
                <div>
                  <h3>
                    {pub.titleAbbrev ? (
                      <><em>{pub.titleAbbrev}</em>: {pub.titleRest}</>
                    ) : pub.titleRest}
                  </h3>
                  <p className="abstract">{pub.homeAbstract ?? pub.abstract}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s-5)', display: 'flex', justifyContent: 'flex-end' }}>
            <Link className="btn" href="/work#publications">
              All publications <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── § 05  JOURNAL STRIP ── */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 05</span>
              <span>Dispatches</span>
            </div>
            <h2>What&#39;s <em>changed</em> recently.</h2>
          </div>

          <div className="journal-list">
            {recentDispatches.map((entry, i) => (
              <div key={i} className="journal-item">
                <span className="date">{entry.date}</span>
                <span className={kindClass(entry.kind)}>{entry.kind}</span>
                {/* headHtml is authored content — safe to inject */}
                <span className="head" dangerouslySetInnerHTML={{ __html: entry.headHtml }} />
                <span className="where">{entry.where}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s-5)', display: 'flex', justifyContent: 'flex-end' }}>
            <Link className="btn" href="/journal">
              All dispatches <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── § 06  CONTACT TEASE ── */}
      <section className="section" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div className="number">
              <span className="num">§ 06</span>
              <span>Correspondence</span>
            </div>
            <h2>I read every <em>letter</em>.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 'var(--s-6)', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.25, fontStyle: 'italic', color: 'var(--gold)', marginBottom: 'var(--s-5)', fontFamily: 'var(--serif)' }}>
                Working on something that needs computer vision, agent infrastructure, or a careful pair of hands? Let&#39;s talk — research collaborations, contract work, or just an interesting question.
              </p>
              <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
                <a className="btn btn-accent" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email} <span className="arrow">→</span>
                </a>
                <Link className="btn" href="/contact">
                  All channels <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <aside style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 'var(--s-5)' }}>
              <span className="label label-gold" style={{ display: 'block', marginBottom: 'var(--s-3)' }}>Average response</span>
              <div className="display" style={{ fontSize: 'clamp(64px, 7vw, 96px)' }}><em>{contactInfo.responseTime}</em></div>
              <p className="mute" style={{ marginTop: 'var(--s-3)' }}>{contactInfo.responseNote}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── COLOPHON / FOOTER ── */}
      <footer className="shell">
        <div className="colophon">
          <div className="col">
            <h4>Index</h4>
            <ul>
              <li><Link href="/">Front page</Link></li>
              <li><Link href="/work">Work &amp; Publications</Link></li>
              <li><Link href="/background">Background</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4>Elsewhere</h4>
            <ul>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>Colophon</h4>
            <p>Set in <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Cormorant Garamond</em> &amp; JetBrains Mono. Built with Next.js &amp; TypeScript. Theme &amp; density preferences survive across pages.</p>
          </div>
          <div className="col">
            <h4>Correspondence</h4>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <br />{contactInfo.location}
              <br />{contactInfo.timezone}
            </p>
          </div>
        </div>
        <div className="colophon-bottom">
          <span>{SITE.copyright}</span>
          <span className="right">
            <span>{SITE.volIssue}</span>
            <span className="live-dot">{SITE.lastUpdated}</span>
          </span>
        </div>
      </footer>
    </>
  );
}
