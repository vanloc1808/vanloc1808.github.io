/* =========================================================
   NAVIGATION & SITE META
   ========================================================= */

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Index' },
  { href: '/background', label: 'Background' },
  { href: '/work', label: 'Work' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://blog.nguyenvanloc.com', label: 'Blog', external: true },
];

/** Editorial strip that appears at the top of every page hero. */
export const EDITORIAL = {
  issueLabel: '№ 026 · The Practitioner Issue',
  established: 'Established 2002',
  typeset: 'Set in Cormorant & JetBrains Mono',
} as const;

/** Brand + colophon constants used in Masthead and footer. */
export const SITE = {
  brandName: 'Nguyễn Văn Lộc',
  brandSub: '— Vol. 26',
  copyright: '© Van-Loc Nguyen · All rights reserved',
  volIssue: 'Vol. 26 / Issue 05',
  lastUpdated: 'Last updated · May 26',
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
