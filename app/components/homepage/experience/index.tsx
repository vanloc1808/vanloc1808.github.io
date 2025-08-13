'use client';

import Image from 'next/image';
import { getExperiences } from '@/utils/data/experience';
import { BsPersonWorkspace } from 'react-icons/bs';
import GlowCard from '../../helper/glow-card';
import lottieFile from '/public/lottie/code.json';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from '../../../context/I18nContext';
import { getMonthName } from '@/utils/time-converter';

import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
}

const Experience: FC = () => {
  const { t, locale } = useTranslation();
  const experiences = getExperiences(locale);

  const formatDate = (month: number | null, year: number | null): string => {
    if (month === null || year === null) {
      return t('timeline.present');
    }
    return `${getMonthName(month, locale)} ${year}`;
  };

  const formatDuration = (
    startMonth: number,
    startYear: number,
    endMonth: number | null,
    endYear: number | null
  ): string => {
    const now = new Date();
    const effectiveEndMonth = endMonth ?? now.getMonth() + 1;
    const effectiveEndYear = endYear ?? now.getFullYear();

    // LinkedIn-style inclusive month counting
    let totalMonths =
      (effectiveEndYear - startYear) * 12 +
      (effectiveEndMonth - startMonth) +
      1;
    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (locale === 'vi') {
      const parts: string[] = [];
      if (years > 0) parts.push(`${years} năm`);
      if (months > 0) parts.push(`${months} tháng`);
      return parts.length > 0 ? parts.join(' ') : '0 tháng';
    }

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
    return parts.length > 0 ? parts.join(' ') : '0 months';
  };

  return (
    <div
      id='experiences'
      className='relative z-50 my-12 border-t border-[#25213b] lg:my-24'
    >
      <Image
        src='/section.svg'
        alt='Section background decoration'
        width={1572}
        height={795}
        className='absolute top-0 -z-10'
      />
      <div className='flex -translate-y-[1px] justify-center'>
        <div className='w-3/4'>
          <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent' />
        </div>
      </div>

      <div className='my-5 flex justify-center lg:py-8'>
        <div className='flex items-center'>
          <span className='h-[2px] w-24 bg-[#1a1443] dark:bg-white'></span>
          <span className='w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            {t('experience.title')}
          </span>
          <span className='h-[2px] w-24 bg-[#1a1443] dark:bg-white'></span>
        </div>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8'>
          <div className='flex items-start justify-center'>
            <div className='h-1/2 w-1/2'>
              <AnimationLottie animationData={lottieFile} />
            </div>
          </div>

          <div className='relative lg:col-span-2'>
            {/* Timeline line */}
            <div className='absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 opacity-30'></div>

            <div className='flex flex-col gap-8'>
              {experiences.slice(0, 5).map((experience: ExperienceItem) => (
                <div key={experience.id} className='relative'>
                  {/* Timeline dot */}
                  <div className='absolute left-6 top-8 z-10 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-violet-500 to-purple-500 dark:border-[#0d1224]'></div>

                  {/* Timeline date label */}
                  <div className='absolute left-12 top-6 ml-4 text-sm font-semibold text-violet-500 dark:text-violet-400'>
                    {formatDate(experience.startMonth, experience.startYear)} -{' '}
                    {formatDate(experience.endMonth, experience.endYear)}{' '}
                    <span className='text-gray-500 dark:text-gray-400'>·</span>{' '}
                    <span className='text-gray-600 dark:text-gray-300'>
                      {formatDuration(
                        experience.startMonth,
                        experience.startYear,
                        experience.endMonth,
                        experience.endYear
                      )}
                    </span>
                  </div>

                  <div className='ml-12'>
                    <GlowCard identifier={`experience-${experience.id}`}>
                      <div className='relative p-8 text-gray-800 dark:text-white'>
                        {/* Status badge */}
                        <div className='mb-4 flex items-start justify-end'>
                          <div
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              experience.endMonth === null ||
                              experience.endYear === null
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}
                          >
                            {experience.endMonth === null ||
                            experience.endYear === null
                              ? t('experience.timeline.current')
                              : t('experience.timeline.completed')}
                          </div>
                        </div>

                        <div className='flex items-start gap-x-3 px-6 py-4 sm:gap-x-4 lg:gap-x-6'>
                          <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg dark:drop-shadow-[0_0_10px_white] sm:h-12 sm:w-12 lg:h-16 lg:w-16'>
                            <BsPersonWorkspace
                              size={20}
                              className='text-white sm:text-[24px] lg:text-[28px]'
                            />
                          </div>
                          <div className='flex-1'>
                            <h3 className='mb-2 text-base font-semibold uppercase leading-tight sm:text-lg'>
                              {experience.title}
                            </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-300 sm:text-base'>
                              {experience.company}
                            </p>
                            {experience.companyLink && (
                              <a
                                href={experience.companyLink}
                                target='_blank'
                                className='text-sm text-[#448171] hover:underline dark:text-[#16f2b3] sm:text-base'
                              >
                                {experience.companyLink}
                              </a>
                            )}
                            <p className='mt-2 whitespace-pre-line text-sm text-gray-600 dark:text-gray-300 sm:text-base'>
                              {experience.description}
                            </p>

                            {/* Timeline progress indicator */}
                            <div className='mt-4 border-t border-gray-200 pt-4 dark:border-gray-700'>
                              <div className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
                                <div className='flex items-center gap-1'>
                                  <div className='h-2 w-2 rounded-full bg-violet-500'></div>
                                  <span>
                                    {formatDate(
                                      experience.startMonth,
                                      experience.startYear
                                    )}
                                  </span>
                                </div>
                                <div className='h-px flex-1 bg-gradient-to-r from-violet-500 to-purple-500'></div>
                                <div className='flex items-center gap-1'>
                                  <span>
                                    {formatDate(
                                      experience.endMonth,
                                      experience.endYear
                                    )}
                                  </span>
                                  <div
                                    className={`h-2 w-2 rounded-full ${
                                      experience.endMonth === null ||
                                      experience.endYear === null
                                        ? 'animate-pulse bg-green-500'
                                        : 'bg-purple-500'
                                    }`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 flex justify-center lg:mt-8'>
        <Link
          className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold'
          role='button'
          href='/experiences'
        >
          <span>{t('experience.viewAll') || 'View More'}</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Experience;
