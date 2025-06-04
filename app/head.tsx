import { FC } from 'react';

const Head: FC = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {
                console.error('Theme init error', e);
              }
            })();
          `,
        }}
      />
    </>
  );
};

export default Head;
