import type { Publication } from '@/data/publications';

export function paperTitle(p: Publication): string {
  return p.titleAbbrev ? `${p.titleAbbrev}: ${p.titleRest}` : p.titleRest;
}

/** Stable anchor for a paper, e.g. "pandora" or "transparent-tracking-of-spermatozoa". */
export function paperId(p: Publication): string {
  const base = p.titleAbbrev ?? p.titleRest.split(/\s+/).slice(0, 4).join(' ');
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
