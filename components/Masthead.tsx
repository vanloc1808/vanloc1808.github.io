'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/data/nav';
import ThemeToggle from './ThemeToggle';

export default function Masthead() {
  const pathname = usePathname();

  return (
    <header className="vl-masthead">
      <div className="vl-shell vl-masthead__inner">
        <Link href="/" className="vl-brand" aria-label="Nguyễn Văn Lộc, home">
          Nguyễn <em>Văn Lộc</em>
        </Link>

        <nav className="vl-nav" aria-label="Primary">
          {NAV_LINKS.map(({ href, label, external }) =>
            external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                {label} ↗
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        <div className="vl-masthead__tools">
          <ThemeToggle />
          <a className="vl-btn vl-btn--quiet" href={SITE.cvHref} target="_blank" rel="noopener noreferrer">
            CV ↗
          </a>
        </div>
      </div>
    </header>
  );
}
