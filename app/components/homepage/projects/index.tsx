'use client';

import { getProjectsData } from '@/utils/data/projects-data';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import ProjectCard from './project-card';
import { FC } from 'react';
import { Project } from '@/types/project';
import { useTranslation } from '@/app/context/I18nContext';

const Projects: FC = () => {
  const { locale, t } = useTranslation();
  const projectsData = getProjectsData(locale);

  return (
    <div id='projects' className='relative z-50 my-12 lg:my-24'>
      <div className='sticky top-10'>
        <div className='absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter'></div>
        <div className='my-5 flex justify-center lg:py-8'>
          <div className='flex items-center'>
            <span className='h-[2px] w-24 bg-[#1a1443] dark:bg-white'></span>
            <span className='mx-3 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
              {t('projects.title')}
            </span>
            <span className='h-[2px] w-24 bg-[#1a1443] dark:bg-white'></span>
          </div>
        </div>
      </div>

      <div className='pt-24'>
        <div className='flex flex-col gap-6'>
          {projectsData.slice(0, 4).map((project: Project, index: number) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className='sticky-card sticky mx-auto w-full max-w-2xl'
            >
              <div className='box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]'>
                <ProjectCard
                  project={project}
                  identifier={`project-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-5 flex justify-center lg:mt-12'>
        <Link
          className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold'
          role='button'
          href='/projects'
        >
          <span>{t('projects.viewAll')}</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
