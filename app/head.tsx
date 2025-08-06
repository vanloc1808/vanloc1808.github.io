import { FC } from 'react';

const Head: FC = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                var theme = localStorage.getItem('theme') || 'system';
                if (theme === 'system') {
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', prefersDark);
                } else {
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                }
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
