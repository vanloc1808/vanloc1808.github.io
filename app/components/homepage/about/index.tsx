import { personalData } from '@/utils/data/personal-data';
import { PersonalData } from '@/app/types/personal';
import Image from 'next/image';
import { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <div id='about' className='relative my-12 lg:my-16'>
      {/* Adjusted sidebar colors for light/dark */}
      <div className='absolute -right-8 top-16 hidden flex-col items-center lg:flex'>
        <span className='w-fit rotate-90 rounded-md bg-gray-200 p-2 px-5 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          ABOUT ME
        </span>
        <span className='h-36 w-[2px] bg-gray-300 dark:bg-[#1a1443]'></span>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
        <div className='order-2 lg:order-1'>
          {/* Kept heading color, adjusted description text color */}
          <p className='mb-5 text-xl font-medium uppercase text-[#448171] dark:text-[#16f2b3]'>
            Who am I?
          </p>
          <p className='whitespace-pre-line text-sm text-gray-700 dark:text-gray-200 lg:text-lg'>
            {personalData.description}
          </p>
        </div>
        <div className='order-1 flex justify-center lg:order-2'>
          <Image
            src={personalData.profile}
            width={360}
            height={360}
            alt='Van-Loc Nguyen'
            className='cursor-pointer rounded-lg transition-all duration-1000 hover:scale-110 hover:grayscale-0'
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
