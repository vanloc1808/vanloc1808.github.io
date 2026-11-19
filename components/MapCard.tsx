import { FOOTPRINTS } from '@/data/nav';

/* Footprints travel map preview. The iframe renders at 2× and is scaled
   down so the map shows its desktop layout; the wrapping anchor takes
   every click. */
export default function MapCard() {
  return (
    <a
      className="vl-mapcard"
      href={FOOTPRINTS.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the full footprints map in a new tab"
    >
      <div className="vl-console__head">
        <span className="vl-console__dots" aria-hidden="true">
          <i />
          <i />
          <i className="on" />
        </span>
        <span>{FOOTPRINTS.host}</span>
        <span>live preview</span>
      </div>
      <div className="vl-mapcard__frame">
        <iframe
          src={FOOTPRINTS.href}
          title="Preview of the footprints travel map"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
        />
        <span className="vl-btn vl-btn--accent vl-mapcard__cta">
          Explore the full map <span className="arrow">→</span>
        </span>
      </div>
    </a>
  );
}
