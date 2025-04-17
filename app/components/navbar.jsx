'use client'; // Add this for client-side hooks

// @flow strict
import Link from "next/link";
import { useTheme } from '@/app/context/ThemeContext'; // Import useTheme
import React from 'react'; // Import React

function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <nav className="bg-transparent relative z-[100]">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            VAN-LOC NGUYEN
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">EDUCATION</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/projects"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/publications"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">PUBLICATIONS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/news"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">NEWS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="https://blog.nguyenvanloc.com/"><div className="text-sm text-gray-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-600">BLOGS</div></Link>
          </li>
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600 dark:text-white dark:hover:text-pink-600 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'} {/* Simple text toggle */}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
