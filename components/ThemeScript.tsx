/**
 * Inline script injected into <head> to apply stored theme/density
 * before the page paints, avoiding flash-of-unstyled-content.
 */
export default function ThemeScript() {
  const script = `
(function(){
  try {
    var p = JSON.parse(localStorage.getItem('nvl_prefs_v1') || '{}');
    document.documentElement.setAttribute('data-theme', p.theme || 'system');
    document.documentElement.setAttribute('data-density', 'compact');
  } catch(e) {}
})();
`.trim();

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
