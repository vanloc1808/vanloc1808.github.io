'use client';

import { FC, Suspense } from 'react';
import { getPublications } from '@/utils/data/publications-data';
import educationLottie from '@/public/lottie/education.json';
import dynamic from 'next/dynamic';
import { useTranslation } from '../context/I18nContext';
import PublicationSkeleton from '../components/PublicationSkeleton';
const AnimationLottie = dynamic(
  () => import('../components/helper/animation-lottie'),
  {
    ssr: false,
  }
);
import PublicationCard from '../components/helper/publication-card';

const Publication: FC = () => {
  const { t, locale } = useTranslation();
  const publicationsData = getPublications(locale);

  return (
    <div id='publication' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('common.all')} {t('navigation.publications')}
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <div className='py-8'>
        <Suspense fallback={<PublicationSkeleton />}>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
            <div className='flex items-start justify-center lg:pr-4'>
              <div className='h-full w-full max-w-md'>
                <AnimationLottie animationData={educationLottie} />
              </div>
            </div>

            <div className='lg:col-span-2'>
              <div className='flex flex-col gap-4'>
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
        </Suspense>
      </div>
    </div>
  );
};

export default Publication;
