import type { Metadata } from 'next';
import { experienceEntries } from '@/data/experience';
import { educationEntries } from '@/data/education';
import { SITE } from '@/data/nav';
import SubNav from '@/components/SubNav';
import { CareerList, Timeline, type TimelineItem } from '@/components/display';
import { Button, PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Experience & Education — Van-Loc Nguyen',
  description: 'Every role and degree, with a timeline of how they overlap.',
  alternates: {
    canonical: '/experience',
    types: { 'text/markdown': '/experience.md' },
  },
};

/* =========================================================
   EXPERIENCE & EDUCATION — timeline, roles, degrees.
   ========================================================= */

export default function ExperiencePage() {
  const experience: TimelineItem[] = experienceEntries.map((e) => ({ ...e, title: e.role, emphasis: e.roleEmphasis }));
  const education: TimelineItem[] = educationEntries.map((e) => ({ ...e, title: e.degree, emphasis: e.degreeEmphasis }));

  return (
    <>
      <PageHeader
        name="Experience & Education"
        title={
          <>
            Experience <em>&amp;</em> Education
          </>
        }
        dek="From a gifted-school math track to research labs in Ho Chi Minh City and Tokyo, and production engineering. Newest first."
        actions={<Button href={SITE.cvHref} variant="accent">Read CV</Button>}
      />
      <SubNav
        items={[
          { id: 'timeline', label: 'Timeline' },
          { id: 'experience', label: 'Experience', count: experience.length },
          { id: 'education', label: 'Education', count: education.length },
        ]}
      />

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
        <CareerList items={experience} />
      </Section>

      <Section id="education" eyebrow="Education" heading="Trained in science, drawn to engineering" count={`${education.length} schools`}>
        <CareerList items={education} />
      </Section>
    </>
  );
}
