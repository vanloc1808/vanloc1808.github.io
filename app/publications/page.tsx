'use client';

import { FC } from 'react';
import { publicationsData } from "@/utils/data/publications-data";
import experiences from '/public/lottie/code.json';
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../components/helper/animation-lottie'), {
  ssr: false,
});
import PublicationCard from '../components/helper/publication-card';

const Publication: FC = () => {
  return (
    <div id="publication" className="relative z-50 border-t my-12 lg:my-24">
      <div className="relative flex items-center justify-start my-5 lg:py-8">
        <span className="bg-gray-200 dark:bg-[#1a1443] text-gray-800 dark:text-white absolute left-0 w-fit px-5 py-3 text-xl rounded-md">
          ALL PUBLICATIONS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443] dark:bg-white"></span>
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
              {publicationsData.map(publication => (
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
    </div>
  );
};

export default Publication;