'use client';

import { FC } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from '../context/I18nContext';

const LanguageSwitcher: FC = () => {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div className='group relative'>
      <button className='flex items-center gap-2 px-2 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400'>
        <FaGlobe className='h-3 w-3' />
        <span className='text-xs'>{locale === 'vi' ? 'VI' : 'EN'}</span>
      </button>

      <div className='invisible absolute right-0 top-full z-50 mt-1 w-32 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800'>
        <div className='py-1'>
          <button
            onClick={() => setLocale('en')}
            className={`w-full px-3 py-1.5 text-left text-xs transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              locale === 'en'
                ? 'bg-violet-50 text-violet-500 dark:bg-violet-900/20 dark:text-violet-400'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('vi')}
            className={`w-full px-3 py-1.5 text-left text-xs transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              locale === 'vi'
                ? 'bg-violet-50 text-violet-500 dark:bg-violet-900/20 dark:text-violet-400'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Tiếng Việt
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
