export interface Education {
  id: number;
  title: string;
  institution: string;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null; // null means "Present"
  logo: string;
  secondLogo: string | null;
  supervisor_name?: string;
  supervisor_link?: string;
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
      startMonth: 12, // December
      startYear: 2024,
      endMonth: null,
      endYear: null, // Present
      institution:
        'University of Science, Vietnam National University Ho Chi Minh City',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
      supervisor_name: 'Assoc. Prof. Minh-Triet Tran',
      supervisor_link: 'https://www.fit.hcmus.edu.vn/~tmtriet/',
    },
    {
      id: 2,
      title: 'Bachelor of Science in Computer Science, Honors Program',
      startMonth: 10, // October
      startYear: 2020,
      endMonth: 10, // October
      endYear: 2024,
      institution:
        'University of Science, Vietnam National University Ho Chi Minh City',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
      supervisor_name: 'Assoc. Prof. Minh-Triet Tran',
      supervisor_link: 'https://www.fit.hcmus.edu.vn/~tmtriet/',
    },
    {
      id: 3,
      title: 'Gifted Student on Mathematics',
      startMonth: 8, // August
      startYear: 2017,
      endMonth: 8, // August
      endYear: 2020,
      institution:
        'Le Quy Don High School for Gifted Students, Ho Chi Minh City',
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
      startMonth: 12, // Tháng 12
      startYear: 2024,
      endMonth: null,
      endYear: null, // Present
      institution:
        'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
      supervisor_name: 'PGS.TS. Trần Minh Triết',
      supervisor_link: 'https://www.fit.hcmus.edu.vn/~tmtriet/',
    },
    {
      id: 2,
      title: 'Cử nhân Khoa học Máy tính, Chương trình Cử nhân Tài năng',
      startMonth: 10, // Tháng 10
      startYear: 2020,
      endMonth: 10, // Tháng 10
      endYear: 2024,
      institution:
        'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh',
      logo: '/images/education/vnuhcm-logo.png',
      secondLogo: '/images/education/hcmus-logo.png',
      supervisor_name: 'PGS.TS. Trần Minh Triết',
      supervisor_link: 'https://www.fit.hcmus.edu.vn/~tmtriet/',
    },
    {
      id: 3,
      title: 'Học sinh Chuyên Toán',
      startMonth: 8, // Tháng 8
      startYear: 2017,
      endMonth: 8, // Tháng 8
      endYear: 2020,
      institution: 'Trường THPT Chuyên Lê Quý Đôn, Thành phố Hồ Chí Minh',
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
