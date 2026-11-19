import type { Metadata } from 'next';
import { PROJECT_GROUPS, projects } from '@/data/projects';
import { SOCIAL_LINKS } from '@/data/nav';
import SubNav from '@/components/SubNav';
import { Button, Entry, EntryList, PageHeader, Section, Tag, Tags } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Work — Van-Loc Nguyen',
  description: 'Every project: live products, research builds and coursework.',
  alternates: {
    canonical: '/work',
    types: { 'text/markdown': '/work.md' },
  },
};

const GITHUB = SOCIAL_LINKS.find((l) => l.label.startsWith('GitHub'))!.href;

/* Publications used to live at /work#publications; send old links on. */
const LEGACY_ANCHOR = `if (location.hash === '#publications') location.replace('/research');`;

/* =========================================================
   WORK — every project, grouped by what it is.
   ========================================================= */

export default function WorkPage() {
  const groups = PROJECT_GROUPS.map((g) => ({ ...g, items: projects.filter((p) => p.group === g.id) }));

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: LEGACY_ANCHOR }} />
      <PageHeader
        name="Work"
        title={<em>Work</em>}
        dek={`${projects.length} projects, from a vision-LLM party game to a C++ chess engine. Live products first, then research builds, then the coursework where the habits formed.`}
        actions={<Button href={GITHUB}>Code on GitHub</Button>}
      />
      <SubNav items={groups.map((g) => ({ id: g.id, label: g.label, count: g.items.length }))} />

      {groups.map((g) => (
        <Section key={g.id} id={g.id} eyebrow={g.label} heading={<>{g.heading}<em>{g.emphasis}</em>{g.tail}</>}>
          <EntryList>
            {g.items.map((p) => (
              <Entry
                key={p.num}
                href={p.href}
                meta={
                  <>
                    <span className="vl-entry__date">{p.num} /</span>
                    {p.isLive && <Tag tone="live">● Live</Tag>}
                  </>
                }
              >
                <h3 className="vl-entry__title">
                  <em>{p.title}</em>
                  {p.subtitle && <> <span className="mute">{p.subtitle}</span></>}
                </h3>
                <p className="vl-entry__text">{p.desc}</p>
                <Tags labels={p.tags.map((t) => t.label)} />
              </Entry>
            ))}
          </EntryList>
        </Section>
      ))}
    </>
  );
}
