/* =========================================================
   NAVIGATION & SITE META
   One name per page: the nav label, the page title, the
   footer link and the agent registry all use these.
   ========================================================= */

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/work', label: 'Work' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://blog.nguyenvanloc.com', label: 'Blog', external: true },
];

/** Editorial strip shown once, on the homepage hero. */
export const EDITORIAL = {
  issueLabel: '№ 026 · The Practitioner Issue',
  based: 'Ho Chi Minh City',
} as const;

/** Colophon constants used in the footer. */
export const SITE = {
  copyright: '© Van-Loc Nguyen',
  colophon: 'Set in Cormorant Garamond & JetBrains Mono',
  cvHref: '/CV.pdf',
} as const;

/** Footer social / elsewhere links. */
export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub — vanloc1808', href: 'https://github.com/vanloc1808' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=vanloc1808' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vanloc1808' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/vanloc1808' },
  { label: 'Facebook', href: 'https://facebook.com/vanloc1808' },
];

/** Travel map, previewed on /about and linked out for the full view. */
export const FOOTPRINTS = {
  href: 'https://footprints.nguyenvanloc.com/',
  host: 'footprints.nguyenvanloc.com',
} as const;
