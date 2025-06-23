'use client';

import { getNews } from '@/utils/data/news-data';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from '@/app/context/I18nContext';

interface NewsItem {
  date: string;
  title: string;
}

const NewsSection: FC = () => {
  const { t, locale } = useTranslation();
  const newsData = getNews(locale);

  return (
    <div id='news' className='relative my-12 lg:my-16'>
      {/* Adjusted sidebar colors for light/dark */}
      <div className='absolute -right-8 top-16 hidden flex-col items-center lg:flex'>
        <span className='w-fit rotate-90 rounded-md bg-gray-200 p-2 px-5 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('navigation.news').toUpperCase()}
        </span>
        <span className='h-36 w-[2px] bg-gray-300 dark:bg-[#1a1443]'></span>
      </div>
      <div className='grid grid-cols-1 gap-8'>
        <div>
          {/* Kept heading color, adjusted list text color */}
          <p className='mb-5 text-xl font-medium uppercase text-[#448171] dark:text-[#16f2b3]'>
            {t('news.title')}
          </p>
          <ul className='text-sm text-gray-700 dark:text-gray-200 lg:text-lg'>
            {newsData.slice(0, 5).map((newsItem: NewsItem, index: number) => (
              <li key={index} className='mb-4'>
                {/* Kept date color */}
                <span className='block text-[#448171] dark:text-[#16f2b3]'>
                  {newsItem.date}
                </span>
                {/* List item title inherits color from ul */}
                <strong>{newsItem.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Adjusted button text color (already white, but added dark variant for consistency) */}
      <div className='mt-5 flex justify-center lg:mt-12'>
        <Link
          className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline dark:text-white md:px-8 md:py-4 md:text-sm md:font-semibold'
          role='button'
          href='/news'
        >
          <span>{t('news.viewAll')}</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
