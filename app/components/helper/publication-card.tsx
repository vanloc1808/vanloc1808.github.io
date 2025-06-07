import Image from 'next/image';
import { BsPersonWorkspace } from 'react-icons/bs';
import GlowCard from './glow-card';
import { FC } from 'react';

interface Publication {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
  identifier: string;
}

const PublicationCard: FC<PublicationCardProps> = ({
  publication,
  identifier,
}) => {
  return (
    <a
      href={publication.url}
      target='_blank'
      rel='noopener noreferrer'
      className='block transition-transform duration-300 hover:scale-[1.02]'
    >
      <GlowCard identifier={identifier}>
        <div className='relative p-3'>
          <Image
            src='/blur-23.svg'
            alt='Hero'
            width={1080}
            height={200}
            className='absolute bottom-0 opacity-80'
          />
          <div className='flex items-start gap-x-4 px-3 py-4'>
            <div className='mt-1 text-violet-500 transition-all duration-300 hover:scale-125'>
              <BsPersonWorkspace size={32} />
            </div>
            <div className='flex-1 overflow-hidden'>
              <p className='mb-2 break-words text-base font-medium uppercase sm:text-lg'>
                {publication.title}
              </p>
              <p className='mb-1 text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                Published at {publication.conference}
              </p>
              <p className='mb-2 text-xs text-[#df7518] sm:text-sm'>
                {publication.date}
              </p>
              <p className='mb-2 break-words text-sm sm:text-base'>
                {publication.description}
              </p>
              <p className='break-all text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                <span className='text-[#448171] hover:text-[#df7518] dark:text-[#16f2b3]'>
                  {publication.url}
                </span>
              </p>
            </div>
          </div>
        </div>
      </GlowCard>
    </a>
  );
};

export default PublicationCard;
