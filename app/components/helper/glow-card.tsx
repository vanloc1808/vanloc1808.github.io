'use client';

import { FC, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  identifier: string;
}

const GlowCard: FC<GlowCardProps> = ({ children, identifier }) => {
  return (
    <div className='group relative' data-identifier={identifier}>
      <div className='animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200'></div>
      <div className='relative'>{children}</div>
    </div>
  );
};

export default GlowCard;
