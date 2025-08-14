import React from 'react';
import Skeleton from './Skeleton';

const CertificatesSkeleton: React.FC = () => {
  return (
    <div className='py-8'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
        {/* Animation skeleton */}
        <div className='flex items-start justify-center lg:pr-4'>
          <div className='h-full w-full max-w-md'>
            <Skeleton variant='rectangular' width='100%' height='300px' />
          </div>
        </div>

        {/* Certificates list skeleton */}
        <div className='lg:col-span-2'>
          <div className='flex flex-col gap-6'>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'
              >
                {/* Type badge and date */}
                <div className='mb-4 flex items-start justify-between'>
                  <Skeleton variant='rectangular' width='100px' height='28px' />
                  <Skeleton variant='text' width='80px' height='1rem' />
                </div>

                {/* Title */}
                <div className='mb-3'>
                  <Skeleton variant='text' width='75%' height='1.5rem' />
                </div>

                {/* Organization and location */}
                <div className='mb-3 space-y-1'>
                  <Skeleton variant='text' width='50%' height='1rem' />
                  <Skeleton variant='text' width='40%' height='1rem' />
                </div>

                {/* Description */}
                <div className='space-y-2'>
                  <Skeleton variant='text' width='100%' height='1rem' />
                  <Skeleton variant='text' width='85%' height='1rem' />
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

export default CertificatesSkeleton;
