'use client';

import { useEffect, useState } from 'react';

export interface SubNavItem {
  id: string;
  label: string;
  count?: number;
}

/**
 * "On this page" index under the PageHeader of long pages. Sticky below
 * the masthead; the section in view is marked with aria-current.
 * Without JavaScript every item still works as a plain anchor.
 */
export default function SubNav({ items }: { items: SubNavItem[] }) {
  const [current, setCurrent] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const first = items.find((item) => visible.has(item.id));
        if (first) setCurrent(first.id);
      },
      { rootMargin: '-120px 0px -55% 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="vl-subnav" aria-label="On this page">
      <div className="vl-shell vl-subnav__inner">
        <span className="vl-meta vl-subnav__title">On this page</span>
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} aria-current={item.id === current ? 'true' : undefined}>
            {item.label}
            {item.count !== undefined && <span className="count">{item.count}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}
