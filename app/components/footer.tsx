import Link from 'next/link';
import React, { FC } from 'react';

/**
 * Footer component for the portfolio website.
 *
 * This component displays the website footer with copyright information,
 * attribution links, and acknowledgments. It features a gradient border
 * design and responsive layout.
 *
 * Features:
 * - Copyright and attribution information
 * - Links to developer and template creator profiles
 * - Responsive design for mobile and desktop
 * - Decorative gradient border
 * - Special acknowledgments section
 *
 * @component
 * @returns {React.JSX.Element} The rendered footer element
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 *
 * @since 1.0.0
 */
const Footer: FC = (): React.JSX.Element => {
  return (
    <div className='relative border-t border-[#353951] bg-[#0d1224] text-white'>
      <div className='mx-auto px-6 py-6 sm:px-12 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]'>
        <div className='-z-40 flex justify-center'>
          <div className='absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
        </div>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <p className='text-sm'>
            © Developed by{' '}
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/vanloc1808/'
              className='text-[#16f2b3]'
            >
              Van-Loc Nguyen
            </Link>
            .<br></br>
            Template provided by{' '}
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/abu-said-bd/'
              className='text-[#16f2b3]'
            >
              Abu Said
            </Link>
            .<br></br>
            Special thanks to co-authors: ChatGPT, Claude, Cline, and Cursor 😂
          </p>
          {/* <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
