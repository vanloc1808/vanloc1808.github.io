import type { Metadata } from 'next';
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/SiteShell';
import ThemeScript from '@/components/ThemeScript';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Van‑Loc Nguyen — AI Engineer · Research · Tokyo / Saigon',
  description:
    'A computer‑vision and deep‑learning engineer working at the seam between research and production.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="system"
      data-density="compact"
      className={`${cormorant.variable} ${jetbrains.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
