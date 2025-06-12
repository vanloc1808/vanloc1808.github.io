'use client';

import { FC, Suspense } from 'react';
import { experiences } from '@/utils/data/experience';
import experience from '/public/lottie/code.json';
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(
  () => import('../components/helper/animation-lottie'),
  {
    ssr: false,
  }
);
import GlowCard from '../components/helper/glow-card';
import Image from 'next/image';
import { BsPersonWorkspace } from 'react-icons/bs';
import ExperienceSkeleton from '../components/ExperienceSkeleton';

const Experience: FC = () => {
  return (
    <div id='experiences' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          ALL EXPERIENCES
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
          <div className='flex items-start justify-center lg:pr-4'>
            <div className='h-full w-full max-w-md'>
              <AnimationLottie animationData={experience} />
            </div>
          </div>

          <div>
            <Suspense fallback={<ExperienceSkeleton />}>
              <div className='flex flex-col gap-4'>
                {experiences.map(experience => (
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
                        <p className='text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                          {experience.duration}
                        </p>
                      </div>
                      <div className='flex items-center gap-x-8 px-3 py-5'>
                        <div className='text-violet-600 transition-all duration-300 hover:scale-125 dark:text-violet-500'>
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
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
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
