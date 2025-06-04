import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { ThemeProvider } from './context/ThemeContext';
import './css/card.scss';
import './css/globals.scss';
import ScrollToTop from './components/helper/scroll-to-top';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Van-Loc Nguyen | vanloc1808',
  description:
    'Portfolio of Van-Loc Nguyen (vanloc1808) - AI Engineer, Developer, and Researcher.',
  keywords: [
    'vanloc1808',
    'Van-Loc Nguyen',
    'AI Engineer',
    'Portfolio',
    'Developer',
  ],
  openGraph: {
    title: 'Van-Loc Nguyen | vanloc1808',
    description:
      'Portfolio of Van-Loc Nguyen (vanloc1808) - AI Engineer, Developer, and Researcher.',
    url: 'https://vanloc1808.github.io',
    siteName: 'vanloc1808',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'vanloc1808',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Van-Loc Nguyen | vanloc1808',
    description:
      'Portfolio of Van-Loc Nguyen (vanloc1808) - AI Engineer, Developer, and Researcher.',
    images: ['/og-image.png'],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <ToastContainer />
          <main className='relative mx-auto min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]'>
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
        {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
      </body>
    </html>
  );
}
