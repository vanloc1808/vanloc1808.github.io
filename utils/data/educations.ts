interface Education {
  id: number;
  title: string;
  institution: string;
  startYear: number;
  endYear: number | null; // null means "Present"
  logo: string;
  secondLogo: string | null;
}

interface MultilingualEducations {
  en: Education[];
  vi: Education[];
}

export const educations: MultilingualEducations = {
  en: [
    {
      id: 1,
      title:
        'Master of Science in Computer Science, majoring in Artificial Intelligence',
      startYear: 2024,
      endYear: null, // Present
      institution:
        'University of Science, Vietnam National University Ho Chi Minh City',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
    },
    {
      id: 2,
      title: 'Bachelor of Science in Computer Science, Honors Program',
      startYear: 2020,
      endYear: 2024,
      institution:
        'University of Science, Vietnam National University Ho Chi Minh City',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
    },
    {
      id: 3,
      title: 'Gifted Student on Mathematics',
      startYear: 2017,
      endYear: 2020,
      institution:
        'Le Quy Don High School for Gifted Students, Ba Ria - Vung Tau Province',
      logo: '/images/education/lqd-logo.png',
      secondLogo: null,
    },
  ].sort((a, b) => {
    // Sort by start year descending (newest first)
    return b.startYear - a.startYear;
  }),
  vi: [
    {
      id: 1,
      title: 'Thạc sĩ Khoa học Máy tính, chuyên ngành Trí tuệ Nhân tạo',
      startYear: 2024,
      endYear: null, // Present
      institution:
        'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
    },
    {
      id: 2,
      title: 'Cử nhân Khoa học Máy tính, Chương trình Cử nhân Tài năng',
      startYear: 2020,
      endYear: 2024,
      institution:
        'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
    },
    {
      id: 3,
      title: 'Học sinh Chuyên Toán',
      startYear: 2017,
      endYear: 2020,
      institution: 'Trường THPT Chuyên Lê Quý Đôn, Tỉnh Bà Rịa - Vũng Tàu',
      logo: '/images/education/lqd-logo.png',
      secondLogo: null,
    },
  ].sort((a, b) => {
    // Sort by start year descending (newest first)
    return b.startYear - a.startYear;
  }),
};

// Helper function to get educations based on locale
export const getEducations = (locale: 'en' | 'vi' = 'en'): Education[] => {
  return educations[locale];
};
