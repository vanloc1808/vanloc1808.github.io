/* =========================================================
   EDUCATION
   Chronologically descending (current first).
   ========================================================= */

export interface EducationEntry {
  period: string;
  institution: string;
  institutionHref?: string;
  location: string;
  /** Degree title — plain text portion. */
  degree: string;
  /** Italic portion of the degree title (e.g. "majoring in Artificial Intelligence"). */
  degreeEmphasis?: string;
  /** HTML string for the body paragraph — may contain <a> links. */
  descHtml: string;
}

export const educationEntries: EducationEntry[] = [
  {
    period: 'Dec 2024 — Present',
    institution: 'University of Science, Vietnam National University Ho Chi Minh City',
    location: 'Ho Chi Minh City, Vietnam',
    degree: 'Master of Science in Computer Science,',
    degreeEmphasis: 'majoring in Artificial Intelligence',
    descHtml:
      'Pursuing research in computer vision and generative models under <a href="https://www.fit.hcmus.edu.vn/~tmtriet/" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Assoc.&nbsp;Prof. Minh‑Triet Tran</a>. Current thesis focuses on zero‑shot object removal and multi‑object reasoning for video.',
  },
  {
    period: 'Oct 2020 — Oct 2024',
    institution: 'University of Science, Vietnam National University Ho Chi Minh City',
    location: 'Ho Chi Minh City, Vietnam',
    degree: 'Bachelor of Science in Computer Science,',
    degreeEmphasis: 'Honors Program',
    descHtml:
      'Graduated rank 6/59. Supervised by <a href="https://www.fit.hcmus.edu.vn/~tmtriet/" target="_blank" rel="noopener noreferrer" style="color:var(--gold);border-bottom:1px solid var(--gold-dim)">Assoc.&nbsp;Prof. Minh‑Triet Tran</a>. Defended undergraduate thesis with score 10.00; co‑authored multiple papers during final‑year research.',
  },
  {
    period: 'Aug 2017 — Aug 2020',
    institution: 'Lê Quý Đôn High School for Gifted Students, Ho Chi Minh City',
    location: 'Ho Chi Minh City, Vietnam',
    degree: 'Gifted Student —',
    degreeEmphasis: 'Mathematics',
    descHtml:
      'Specialised track in mathematics at one of Ho Chi Minh City\'s leading gifted high schools, building the analytical foundations that carried into computer science research.',
  },
];
