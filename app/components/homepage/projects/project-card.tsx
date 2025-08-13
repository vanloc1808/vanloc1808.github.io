'use client';

import * as React from 'react';
import Image from 'next/image';
import GlowCard from '../../helper/glow-card';
import { Project } from '@/types/project';
import { useTranslation } from '../../../context/I18nContext';

interface ProjectCardProps {
  project: Project;
  identifier: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, identifier }) => {
  const { t } = useTranslation();
  const isCompleted = Boolean(
    (project.demo && project.demo.trim()) ||
      (project.blog_url && project.blog_url.trim())
  );

  return (
    <GlowCard identifier={identifier}>
      <div className='relative w-full rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 dark:border-[#1b2c68a0] dark:from-[#0d1224] dark:to-[#0a0d37]'>
        {/* Project Image */}
        {project.image && (
          <div className='relative h-48 w-full overflow-hidden transition-transform duration-300 group-hover:scale-105'>
            <Image
              src={project.image}
              alt={`${project.name} project screenshot`}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
              quality={85}
            />
          </div>
        )}

        {/* Top gradient line */}
        <div className='flex flex-row'>
          <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
          <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
        </div>

        {/* Title */}
        <div className='relative px-4 py-3 lg:px-8 lg:py-5'>
          <div className='absolute top-1/2 flex -translate-y-1/2 flex-row space-x-1 lg:space-x-2'>
            <div className='h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3' />
            <div className='h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3' />
            <div className='h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3' />
          </div>
          <p className='ml-3 text-center text-base text-[#448171] dark:text-[#16f2b3] lg:text-xl'>
            {project.name}
          </p>
        </div>

        {/* Status badge */}
        <div className='mb-2 flex items-start justify-end px-4 lg:px-8'>
          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isCompleted
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}
          >
            {isCompleted
              ? t('education.timeline.completed')
              : t('education.timeline.current')}
          </div>
        </div>

        {/* Code block */}
        <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 dark:border-indigo-900 lg:px-8 lg:py-8'>
          <code className='font-mono text-xs md:text-sm lg:text-base'>
            <div className='blink'>
              <span className='mr-2 text-pink-600 dark:text-pink-500'>
                const
              </span>
              <span className='mr-2 text-gray-800 dark:text-white'>
                project
              </span>
              <span className='mr-2 text-pink-600 dark:text-pink-500'>=</span>
              <span className='text-gray-500 dark:text-gray-400'>{'{'}</span>
            </div>

            <div>
              <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                name:
              </span>
              <span className='text-gray-500 dark:text-gray-400'>&apos;</span>
              <span className='text-amber-600 dark:text-amber-300'>
                {project.name}
              </span>
              <span className='text-gray-500 dark:text-gray-400'>,&nbsp;</span>
            </div>

            <div className='ml-4 mr-2 lg:ml-8'>
              <span className='text-gray-800 dark:text-white'>tools:</span>
              <span className='text-gray-500 dark:text-gray-400'>[</span>
              {project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className='text-amber-600 dark:text-amber-300'>
                    &apos;{tag}&apos;
                  </span>
                  {i < project.tools.length - 1 && (
                    <span className='text-gray-500 dark:text-gray-400'>, </span>
                  )}
                </React.Fragment>
              ))}
              <span className='text-gray-500 dark:text-gray-400'>],</span>
            </div>

            <div>
              <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                My Role:
              </span>
              <span className='text-orange-600 dark:text-orange-400'>
                {project.role}
              </span>
              <span className='text-gray-500 dark:text-gray-400'>,</span>
            </div>

            <div className='ml-4 mr-2 lg:ml-8'>
              <span className='text-gray-800 dark:text-white'>
                Description:
              </span>
              <span className='text-cyan-600 dark:text-cyan-400'>
                {' '}
                {project.description}
              </span>
              <span className='text-gray-500 dark:text-gray-400'>,</span>
            </div>

            {project.code && (
              <div className='ml-4 mr-2 lg:ml-8'>
                <span className='text-gray-800 dark:text-white'>Code:</span>
                <span className='text-green-600 dark:text-green-400'>
                  {' '}
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noreferrer'
                    className='transition-colors duration-200 hover:text-green-400 dark:hover:text-green-300'
                  >
                    {project.code}
                  </a>
                </span>
                <span className='text-gray-500 dark:text-gray-400'>,</span>
              </div>
            )}

            {project.backend_code && (
              <div className='ml-4 mr-2 lg:ml-8'>
                <span className='text-gray-800 dark:text-white'>
                  Backend Code:
                </span>
                <span className='text-green-600 dark:text-green-400'>
                  {' '}
                  <a
                    href={project.backend_code}
                    target='_blank'
                    rel='noreferrer'
                    className='transition-colors duration-200 hover:text-green-400 dark:hover:text-green-300'
                  >
                    {project.backend_code}
                  </a>
                </span>
                <span className='text-gray-500 dark:text-gray-400'>,</span>
              </div>
            )}

            {project.frontend_code && (
              <div className='ml-4 mr-2 lg:ml-8'>
                <span className='text-gray-800 dark:text-white'>
                  Frontend Code:
                </span>
                <span className='text-green-600 dark:text-green-400'>
                  {' '}
                  <a
                    href={project.frontend_code}
                    target='_blank'
                    rel='noreferrer'
                    className='transition-colors duration-200 hover:text-green-400 dark:hover:text-green-300'
                  >
                    {project.frontend_code}
                  </a>
                </span>
                <span className='text-gray-500 dark:text-gray-400'>,</span>
              </div>
            )}

            {project.demo && (
              <div className='ml-4 mr-2 lg:ml-8'>
                <span className='text-gray-800 dark:text-white'>Demo:</span>
                <span className='text-blue-600 dark:text-blue-400'>
                  {' '}
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noreferrer'
                    className='transition-colors duration-200 hover:text-blue-400 dark:hover:text-blue-300'
                  >
                    {project.demo}
                  </a>
                </span>
                <span className='text-gray-500 dark:text-gray-400'>,</span>
              </div>
            )}

            {project.blog_url && (
              <div className='ml-4 mr-2 lg:ml-8'>
                <span className='text-gray-800 dark:text-white'>
                  Blog Post:
                </span>
                <span className='text-purple-600 dark:text-purple-400'>
                  {' '}
                  <a
                    href={project.blog_url}
                    target='_blank'
                    rel='noreferrer'
                    className='transition-colors duration-200 hover:text-purple-400 dark:hover:text-purple-300'
                  >
                    {project.blog_url}
                  </a>
                </span>
                <span className='text-gray-500 dark:text-gray-400'>,</span>
              </div>
            )}

            <div>
              <span className='text-gray-500 dark:text-gray-400'>{'};'}</span>
            </div>
          </code>
        </div>
      </div>
    </GlowCard>
  );
};

export default ProjectCard;
