/**
 * Inline script injected into <head> to apply the stored theme
 * before the page paints, avoiding a flash of the wrong theme.
 */
export default function ThemeScript() {
  const script = `
(function(){
  try {
    var p = JSON.parse(localStorage.getItem('nvl_prefs_v1') || '{}');
    if (p.theme === 'dark' || p.theme === 'light' || p.theme === 'system') {
      document.documentElement.setAttribute('data-theme', p.theme);
    }
  } catch(e) {}
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
