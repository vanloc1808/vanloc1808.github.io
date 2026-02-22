export interface Activity {
  id: number;
  title: string;
  organization?: string;
  role: string;
  date?: string;
  from_year?: number;
  to_year?: number | string;
  description: string;
  type:
    | 'review'
    | 'volunteer'
    | 'membership'
    | 'consultant'
    | 'participant'
    | 'other';
}

interface MultilingualActivities {
  en: Activity[];
  vi: Activity[];
}

export const activities: MultilingualActivities = {
  en: [
    {
      id: 3,
      title: 'Gemini 3 Hackathon Tokyo (Gemini 3 ハッカソン 東京)',
      organization: 'Cerebral Valley and Google DeepMind',
      role: 'Participant',
      date: 'February 21, 2026',
      description:
        'Participated in the Gemini 3 Hackathon Tokyo, a hackathon event focused on building innovative applications using Google\'s Gemini API. Developed "Doodle Duel (Jankenpon)", a real-time competitive web party game that reinvents rock-paper-scissors with AI-powered drawing classification and creative gameplay. Event details: https://cerebralvalley.ai/e/gemini-3-tokyo-hackathon/details',
      type: 'participant',
    },
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
      id: 3,
      title: 'Gemini 3 Hackathon Tokyo (Gemini 3 ハッカソン 東京)',
      organization: 'Cerebral Valley và Google DeepMind',
      role: 'Người tham gia',
      date: '21 tháng 2, 2026',
      description:
        'Tham gia Gemini 3 Hackathon Tokyo, một sự kiện hackathon tập trung vào xây dựng các ứng dụng sáng tạo sử dụng Gemini API của Google. Phát triển "Doodle Duel (Jankenpon)", một trò chơi tiệc web cạnh tranh thời gian thực tái tạo lại trò oẳn tù tì với phân loại bản vẽ bằng AI và lối chơi sáng tạo. Chi tiết sự kiện: https://cerebralvalley.ai/e/gemini-3-tokyo-hackathon/details',
      type: 'participant',
    },
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
