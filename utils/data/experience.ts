interface Experience {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number | null; // null means "Present"
  endYear: number | null; // null means "Present"
}

export const experiences: Experience[] = [
  {
    id: 3,
    title: 'AI Engineer',
    company: 'Autonomous',
    startMonth: 3,
    startYear: 2025,
    endMonth: null,
    endYear: null,
    description:
      '🤖 Be responsible for building fantastic AI agents for real-world needs.\n\n🔄 Improve existing MCP servers to enhance the user experience.\n\n⚡ Optimize AI agents to run on a local environment with a small model (for example, 4B models).',
  },
  {
    id: 1,
    title: 'Backend Developer (Python + Django)',
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
    title: 'Python Developer Intern',
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
});
