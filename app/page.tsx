import { Suspense } from 'react';
import AboutSection from './components/homepage/about';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import Publication from './components/homepage/publications';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';
import NewsSection from './components/homepage/news';
import HeroSkeleton from './components/HeroSkeleton';
import ProjectSkeleton from './components/ProjectSkeleton';
import ExperienceSkeleton from './components/ExperienceSkeleton';
import PublicationSkeleton from './components/PublicationSkeleton';
import NewsSkeleton from './components/NewsSkeleton';
import SkillsSkeleton from './components/SkillsSkeleton';
import ContactSkeleton from './components/ContactSkeleton';
import EducationSkeleton from './components/EducationSkeleton';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense
        fallback={
          <div className='animate-pulse space-y-4 p-8'>
            <div className='h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700'></div>
            <div className='space-y-2'>
              <div className='h-4 rounded bg-gray-200 dark:bg-gray-700'></div>
              <div className='h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700'></div>
            </div>
          </div>
        }
      >
        <AboutSection />
      </Suspense>

      <Suspense fallback={<NewsSkeleton />}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<PublicationSkeleton />}>
        <Publication />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<ProjectSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>

      <Suspense fallback={<ContactSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
