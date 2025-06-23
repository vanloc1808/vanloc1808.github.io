import { FC } from 'react';
import { newsData } from '@/utils/data/news-data';
import Image from 'next/image';
import { BsNewspaper } from 'react-icons/bs';

const News: FC = () => {
  return (
    <div id='news' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          ALL NEWS
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-1 gap-8'>
          <div>
            <div className='flex flex-col gap-6'>
              {newsData.map((newsItem, index) => (
                <div
                  key={`news-item-${index}-${newsItem.date}`}
                  className='relative transform cursor-pointer transition-all duration-300 hover:scale-[1.02]'
                  style={{ isolation: 'isolate', contain: 'layout style' }}
                >
                  {/* Glow effect - positioned behind */}
                  <div
                    className='absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 blur transition-all duration-300 hover:opacity-75 hover:blur-md dark:opacity-25 dark:hover:opacity-100'
                    style={{ zIndex: -1 }}
                  ></div>

                  {/* Card content */}
                  <div className='relative rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 transition-all duration-300 hover:shadow-xl dark:border-[#1b2c68a0] dark:from-[#0d1224] dark:to-[#0a0d37] dark:shadow-lg dark:shadow-purple-500/20 dark:hover:shadow-2xl dark:hover:shadow-purple-500/40'>
                    <div className='relative p-3'>
                      <Image
                        src='/blur-23.svg'
                        alt='Hero'
                        width={1080}
                        height={200}
                        className='pointer-events-none absolute bottom-0 opacity-80'
                      />
                      <div className='relative z-10 flex items-center gap-x-8 px-3 py-5'>
                        <div className='text-violet-500 transition-all duration-300 hover:scale-125'>
                          <BsNewspaper size={36} />
                        </div>
                        <div>
                          <p className='mb-2 text-base font-medium uppercase sm:text-xl'>
                            {newsItem.title}
                          </p>
                          <p className='text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                            Date: {newsItem.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
