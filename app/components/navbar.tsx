'use client';

import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';
import React, { FC, useState } from 'react';

/**
 * Interface for theme context properties.
 *
 * Defines the structure of the theme context used throughout
 * the application for managing light/dark mode.
 *
 * @interface Theme
 * @since 1.0.0
 */
interface Theme {
  /** Current theme mode - either 'light' or 'dark' */
  theme: 'light' | 'dark';

  /** Function to toggle between light and dark themes */
  toggleTheme: () => void;
}

/**
 * Navigation bar component with responsive design and theme toggle.
 *
 * This component provides the main navigation for the portfolio website,
 * featuring a responsive hamburger menu for mobile devices, theme switching
 * functionality, and smooth navigation between different sections.
 *
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Dark/light theme toggle
 * - Smooth navigation transitions
 * - Accessibility support with ARIA labels
 * - Auto-closing menu on navigation
 *
 * @component
 * @returns {React.JSX.Element} The rendered navigation bar
 *
 * @example
 * ```tsx
 * <Navbar />
 * ```
 *
 * @since 1.0.0
 */
const Navbar: FC = (): React.JSX.Element => {
  const { theme, toggleTheme } = useTheme() as Theme;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /**
   * Toggles the mobile menu open/closed state.
   *
   * @returns {void}
   */
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Closes the mobile menu.
   *
   * Used when a navigation link is clicked to provide
   * better user experience on mobile devices.
   *
   * @returns {void}
   */
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='relative z-[100] bg-transparent'>
      <div className='flex items-center justify-between py-5'>
        <div className='flex flex-shrink-0 items-center'>
          <Link
            href='/'
            onClick={closeMenu}
            className='text-3xl font-bold text-[#448171] dark:text-[#16f2b3]'
          >
            VAN-LOC NGUYEN
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className='flex h-10 w-10 flex-col items-center justify-center border-none focus:outline-none md:hidden'
          aria-label='Toggle Menu'
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
          ></span>
          <span
            className={`mt-1.5 block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`mt-1.5 block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
          ></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute left-0 right-0 top-full mt-0 flex flex-col items-start
          bg-white text-sm transition-all duration-300 ease-in-out
          dark:bg-gray-900 md:relative md:flex md:flex-row md:items-center
          md:space-x-1 md:bg-transparent md:dark:bg-transparent
          ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}
          space-y-4 border-b border-gray-200 px-4
          py-4 shadow-lg
          dark:border-gray-700 md:space-y-0
          md:border-none md:px-0
          md:py-0 md:shadow-none`}
        >
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/#about'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/#experiences'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                EXPERIENCES
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/#skills'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/#education'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                EDUCATIONS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/projects'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                PROJECTS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/publications'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                PUBLICATIONS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='/news'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                NEWS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 no-underline outline-none hover:no-underline'
              href='https://blog.nguyenvanloc.com/'
              onClick={closeMenu}
            >
              <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                BLOGS
              </div>
            </Link>
          </li>
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className='block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 focus:outline-none dark:text-white dark:hover:text-pink-600'
              aria-label='Toggle Theme'
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
