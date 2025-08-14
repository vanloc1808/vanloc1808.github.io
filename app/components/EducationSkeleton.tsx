import React from 'react';
import Skeleton from './Skeleton';

const EducationSkeleton: React.FC = () => {
  return (
    <div className='py-8'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8'>
        {/* Animation skeleton */}
        <div className='flex items-start justify-center lg:pr-4'>
          <div className='h-full w-full max-w-md'>
            <Skeleton variant='rectangular' width='100%' height='300px' />
          </div>
        </div>

        {/* Education timeline skeleton */}
        <div className='relative lg:col-span-2'>
          {/* Timeline line */}
          <div className='absolute bottom-0 left-8 top-0 w-0.5 bg-gray-200 dark:bg-gray-700'></div>

          <div className='flex flex-col gap-8'>
            {[...Array(3)].map((_, index) => (
              <div key={index} className='relative'>
                {/* Timeline dot */}
                <div className='absolute left-6 top-8 z-10 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700'></div>

                {/* Timeline date label */}
                <div className='absolute left-12 top-6 ml-4'>
                  <Skeleton variant='text' width='150px' height='1rem' />
                </div>

                <div className='ml-12'>
                  <div className='rounded-lg border border-gray-200 p-8 dark:border-gray-700'>
                    {/* Status badge */}
                    <div className='mb-4 flex items-start justify-end'>
                      <Skeleton
                        variant='rectangular'
                        width='80px'
                        height='24px'
                      />
                    </div>

                    <div className='flex items-start gap-x-3 px-6 py-4 sm:gap-x-4 lg:gap-x-6'>
                      {/* Icon */}
                      <div className='mt-1'>
                        <Skeleton
                          variant='circular'
                          width='32px'
                          height='32px'
                        />
                      </div>

                      <div className='flex-1'>
                        {/* Institution name */}
                        <div className='mb-2'>
                          <Skeleton
                            variant='text'
                            width='60%'
                            height='1.25rem'
                          />
                        </div>

                        {/* Degree */}
                        <div className='mb-2'>
                          <Skeleton variant='text' width='80%' height='1rem' />
                        </div>

                        {/* Location */}
                        <div className='mb-2'>
                          <Skeleton variant='text' width='40%' height='1rem' />
                        </div>

                        {/* Description */}
                        <div className='mt-2 space-y-2'>
                          <Skeleton variant='text' width='100%' height='1rem' />
                          <Skeleton variant='text' width='90%' height='1rem' />
                        </div>

                        {/* Timeline progress indicator */}
                        <div className='mt-4 border-t border-gray-200 pt-4 dark:border-gray-700'>
                          <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                              <Skeleton
                                variant='circular'
                                width='8px'
                                height='8px'
                              />
                              <Skeleton
                                variant='text'
                                width='60px'
                                height='0.75rem'
                              />
                            </div>
                            <div className='h-px flex-1 bg-gray-200 dark:bg-gray-700'></div>
                            <div className='flex items-center gap-1'>
                              <Skeleton
                                variant='text'
                                width='60px'
                                height='0.75rem'
                              />
                              <Skeleton
                                variant='circular'
                                width='8px'
                                height='8px'
                              />
                            </div>
                          </div>
                        </div>
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
  );
};

export default EducationSkeleton;
