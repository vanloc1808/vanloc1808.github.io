'use client';

import Image from 'next/image';
import { educations } from '@/utils/data/educations';
import { BsPersonWorkspace } from 'react-icons/bs';
import GlowCard from '../../helper/glow-card';
import lottieFile from '/public/lottie/study.json';
import { FC } from 'react';

import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});

interface EducationItem {
  id: number;
  title: string;
  institution: string;
  duration: string;
  logo: string;
  secondLogo: string | null;
}

const Education: FC = () => {
  return (
    <div
      id='education'
      className='relative z-50 my-12 border-t border-[#25213b] lg:my-24'
    >
      <Image
        src='/section.svg'
        alt='Hero'
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
            EDUCATIONS
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

          <div>
            <div className='flex flex-col gap-6'>
              {educations.map((education: EducationItem) => (
                <GlowCard
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className='relative p-8 text-gray-800 dark:text-white'>
                    <Image
                      src='/blur-23.svg'
                      alt='Hero'
                      width={1080}
                      height={200}
                      className='absolute bottom-0 opacity-80'
                    />
                    <div className='flex justify-center'>
                      <p className='text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                        {education.duration}
                      </p>
                    </div>
                    <div className='flex items-start gap-x-8 px-6 py-8'>
                      {education.secondLogo ? (
                        <div className='flex flex-shrink-0 flex-row items-center gap-x-4'>
                          <div className='relative h-24 w-24 overflow-hidden rounded-full'>
                            <Image
                              src={education.logo}
                              alt={`${education.institution} logo`}
                              fill
                              className='object-contain'
                            />
                          </div>
                          <div className='relative h-24 w-24 overflow-hidden rounded-full'>
                            <Image
                              src={education.secondLogo}
                              alt={`${education.institution} second logo`}
                              fill
                              className='object-contain'
                            />
                          </div>
                        </div>
                      ) : (
                        <div className='relative flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-hidden rounded-full'>
                          <Image
                            src={education.logo}
                            alt={`${education.institution} logo`}
                            fill
                            className='object-contain'
                          />
                        </div>
                      )}
                      <div>
                        <p className='mb-2 text-base font-semibold uppercase sm:text-xl'>
                          {education.title}
                        </p>
                        <p className='text-sm sm:text-base'>
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
