'use client';

import { FC, Suspense } from 'react';
import { getProjectsData } from '@/utils/data/projects-data';
import ProjectCard from '../components/homepage/projects/project-card';
import ProjectSkeleton from '../components/ProjectSkeleton';
import { useTranslation } from '../context/I18nContext';

const Projects: FC = () => {
  const { locale, t } = useTranslation();
  const projectsData = getProjectsData(locale);

  return (
    <div id='projects' className='relative z-50 my-12 lg:my-24'>
      <div className='sticky top-10'>
        <div className='absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter'></div>
        <div className='relative flex items-center justify-start'>
          <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            {t('common.all')} {t('projects.title')}
          </span>
          <span className='h-[2px] w-full bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='pt-24'>
        <Suspense fallback={<ProjectSkeleton />}>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
            {projectsData.map((project, index) => (
              <div key={index} className='mx-auto w-full'>
                <div className='box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]'>
                  <ProjectCard
                    project={project}
                    identifier={`all-projects-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Projects;
