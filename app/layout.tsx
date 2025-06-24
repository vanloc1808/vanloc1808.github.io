import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider } from './context/I18nContext';
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
          <I18nProvider>
            {/* Skip Links for Screen Readers and Keyboard Navigation */}
            <a
              href='#main-content'
              className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:no-underline focus:shadow-lg'
              tabIndex={0}
            >
              Skip to main content
            </a>
            <a
              href='#navigation'
              className='sr-only focus:not-sr-only focus:absolute focus:left-36 focus:top-4 focus:z-[999] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:no-underline focus:shadow-lg'
              tabIndex={0}
            >
              Skip to navigation
            </a>

            <ToastContainer />

            {/* Header with Navigation */}
            <header role='banner'>
              <nav id='navigation' aria-label='Main navigation'>
                <Navbar />
              </nav>
            </header>

            {/* Main Content Area */}
            <main
              id='main-content'
              role='main'
              className='relative mx-auto min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]'
              aria-label='Main content'
            >
              {children}
              <ScrollToTop />
            </main>

            {/* Footer */}
            <footer role='contentinfo'>
              <Footer />
            </footer>
          </I18nProvider>
        </ThemeProvider>
        {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
      </body>
    </html>
  );
}
