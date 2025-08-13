'use client';

import { FC } from 'react';
import Image from 'next/image';
import GlowCard from '../../helper/glow-card';
import {
  BsGlobe2,
  BsServer,
  BsCpu,
  BsCloud,
  BsDatabase,
  BsRocket,
  BsPlug,
} from 'react-icons/bs';
import type { Service } from '@/utils/data/services-data';

interface ServiceCardProps {
  service: Service;
  identifier: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, identifier }) => {
  const iconMap = {
    globe: BsGlobe2,
    server: BsServer,
    cpu: BsCpu,
    cloud: BsCloud,
    database: BsDatabase,
    rocket: BsRocket,
    plug: BsPlug,
  } as const;

  const Icon = iconMap[service.icon ?? 'globe'];

  return (
    <a
      href={service.url}
      target='_blank'
      rel='noopener noreferrer'
      className='block transition-transform duration-300 hover:scale-[1.02]'
    >
      <GlowCard identifier={identifier}>
        <div
          className={
            'relative ' +
            (service.discontinued
              ? 'rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-4 dark:from-[#0d1224] dark:to-[#0a0d37]'
              : 'p-3')
          }
        >
          <div className='flex items-start gap-x-4 px-3 py-4'>
            <div className='mt-1 transition-all duration-300 hover:scale-125'>
              {service.iconSvg ? (
                <div className='relative h-8 w-8'>
                  <Image
                    src={service.iconSvg}
                    alt={`${service.name} icon`}
                    fill
                    sizes='32px'
                    className='object-contain'
                    priority={false}
                  />
                </div>
              ) : (
                <div
                  className={
                    service.discontinued
                      ? 'text-gray-400 dark:text-gray-400'
                      : 'text-violet-500'
                  }
                >
                  <Icon size={32} />
                </div>
              )}
            </div>
            <div className='flex-1 overflow-hidden'>
              <div className='mb-2 flex items-center gap-2'>
                <p className='break-words text-base font-medium uppercase sm:text-lg'>
                  {service.name}
                </p>
                {service.discontinued && (
                  <span className='rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-rose-700 dark:bg-rose-200/20 dark:text-rose-300'>
                    Discontinued
                  </span>
                )}
              </div>
              {service.tools?.length > 0 && (
                <p className='mb-1 text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                  Tech: {service.tools.join(', ')}
                </p>
              )}
              <p className='mb-2 break-words text-sm sm:text-base'>
                {service.description}
              </p>
              <p className='mt-1 break-all text-xs text-[#448171] dark:text-[#16f2b3] sm:text-sm'>
                <span className='text-[#448171] hover:text-[#6B5441] dark:text-[#16f2b3]'>
                  {service.url}
                </span>
              </p>
            </div>
          </div>
        </div>
      </GlowCard>
    </a>
  );
};

export default ServiceCard;
