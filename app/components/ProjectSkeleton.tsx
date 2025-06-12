import React from 'react';
import Skeleton from './Skeleton';

const ProjectSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className='overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800'
        >
          <Skeleton variant='rectangular' height='200px' />
          <div className='space-y-3 p-4'>
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='60%' />
            <div className='flex gap-2'>
              <Skeleton variant='text' width='60px' />
              <Skeleton variant='text' width='60px' />
              <Skeleton variant='text' width='60px' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
