'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    LIRenderAll?: () => void;
  }
}

const BADGE_SCRIPT_SRC = 'https://platform.linkedin.com/badges/js/profile.js';

/* =========================================================
   LINKEDIN PROFILE BADGE
   Renders both official badge variants; globals.css shows
   the one matching the active theme (light/dark/system).
   ========================================================= */

function Badge({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme={theme}
      data-type="HORIZONTAL"
      data-vanity="vanloc1808"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://vn.linkedin.com/in/vanloc1808?trk=profile-badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Van‑Loc (Felix) Nguyen
      </a>
    </div>
  );
}

export default function LinkedInBadge() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    // LinkedIn's script scans the DOM only when it executes, so it must be
    // re-injected on every mount or the badge stays empty after client-side
    // navigation back to this page.
    const script = document.createElement('script');
    script.src = BADGE_SCRIPT_SRC;
    script.async = true;
    // The script defers its DOM scan to the window load event unless the
    // document is already complete; calling LIRenderAll directly removes
    // that timing dependence (it skips badges it already rendered).
    script.onload = () => window.LIRenderAll?.();
    // platform.linkedin.com is on common privacy blocklists. When blocked,
    // render nothing — the channel list already links to the profile.
    script.onerror = () => setBlocked(true);
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  if (blocked) {
    return null;
  }

  return (
    <div className="li-badge">
      <div className="li-badge-light">
        <Badge theme="light" />
      </div>
      <div className="li-badge-dark">
        <Badge theme="dark" />
      </div>
    </div>
  );
}
