import type { Metadata } from 'next';
import { BIO_META, BIO_PARAGRAPHS, NAME_VARIANTS } from '@/data/profile';
import { experienceEntries } from '@/data/experience';
import { educationEntries } from '@/data/education';
import { additionalSkills, toolCategories } from '@/data/toolkit';
import { SITE } from '@/data/nav';
import Console from '@/components/Console';
import MapCard from '@/components/MapCard';
import SubNav from '@/components/SubNav';
import { Timeline } from '@/components/display';
import { Button, Entry, EntryList, FieldList, Html, NowCell, NowGrid, PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About — Van-Loc Nguyen',
  description: 'Bio, experience, education and the tools I reach for.',
  alternates: {
    canonical: '/about',
    types: { 'text/markdown': '/about.md' },
  },
};

interface TimelineItem {
  period: string;
  institution: string;
  institutionHref?: string;
  location: string;
  title: string;
  emphasis?: string;
  descHtml?: string;
}

function Details({ items }: { items: TimelineItem[] }) {
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

/* =========================================================
   ABOUT — bio, experience, education, toolkit, elsewhere.
   ========================================================= */

export default function AboutPage() {
  const experience: TimelineItem[] = experienceEntries.map((e) => ({ ...e, title: e.role, emphasis: e.roleEmphasis }));
  const education: TimelineItem[] = educationEntries.map((e) => ({ ...e, title: e.degree, emphasis: e.degreeEmphasis }));

  return (
    <>
      <PageHeader
        name="About"
        title={<em>About</em>}
        dek="An engineer, a researcher, a perpetual student of useful systems. Where I’ve been, what I studied, and the tools I reach for."
        actions={<Button href={SITE.cvHref} variant="accent">Read CV</Button>}
      />
      <SubNav
        items={[
          { id: 'bio', label: 'Bio' },
          { id: 'timeline', label: 'Timeline' },
          { id: 'experience', label: 'Experience', count: experience.length },
          { id: 'education', label: 'Education', count: education.length },
          { id: 'toolkit', label: 'Toolkit' },
          { id: 'elsewhere', label: 'Elsewhere' },
        ]}
      />

      <Section id="bio" eyebrow="Bio" heading="Taking models out of the notebook">
        <div className="vl-split">
          <div className="vl-prose vl-prose--dropcap">
            {BIO_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="vl-split__aside">
            <FieldList
              fields={[
                ...NAME_VARIANTS.map((v) => ({ k: v.lang, v: <Html html={v.nameHtml} /> })),
                { k: 'Based', v: BIO_META.based },
                { k: 'Handle', v: BIO_META.handle },
              ]}
            />
          </aside>
        </div>
      </Section>

      <Section id="timeline" eyebrow="Timeline" heading="Where the years went" count="At a glance">
        <Timeline
          startYear={2023}
          endYear={new Date().getFullYear()}
          rows={[
            ...experienceEntries.map((e) => ({ label: e.timelineLabel, period: e.period, kind: 'work' as const })),
            ...educationEntries.map((e) => ({ label: e.timelineLabel, period: e.period, kind: 'study' as const })),
          ]}
        />
      </Section>

      <Section id="experience" eyebrow="Experience" heading="From notebook to production" count={`${experience.length} roles`}>
        <Details items={experience} />
      </Section>

      <Section id="education" eyebrow="Education" heading="Trained in science, drawn to engineering" count={`${education.length} schools`}>
        <Details items={education} />
      </Section>

      <Section id="toolkit" eyebrow="Toolkit" heading="The instruments I reach for">
        <NowGrid>
          {toolCategories.map((c) => (
            <NowCell key={c.label} label={c.label} title={c.items} text={c.desc} meta={c.meta} />
          ))}
        </NowGrid>
        <div style={{ marginTop: 'var(--s-6)' }}>
          <FieldList
            fields={[
              {
                k: 'Languages',
                v: (
                  <>
                    Vietnamese <span className="mute">native ·</span> English <span className="mute">fluent ·</span>{' '}
                    日本語 <span className="mute">basic ·</span> 中文 <span className="mute">basic</span>
                  </>
                ),
              },
              { k: 'Also uses', v: additionalSkills.alsoUses },
              { k: 'Interests', v: additionalSkills.interests },
            ]}
          />
        </div>
      </Section>

      <Section id="elsewhere" eyebrow="Elsewhere" heading="A self-portrait and a map">
        <div className="vl-split vl-split--even">
          <Console />
          <MapCard />
        </div>
      </Section>
    </>
  );
}
