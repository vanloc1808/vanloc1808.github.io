'use client';

import { experiences } from '@/utils/data/experience';
import Image from 'next/image';
import { BsPersonWorkspace } from 'react-icons/bs';
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});
import GlowCard from '../../helper/glow-card';
import experience from '/public/lottie/code.json';
import { FC } from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  duration: string;
  description: string;
}

const Experience: FC = () => {
  return (
    <div
      id='experiences'
      className='relative z-50 my-12 border-t border-[#25213b] lg:my-24'
    >
      <Image
        src='/section.svg'
        alt='Hero'
        width={1572}
        height={795}
        className='absolute top-0 -z-10'
      />

      {/* Adjusted section title colors for light/dark */}
      <div className='my-5 flex justify-center lg:py-8'>
        <div className='flex  items-center'>
          <span className='h-[2px] w-24 bg-gray-300 dark:bg-[#1a1443]'></span>
          <span className='w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            EXPERIENCES
          </span>
          <span className='h-[2px] w-24 bg-gray-300 dark:bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='flex items-start justify-center'>
            <div className='h-full w-full'>
              <AnimationLottie animationData={experience} />
            </div>
          </div>

          <div>
            <div className='flex flex-col gap-6'>
              {experiences.map((experience: ExperienceItem) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className='relative p-3'>
                    <Image
                      src='/blur-23.svg'
                      alt='Hero'
                      width={1080}
                      height={200}
                      className='absolute bottom-0 opacity-80'
                    />
                    <div className='flex justify-center'>
                      {/* Kept duration color */}
                      <p className='text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                        {experience.duration}
                      </p>
                    </div>
                    <div className='flex items-center gap-x-8 px-3 py-5'>
                      {/* Adjusted icon color */}
                      <div className='text-violet-600 transition-all duration-300 hover:scale-125 dark:text-violet-500'>
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        {/* Text colors inherit from GlowCard, adjusted link color */}
                        <p className='mb-2 text-base font-medium uppercase sm:text-xl'>
                          {experience.title}
                        </p>
                        <p className='text-sm text-gray-800 dark:text-gray-200 sm:text-base'>
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
                        <p className='whitespace-pre-line text-sm text-gray-800 dark:text-gray-200 sm:text-base'>
                          {experience.description}
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

export default Experience;
