import Masthead from './Masthead';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Masthead />
      {children}
    </>
  );
}
