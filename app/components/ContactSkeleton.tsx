import React from 'react';
import Skeleton from './Skeleton';

const ContactSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <Skeleton variant='text' width='40%' height='2rem' />
          <Skeleton variant='text' width='80%' />
          <Skeleton variant='text' width='60%' />
        </div>
        <div className='space-y-4'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='flex items-center gap-4'>
              <Skeleton variant='circular' width='40px' height='40px' />
              <div className='space-y-2'>
                <Skeleton variant='text' width='120px' />
                <Skeleton variant='text' width='180px' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <Skeleton variant='text' width='40%' height='2rem' />
          <div className='space-y-4'>
            <Skeleton variant='rectangular' height='50px' />
            <Skeleton variant='rectangular' height='50px' />
            <Skeleton variant='rectangular' height='150px' />
            <Skeleton variant='rectangular' width='120px' height='40px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
