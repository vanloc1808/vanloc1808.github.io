'use client';

import React, { FC, Suspense } from 'react';
import { useTranslation } from '../context/I18nContext';
import Skeleton from '../components/Skeleton';

const Services: FC = () => {
  const { t } = useTranslation();

  return (
    <div id='services' className='relative z-50 my-12 lg:my-24'>
      <div className='sticky top-10'>
        <div className='absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter'></div>
        <div className='relative flex items-center justify-start'>
          <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            {t('common.all')} {t('services.title')}
          </span>
          <span className='h-[2px] w-full bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='pt-24'>
        <Suspense fallback={<Skeleton />}>
          <div className='flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700'>
            <p className='text-gray-700 dark:text-gray-300'>
              {t('services.empty')}
            </p>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Services;

'use client';

import React, { FC, Suspense } from 'react';
import { useTranslation } from '../context/I18nContext';
import Skeleton from '../components/Skeleton';

const Services: FC = () => {
  const { t } = useTranslation();

  return (
    <div id='services' className='relative z-50 my-12 lg:my-24'>
      <div className='sticky top-10'>
        <div className='absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter'></div>
        <div className='relative flex items-center justify-start'>
          <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            {t('common.all')} {t('services.title')}
          </span>
          <span className='h-[2px] w-full bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='pt-24'>
        <Suspense fallback={<Skeleton />}>
          <div className='flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700'>
            <p className='text-gray-700 dark:text-gray-300'>
              {t('services.empty')}
            </p>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Services;


