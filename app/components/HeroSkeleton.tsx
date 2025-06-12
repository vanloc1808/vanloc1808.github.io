import React from 'react';
import Skeleton from './Skeleton';

const HeroSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-8 py-12 lg:flex-row'>
      <div className='flex-1 space-y-6'>
        <div className='space-y-4'>
          <Skeleton variant='text' width='40%' height='2rem' />
          <Skeleton variant='text' width='80%' height='3rem' />
          <Skeleton variant='text' width='60%' height='2rem' />
        </div>
        <div className='space-y-2'>
          <Skeleton variant='text' width='90%' />
          <Skeleton variant='text' width='85%' />
          <Skeleton variant='text' width='70%' />
        </div>
        <div className='flex gap-4'>
          <Skeleton variant='rectangular' width='120px' height='40px' />
          <Skeleton variant='rectangular' width='120px' height='40px' />
        </div>
      </div>
      <div className='flex flex-1 justify-center'>
        <Skeleton variant='circular' width='300px' height='300px' />
      </div>
    </div>
  );
};

export default HeroSkeleton;
