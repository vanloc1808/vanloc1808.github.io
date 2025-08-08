'use client';

import React, { FC, Suspense } from 'react';
import { useTranslation } from '../context/I18nContext';
import Skeleton from '../components/Skeleton';
import { getServicesData } from '@/utils/data/services-data';
import ServiceCard from '../components/homepage/services/ServiceCard';

const Services: FC = () => {
  const { t, locale } = useTranslation();

  // Get services by locale and order them so active services come first
  const allServices = getServicesData(locale);
  const activeServices = allServices.filter(s => !s.discontinued);
  const discontinuedServices = allServices.filter(s => !!s.discontinued);
  const services = [...activeServices, ...discontinuedServices];

  return (
    <div id='services' className='relative z-50 my-12 lg:my-24'>
      <div className='sticky top-10'>
        <div className='absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter'></div>
        <div className='relative flex items-center justify-start'>
          <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
            {t('common.all')} {t('services.title')}
          </span>
          <span className='h-[2px] w-full bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='pt-24'>
        <Suspense fallback={<Skeleton />}>
          {services.length === 0 ? (
            <div className='flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700'>
              <p className='text-gray-700 dark:text-gray-300'>
                {t('services.empty')}
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
              {services.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  identifier={`service-${idx}`}
                />
              ))}
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Services;
