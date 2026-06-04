'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/data/nav';
import TweaksPanel from './TweaksPanel';

export default function Masthead() {
  const pathname = usePathname();
  const [clock, setClock] = useState('—:—');
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
        hour12: false,
      };
      const time = now.toLocaleTimeString('en-US', opts);
      setClock(time + ' ICT');
    }
    updateClock();
    const id = setInterval(updateClock, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            Nguyễn <em>Văn Lộc</em>
          </span>
          <span className="brand-sub">{SITE.brandSub}</span>
        </Link>

        <nav className="nav" aria-label="primary">
          {NAV_LINKS.map(({ href, label, external }) => {
            const isActive = external
              ? false
              : href === '/'
                ? pathname === '/'
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'active' : ''}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="masthead-meta">
          <span className="live-dot">Online</span>
          <span>{clock}</span>
          <div
            className="tweaks-wrap"
            onMouseEnter={() => setTweaksOpen(true)}
            onMouseLeave={() => setTweaksOpen(false)}
          >
            <button
              className="tweaks-toggle"
              type="button"
              onClick={() => setTweaksOpen((o) => !o)}
              aria-haspopup="dialog"
              aria-expanded={tweaksOpen}
              aria-label="Toggle tweaks panel"
            >
              Tweaks
            </button>
            <TweaksPanel open={tweaksOpen} onClose={() => setTweaksOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
