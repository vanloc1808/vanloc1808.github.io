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
  title: 'Van-Loc Nguyen',
  description:
    'This is the portfolio of Van-Loc Nguyen. I am an AI researcher and engineer. I love to learn new things and I am always open to collaborating with others.',
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
