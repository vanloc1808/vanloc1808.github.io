import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
import { SiGooglescholar } from 'react-icons/si';
import { FC } from 'react';

const ContactSection: FC = () => {
  return (
    <section
      id='contact'
      className='relative my-24 text-white'
      aria-labelledby='contact-heading'
    >
      {/* Screen reader heading */}
      <h2 id='contact-heading' className='sr-only'>
        Contact Information
      </h2>

      {/* Whole Grid Layout */}
      <div className='grid grid-cols-[auto_80px] items-center gap-x-16'>
        {/* Left side: Email, Address, Icons */}
        <div className='flex flex-col items-end gap-6'>
          {/* Contact Information */}
          <div
            className='flex flex-col gap-4'
            role='group'
            aria-label='Contact details'
          >
            {/* Email */}
            <div className='flex items-center gap-2 text-sm text-gray-800 dark:text-white md:text-lg'>
              <MdAlternateEmail
                className='rounded-full bg-gray-300 p-2 text-gray-800 dark:bg-[#1f223c] dark:text-white'
                size={32}
                aria-hidden='true'
              />
              <span>
                <span className='sr-only'>Email address: </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className='rounded text-gray-800 transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white dark:hover:text-pink-600'
                  aria-label={`Send email to ${personalData.email}`}
                >
                  {personalData.email}
                </a>
              </span>
            </div>

            {/* Address */}
            <div className='flex items-center gap-2 text-sm text-gray-800 dark:text-white md:text-lg'>
              <CiLocationOn
                className='rounded-full bg-gray-300 p-2 text-gray-800 dark:bg-[#1f223c] dark:text-white'
                size={32}
                aria-hidden='true'
              />
              <span>
                <span className='sr-only'>Location: </span>
                {personalData.address}
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <nav aria-label='Social media profiles'>
            <ul className='flex items-center gap-6' role='list'>
              <li>
                <Link
                  target='_blank'
                  href={personalData.github}
                  rel='noopener noreferrer'
                  className='rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  aria-label='Visit my GitHub profile (opens in new tab)'
                >
                  <IoLogoGithub
                    className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                    size={40}
                    aria-hidden='true'
                  />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  href={personalData.googleScholar}
                  rel='noopener noreferrer'
                  className='rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  aria-label='Visit my Google Scholar profile (opens in new tab)'
                >
                  <SiGooglescholar
                    className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                    size={40}
                    aria-hidden='true'
                  />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  href={personalData.linkedIn}
                  rel='noopener noreferrer'
                  className='rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  aria-label='Visit my LinkedIn profile (opens in new tab)'
                >
                  <BiLogoLinkedin
                    className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                    size={40}
                    aria-hidden='true'
                  />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  href={personalData.stackOverflow}
                  rel='noopener noreferrer'
                  className='rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  aria-label='Visit my Stack Overflow profile (opens in new tab)'
                >
                  <FaStackOverflow
                    className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                    size={40}
                    aria-hidden='true'
                  />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  href={personalData.facebook}
                  rel='noopener noreferrer'
                  className='rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  aria-label='Visit my Facebook profile (opens in new tab)'
                >
                  <FaFacebook
                    className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                    size={40}
                    aria-hidden='true'
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right side: CONTACT sidebar */}
        <div className='flex flex-col items-center' aria-hidden='true'>
          <span className='w-fit rotate-90 rounded-md bg-gray-200 p-2 px-5 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            CONTACT
          </span>
          <span className='mt-2 h-32 w-[1px] bg-gray-300 dark:bg-white'></span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
