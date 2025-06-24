interface NewsItem {
  date: string;
  title: string;
}

interface MultilingualNews {
  en: NewsItem[];
  vi: NewsItem[];
}

export const news: MultilingualNews = {
  en: [
    {
      date: 'March 3, 2025',
      title: '🎯 Started the job as an AI Engineer at Autonomous',
    },
    {
      date: 'February 21, 2025',
      title: '👋 Left the job as Python Developer at Saritasa',
    },
    {
      date: 'December 14, 2024',
      title:
        '📄 Our paper "NewsInsight2.0: An Enhanced Version Integrating Large Language Model-Based Query Optimization with Advanced Temporal Mechanisms" has been published at The 13th International Symposium on Information and Communication Technology (SOICT), 2024',
    },
    {
      date: 'December 9, 2024',
      title:
        '📄 Our paper "An Approach to Complex Visual Data Interpretation with Vision-Language Models" has been published at The 1st Large Vision - Language Model Learning and Applications Workshop, ACCV 2024',
    },
    {
      date: 'December 8, 2024',
      title:
        '🏆 Won third prize at the 26th Student Scientific Research Award - Euréka, 2024',
    },
    {
      date: 'December 5, 2024',
      title: '🏆 Won third prize at the AI Challenge, Ho Chi Minh City 2024',
    },
    {
      date: 'December 1, 2024',
      title:
        '🎓 Graduated at rank 6/59 of the Bachelor of Science - Honors Program in Information Technology at the University of Science, VNUHCM.',
    },
    {
      date: 'October 7, 2024',
      title: '🏆 Won first prize at the LAVA Workshop Challenge, ACCV 2024',
    },
    {
      date: 'August 25, 2024',
      title: '📚 Successfully defend our undergraduate thesis with score 10.00',
    },
    {
      date: 'August 16, 2024',
      title:
        '📄 Our paper "AI-Enhanced Photo Authenticity: A User-Focused Approach to Detecting and Analyzing Manipulated Images" has been published at The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    },
    {
      date: 'July 2, 2024',
      title:
        '📄 Our paper "A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End-To-End Network" has been published at The 1st Workshop on Security-Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
    },
    {
      date: 'June 11, 2024',
      title:
        '📄 Our paper "A Unified Network for Detecting Out-Of-Context Information Using Generative Synthetic Data" has been published at The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
    },
    {
      date: 'June 1, 2023',
      title:
        '💼 Start my work at Saritasa Vietnam as a Backend Developer (Python - Django) after finishing 3 months of internship',
    },
  ],
  vi: [
    {
      date: '3 tháng 3, 2025',
      title: '🎯 Bắt đầu công việc với vai trò Kỹ sư AI tại Autonomous',
    },
    {
      date: '21 tháng 2, 2025',
      title: '👋 Rời khỏi công việc Lập trình viên Python tại Saritasa',
    },
    {
      date: '14 tháng 12, 2024',
      title:
        '📄 Bài báo "NewsInsight2.0: An Enhanced Version Integrating Large Language Model-Based Query Optimization with Advanced Temporal Mechanisms" đã được công bố tại The 13th International Symposium on Information and Communication Technology (SOICT), 2024',
    },
    {
      date: '9 tháng 12, 2024',
      title:
        '📄 Bài báo "An Approach to Complex Visual Data Interpretation with Vision-Language Models" đã được công bố tại The 1st Large Vision - Language Model Learning and Applications Workshop, ACCV 2024',
    },
    {
      date: '8 tháng 12, 2024',
      title:
        '🏆 Đạt giải ba tại Giải thưởng Sinh viên Nghiên cứu Khoa học Euréka lần thứ 26, 2024',
    },
    {
      date: '5 tháng 12, 2024',
      title:
        '🏆 Đạt giải ba tại Hội thi thử thách Trí tuệ nhân tạo (AI Challenge), Thành phố Hồ Chí Minh 2024',
    },
    {
      date: '1 tháng 12, 2024',
      title:
        '🎓 Tốt nghiệp với thứ hạng 6/59 của Chương trình Cử nhân Tài năng Công nghệ Thông tin tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM.',
    },
    {
      date: '7 tháng 10, 2024',
      title: '🏆 Đạt giải nhất tại LAVA Workshop Challenge, ACCV 2024',
    },
    {
      date: '25 tháng 8, 2024',
      title: '📚 Bảo vệ thành công khóa luận tốt nghiệp với điểm 10.00',
    },
    {
      date: '16 tháng 8, 2024',
      title:
        '📄 Bài báo "AI-Enhanced Photo Authenticity: A User-Focused Approach to Detecting and Analyzing Manipulated Images" đã được công bố tại The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    },
    {
      date: '2 tháng 7, 2024',
      title:
        '📄 Bài báo "A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End-To-End Network" đã được công bố tại The 1st Workshop on Security-Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
    },
    {
      date: '11 tháng 6, 2024',
      title:
        '📄 Bài báo "A Unified Network for Detecting Out-Of-Context Information Using Generative Synthetic Data" đã được công bố tại The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
    },
    {
      date: '1 tháng 6, 2023',
      title:
        '💼 Bắt đầu công việc tại Saritasa Vietnam với vai trò Backend Developer (Python - Django) sau khi hoàn thành 3 tháng thực tập',
    },
  ],
};

// Helper function to get news based on locale
export const getNews = (locale: 'en' | 'vi' = 'en'): NewsItem[] => {
  return news[locale];
};

// For backward compatibility
export const newsData: NewsItem[] = news.en;
