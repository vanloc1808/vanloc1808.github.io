'use client';

import { useState } from 'react';

/** Copies a BibTeX entry; if the clipboard is unavailable, shows it to copy by hand. */
export default function CiteButton({ bibtex }: { bibtex: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'show'>('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setState('copied');
      setTimeout(() => setState('idle'), 2000);
    } catch {
      setState('show');
    }
  }

  return (
    <>
      <button type="button" onClick={copy} aria-live="polite">
        {state === 'copied' ? 'Copied BibTeX' : 'Cite'}
      </button>
      {state === 'show' && <pre className="vl-bibtex">{bibtex}</pre>}
    </>
  );
}
