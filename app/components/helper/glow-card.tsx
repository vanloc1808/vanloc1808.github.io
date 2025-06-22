'use client';

import { FC, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  identifier: string;
}

const GlowCard: FC<GlowCardProps> = ({ children, identifier }) => {
  return (
    <div
      className='group relative isolate transition-all duration-300 hover:scale-[1.02]'
      data-identifier={identifier}
      style={{ isolation: 'isolate' }}
    >
      <div className='animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 blur transition-all duration-300 group-hover:opacity-75 group-hover:blur-md group-hover:duration-200'></div>
      <div className='relative transition-all duration-300 group-hover:shadow-xl'>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
