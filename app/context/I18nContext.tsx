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
      services: 'SERVICES',
      publications: 'PUBLICATIONS',
      certificates: 'CERTIFICATES & AWARDS',
      activities: 'ACTIVITIES',
      news: 'NEWS',
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
    experience: {
      title: 'EXPERIENCES',
      present: 'Present',
      viewAll: 'View More',
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
    hero: {
      hello: 'Hello,',
      thisIs: 'This is',
      imAn: "I'm an",
      contactMe: 'Contact me',
      getResume: 'Get Resume',
    },
    about: {
      title: 'ABOUT ME',
      whoAmI: 'Who am I?',
    },
    skills: {
      title: 'SKILLS',
      description:
        'I love to learn and explore new technologies and am passionate about problem-solving.',
    },
    projects: {
      title: 'PROJECTS',
      viewAll: 'View All',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      backendCode: 'Backend Code',
      frontendCode: 'Frontend Code',
    },
    services: {
      title: 'SERVICES',
      empty: 'Services coming soon',
    },
    publications: {
      title: 'PUBLICATIONS',
      viewAll: 'View All',
      readPaper: 'Read Paper',
    },
    certificates: {
      title: 'CERTIFICATES & AWARDS',
      viewAll: 'View All',
      award: 'Award',
      certificate: 'Certificate',
    },
    activities: {
      title: 'OTHER ACTIVITIES',
      viewAll: 'View All',
      reviewer: 'Reviewer',
      volunteer: 'Volunteer',
      consultant: 'Consultant',
      member: 'Member',
    },
    contact: {
      title: 'CONTACT WITH ME',
      description:
        'I am always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      messageLabel: 'Your Message',
      sendMessage: 'Send Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      messagePlaceholder: 'Enter your message',
    },
    news: {
      title: 'NEWS',
      readMore: 'Read More',
      viewAll: 'View All',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
      by: 'by',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      all: 'ALL',
    },
  },
  vi: {
    navigation: {
      home: 'Trang chủ',
      about: 'Về tôi',
      experience: 'Kinh nghiệm',
      education: 'Học vấn',
      projects: 'Dự án',
      services: 'DỊCH VỤ',
      publications: 'CÔNG TRÌNH',
      certificates: 'GIẢI THƯỞNG & CHỨNG CHỈ',
      activities: 'HOẠT ĐỘNG KHÁC',
      news: 'TIN TỨC',
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
    experience: {
      title: 'KINH NGHIỆM',
      present: 'Hiện tại',
      viewAll: 'Xem thêm',
      timeline: {
        current: 'Đang làm',
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
    hero: {
      hello: 'Xin chào,',
      thisIs: 'Đây là',
      imAn: 'Tôi là một',
      contactMe: 'Liên hệ với tôi',
      getResume: 'Tải CV',
    },
    about: {
      title: 'VỀ TÔI',
      whoAmI: 'Tôi là ai?',
    },
    skills: {
      title: 'KỸ NĂNG',
      description:
        'Tôi thích học hỏi và khám phá các công nghệ mới, đồng thời đam mê việc giải quyết vấn đề.',
    },
    projects: {
      title: 'DỰ ÁN',
      viewAll: 'Xem tất cả',
      viewDetails: 'Xem chi tiết',
      liveDemo: 'Demo trực tiếp',
      sourceCode: 'Mã nguồn',
      backendCode: 'Mã nguồn Backend',
      frontendCode: 'Mã nguồn Frontend',
    },
    services: {
      title: 'DỊCH VỤ',
      empty: 'Sắp ra mắt',
    },
    publications: {
      title: 'CÔNG TRÌNH',
      viewAll: 'Xem tất cả',
      readPaper: 'Đọc bài báo',
    },
    certificates: {
      title: 'GIẢI THƯỞNG & CHỨNG CHỈ',
      viewAll: 'Xem tất cả',
      award: 'Giải thưởng',
      certificate: 'Chứng chỉ',
    },
    activities: {
      title: 'HOẠT ĐỘNG KHÁC',
      viewAll: 'Xem tất cả',
      reviewer: 'Reviewer',
      volunteer: 'Tình nguyện viên',
      member: 'Thành viên',
      consultant: 'Cố vấn',
    },
    contact: {
      title: 'LIÊN HỆ VỚI TÔI',
      description:
        'Tôi luôn sẵn sàng thảo luận về các cơ hội mới, dự án thú vị, hoặc chỉ đơn giản là trò chuyện về công nghệ và đổi mới.',
      nameLabel: 'Tên của bạn',
      emailLabel: 'Email của bạn',
      messageLabel: 'Tin nhắn của bạn',
      sendMessage: 'Gửi tin nhắn',
      namePlaceholder: 'Nhập tên của bạn',
      emailPlaceholder: 'Nhập email của bạn',
      messagePlaceholder: 'Nhập tin nhắn của bạn',
    },
    news: {
      title: 'TIN TỨC',
      readMore: 'Đọc thêm',
      viewAll: 'Xem tất cả',
    },
    footer: {
      rights: 'Bảo lưu mọi quyền',
      madeWith: 'Được tạo với',
      by: 'bởi',
    },
    common: {
      loading: 'Đang tải...',
      error: 'Đã xảy ra lỗi',
      retry: 'Thử lại',
      close: 'Đóng',
      save: 'Lưu',
      cancel: 'Hủy',
      submit: 'Gửi',
      back: 'Quay lại',
      next: 'Tiếp theo',
      previous: 'Trước đó',
      all: 'TẤT CẢ',
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
