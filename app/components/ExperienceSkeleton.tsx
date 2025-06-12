import React from 'react';
import Skeleton from './Skeleton';

const ExperienceSkeleton: React.FC = () => {
  return (
    <div className='space-y-8'>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className='relative border-l-2 border-gray-200 pl-8 dark:border-gray-700'
        >
          <div className='absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700' />
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Skeleton variant='text' width='60%' />
              <Skeleton variant='text' width='40%' />
            </div>
            <div className='space-y-2'>
              <Skeleton variant='text' width='90%' />
              <Skeleton variant='text' width='85%' />
              <Skeleton variant='text' width='70%' />
            </div>
            <div className='flex flex-wrap gap-2'>
              <Skeleton variant='text' width='80px' />
              <Skeleton variant='text' width='80px' />
              <Skeleton variant='text' width='80px' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSkeleton;
