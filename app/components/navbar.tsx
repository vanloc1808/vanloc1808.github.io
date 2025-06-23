'use client';

import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';
import React, { FC, useState, useEffect, useRef } from 'react';
import { useTranslation } from '../context/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';
import { getPersonalData } from '@/utils/data/personal-data';

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
  theme: 'light' | 'dark' | 'system';

  /** Function to toggle between light and dark themes */
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

/**
 * Navigation bar component with responsive design and theme toggle.
 *
 * This component provides the main navigation for the portfolio website,
 * featuring a responsive hamburger menu for mobile devices, theme switching
 * functionality, and comprehensive accessibility support.
 *
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Dark/light theme toggle
 * - Internationalization support
 * - Smooth navigation transitions
 * - Full accessibility support with ARIA labels and keyboard navigation
 * - Auto-closing menu on navigation
 * - Focus management and screen reader support
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
  const { theme, setTheme } = useTheme() as Theme;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const { locale, t } = useTranslation();
  const personalData = getPersonalData(locale);

  // Helper function to get theme icon
  const getThemeIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    if (theme === 'system') return '🖥️';
    return '🖥️';
  };

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

  /**
   * Closes the theme menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node) &&
        themeButtonRef.current &&
        !themeButtonRef.current.contains(event.target as Node)
      ) {
        setIsThemeMenuOpen(false);
      }
    };

    if (isThemeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isThemeMenuOpen]);

  /**
   * Handle keyboard navigation for theme menu
   */
  const handleThemeMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsThemeMenuOpen(false);
      themeButtonRef.current?.focus();
    }
  };

  /**
   * Handle keyboard navigation for hamburger menu
   */
  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className='relative z-[100] bg-transparent'
      role='navigation'
      aria-label='Main navigation'
      onKeyDown={handleMenuKeyDown}
    >
      <div className='flex items-center justify-between px-12 py-5 sm:px-16 lg:px-24 xl:px-32 2xl:px-40'>
        <div className='flex flex-shrink-0 items-center'>
          <Link
            href='/'
            onClick={closeMenu}
            className='rounded text-3xl font-bold text-[#448171] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-[#16f2b3]'
            aria-label={`${personalData.name} - Go to homepage`}
          >
            {personalData.name}
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden items-center space-x-1 md:flex'>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/#about'
            onClick={closeMenu}
            aria-label='Go to About section'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('navigation.about').toUpperCase()}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/experiences'
            onClick={closeMenu}
            aria-label='Go to Experiences page'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('navigation.experience').toUpperCase()}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/#skills'
            onClick={closeMenu}
            aria-label='Go to Skills section'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('skills.title')}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/#education'
            onClick={closeMenu}
            aria-label='Go to Education section'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('navigation.education').toUpperCase()}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/projects'
            onClick={closeMenu}
            aria-label='Go to Projects page'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('navigation.projects').toUpperCase()}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/publications'
            onClick={closeMenu}
            aria-label='Go to Publications page'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              PUBLICATIONS
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='/news'
            onClick={closeMenu}
            aria-label='Go to News page'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              {t('navigation.news').toUpperCase()}
            </div>
          </Link>
          <Link
            className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            href='https://blog.nguyenvanloc.com/'
            onClick={closeMenu}
            aria-label='Go to Blogs (opens in new tab)'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
              BLOGS
            </div>
          </Link>
        </div>

        {/* Desktop Controls - Theme Toggle and Language Switcher */}
        <div className='hidden items-center gap-4 md:flex'>
          {/* Theme Toggle Button - Desktop */}
          <div className='relative'>
            <button
              ref={themeButtonRef}
              onClick={e => {
                e.stopPropagation();
                setIsThemeMenuOpen(v => !v);
              }}
              className='flex items-center gap-1 rounded px-4 py-2 text-sm text-gray-800 transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white dark:hover:text-pink-600'
              aria-label={`Current theme: ${theme}. Click to open theme menu`}
              aria-expanded={isThemeMenuOpen}
              aria-haspopup='menu'
              type='button'
            >
              <span aria-hidden='true'>{getThemeIcon()}</span>
              <span className='sr-only'>Theme: {theme}</span>
            </button>
            {isThemeMenuOpen && (
              <div
                ref={themeMenuRef}
                className='absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-300 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900'
                onClick={e => e.stopPropagation()}
                role='menu'
                aria-label='Theme selection menu'
                onKeyDown={handleThemeMenuKeyDown}
              >
                <button
                  className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-gray-800 ${theme === 'light' ? 'bg-gray-100 font-bold dark:bg-gray-800' : ''}`}
                  onClick={e => {
                    e.stopPropagation();
                    setTheme('light');
                    setIsThemeMenuOpen(false);
                  }}
                  type='button'
                  role='menuitem'
                  aria-label='Switch to light theme'
                >
                  <span aria-hidden='true'>☀️</span> Light
                </button>
                <button
                  className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-gray-800 ${theme === 'dark' ? 'bg-gray-100 font-bold dark:bg-gray-800' : ''}`}
                  onClick={e => {
                    e.stopPropagation();
                    setTheme('dark');
                    setIsThemeMenuOpen(false);
                  }}
                  type='button'
                  role='menuitem'
                  aria-label='Switch to dark theme'
                >
                  <span aria-hidden='true'>🌙</span> Dark
                </button>
                <button
                  className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-gray-800 ${theme === 'system' ? 'bg-gray-100 font-bold dark:bg-gray-800' : ''}`}
                  onClick={e => {
                    e.stopPropagation();
                    setTheme('system');
                    setIsThemeMenuOpen(false);
                  }}
                  type='button'
                  role='menuitem'
                  aria-label='Use system theme preference'
                >
                  <span aria-hidden='true'>🖥️</span> System
                </button>
              </div>
            )}{' '}
            {/* Language Switcher - Far Right */}
            <div className='opacity-70 transition-opacity duration-200 hover:opacity-100'>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className='flex h-10 w-10 flex-col items-center justify-center rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden'
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          type='button'
        >
          <span className='sr-only'>
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            aria-hidden='true'
          ></span>
          <span
            className={`mt-1.5 block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? 'opacity-0' : ''}`}
            aria-hidden='true'
          ></span>
          <span
            className={`mt-1.5 block h-0.5 w-6 bg-gray-800 transition-all duration-300 dark:bg-white ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            aria-hidden='true'
          ></span>
        </button>

        {/* Mobile Navigation Menu */}
        <ul
          id='mobile-menu'
          className={`absolute left-0 right-0 top-full mt-0 flex flex-col items-start bg-white text-sm transition-all duration-300 ease-in-out dark:bg-gray-900 md:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} space-y-4 border-b border-gray-200 px-4 py-4 shadow-lg dark:border-gray-700`}
          role='menu'
          aria-label='Mobile navigation menu'
          aria-hidden={!isMenuOpen}
        >
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/#about'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to About section'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.about').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/experiences'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Experiences page'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.experience').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/#skills'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Skills section'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                SKILLS
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/#education'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Education section'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.education').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/projects'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Projects page'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.projects').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/publications'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Publications page'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.publications').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='/news'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to News page'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                {t('navigation.news').toUpperCase()}
              </div>
            </Link>
          </li>
          <li role='none'>
            <Link
              className='block rounded px-4 py-2 no-underline outline-none hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              href='https://blog.nguyenvanloc.com/'
              onClick={closeMenu}
              role='menuitem'
              aria-label='Go to Blogs (opens in new tab)'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='text-gray-800 transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
                BLOGS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
