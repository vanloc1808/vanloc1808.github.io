import { personalData } from '@/utils/data/personal-data';
import { PersonalData, CoderProfile } from '@/app/types/personal';
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
    <section className='relative flex flex-col items-center justify-between py-4 lg:py-12'>
      <Image
        src='/hero.svg'
        alt='Hero'
        width={1572}
        height={795}
        priority
        className='absolute -top-[98px] -z-10'
      />

      <div className='grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12'>
        <div className='order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10'>
          <h1 className='text-3xl font-bold leading-10 text-gray-800 dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]'>
            Hello, <br />
            This is{' '}
            <span className='text-pink-500 dark:text-pink-500'>
              {personalData.name}
            </span>
            {` , I'm an `}
            <span className='text-[#448171] dark:text-[#16f2b3]'>
              {personalData.designation}
            </span>
            .
          </h1>

          <div className='my-12 flex items-center gap-5'>
            <Link
              href={personalData.github}
              target='_blank'
              className='text-pink-500 transition-all duration-300 hover:scale-125 dark:text-pink-500'
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.googleScholar}
              target='_blank'
              className='text-pink-500 transition-all duration-300 hover:scale-125 dark:text-pink-500'
            >
              <SiGooglescholar size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className='text-pink-500 transition-all duration-300 hover:scale-125 dark:text-pink-500'
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className='text-pink-500 transition-all duration-300 hover:scale-125 dark:text-pink-500'
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className='text-pink-500 transition-all duration-300 hover:scale-125 dark:text-pink-500'
            >
              <SiLeetcode size={30} />
            </Link>
          </div>

          <div className='flex items-center gap-3'>
            <Link
              href='#contact'
              className='rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600'
            >
              <button className='flex items-center gap-1 rounded-full border-none bg-white px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-violet-600 no-underline transition-all duration-200 ease-out hover:gap-3 dark:bg-[#0d1224]  dark:text-[#ffff] md:px-8 md:py-4 md:text-sm md:font-semibold'>
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline dark:text-white md:px-8 md:py-4 md:text-sm md:font-semibold'
              role='button'
              target='_blank'
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className='relative order-1 rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 dark:border-[#1b2c68a0] dark:from-[#0d1224] dark:to-[#0a0d37] lg:order-2'>
          <div className='flex flex-row'>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
            <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
          </div>
          <div className='px-4 py-5 lg:px-8'>
            <div className='flex flex-row space-x-2'>
              <div className='h-3 w-3 rounded-full bg-red-400'></div>
              <div className='h-3 w-3 rounded-full bg-orange-400'></div>
              <div className='h-3 w-3 rounded-full bg-green-200'></div>
            </div>
          </div>
          <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 dark:border-indigo-900 lg:px-8 lg:py-8'>
            <code className='font-mono text-xs md:text-sm lg:text-base'>
              <div className='blink'>
                <span className='mr-2 text-pink-600 dark:text-pink-500'>
                  const
                </span>
                <span className='mr-2 text-gray-800 dark:text-white'>
                  coder
                </span>
                <span className='mr-2 text-pink-600 dark:text-pink-500'>=</span>
                <span className='text-gray-500 dark:text-gray-400'>{'{'}</span>
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
                <span className=' text-gray-800 dark:text-white'>skills:</span>
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
                <span className='text-orange-600 dark:text-orange-400'>5</span>
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
    </section>
  );
};

export default HeroSection;
