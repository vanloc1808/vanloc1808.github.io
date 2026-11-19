import type { Metadata } from 'next';
import { BIO_META, BIO_PARAGRAPHS, NAME_VARIANTS } from '@/data/profile';
import { additionalSkills, toolCategories } from '@/data/toolkit';
import { SITE } from '@/data/nav';
import Console from '@/components/Console';
import MapCard from '@/components/MapCard';
import SubNav from '@/components/SubNav';
import { Button, FieldList, Html, NowCell, NowGrid, PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About — Van-Loc Nguyen',
  description: 'Who I am, the names I go by, and the tools I reach for.',
  alternates: {
    canonical: '/about',
    types: { 'text/markdown': '/about.md' },
  },
};

/* =========================================================
   ABOUT — bio, toolkit, elsewhere. Roles and degrees live on
   /experience.
   ========================================================= */

export default function AboutPage() {
  return (
    <>
      <PageHeader
        name="About"
        title={<em>About</em>}
        dek="An engineer, a researcher, a perpetual student of useful systems. Who I am, and the tools I reach for."
        actions={
          <>
            <Button href={SITE.cvHref} variant="accent">Read CV</Button>
            <Button href="/experience">Experience &amp; Education</Button>
          </>
        }
      />
      <SubNav
        items={[
          { id: 'bio', label: 'Bio' },
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
