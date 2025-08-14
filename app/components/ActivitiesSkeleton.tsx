import React from 'react';
import Skeleton from './Skeleton';

const ActivitiesSkeleton: React.FC = () => {
  return (
    <div className='py-8'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
        {/* Animation skeleton */}
        <div className='flex items-start justify-center lg:pr-4'>
          <div className='h-full w-full max-w-md'>
            <Skeleton variant='rectangular' width='100%' height='300px' />
          </div>
        </div>

        {/* Activities list skeleton */}
        <div className='lg:col-span-2'>
          <div className='flex flex-col gap-6'>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'
              >
                {/* Type badge and date */}
                <div className='mb-4 flex items-start justify-between'>
                  <Skeleton variant='rectangular' width='120px' height='28px' />
                  <Skeleton variant='text' width='80px' height='1rem' />
                </div>

                {/* Role */}
                <div className='mb-2'>
                  <Skeleton variant='text' width='150px' height='1rem' />
                </div>

                {/* Title */}
                <div className='mb-3'>
                  <Skeleton variant='text' width='70%' height='1.5rem' />
                </div>

                {/* Organization */}
                <div className='mb-3'>
                  <Skeleton variant='text' width='60%' height='1rem' />
                </div>

                {/* Description */}
                <div className='space-y-2'>
                  <Skeleton variant='text' width='100%' height='1rem' />
                  <Skeleton variant='text' width='90%' height='1rem' />
                  <Skeleton variant='text' width='80%' height='1rem' />
                </div>

                {/* Bottom accent line */}
                <div className='mt-4'>
                  <Skeleton variant='rectangular' width='100%' height='4px' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSkeleton;
