'use client';

import { FC } from 'react';
import { getNews } from '@/utils/data/news-data';
import Image from 'next/image';
import { BsNewspaper } from 'react-icons/bs';
import { useTranslation } from '../context/I18nContext';
import { formatDateForLocale } from '@/utils/time-converter';
import GlowCard from '../components/helper/glow-card';
import dynamic from 'next/dynamic';
import newsLottie from '/public/lottie/news.json';

const AnimationLottie = dynamic(
  () => import('../components/helper/animation-lottie'),
  {
    ssr: false,
  }
);

const News: FC = () => {
  const { t, locale } = useTranslation();
  const newsData = getNews(locale);

  return (
    <div id='news' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('common.all')} {t('navigation.news')}
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8'>
          <div className='flex items-start justify-center lg:pr-4'>
            <div className='h-full w-full max-w-md'>
              <AnimationLottie animationData={newsLottie} />
            </div>
          </div>

          <div className='lg:col-span-2'>
            <div className='flex flex-col gap-6'>
              {newsData.map((newsItem, index) => (
                <GlowCard
                  key={`news-item-${index}-${newsItem.date}`}
                  identifier={`news-${index}-${newsItem.date}`}
                >
                  <div className='relative p-3'>
                    <div className='relative z-10 flex items-center gap-x-8 px-3 py-5'>
                      <div className='text-violet-500 transition-all duration-300 hover:scale-125'>
                        <BsNewspaper size={36} />
                      </div>
                      <div className='flex-1'>
                        <div className='mb-2 flex items-center gap-2'>
                          <p className='text-base font-medium uppercase sm:text-xl'>
                            {newsItem.title}
                          </p>
                          {newsItem.certificateLink && (
                            <a
                              href={newsItem.certificateLink}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800'
                              title='View Certificate'
                            >
                              📄
                            </a>
                          )}
                        </div>
                        <p className='text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                          {formatDateForLocale(newsItem.date, locale)}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
