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
    title: "AI Engineer",
    company: "Autonomous",
    duration: "(Mar 2025 - Present)",
    description: "Be responsible for building fantastic AI agents for real-world needs. Improve existing MCP servers to enhance the user experience. Optimize AI agents to run on a local environment with a small model (for example, 4B models)."
  },
  {
    id: 1,
    title: "Backend Developer (Python + Django)",
    company: "Saritasa - Builders of Better",
    companyLink: "https://www.saritasa.com/",
    duration: "(Jun 2023 - Feb 2025)",
    description: "Back-end development with Django, and mainly with Django REST Framework. Build APIs that meet the specification of OpenAPI, implement unit tests, and write documentation for the APIs. Familiar with Postman and Swagger."
  },
  {
    id: 2,
    title: "Python Developer Intern",
    company: "Saritasa - Builders of Better",
    "companyLink": "https://www.saritasa.com/",
    duration: "(Mar 2023 - May 2023)",
    description: "Be trained with core Python modules and Django development, moreover with GitHub flow, Jira, Postman, and other skills. Build a project with Django and Django REST Framework."
  },
];