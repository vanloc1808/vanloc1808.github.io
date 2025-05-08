'use client';

import Link from "next/link";
import { useTheme } from '@/app/context/ThemeContext';
import { FC, useState } from 'react';

interface Theme {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: FC = () => {
  const { theme, toggleTheme } = useTheme() as Theme;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent relative z-[100]">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[#16f2b3] text-3xl font-bold">
            VAN-LOC NGUYEN
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-none focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent
          mt-0 flex flex-col items-start text-sm
          md:relative md:flex md:flex-row md:space-x-1 md:items-center
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
          border-b border-gray-200 dark:border-gray-700 md:border-none
          shadow-lg md:shadow-none
          py-4 md:py-0
          px-4 md:px-0
          space-y-4 md:space-y-0`}>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experiences" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">EXPERIENCES</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">EDUCATIONS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/projects" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/publications" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">PUBLICATIONS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/news" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">NEWS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="https://blog.nguyenvanloc.com/" onClick={closeMenu}>
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">BLOGS</div>
            </Link>
          </li>
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={(e) => {
                toggleTheme();
                closeMenu();
              }}
              className="block px-4 py-2 text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600 focus:outline-none"
              aria-label="Toggle Theme"
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