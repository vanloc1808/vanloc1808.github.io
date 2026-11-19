import Masthead from './Masthead';
import Footer from './Footer';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Masthead />
      <main>{children}</main>
      <Footer />
    </>
  );
}
