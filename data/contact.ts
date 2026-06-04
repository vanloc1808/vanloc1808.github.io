/* =========================================================
   CONTACT
   ========================================================= */

export interface ContactChannel {
  platform: string;
  handle: string;
  note: string;
  href: string;
}

export const contactChannels: ContactChannel[] = [
  {
    platform: 'GitHub',
    handle: 'vanloc1808',
    note: 'Code, experiments, and open‑source contributions',
    href: 'https://github.com/vanloc1808',
  },
  {
    platform: 'Google Scholar',
    handle: 'Van‑Loc Nguyen',
    note: 'Full publication list with citation counts',
    href: 'https://scholar.google.com/citations?user=vanloc1808',
  },
  {
    platform: 'LinkedIn',
    handle: 'vanloc1808',
    note: 'Professional history and endorsements',
    href: 'https://linkedin.com/in/vanloc1808',
  },
  {
    platform: 'Stack Overflow',
    handle: 'vanloc1808',
    note: 'Answers on Python, CV, and ML tooling',
    href: 'https://stackoverflow.com/users/vanloc1808',
  },
  {
    platform: 'Facebook',
    handle: 'vanloc1808',
    note: 'Personal updates, mostly in Vietnamese',
    href: 'https://facebook.com/vanloc1808',
  },
];

export const contactInfo = {
  email: 'contact@nguyenvanloc.com',
  location: 'Ho Chi Minh City, Vietnam',
  timezone: 'UTC+7 · ICT',
  responseTime: '≤ 24h',
  responseNote: 'Weekdays, ICT. Weekends if your subject line is interesting.',
} as const;
