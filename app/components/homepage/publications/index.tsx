'use client';

import { publicationsData } from "@/utils/data/publications-data";
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});
import experiences from '/public/lottie/code.json';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { FC } from 'react';
import PublicationCard from '../../helper/publication-card';

interface Publication {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
}

const Publication: FC = () => {
  return (
    <div id="publication" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-gray-200 dark:bg-[#1a1443] w-fit text-gray-800 dark:text-white px-5 py-3 text-xl rounded-md">
            RECENT PUBLICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex justify-center items-start lg:pr-4">
            <div className="w-full h-full max-w-md">
              <AnimationLottie animationData={experiences} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {publicationsData.slice(0, 5).map((publication: Publication) => (
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
      <div className="flex justify-center mt-5 lg:mt-8">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/publications"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Publication;