'use client';

import { FC, Suspense } from 'react';
import { getCertificates } from '@/utils/data/certificates-data';
import certificateLottie from '@/public/lottie/trophy.json';
import dynamic from 'next/dynamic';
import { useTranslation } from '../context/I18nContext';
import { FaTrophy, FaCertificate } from 'react-icons/fa';
import GlowCard from '../components/helper/glow-card';
import CertificatesSkeleton from '../components/CertificatesSkeleton';

const AnimationLottie = dynamic(
  () => import('../components/helper/animation-lottie'),
  {
    ssr: false,
  }
);

const CertificatesAndAwards: FC = () => {
  const { t, locale } = useTranslation();
  const certificatesData = getCertificates(locale);

  return (
    <div id='certificates' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('common.all')} {t('certificates.title')}
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <Suspense fallback={<CertificatesSkeleton />}>
        <div className='py-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
            <div className='flex items-start justify-center lg:pr-4'>
              <div className='h-full w-full max-w-md'>
                <AnimationLottie animationData={certificateLottie} />
              </div>
            </div>

            <div className='lg:col-span-2'>
              <div className='flex flex-col gap-6'>
                {certificatesData.map(certificate => (
                  <GlowCard
                    key={certificate.id}
                    identifier={`certificate-${certificate.id}`}
                  >
                    <div className='relative p-6 text-gray-800 dark:text-white'>
                      {/* Type badge */}
                      <div className='mb-4 flex items-start justify-between'>
                        <div
                          className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                            certificate.type === 'award'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}
                        >
                          {certificate.type === 'award' ? (
                            <FaTrophy className='h-4 w-4' />
                          ) : (
                            <FaCertificate className='h-4 w-4' />
                          )}
                          <span>
                            {certificate.type === 'award'
                              ? t('certificates.award')
                              : t('certificates.certificate')}
                          </span>
                        </div>
                        <div className='text-sm text-gray-500 dark:text-gray-400'>
                          {certificate.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className='mb-3 text-lg font-bold leading-tight'>
                        {certificate.title}
                      </h3>

                      {/* Organization and location */}
                      <div className='mb-3 space-y-1'>
                        <p className='text-sm font-medium text-violet-600 dark:text-violet-400'>
                          {certificate.organization}
                        </p>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>
                          {certificate.location}
                        </p>
                      </div>

                      {/* Description */}
                      <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                        {certificate.description}
                      </p>

                      {/* Bottom accent */}
                      <div className='mt-4 h-1 w-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-30'></div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default CertificatesAndAwards;
