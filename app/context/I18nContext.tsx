'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Locale = 'en' | 'vi';

interface Translation {
  [key: string]: string | Translation;
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Locale, Translation> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      publications: 'Publications',
      news: 'News',
      contact: 'Contact',
    },
    education: {
      title: 'EDUCATIONS',
      present: 'Present',
      timeline: {
        current: 'Current',
        completed: 'Completed',
      },
    },
    language: {
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
    timeline: {
      present: 'Present',
      to: 'to',
    },
  },
  vi: {
    navigation: {
      home: 'Trang chủ',
      about: 'Về tôi',
      experience: 'Kinh nghiệm',
      education: 'Học vấn',
      projects: 'Dự án',
      publications: 'Công trình',
      news: 'Tin tức',
      contact: 'Liên hệ',
    },
    education: {
      title: 'HỌC VẤN',
      present: 'Hiện tại',
      timeline: {
        current: 'Đang học',
        completed: 'Hoàn thành',
      },
    },
    language: {
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
    timeline: {
      present: 'Hiện tại',
      to: 'đến',
    },
  },
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en'); // Default to English

  useEffect(() => {
    // Load locale from localStorage, but default to English
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'vi')) {
      setLocale(savedLocale);
    }
    // Remove automatic browser language detection - always default to English
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
