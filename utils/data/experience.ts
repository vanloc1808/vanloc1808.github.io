export interface Experience {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number | null; // null means "Present"
  endYear: number | null; // null means "Present"
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
      id: 3,
      title: 'AI Engineer',
      company: 'Autonomous',
      startMonth: 3,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      description:
        '🤖 Be responsible for building fantastic AI agents for real-world needs.\n\n🔄 Improve existing MCP servers to enhance the user experience.\n⚡ Optimize AI agents to run on a local environment with a small model (for example, 4B models).',
    },
    {
      id: 1,
      title: 'Backend Engineer (Python + Django)',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 6,
      startYear: 2023,
      endMonth: 2,
      endYear: 2025,
      description:
        '💻 Back-end development with Django, and mainly with Django REST Framework.\n\n🔌 Build APIs that meet the specification of OpenAPI.\n\n🧪 Implement unit tests, and write documentation for the APIs.\n\n🛠️ Familiar with Postman and Swagger.',
    },
    {
      id: 2,
      title: 'Backend Engineer Intern',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 3,
      startYear: 2023,
      endMonth: 5,
      endYear: 2023,
      description:
        '📚 Be trained with core Python modules and Django development.\n\n🔄 Learn GitHub flow, Jira, Postman, and other skills.\n\n🚀 Build a project with Django and Django REST Framework.',
    },
  ].sort((a, b) => {
    // Sort by start year/month descending (newest first)
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    return b.startMonth - a.startMonth;
  }),
  vi: [
    {
      id: 3,
      title: 'AI Engineer',
      company: 'Autonomous',
      startMonth: 3,
      startYear: 2025,
      endMonth: null,
      endYear: null,
      description:
        '🤖 Chịu trách nhiệm xây dựng các AI agent tuyệt vời cho nhu cầu thực tế.\n\n🔄 Cải thiện các MCP server hiện có để nâng cao trải nghiệm người dùng.\n⚡ Tối ưu hóa các AI agent để chạy trên môi trường cục bộ với mô hình nhỏ (ví dụ: mô hình 4B).',
    },
    {
      id: 1,
      title: 'Backend Engineer (Python + Django)',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 6,
      startYear: 2023,
      endMonth: 2,
      endYear: 2025,
      description:
        '💻 Phát triển back-end với Django, chủ yếu với Django REST Framework.\n\n🔌 Xây dựng API đáp ứng đặc tả của OpenAPI.\n\n🧪 Triển khai unit test và viết tài liệu cho các API.\n\n🛠️ Thành thạo với Postman và Swagger.',
    },
    {
      id: 2,
      title: 'Backend Engineer Intern',
      company: 'Saritasa - Builders of Better',
      companyLink: 'https://www.saritasa.com/',
      startMonth: 3,
      startYear: 2023,
      endMonth: 5,
      endYear: 2023,
      description:
        '📚 Được đào tạo về các module Python cốt lõi và phát triển Django.\n\n🔄 Học GitHub flow, Jira, Postman và các kỹ năng khác.\n\n🚀 Xây dựng dự án với Django và Django REST Framework.',
    },
  ].sort((a, b) => {
    // Sort by start year/month descending (newest first)
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    return b.startMonth - a.startMonth;
  }),
};

// Helper function to get experiences based on locale
export const getExperiences = (locale: 'en' | 'vi' = 'en'): Experience[] => {
  return experiences[locale];
};
