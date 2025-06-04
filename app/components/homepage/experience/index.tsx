'use client';

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import dynamic from 'next/dynamic';
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
  ssr: false,
});
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';
import { FC } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  duration: string;
  description: string;
}

const Experience: FC = () => {
  return (
    <div id="experiences" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Adjusted section title colors for light/dark */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gray-300 dark:bg-[#1a1443]"></span>
          <span className="bg-gray-200 dark:bg-[#1a1443] w-fit text-gray-800 dark:text-white px-5 py-3 text-xl rounded-md">
            EXPERIENCES
          </span>
          <span className="w-24 h-[2px] bg-gray-300 dark:bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationData={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map((experience: Experience) => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        {/* Kept duration color */}
                        <p className="text-xs sm:text-sm text-[#448171] dark:text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        {/* Adjusted icon color */}
                        <div className="text-violet-600 dark:text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          {/* Text colors inherit from GlowCard, adjusted link color */}
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                            {experience.company}
                          </p>
                          {
                            experience.companyLink && (
                              <a
                                href={experience.companyLink}
                                target="_blank"
                                className="text-sm sm:text-base text-[#448171] dark:text-[#16f2b3] hover:underline"
                              >
                                {experience.companyLink}
                              </a>
                            )
                          }
                          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 whitespace-pre-line">
                            {experience.description}
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

export default Experience;
