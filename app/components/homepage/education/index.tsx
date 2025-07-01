'use client';

import Image from 'next/image';
import { getEducations } from '@/utils/data/educations';
import GlowCard from '../../helper/glow-card';
import lottieFile from '/public/lottie/study.json';
import { FC } from 'react';
import { useTranslation } from '../../../context/I18nContext';

import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});

interface EducationItem {
  id: number;
  title: string;
  institution: string;
  startYear: number;
  endYear: number | null;
  logo: string;
  secondLogo: string | null;
}

const Education: FC = () => {
  const { t, locale } = useTranslation();
  const educations = getEducations(locale);

  return (
    <div
      id='education'
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
            {t('education.title')}
          </span>
          <span className='h-[2px] w-24 bg-[#1a1443] dark:bg-white'></span>
        </div>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16'>
          <div className='flex items-start justify-center'>
            <div className='h-1/2 w-1/2'>
              <AnimationLottie animationData={lottieFile} />
            </div>
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 opacity-30'></div>

            <div className='flex flex-col gap-8'>
              {educations.map((education: EducationItem) => (
                <div key={education.id} className='relative'>
                  {/* Timeline dot */}
                  <div className='absolute left-6 top-8 z-10 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-violet-500 to-purple-500 dark:border-[#0d1224]'></div>

                  {/* Timeline year label */}
                  <div className='absolute left-12 top-6 ml-4 text-sm font-semibold text-violet-500 dark:text-violet-400'>
                    {education.startYear} -{' '}
                    {education.endYear || t('timeline.present')}
                  </div>

                  <div className='ml-16'>
                    <GlowCard identifier={`education-${education.id}`}>
                      <div className='relative p-8 text-gray-800 dark:text-white'>
                        {/* Status badge */}
                        <div className='mb-4 flex items-start justify-end'>
                          <div
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              education.endYear === null
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}
                          >
                            {education.endYear === null
                              ? t('education.timeline.current')
                              : t('education.timeline.completed')}
                          </div>
                        </div>

                        <div className='flex items-start gap-x-3 px-6 py-4 sm:gap-x-4 lg:gap-x-6'>
                          {education.secondLogo ? (
                            <div className='flex flex-shrink-0 flex-row items-center gap-x-1 sm:gap-x-2 lg:gap-x-3'>
                              <div className='relative h-10 w-10 overflow-hidden rounded-full shadow-lg dark:drop-shadow-[0_0_10px_white] sm:h-12 sm:w-12 lg:h-16 lg:w-16'>
                                <Image
                                  src={education.logo}
                                  alt={`${education.institution} logo`}
                                  fill
                                  className='object-contain'
                                />
                              </div>
                              <div className='relative h-10 w-10 overflow-hidden rounded-full shadow-lg dark:drop-shadow-[0_0_10px_white] sm:h-12 sm:w-12 lg:h-16 lg:w-16'>
                                <Image
                                  src={education.secondLogo}
                                  alt={`${education.institution} second logo`}
                                  fill
                                  className='object-contain'
                                />
                              </div>
                            </div>
                          ) : (
                            <div className='relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full shadow-lg dark:drop-shadow-[0_0_10px_white] sm:h-12 sm:w-12 lg:h-16 lg:w-16'>
                              <Image
                                src={education.logo}
                                alt={`${education.institution} logo`}
                                fill
                                className='object-contain'
                              />
                            </div>
                          )}
                          <div className='flex-1'>
                            <h3 className='mb-2 text-base font-semibold uppercase leading-tight sm:text-lg'>
                              {education.title}
                            </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-300 sm:text-base'>
                              {education.institution}
                            </p>

                            {/* Timeline progress indicator */}
                            <div className='mt-4 border-t border-gray-200 pt-4 dark:border-gray-700'>
                              <div className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
                                <div className='flex items-center gap-1'>
                                  <div className='h-2 w-2 rounded-full bg-violet-500'></div>
                                  <span>{education.startYear}</span>
                                </div>
                                <div className='h-px flex-1 bg-gradient-to-r from-violet-500 to-purple-500'></div>
                                <div className='flex items-center gap-1'>
                                  <span>
                                    {education.endYear || t('timeline.present')}
                                  </span>
                                  <div
                                    className={`h-2 w-2 rounded-full ${
                                      education.endYear === null
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
    </div>
  );
};

export default Education;
