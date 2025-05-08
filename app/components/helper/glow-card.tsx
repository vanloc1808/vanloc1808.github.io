'use client';

import { FC, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  identifier: string;
}

const GlowCard: FC<GlowCardProps> = ({ children, identifier }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;