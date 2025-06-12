import React from 'react';
import Skeleton from './Skeleton';

const SkillsSkeleton: React.FC = () => {
  return (
    <div className='space-y-8'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className='space-y-4'>
          <Skeleton variant='text' width='30%' height='2rem' />
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {[...Array(8)].map((_, skillIndex) => (
              <div
                key={skillIndex}
                className='flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700'
              >
                <Skeleton variant='circular' width='24px' height='24px' />
                <Skeleton variant='text' width='80px' />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSkeleton;
