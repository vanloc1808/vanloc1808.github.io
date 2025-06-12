import React from 'react';
import Skeleton from './Skeleton';

const NewsSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className='overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'
        >
          <Skeleton variant='rectangular' height='200px' />
          <div className='space-y-4 p-4'>
            <div className='space-y-2'>
              <Skeleton variant='text' width='70%' />
              <Skeleton variant='text' width='50%' />
            </div>
            <div className='space-y-2'>
              <Skeleton variant='text' width='90%' />
              <Skeleton variant='text' width='80%' />
              <Skeleton variant='text' width='60%' />
            </div>
            <div className='flex items-center justify-between'>
              <Skeleton variant='text' width='100px' />
              <Skeleton variant='text' width='80px' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSkeleton;
