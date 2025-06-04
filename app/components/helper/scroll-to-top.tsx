'use client';

import { FC, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-violet-600 transition-all duration-300 hover:bg-violet-700'
        >
          <FaArrowUp className='text-white' />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
