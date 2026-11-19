'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Renders the footer's contact band everywhere except /contact. */
export default function FooterBand({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname === '/contact' ? null : <>{children}</>;
}
