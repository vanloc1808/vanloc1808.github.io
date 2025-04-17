import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Van-Loc Nguyen",
  description:
    "This is the portfolio of Van-Loc Nguyen. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider> {/* Wrap with ThemeProvider */}
        <body className={inter.className}>
          <ToastContainer />
          {/* Removed text-white from main to allow theme inheritance */}
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </body>
      </ThemeProvider> {/* Close ThemeProvider */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
