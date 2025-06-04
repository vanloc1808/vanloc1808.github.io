import { FC } from 'react';
import { newsData } from '@/utils/data/news-data';
import Image from 'next/image';
import { BsNewspaper } from 'react-icons/bs';
import GlowCard from '../components/helper/glow-card';

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
                <GlowCard key={index} identifier={`news-${index}`}>
                  <div className='relative p-3'>
                    <Image
                      src='/blur-23.svg'
                      alt='Hero'
                      width={1080}
                      height={200}
                      className='absolute bottom-0 opacity-80'
                    />
                    <div className='flex items-center gap-x-8 px-3 py-5'>
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
