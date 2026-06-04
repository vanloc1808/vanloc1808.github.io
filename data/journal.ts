/* =========================================================
   JOURNAL / DISPATCHES
   Add new entries at the top (chronologically descending).
   ========================================================= */

/**
 * CSS modifier appended to the "kind" badge.
 * "paper" | "role" | "award" get a coloured pill;
 * others ("Move" | "Milestone" | "Event") render plain.
 */
export type JournalKind = 'Paper' | 'Role' | 'Move' | 'Award' | 'Milestone' | 'Event';

export interface JournalEntry {
  date: string;
  kind: JournalKind;
  /** HTML string — may contain <em> tags. */
  headHtml: string;
  where: string;
}

export const journalEntries: JournalEntry[] = [
  {
    date: 'May 2, 2026',
    kind: 'Paper',
    headHtml: 'Demo paper <em>Cluster Erase: Zero‑Shot Mass‑Similar and Multi‑Object Removal in Single Pass</em> accepted to the IEEE ICME 2026 Workshop in Bangkok, Thailand.',
    where: 'ICMEW · TH',
  },
  {
    date: 'Apr 1, 2026',
    kind: 'Role',
    headHtml: 'Started as <em>Software Engineer</em> at Eurofins.',
    where: 'Eurofins · VN',
  },
  {
    date: 'Mar 28, 2026',
    kind: 'Move',
    headHtml: 'Left the role of <em>Student Researcher</em> at the National Institute of Informatics (NII), Tokyo, Japan.',
    where: 'NII · JP',
  },
  {
    date: 'Mar 17, 2026',
    kind: 'Paper',
    headHtml: 'Paper <em>PANDORA: Pixel‑wise Attention Dissolution and Latent Guidance for Zero‑Shot Object Removal</em> accepted to the 2026 IEEE International Conference on Multimedia and Expo (ICME) in Bangkok, Thailand.',
    where: 'ICME · TH',
  },
  {
    date: 'Feb 21, 2026',
    kind: 'Event',
    headHtml: 'Participated in the <em>Gemini 3 Hackathon Tokyo</em> (Gemini 3 ハッカソン 東京), hosted by Cerebral Valley and Google DeepMind.',
    where: 'Tokyo · JP',
  },
  {
    date: 'Nov 10, 2025',
    kind: 'Paper',
    headHtml: 'Paper <em>Visionary: Optimized Temporal Video Retrieval via Large Language Model‑Enhanced Query Processing</em> accepted to SOICT 2025.',
    where: 'SOICT · VN',
  },
  {
    date: 'Oct 24, 2025',
    kind: 'Paper',
    headHtml: 'Paper <em>EnAug: ENT Endoscopy Images Classification Using Ensemble and Augmentation Methods</em> accepted to SOICT 2025.',
    where: 'SOICT · VN',
  },
  {
    date: 'Oct 1, 2025',
    kind: 'Role',
    headHtml: 'Started as <em>Student Researcher</em> at the National Institute of Informatics (NII), Tokyo, Japan.',
    where: 'NII · JP',
  },
  {
    date: 'Aug 29, 2025',
    kind: 'Move',
    headHtml: 'Left the role of <em>AI Engineer</em> at Autonomous.',
    where: 'Autonomous',
  },
  {
    date: 'Aug 16, 2025',
    kind: 'Paper',
    headHtml: 'Paper <em>SAMURAI: Shape‑Aware Multimodal Retrieval for 3D Object Identification</em> published at MAPR 2025.',
    where: 'MAPR 2025',
  },
  {
    date: 'Jul 14, 2025',
    kind: 'Paper',
    headHtml: 'Paper <em>EVENT‑Retriever: Event‑Aware Multimodal Image Retrieval for Realistic Captions</em> accepted to the 33rd ACM International Conference on Multimedia (ACM MM 2025).',
    where: 'ACM MM 2025',
  },
  {
    date: 'Jul 14, 2025',
    kind: 'Award',
    headHtml: 'Won <em>top 1</em> at the ACM Multimedia 2025 Grand Challenge on Event‑Enriched Image Analysis.',
    where: 'ACM MM 2025',
  },
  {
    date: 'Jul 12, 2025',
    kind: 'Award',
    headHtml: 'Won <em>top 1</em> in Track 1 of the ENTRep Challenge: Advancing Vision‑Language AI for ENT Endoscopy Analysis at ACM Multimedia 2025.',
    where: 'ACM MM 2025',
  },
  {
    date: 'Mar 3, 2025',
    kind: 'Role',
    headHtml: 'Started as <em>AI Engineer</em> at Autonomous.',
    where: 'Autonomous',
  },
  {
    date: 'Feb 21, 2025',
    kind: 'Move',
    headHtml: 'Left the role of <em>Backend Engineer</em> at Saritasa.',
    where: 'Saritasa · VN',
  },
  {
    date: 'Dec 14, 2024',
    kind: 'Paper',
    headHtml: 'Paper <em>NewsInsight2.0: An Enhanced Version Integrating Large Language Model‑Based Query Optimisation with Advanced Temporal Mechanisms</em> published at SOICT 2024.',
    where: 'SOICT · VN',
  },
  {
    date: 'Dec 9, 2024',
    kind: 'Paper',
    headHtml: 'Paper <em>An Approach to Complex Visual Data Interpretation with Vision‑Language Models</em> published at the 1st LAVA Workshop, ACCV 2024.',
    where: 'ACCV 2024',
  },
  {
    date: 'Dec 8, 2024',
    kind: 'Award',
    headHtml: 'Won <em>third prize</em> at the 26th Student Scientific Research Award — Euréka, 2024.',
    where: 'Euréka · VN',
  },
  {
    date: 'Dec 5, 2024',
    kind: 'Award',
    headHtml: 'Won <em>third prize</em> at the AI Challenge, Ho Chi Minh City 2024.',
    where: 'AI Chall. · VN',
  },
  {
    date: 'Dec 1, 2024',
    kind: 'Milestone',
    headHtml: 'Graduated <em>rank 6/59</em> of the Bachelor of Science — Honors Program in Information Technology at the University of Science, VNUHCM.',
    where: 'HCMUS · VN',
  },
  {
    date: 'Oct 7, 2024',
    kind: 'Award',
    headHtml: 'Won <em>first prize</em> at the LAVA Workshop Challenge, ACCV 2024.',
    where: 'ACCV 2024',
  },
  {
    date: 'Aug 25, 2024',
    kind: 'Milestone',
    headHtml: 'Successfully defended undergraduate thesis with score <em>10.00</em>.',
    where: 'HCMUS · VN',
  },
  {
    date: 'Aug 16, 2024',
    kind: 'Paper',
    headHtml: 'Paper <em>AI‑Enhanced Photo Authenticity: A User‑Focused Approach to Detecting and Analysing Manipulated Images</em> published at MAPR 2024.',
    where: 'MAPR 2024',
  },
  {
    date: 'Jul 2, 2024',
    kind: 'Paper',
    headHtml: 'Paper <em>A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End‑To‑End Network</em> published at the ACM AsiaCCS 2024 workshop.',
    where: 'AsiaCCS 2024',
  },
  {
    date: 'Jun 11, 2024',
    kind: 'Paper',
    headHtml: 'Paper <em>A Unified Network for Detecting Out‑Of‑Context Information Using Generative Synthetic Data</em> published at ACM ICMR 2024.',
    where: 'ICMR 2024',
  },
  {
    date: 'Jun 1, 2023',
    kind: 'Role',
    headHtml: 'Joined <em>Saritasa Vietnam</em> as Backend Engineer (Python + Django) after completing three months of internship.',
    where: 'Saritasa · VN',
  },
];
