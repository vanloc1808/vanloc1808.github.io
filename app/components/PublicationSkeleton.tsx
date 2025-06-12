import React from 'react';
import Skeleton from './Skeleton';

const PublicationSkeleton: React.FC = () => {
  return (
    <div className='space-y-6'>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'
        >
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Skeleton variant='text' width='80%' />
              <Skeleton variant='text' width='60%' />
            </div>
            <div className='space-y-2'>
              <Skeleton variant='text' width='90%' />
              <Skeleton variant='text' width='85%' />
              <Skeleton variant='text' width='70%' />
            </div>
            <div className='flex flex-wrap gap-2'>
              <Skeleton variant='text' width='100px' />
              <Skeleton variant='text' width='100px' />
              <Skeleton variant='text' width='100px' />
            </div>
            <div className='flex items-center gap-4'>
              <Skeleton variant='circular' width='24px' height='24px' />
              <Skeleton variant='text' width='120px' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationSkeleton;
