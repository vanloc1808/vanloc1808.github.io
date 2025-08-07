export interface Activity {
  id: number;
  title: string;
  organization?: string;
  role: string;
  date?: string;
  from_year?: number;
  to_year?: number | string;
  description: string;
  type: 'review' | 'volunteer' | 'membership' | 'consultant' | 'other';
}

interface MultilingualActivities {
  en: Activity[];
  vi: Activity[];
}

export const activities: MultilingualActivities = {
  en: [
    {
      id: 1,
      title:
        '1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV)',
      organization: "ACM Multimedia 2025 (ACM MM'25)",
      role: 'Reviewer',
      description:
        "Reviewer of the 1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV) at ACM Multimedia 2025 (ACM MM'25).",
      type: 'review',
    },
    {
      id: 2,
      title: 'Olympia Club',
      organization:
        'Le Quy Don High School for Gifted Students, Ho Chi Minh City',
      role: 'Consultant',
      description:
        'Founding Members & Consultant for Olympia Club, a club of students who are interested in the gameshow "Road to Mount Olympia" or who are interested in knowledge, in general.',
      type: 'consultant',
      from_year: 2021,
      to_year: 'Present',
    },
  ],
  vi: [
    {
      id: 1,
      title:
        '1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV)',
      organization: "ACM Multimedia 2025 (ACM MM'25)",
      role: 'Reviewer',
      description:
        "Reviewer cho The 1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV) tại hội nghị ACM Multimedia 2025 (ACM MM'25).",
      type: 'review',
    },
    {
      id: 2,
      title: 'Câu lạc bộ Olympia',
      organization: 'Trường THPT Chuyên Lê Quý Đôn, TP. Hồ Chí Minh',
      role: 'Cố vấn',
      description:
        'Thành viên sáng lập & Cố vấn cho Câu lạc bộ Olympia, một câu lạc bộ của học sinh có đam mê gameshow "Đường lên đỉnh Olympia" hoặc đam mê kiến thức nói chung.',
      type: 'consultant',
      from_year: 2021,
      to_year: 'Hiện tại',
    },
  ],
};

// Helper function to get activities based on locale
export const getActivities = (locale: 'en' | 'vi' = 'en'): Activity[] => {
  return activities[locale];
};
