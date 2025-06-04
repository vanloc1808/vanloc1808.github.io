'use client';

import { publicationsData } from '@/utils/data/publications-data';
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});
import experiences from '/public/lottie/code.json';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { FC } from 'react';
import PublicationCard from '../../helper/publication-card';

interface PublicationItem {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
}

const Publication: FC = () => {
  return (
    <div
      id='publication'
      className='relative z-50 my-12 border-t border-[#25213b] lg:my-24'
    >
      <div className='my-5 flex justify-center lg:py-8'>
        <div className='flex items-center'>
          <span className='h-[2px] w-24 bg-[#1a1443]'></span>
          <span className='w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            RECENT PUBLICATIONS
          </span>
          <span className='h-[2px] w-24 bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
          <div className='flex items-start justify-center lg:pr-4'>
            <div className='h-full w-full max-w-md'>
              <AnimationLottie animationData={experiences} />
            </div>
          </div>

          <div>
            <div className='flex flex-col gap-4'>
              {publicationsData
                .slice(0, 5)
                .map((publication: PublicationItem) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                    identifier={`publication-${publication.id}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 flex justify-center lg:mt-8'>
        <Link
          className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold'
          role='button'
          href='/publications'
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Publication;
