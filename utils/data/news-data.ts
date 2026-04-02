interface NewsItem {
  date: string;
  title: string;
  certificateLink?: string;
}

interface MultilingualNews {
  en: NewsItem[];
  vi: NewsItem[];
}

export const news: MultilingualNews = {
  en: [
    {
      date: 'April 1, 2026',
      title: '💼 Started the job as a Software Engineer at Eurofins',
    },
    {
      date: 'March 28, 2026',
      title:
        '👋 Left the job as a Research Intern at the National Institute of Informatics (NII), Tokyo, Japan',
    },
    {
      date: 'March 17, 2026',
      title:
        '📄 Our paper PANDORA: Pixel-wise Attention Dissolution and Latent Guidance for Zero-Shot Object Removal has been accepted to the 2026 IEEE International Conference on Multimedia and Expo (ICME) in Bangkok, Thailand',
    },
    {
      date: 'February 21, 2026',
      title:
        '🚀 Participated in the Gemini 3 Hackathon Tokyo (Gemini 3 ハッカソン 東京), hosted by Cerebral Valley and Google DeepMind',
    },
    {
      date: 'November 10, 2025',
      title:
        '📄 Our paper "Visionary: Optimized Temporal Video Retrieval via Large Language Model-Enhanced Query Processing" has been accepted to the 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    },
    {
      date: 'October 24, 2025',
      title:
        '📄 Our paper "EnAug: ENT Endoscopy Images Classification Using Ensemble and Augmentation Methods" has been accepted to the 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    },
    {
      date: 'October 1, 2025',
      title:
        '💼 Started the job as a Research Intern at the National Institute of Informatics (NII), Tokyo, Japan',
    },
    {
      date: 'August 29, 2025',
      title: '🚪 Left the job as AI Engineer at Autonomous',
    },
    {
      date: 'August 16, 2025',
      title:
        '📄 Our paper "SAMURAI: Shape-Aware Multimodal Retrieval for 3D Object Identification" has been published at the 2025 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    },
    {
      date: 'July 14, 2025',
      title:
        '📄 Our paper "EVENT-Retriever: Event-Aware Multimodal Image Retrieval for Realistic Captions" has been accepted to the 33rd ACM International Conference on Multimedia (ACM MM 2025)',
    },
    {
      date: 'July 14, 2025',
      title:
        '🥇 Won top 1 at the ACM Multimedia 2025 Grand Challenge on Event-Enriched Image Analysis',
      certificateLink:
        'https://cdn.nguyenvanloc.com/certificates/2025-ACMMM-EVENTA.pdf',
    },
    {
      date: 'July 12, 2025',
      title:
        '🏅 Won top 1 in Track 1 of the ENTRep Challenge: Advancing Vision-Language AI for ENT Endoscopy Analysis at the ACM Multimedia 2025 Conference',
      certificateLink:
        'https://cdn.nguyenvanloc.com/certificates/2025-ACMMM-ENTRep.pdf',
    },
    {
      date: 'March 3, 2025',
      title: '🎯 Started the job as an AI Engineer at Autonomous',
    },
    {
      date: 'February 21, 2025',
      title: '👋 Left the job as Backend Engineer at Saritasa',
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
        '💼 Start my work at Saritasa Vietnam as a Backend Engineer (Python - Django) after finishing 3 months of internship',
    },
  ],
  vi: [
    {
      date: '1 tháng 4, 2026',
      title: '💼 Bắt đầu công việc làm Software Engineer tại Eurofins',
    },
    {
      date: '28 tháng 3, 2026',
      title:
        '👋 Rời khỏi vị trí Research Intern tại National Institute of Informatics (NII), Tokyo, Nhật Bản',
    },
    {
      date: '17 tháng 3, 2026',
      title:
        '📄 Bài báo PANDORA: Pixel-wise Attention Dissolution and Latent Guidance for Zero-Shot Object Removal đã được chấp nhận tại IEEE International Conference on Multimedia and Expo (ICME) 2026',
    },
    {
      date: '21 tháng 2, 2026',
      title:
        '🚀 Tham gia Gemini 3 Hackathon Tokyo (Gemini 3 ハッカソン 東京, do Cerebral Valley và Google DeepMind tổ chức)',
    },
    {
      date: '10 tháng 11, 2025',
      title:
        '📄 Bài báo "Visionary: Optimized Temporal Video Retrieval via Large Language Model-Enhanced Query Processing" đã được chấp nhận tại The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    },
    {
      date: '24 tháng 10, 2025',
      title:
        '📄 Bài báo "EnAug: ENT Endoscopy Images Classification Using Ensemble and Augmentation Methods" đã được chấp nhận tại The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    },
    {
      date: '1 tháng 10, 2025',
      title:
        '💼 Bắt đầu công việc làm Research Intern tại National Institute of Informatics (NII), Tokyo, Nhật Bản',
    },
    {
      date: '29 tháng 8, 2025',
      title: '🚪 Rời khỏi công việc Kỹ sư AI tại Autonomous',
    },
    {
      date: '16 tháng 8, 2025',
      title:
        '📄 Bài báo "SAMURAI: Shape-Aware Multimodal Retrieval for 3D Object Identification" đã được công bố tại The 2025 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    },
    {
      date: '14 tháng 7, 2025',
      title:
        '📄 Bài báo "EVENT-Retriever: Event-Aware Multimodal Image Retrieval for Realistic Captions" đã được chấp nhận tại The 33rd ACM International Conference on Multimedia (ACM MM 2025)',
    },
    {
      date: '14 tháng 7, 2025',
      title:
        '🥇 Đạt top 1 tại ACM Multimedia 2025 Grand Challenge on Event-Enriched Image Analysis',
      certificateLink:
        'https://cdn.nguyenvanloc.com/certificates/2025-ACMMM-EVENTA.pdf',
    },
    {
      date: '12 tháng 7, 2025',
      title:
        '🏅 Đạt top 1 tại Track 1 của ENTRep Challenge: Advancing Vision-Language AI for ENT Endoscopy Analysis tại ACM Multimedia 2025 Conference',
      certificateLink:
        'https://cdn.nguyenvanloc.com/certificates/2025-ACMMM-ENTRep.pdf',
    },
    {
      date: '3 tháng 3, 2025',
      title: '🎯 Bắt đầu công việc với vai trò Kỹ sư AI tại Autonomous',
    },
    {
      date: '21 tháng 2, 2025',
      title: '👋 Rời khỏi công việc Kỹ sư Backend tại Saritasa',
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
        '💼 Bắt đầu công việc tại Saritasa Vietnam với vai trò Backend Engineer (Python - Django) sau khi hoàn thành 3 tháng thực tập',
    },
  ],
};

// Helper function to get news based on locale
export const getNews = (locale: 'en' | 'vi' = 'en'): NewsItem[] => {
  return news[locale];
};

// For backward compatibility
export const newsData: NewsItem[] = news.en;
