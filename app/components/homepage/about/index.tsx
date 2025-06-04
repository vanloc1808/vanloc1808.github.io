import { personalData } from "@/utils/data/personal-data";
import { PersonalData } from "@/app/types/personal";
import Image from "next/image";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Adjusted sidebar colors for light/dark */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gray-200 dark:bg-[#1a1443] w-fit text-gray-800 dark:text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gray-300 dark:bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          {/* Kept heading color, adjusted description text color */}
          <p className="font-medium mb-5 text-[#16f2b3] dark:text-[#16f2b3] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-gray-700 dark:text-gray-200 text-sm lg:text-lg whitespace-pre-line">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={360}
            height={360}
            alt="Van-Loc Nguyen"
            className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;