/* =========================================================
   PROFILE — bio, name variants, status bar, "now" items
   ========================================================= */

/** Short status cells shown on the front page hero. */
export interface StatusItem {
  key: string;
  /** HTML string — may contain <em> or <span class="live"> */
  valueHtml: string;
}

export const STATUS_ITEMS: StatusItem[] = [
  { key: 'Current role',   valueHtml: 'Software Engineer, <em>Eurofins</em>' },
  { key: 'Now researching', valueHtml: 'MSc · <em>AI</em>, HCMUS' },
  { key: 'Open to',        valueHtml: '<span class="live">— Collaboration · Talks</span>' },
  { key: 'Recently',       valueHtml: 'Returned from <em>NII, Tokyo</em>' },
];

/** Bio paragraphs (plain text — no HTML tags needed). */
export const BIO_PARAGRAPHS: string[] = [
  'My name is Nguyễn Văn Lộc (you can call me Felix) - a professional and enthusiastic programmer with a particular love for Artificial Intelligence, especially Computer Vision and Deep Learning. I am a quick learner with a self-learning attitude, always eager to explore new technologies and passionate about solving hard problems. Python is my core language and closest tool; I love almost everything that can be built with it.',
  'Over the last several years I\'ve moved between a research lab at the University of Science, VNUHCM, a backend engineer role at Saritasa, an AI engineer role at Autonomous, a student researcher position at the National Institute of Informatics in Tokyo (Echizen Laboratory, under Prof. Isao Echizen), and now a Software Engineer position at Eurofins. The throughline is the same: take a model out of the notebook and into something a person can use without thinking about it.',
  'I read widely, ship steadily, and believe that the most interesting problems sit between disciplines — vision and language, research and product, Vietnamese and Japanese, theory and the messy thing it\'s supposed to model.',
];

/** Name in various scripts shown in the bio aside. */
export interface NameVariant {
  lang: string;
  /** HTML string — may contain <em> for the given name */
  nameHtml: string;
}

export const NAME_VARIANTS: NameVariant[] = [
  { lang: 'Vi',    nameHtml: 'Nguyễn Văn <em>Lộc</em>' },
  { lang: 'En',    nameHtml: 'Van‑Loc Nguyen <em>(Felix)</em>' },
  { lang: '日本語', nameHtml: 'グエン・ヴァン・ロク' },
  { lang: '中文',   nameHtml: '阮文禄' },
];

export const BIO_META = {
  based: 'Ho Chi Minh City',
  handle: 'vanloc1808',
} as const;

/* ── "Now" items ─────────────────────────────────────────── */

export interface NowItem {
  label: string;
  /** Optional link that appears at the start of the heading. */
  titleLink?: { text: string; href: string };
  /** Remainder of the heading text (always plain string). */
  titleText: string;
  meta: string;
}

export const NOW_ITEMS: NowItem[] = [
  {
    label: 'Shipping',
    titleLink: { text: 'ArcanaAI', href: 'https://arcanaai.nguyenvanloc.com' },
    titleText: ' — redesigned UI with smoother tarot flow, clearer card storytelling, and a more immersive mystical aesthetic.',
    meta: 'Personal project · Live',
  },
  {
    label: 'Researching',
    titleText: 'Zero‑shot object removal and multi‑object reasoning for video, continuing work from PANDORA and Cluster‑Erase.',
    meta: 'Master\'s thesis · HCMUS',
  },
  {
    label: 'Reading',
    titleText: 'Diffusion world models, evaluation of vision‑language systems, and the long quiet literature on agents that don\'t hallucinate.',
    meta: 'Ongoing',
  },
];
