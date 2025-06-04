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
    <div id='contact' className='relative my-24 text-white'>
      {/* Whole Grid Layout */}
      <div className='grid grid-cols-[auto_80px] items-center gap-x-16'>
        {/* Left side: Email, Address, Icons */}
        <div className='flex flex-col items-end gap-6'>
          {/* Email and Address */}
          <div className='flex flex-col gap-4'>
            {/* Email */}
            <p className='flex items-center gap-2 text-sm text-gray-800 dark:text-white md:text-lg'>
              <MdAlternateEmail
                className='rounded-full bg-gray-300 p-2 text-gray-800 dark:bg-[#1f223c] dark:text-white'
                size={32}
              />
              <span>{personalData.email}</span>
            </p>

            {/* Address */}
            <p className='flex items-center gap-2 text-sm text-gray-800 dark:text-white md:text-lg'>
              <CiLocationOn
                className='rounded-full bg-gray-300 p-2 text-gray-800 dark:bg-[#1f223c] dark:text-white'
                size={32}
              />
              <span>{personalData.address}</span>
            </p>
          </div>

          {/* Social icons */}
          <div className='flex items-center gap-6'>
            <Link target='_blank' href={personalData.github}>
              <IoLogoGithub
                className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                size={40}
              />
            </Link>
            <Link target='_blank' href={personalData.googleScholar}>
              <SiGooglescholar
                className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                size={40}
              />
            </Link>
            <Link target='_blank' href={personalData.linkedIn}>
              <BiLogoLinkedin
                className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                size={40}
              />
            </Link>
            <Link target='_blank' href={personalData.stackOverflow}>
              <FaStackOverflow
                className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                size={40}
              />
            </Link>
            <Link target='_blank' href={personalData.facebook}>
              <FaFacebook
                className='cursor-pointer rounded-full bg-[#8b98a5] p-2 text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-[#16f2b3]'
                size={40}
              />
            </Link>
          </div>
        </div>

        {/* Right side: CONTACT sidebar */}
        <div className='flex flex-col items-center'>
          <span className='w-fit rotate-90 rounded-md bg-gray-200 p-2 px-5 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            CONTACT
          </span>
          <span className='mt-2 h-32 w-[1px] bg-gray-300 dark:bg-white'></span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
