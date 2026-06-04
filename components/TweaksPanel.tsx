'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'nvl_prefs_v1';

type Theme = 'dark' | 'system' | 'light';

interface Prefs {
  theme: Theme;
}

const defaults: Prefs = { theme: 'system' };

interface TweaksPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function TweaksPanel({ open, onClose }: TweaksPanelProps) {
  const [prefs, setPrefs] = useState<Prefs>(defaults);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as Partial<Prefs>;
      setPrefs({ ...defaults, ...saved });
    } catch {
      // ignore
    }
  }, []);

  // Apply prefs to <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', prefs.theme);
    document.documentElement.setAttribute('data-density', 'compact');
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore
    }
  }, [prefs]);

  function set<K extends keyof Prefs>(key: K, value: Prefs[K]) {
    setPrefs((p) => ({ ...p, [key]: value }));
  }

  return (
    <div className={`tweaks${open ? ' open' : ''}`} role="dialog" aria-label="Tweaks">
      <div className="tw-head">
        <span className="title">Tweaks</span>
        <button className="x" type="button" aria-label="Close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="tw-body">
        <div className="tw-row">
          <span className="lbl">Theme</span>
          <div className="seg">
            {(['dark', 'system', 'light'] as Theme[]).map((val) => (
              <button
                key={val}
                type="button"
                className={prefs.theme === val ? 'on' : ''}
                onClick={() => set('theme', val)}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="tw-foot">v 26.05 · Persists across pages</div>
    </div>
  );
}
