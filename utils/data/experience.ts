interface Experience {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 3,
    title: 'AI Engineer',
    company: 'Autonomous',
    duration: '(Mar 2025 - Present)',
    description:
      '🤖 Be responsible for building fantastic AI agents for real-world needs.\n\n🔄 Improve existing MCP servers to enhance the user experience.\n\n⚡ Optimize AI agents to run on a local environment with a small model (for example, 4B models).',
  },
  {
    id: 1,
    title: 'Backend Developer (Python + Django)',
    company: 'Saritasa - Builders of Better',
    companyLink: 'https://www.saritasa.com/',
    duration: '(Jun 2023 - Feb 2025)',
    description:
      '💻 Back-end development with Django, and mainly with Django REST Framework.\n\n🔌 Build APIs that meet the specification of OpenAPI.\n\n🧪 Implement unit tests, and write documentation for the APIs.\n\n🛠️ Familiar with Postman and Swagger.',
  },
  {
    id: 2,
    title: 'Python Developer Intern',
    company: 'Saritasa - Builders of Better',
    companyLink: 'https://www.saritasa.com/',
    duration: '(Mar 2023 - May 2023)',
    description:
      '📚 Be trained with core Python modules and Django development.\n\n🔄 Learn GitHub flow, Jira, Postman, and other skills.\n\n🚀 Build a project with Django and Django REST Framework.',
  },
];
