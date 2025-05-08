'use client';

import { FC } from 'react';
import { publicationsData } from "@/utils/data/publications-data";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experiences from '/public/lottie/code.json';
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../components/helper/animation-lottie'), {
  ssr: false,
});
import GlowCard from "../components/helper/glow-card";

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
              {
                publicationsData.map(publication => (
                  <GlowCard key={publication.id} identifier={`experiences-${publication.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex items-start gap-x-4 px-3 py-4">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                          <BsPersonWorkspace size={32} />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-base sm:text-lg mb-2 font-medium uppercase break-words">
                            {publication.title}
                          </p>
                          <p className="text-xs sm:text-sm text-[#16f2b3] mb-1">
                            Published at {publication.conference}
                          </p>
                          <p className="text-xs sm:text-sm text-[#df7518] mb-2">
                            {publication.date}
                          </p>
                          <p className="text-sm sm:text-base mb-2 break-words">
                            {publication.description}
                          </p>
                          <p className="text-xs sm:text-sm text-[#16f2b3] break-all">
                            <a href={publication.url} target="_blank" rel="noopener noreferrer" className="text-[#16f2b3] hover:text-[#df7518]">
                              {publication.url}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;