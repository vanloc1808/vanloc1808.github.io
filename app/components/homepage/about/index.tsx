'use client';

import { getPersonalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from '@/app/context/I18nContext';

const AboutSection: FC = () => {
  const { locale, t } = useTranslation();
  const personalData = getPersonalData(locale);

  return (
    <div id='about' className='relative my-12 lg:my-16'>
      {/* Adjusted sidebar colors for light/dark */}
      <div className='absolute -right-8 top-16 hidden flex-col items-center lg:flex'>
        <span className='w-fit rotate-90 rounded-md bg-gray-200 p-2 px-5 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('about.title')}
        </span>
        <span className='h-36 w-[2px] bg-gray-300 dark:bg-[#1a1443]'></span>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
        <div className='order-2 lg:order-1'>
          {/* Kept heading color, adjusted description text color */}
          <p className='mb-5 text-xl font-medium uppercase text-[#448171] dark:text-[#16f2b3]'>
            {t('about.whoAmI')}
          </p>
          <p className='whitespace-pre-line text-sm text-gray-700 dark:text-gray-200 lg:text-lg'>
            {personalData.description}
          </p>
        </div>
        <div className='order-1 flex justify-center lg:order-2'>
          <div className='relative h-[360px] w-[360px] overflow-hidden rounded-lg'>
            <Image
              src={personalData.profile}
              alt={personalData.name}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
              quality={90}
              className='cursor-pointer object-cover transition-all duration-1000 hover:scale-110 hover:grayscale-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
