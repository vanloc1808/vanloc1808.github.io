/* =========================================================
   WORK EXPERIENCE
   Chronologically descending (current first).
   ========================================================= */

export interface ExperienceEntry {
  period: string;
  institution: string;
  institutionHref?: string;
  location: string;
  /** Role title — plain text portion. */
  role: string;
  /** Italic portion of the role title (e.g. "Echizen Laboratory"). */
  roleEmphasis?: string;
  /** HTML string for the body paragraph — may contain <a> links. Omit for roles with no extra description. */
  descHtml?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    period: 'Apr 2026 — Present',
    institution: 'Eurofins',
    institutionHref: 'https://www.eurofins.com/',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Software Engineer',
    descHtml:
      'IT Application Monitoring and Observability.',
  },
  {
    period: 'Oct 2025 — Mar 2026',
    institution: 'National Institute of Informatics (NII) — 国立情報学研究所',
    institutionHref: 'https://www.nii.ac.jp/',
    location: 'Tokyo, Japan',
    role: 'Student Researcher —',
    roleEmphasis: 'Echizen Laboratory',
    descHtml:
      'Six‑month research residency under <a href="https://research.nii.ac.jp/~iechizen/official/members_echizen-e.html" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Prof. Isao Echizen</a>, mentored by <a href="https://rellm.jp/" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Dr. April Pyone Maung Maung</a> at the <a href="https://research.nii.ac.jp/~iechizen/official/index-e.html" target="_blank" rel="noopener noreferrer" style="color:var(--fg-mute);border-bottom:1px solid var(--rule)">Echizen Laboratory</a>. Worked on media authenticity and digital forensics.',
  },
  {
    period: 'Mar 2025 — Aug 2025',
    institution: 'Autonomous',
    institutionHref: 'https://www.autonomous.ai/',
    location: 'Remote',
    role: 'AI Engineer',
    descHtml:
      'Responsible for building AI agents for real‑world needs. Improved existing MCP servers to enhance user experience. Optimised AI agents to run on local environments with small models (e.g. 4B‑parameter models).',
  },
  {
    period: 'Jan 2025 — Dec 2025',
    institution: 'Software Engineering Laboratory, University of Science, VNUHCM',
    institutionHref: 'https://selab.hcmus.edu.vn/',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Research Assistant',
    descHtml:
      'Research on multimedia verification, applications of generative models, and other deep learning techniques in downstream tasks under <a href="https://www.fit.hcmus.edu.vn/~tmtriet/" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Assoc.&nbsp;Prof. Minh‑Triet Tran</a>.',
  },
  {
    period: 'Jun 2023 — Feb 2025',
    institution: 'Saritasa — Builders of Better',
    institutionHref: 'https://www.saritasa.com/',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Backend Engineer —',
    roleEmphasis: 'Python + Django',
    descHtml:
      'Back‑end development with Django REST Framework; built OpenAPI‑compliant APIs, implemented unit tests, and wrote documentation. Worked across multiple projects with US clients from varied industries including a <a href="https://www.saritasa.com/work/crossing-guard-android-app" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Crossing Guard Shift Management Platform</a> and chambers‑of‑commerce consulting tooling. Proficient in Postman and Swagger.',
  },
  {
    period: 'Mar 2023 — May 2023',
    institution: 'Saritasa — Builders of Better',
    institutionHref: 'https://www.saritasa.com/',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Backend Engineer Intern',
    descHtml:
      'Trained on core Python modules and Django development with real‑world applications. Learned GitHub flow, Jira, and Postman. Built an internship project demonstrating ability in Django and Django REST Framework.',
  },
];
