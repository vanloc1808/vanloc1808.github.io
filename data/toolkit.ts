/* =========================================================
   TOOLKIT — skills, languages, tools
   ========================================================= */

export interface ToolCategory {
  label: string;
  items: string;
  desc: string;
  meta: string;
}

export const toolCategories: ToolCategory[] = [
  {
    label: 'Languages',
    items: 'Python, TypeScript, C++, SQL',
    desc: 'Python is the core; everything orbits it. TypeScript for frontend and tooling. C++ for algorithm work. SQL wherever data lives.',
    meta: 'Primary stack',
  },
  {
    label: 'ML / CV',
    items: 'PyTorch, Diffusers, OpenCV, HuggingFace, LangChain',
    desc: 'From training loops to inference optimisation. Comfortable with diffusion models, RAG pipelines, and multimodal retrieval.',
    meta: 'Research & production',
  },
  {
    label: 'Web & Infra',
    items: 'Next.js, Django REST, FastAPI, Docker, PostgreSQL, Redis',
    desc: 'Full‑stack when required. Comfortable with containerisation, background workers, CI/CD, and shipping things that stay up.',
    meta: 'Engineering backbone',
  },
];

export const additionalSkills = {
  /** Plain text — rendered as-is with muted spans for proficiency labels. */
  humanLanguages: 'Vietnamese <muted>native ·</muted> English <muted>fluent ·</muted> 日本語 <muted>basic ·</muted> 中文 <muted>basic</muted>',
  alsoUses: 'Git, GitHub Actions, Jira, Linux, Jupyter, LaTeX, Postman, Swagger',
  interests: 'Diffusion world models · Vision‑language evaluation · Agents that don’t hallucinate · Multimedia verification',
} as const;
