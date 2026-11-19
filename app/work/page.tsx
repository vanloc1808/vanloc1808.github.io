import type { Metadata } from 'next';
import { PROJECT_GROUPS, projects } from '@/data/projects';
import { SOCIAL_LINKS } from '@/data/nav';
import SubNav from '@/components/SubNav';
import { LineRow, ProjectCard } from '@/components/display';
import { Button, PageHeader, Section, Tag } from '@/components/ui';

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

const SECTION_TITLES: Record<string, string> = {
  live: 'Running in production',
  research: 'Prototypes from the lab',
  course: 'Where the habits formed',
};

const NUMBER_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
const word = (n: number) => NUMBER_WORDS[n] ?? String(n);
const plural = (n: number, s: string) => `${n} ${s}${n === 1 ? '' : 's'}`;

/* =========================================================
   WORK — live products as cards, research builds as a wide
   card, coursework one line each.
   ========================================================= */

export default function WorkPage() {
  const groups = PROJECT_GROUPS.map((g) => ({ ...g, items: projects.filter((p) => p.group === g.id) }));
  const [live, research, course] = groups.map((g) => g.items.length);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: LEGACY_ANCHOR }} />
      <PageHeader
        name="Work"
        title={<em>Work</em>}
        dek={`${word(projects.length)} projects. ${word(live)} ${live === 1 ? 'is a live product' : 'are live products'}, ${word(research).toLowerCase()} ${research === 1 ? 'is a research build' : 'are research builds'}, ${word(course).toLowerCase()} ${course === 1 ? 'is coursework' : 'are coursework'}.`}
        actions={<Button href={GITHUB}>Code on GitHub</Button>}
      />
      <SubNav items={groups.map((g) => ({ id: g.id, label: g.label, count: g.items.length }))} />

      {groups.map((g) => (
        <Section key={g.id} id={g.id} eyebrow={g.label} heading={SECTION_TITLES[g.id]} count={plural(g.items.length, 'project')}>
          {g.id === 'course' ? (
            <div>
              {g.items.map((p) => (
                <LineRow key={p.num} p={p} />
              ))}
            </div>
          ) : (
            <div className="vl-cards">
              {g.items.map((p) => (
                <ProjectCard
                  key={p.num}
                  p={p}
                  wide={g.id === 'research'}
                  badge={g.id === 'research' ? <Tag>Undergraduate thesis</Tag> : undefined}
                />
              ))}
            </div>
          )}
        </Section>
      ))}
    </>
  );
}
