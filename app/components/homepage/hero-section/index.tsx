import { personalData } from '@/utils/data/personal-data';
import { CoderProfile } from '@/app/types/personal';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { SiLeetcode, SiGooglescholar } from 'react-icons/si';
import { FC } from 'react';

const HeroSection: FC = () => {
  const coderProfile: CoderProfile = {
    name: 'Van-Loc Nguyen',
    skills: ['Python', 'C++', 'PyTorch', 'Jupyter Notebook', 'FastAPI'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function (): boolean {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    },
  };

  return (
    <section
      className='relative flex flex-col items-center justify-between py-4 lg:py-12'
      aria-label='Hero section'
    >
      <Image
        src='/hero.svg'
        alt='Decorative background design'
        width={1572}
        height={795}
        priority
        className='absolute -top-[98px] -z-10'
        role='presentation'
      />

      <div className='grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12'>
        <div className='order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10'>
          <h1 className='text-3xl font-bold leading-10 text-gray-800 dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]'>
            Hello, <br />
            This is{' '}
            <span className='text-pink-500 dark:text-pink-500'>
              {personalData.name}
            </span>
            {` (vanloc1808), I'm an `}
            <span className='text-[#448171] dark:text-[#16f2b3]'>
              {personalData.designation}
            </span>
            .
          </h1>

          <nav aria-label='Social media links' className='my-12'>
            <ul className='flex items-center gap-5' role='list'>
              <li>
                <Link
                  href={personalData.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded text-pink-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-pink-500'
                  aria-label='Visit my GitHub profile (opens in new tab)'
                >
                  <BsGithub size={30} aria-hidden='true' />
                </Link>
              </li>
              <li>
                <Link
                  href={personalData.googleScholar}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded text-pink-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-pink-500'
                  aria-label='Visit my Google Scholar profile (opens in new tab)'
                >
                  <SiGooglescholar size={30} aria-hidden='true' />
                </Link>
              </li>
              <li>
                <Link
                  href={personalData.linkedIn}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded text-pink-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-pink-500'
                  aria-label='Visit my LinkedIn profile (opens in new tab)'
                >
                  <BsLinkedin size={30} aria-hidden='true' />
                </Link>
              </li>
              <li>
                <Link
                  href={personalData.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded text-pink-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-pink-500'
                  aria-label='Visit my Facebook profile (opens in new tab)'
                >
                  <FaFacebook size={30} aria-hidden='true' />
                </Link>
              </li>
              <li>
                <Link
                  href={personalData.leetcode}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded text-pink-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-pink-500'
                  aria-label='Visit my LeetCode profile (opens in new tab)'
                >
                  <SiLeetcode size={30} aria-hidden='true' />
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className='flex items-center gap-3'
            role='group'
            aria-label='Action buttons'
          >
            <Link
              href='#contact'
              className='rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              aria-label='Go to contact section'
            >
              <button
                className='flex items-center gap-1 rounded-full border-none bg-white px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-violet-600 no-underline transition-all duration-200 ease-out hover:gap-3 focus:outline-none dark:bg-[#0d1224] dark:text-[#ffff] md:px-8 md:py-4 md:text-sm md:font-semibold'
                type='button'
              >
                <span>Contact me</span>
                <RiContactsFill size={16} aria-hidden='true' />
              </button>
            </Link>

            <Link
              className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white md:px-8 md:py-4 md:text-sm md:font-semibold'
              role='button'
              target='_blank'
              rel='noopener noreferrer'
              href={personalData.resume}
              aria-label='Download my resume (PDF, opens in new tab)'
            >
              <span>Get Resume</span>
              <MdDownload size={16} aria-hidden='true' />
            </Link>
          </div>
        </div>

        <div className='relative order-1 rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 dark:border-[#1b2c68a0] dark:from-[#0d1224] dark:to-[#0a0d37] lg:order-2'>
          {/* Decorative header */}
          <div className='flex flex-row' aria-hidden='true'>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
            <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
          </div>

          {/* Terminal window header */}
          <div className='px-4 py-5 lg:px-8' aria-hidden='true'>
            <div className='flex flex-row space-x-2'>
              <div className='h-3 w-3 rounded-full bg-red-400'></div>
              <div className='h-3 w-3 rounded-full bg-orange-400'></div>
              <div className='h-3 w-3 rounded-full bg-green-200'></div>
            </div>
          </div>

          {/* Code display */}
          <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 dark:border-indigo-900 lg:px-8 lg:py-8'>
            <div
              role='img'
              aria-label={`Code snippet showing developer profile: ${coderProfile.name}, skills include ${coderProfile.skills.join(', ')}, hard worker: ${coderProfile.hardWorker}, quick learner: ${coderProfile.quickLearner}, problem solver: ${coderProfile.problemSolver}, hireable: true`}
            >
              <code className='font-mono text-xs md:text-sm lg:text-base'>
                <div className='blink'>
                  <span className='mr-2 text-pink-600 dark:text-pink-500'>
                    const
                  </span>
                  <span className='mr-2 text-gray-800 dark:text-white'>
                    coder
                  </span>
                  <span className='mr-2 text-pink-600 dark:text-pink-500'>
                    =
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>
                    {'{'}
                  </span>
                </div>
                <div>
                  <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                    name:
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>{`'`}</span>
                  <span className='text-amber-600 dark:text-amber-300'>
                    {coderProfile.name}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>{`',`}</span>
                </div>
                <div className='ml-4 mr-2 lg:ml-8'>
                  <span className='text-gray-800 dark:text-white'>skills:</span>
                  <span className='text-gray-500 dark:text-gray-400'>{`['`}</span>
                  {coderProfile.skills.map((skill, index) => (
                    <span key={skill}>
                      <span className='text-amber-600 dark:text-amber-300'>
                        {skill}
                      </span>
                      {index < coderProfile.skills.length - 1 && (
                        <span className='text-gray-500 dark:text-gray-400'>
                          {"', '"}
                        </span>
                      )}
                    </span>
                  ))}
                  <span className='text-gray-500 dark:text-gray-400'>
                    {"'],"}
                  </span>
                </div>
                <div>
                  <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                    hardWorker:
                  </span>
                  <span className='text-orange-600 dark:text-orange-400'>
                    {coderProfile.hardWorker.toString()}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>,</span>
                </div>
                <div>
                  <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                    quickLearner:
                  </span>
                  <span className='text-orange-600 dark:text-orange-400'>
                    {coderProfile.quickLearner.toString()}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>,</span>
                </div>
                <div>
                  <span className='ml-4 mr-2 text-gray-800 dark:text-white lg:ml-8'>
                    problemSolver:
                  </span>
                  <span className='text-orange-600 dark:text-orange-400'>
                    {coderProfile.problemSolver.toString()}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>,</span>
                </div>
                <div>
                  <span className='ml-4 mr-2 font-semibold text-green-800 dark:text-green-400 lg:ml-8'>
                    hireable:
                  </span>
                  <span className='text-orange-600 dark:text-orange-400'>
                    function
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>
                    {'() {'}
                  </span>
                </div>
                <div>
                  <span className='ml-8 mr-2 text-orange-600 dark:text-orange-400 lg:ml-16'>
                    return
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>{`(`}</span>
                </div>
                <div>
                  <span className='ml-12 text-cyan-600 dark:text-cyan-400 lg:ml-24'>
                    this.
                  </span>
                  <span className='mr-2 text-gray-800 dark:text-white'>
                    hardWorker
                  </span>
                  <span className='text-amber-600 dark:text-amber-300'>&&</span>
                </div>
                <div>
                  <span className='ml-12 text-cyan-600 dark:text-cyan-400 lg:ml-24'>
                    this.
                  </span>
                  <span className='mr-2 text-gray-800 dark:text-white'>
                    problemSolver
                  </span>
                  <span className='text-amber-600 dark:text-amber-300'>&&</span>
                </div>
                <div>
                  <span className='ml-12 text-cyan-600 dark:text-cyan-400 lg:ml-24'>
                    this.
                  </span>
                  <span className='mr-2 text-gray-800 dark:text-white'>
                    skills.length
                  </span>
                  <span className='mr-2 text-amber-600 dark:text-amber-300'>
                    {'>='}
                  </span>
                  <span className='text-orange-600 dark:text-orange-400'>
                    5
                  </span>
                </div>
                <div>
                  <span className='ml-8 mr-2 text-gray-500 dark:text-gray-400 lg:ml-16'>{`);`}</span>
                </div>
                <div>
                  <span className='ml-4 text-gray-500 dark:text-gray-400 lg:ml-8'>{`};`}</span>
                </div>
                <div>
                  <span className='text-gray-500 dark:text-gray-400'>{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
