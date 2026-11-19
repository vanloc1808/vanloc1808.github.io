'use client';

import { useSyncExternalStore } from 'react';

/* One button that cycles Dark → System → Light.
   ThemeScript applies the stored choice before first paint; this
   component reads it back from <html data-theme> without a flash. */

export const PREFS_KEY = 'nvl_prefs_v1';
const ORDER = ['dark', 'system', 'light'] as const;
type Theme = (typeof ORDER)[number];
const EVENT = 'nvl-theme-change';

const GLYPH: Record<Theme, string> = { dark: '●', system: '◐', light: '○' };

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function getSnapshot(): Theme {
  const t = document.documentElement.getAttribute('data-theme');
  return (ORDER as readonly string[]).includes(t ?? '') ? (t as Theme) : 'system';
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'system' as Theme);
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];

  function cycle() {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({ theme: next }));
    } catch {
      // storage unavailable: the choice lasts for this page only
    }
    window.dispatchEvent(new Event(EVENT));
  }

  return (
    <button
      type="button"
      className="vl-theme-btn"
      onClick={cycle}
      aria-label={`Theme: ${theme}. Switch to ${next}.`}
      title={`Theme: ${theme}`}
    >
      <span aria-hidden="true">{GLYPH[theme]}</span>
    </button>
  );
}
