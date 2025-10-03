export interface Experience {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number | null; // null means "Present", indicates the current month
  endYear: number | null; // null means "Present", indicates the current year
  company_logo?: string;
  lab_name?: string;
  lab_link?: string;
  supervisor_name?: string;
  supervisor_link?: string;
}

interface MultilingualExperiences {
  en: Experience[];
  vi: Experience[];
}

export const experiences: MultilingualExperiences = {
  en: [
    {
      id: 5,
      title: 'Research Intern',
      company: 'National Institute of Informatics (NII) - 国立情報学研究所',
      startMonth: 10,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      company_logo: '/images/experiences/nii.png',
      description: '',
      lab_name: 'Echizen Laboratory',
      lab_link: 'https://research.nii.ac.jp/~iechizen/official/index-e.html',
      supervisor_name: 'Prof. Isao Echizen',
      supervisor_link:
        'https://research.nii.ac.jp/~iechizen/official/members_echizen-e.html',
    },
    {
      id: 4,
      title: 'Research Assistant',
      company: 'Software Engineering Laboratory, University of Science, VNUHCM',
      startMonth: 1,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      company_logo: '/images/education/hcmus-logo.png',
      description:
        'Research on the multimedia verification, applications of generative models and other deep learning techniques in downstream tasks',
      lab_name: 'Software Engineering Laboratory',
      lab_link: 'https://selab.hcmus.edu.vn/',
      supervisor_name: 'Assoc. Prof. Minh-Triet Tran',
      supervisor_link: 'https://www.fit.hcmus.edu.vn/~tmtriet/',
    },
    {
      id: 3,
      title: 'AI Engineer',
      company: 'Autonomous',
      startMonth: 3,
      startYear: 2025,
      endMonth: 8,
      endYear: 2025,
      company_logo: '/images/experiences/autonomous.png',
      description:
        '🤖 Be responsible for building fantastic AI agents for real-world needs.\n\n🔄 Improve existing MCP servers to enhance the user experience.\n⚡ Optimize AI agents to run on a local environment with a small model (for example, 4B models).',
    },
    {
      id: 2,
      title: 'Backend Engineer (Python + Django)',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 6,
      startYear: 2023,
      endMonth: 2,
      endYear: 2025,
      company_logo: '/images/experiences/saritasa.png',
      description:
        '💻 Back-end development with Django, and mainly with Django REST Framework.\n\n🔌 Build APIs that meet the specification of OpenAPI.\n\n🧪 Implement unit tests, and write documentation for the APIs.\n\n🛠️ Familiar with Postman and Swagger.\n\n🌍 Participated in multiple projects, with US clients, from a variety of industries\n\n For example, [Crossing Guard Shift Management Platform](https://www.saritasa.com/work/crossing-guard-android-app) or [YGM Chambers of Commerce Consulting Co](https://clutch.co/go-to-review/dd2f437c-3587-4d31-bb3f-11cd706512fa/162662)',
    },
    {
      id: 1,
      title: 'Backend Engineer Intern',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 3,
      startYear: 2023,
      endMonth: 5,
      endYear: 2023,
      company_logo: '/images/experiences/saritasa.png',
      description:
        '📚 Be trained with core Python modules and Django development with real-world applications.\n\n🔄 Learn GitHub flow, Jira, Postman, and other skills.\n\n🚀 Build an internship project to indicate the ability to use Django and Django REST Framework.',
    },
  ],
  vi: [
    {
      id: 5,
      title: 'Research Intern',
      company: 'National Institute of Informatics (NII) - 国立情報学研究所',
      startMonth: 10,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      company_logo: '/images/experiences/nii.png',
      description: '',
      lab_name: 'Echizen Laboratory',
      lab_link: 'https://research.nii.ac.jp/~iechizen/official/index-e.html',
      supervisor_name: 'Prof. Isao Echizen',
      supervisor_link:
        'https://research.nii.ac.jp/~iechizen/official/members_echizen-e.html',
    },
    {
      id: 4,
      title: 'Research Assistant',
      company: 'Software Engineering Laboratory, University of Science, VNUHCM',
      startMonth: 1,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      company_logo: '/images/education/hcmus-logo.png',
      description:
        'Nghiên cứu chủ yếu về multimedia verification và ứng dụng của các mô hình tạo sinh vào các downstream tasks',
    },
    {
      id: 3,
      title: 'AI Engineer',
      company: 'Autonomous',
      startMonth: 3,
      startYear: 2025,
      endMonth: 8,
      endYear: 2025,
      company_logo: '/images/experiences/autonomous.png',
      description:
        '🤖 Chịu trách nhiệm xây dựng các AI agent tuyệt vời cho nhu cầu thực tế.\n\n🔄 Cải thiện các MCP server hiện có để nâng cao trải nghiệm người dùng.\n⚡ Tối ưu hóa các AI agent để chạy trên môi trường cục bộ với mô hình nhỏ (ví dụ: mô hình 4B).',
    },
    {
      id: 2,
      title: 'Backend Engineer (Python + Django)',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 6,
      startYear: 2023,
      endMonth: 2,
      endYear: 2025,
      company_logo: '/images/experiences/saritasa.png',
      description:
        '💻 Phát triển back-end với Django, chủ yếu với Django REST Framework.\n\n🔌 Xây dựng API đáp ứng đặc tả của OpenAPI.\n\n🧪 Triển khai unit test và viết tài liệu cho các API.\n\n🛠️ Thành thạo với Postman và Swagger.\n\n🌍 Tham gia vào nhiều dự án, với khách hàng từ Mỹ, từ nhiều ngành nghề khác nhau\n\n Ví dụ, [Crossing Guard Shift Management Platform](https://www.saritasa.com/work/crossing-guard-android-app) hoặc [YGM Chambers of Commerce Consulting Co](https://clutch.co/go-to-review/dd2f437c-3587-4d31-bb3f-11cd706512fa/162662)',
    },
    {
      id: 1,
      title: 'Backend Engineer Intern',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 3,
      startYear: 2023,
      endMonth: 5,
      endYear: 2023,
      company_logo: '/images/experiences/saritasa.png',
      description:
        '📚 Được đào tạo về các module Python cốt lõi và phát triển Django.\n\n🔄 Học GitHub flow, Jira, Postman và các kỹ năng khác.\n\n🚀 Xây dựng dự án với Django và Django REST Framework.',
    },
  ],
};

// Helper function to get experiences based on locale
export const getExperiences = (locale: 'en' | 'vi' = 'en'): Experience[] => {
  const list = experiences[locale];
  return [...list].sort((a, b) => {
    const aCurrent = a.endMonth === null || a.endYear === null;
    const bCurrent = b.endMonth === null || b.endYear === null;

    if (aCurrent !== bCurrent) {
      return aCurrent ? -1 : 1; // current first
    }

    // Later start date first
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    if (a.startMonth !== b.startMonth) {
      return b.startMonth - a.startMonth;
    }

    // Stable fallback: keep original relative order by id descending
    return b.id - a.id;
  });
};
