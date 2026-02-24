'use client';

import { FC, Suspense } from 'react';
import { getActivities } from '@/utils/data/activities-data';
import activitiesLottie from '/public/lottie/activities.json';
import dynamic from 'next/dynamic';
import { useTranslation } from '../context/I18nContext';
import {
  FaHandPaper,
  FaUserCheck,
  FaHeart,
  FaUsers,
  FaRegStar,
  FaUserTie,
} from 'react-icons/fa';
import GlowCard from '../components/helper/glow-card';
import ActivitiesSkeleton from '../components/ActivitiesSkeleton';

const AnimationLottie = dynamic(
  () => import('../components/helper/animation-lottie'),
  {
    ssr: false,
  }
);

const Activities: FC = () => {
  const { t, locale } = useTranslation();
  const activitiesData = getActivities(locale);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'review':
        return <FaUserCheck className='h-4 w-4' />;
      case 'participant':
        return <FaHandPaper className='h-4 w-4' />;
      case 'volunteer':
        return <FaHeart className='h-4 w-4' />;
      case 'membership':
        return <FaUsers className='h-4 w-4' />;
      case 'consultant':
        return <FaUserTie className='h-4 w-4' />;
      default:
        return <FaRegStar className='h-4 w-4' />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'review':
        return t('activities.reviewer');
      case 'participant':
        return t('activities.participant');
      case 'volunteer':
        return t('activities.volunteer');
      case 'membership':
        return t('activities.member');
      case 'consultant':
        return t('activities.consultant');
      default:
        return 'Other';
    }
  };

  return (
    <div id='activities' className='relative z-50 my-12 border-t lg:my-24'>
      <div className='relative my-5 flex items-center justify-start lg:py-8'>
        <span className='absolute left-0 w-fit rounded-md bg-gray-200 px-5 py-3 text-xl text-gray-800 dark:bg-[#1a1443] dark:text-white'>
          {t('common.all')} {t('activities.title')}
        </span>
        <span className='h-[2px] w-full bg-[#1a1443] dark:bg-white'></span>
      </div>

      <Suspense fallback={<ActivitiesSkeleton />}>
        <div className='py-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
            <div className='flex items-start justify-center lg:pr-4'>
              <div className='h-full w-full max-w-md'>
                <AnimationLottie animationData={activitiesLottie} />
              </div>
            </div>

            <div className='lg:col-span-2'>
              <div className='flex flex-col gap-6'>
                {activitiesData.map(activity => (
                  <GlowCard
                    key={activity.id}
                    identifier={`activity-${activity.id}`}
                  >
                    <div className='relative p-6 text-gray-800 dark:text-white'>
                      {/* Type badge and date */}
                      <div className='mb-4 flex items-start justify-between'>
                        <div className='flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200'>
                          {getTypeIcon(activity.type)}
                          <span>{getTypeLabel(activity.type)}</span>
                        </div>
                        {activity.date && (
                          <div className='text-sm text-gray-500 dark:text-gray-400'>
                            {activity.date}
                          </div>
                        )}
                      </div>

                      {/* Role */}
                      {activity.role && (
                        <div className='mb-3 flex items-baseline gap-2'>
                          <span className='text-sm font-semibold text-gray-600 dark:text-gray-400'>
                            {t('activities.roleLabel')}:
                          </span>
                          <span className='text-base font-semibold text-gray-800 dark:text-white'>
                            {activity.role}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className='mb-3 text-lg font-bold leading-tight'>
                        {activity.title}
                      </h3>

                      {/* Organization */}
                      {activity.organization && (
                        <p className='mb-3 text-sm font-medium text-gray-600 dark:text-gray-300'>
                          {activity.organization}
                        </p>
                      )}

                      {/* Description */}
                      <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                        {activity.description}
                      </p>

                      {/* Date */}
                      {activity.from_year && activity.to_year && (
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                          {activity.from_year} - {activity.to_year}
                        </p>
                      )}

                      {/* Bottom accent */}
                      <div className='mt-4 h-1 w-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-30'></div>
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

export default Activities;
