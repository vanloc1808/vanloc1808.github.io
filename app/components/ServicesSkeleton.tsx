import React from 'react';
import Skeleton from './Skeleton';

const ServicesSkeleton: React.FC = () => {
  return (
    <div className='space-y-8'>
      {/* Header skeleton */}
      <div className='space-y-4'>
        <Skeleton variant='text' width='40%' height='2rem' />
        <Skeleton variant='text' width='60%' height='1rem' />
      </div>

      {/* Services grid skeleton */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'
          >
            {/* Service icon */}
            <div className='mb-4 flex justify-center'>
              <Skeleton variant='circular' width='64px' height='64px' />
            </div>

            {/* Service title */}
            <div className='mb-3 text-center'>
              <Skeleton variant='text' width='80%' height='1.5rem' />
            </div>

            {/* Service description */}
            <div className='space-y-2'>
              <Skeleton variant='text' width='100%' height='1rem' />
              <Skeleton variant='text' width='90%' height='1rem' />
              <Skeleton variant='text' width='70%' height='1rem' />
            </div>

            {/* Service status/badge */}
            <div className='mt-4 flex justify-center'>
              <Skeleton variant='rectangular' width='100px' height='24px' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSkeleton;
