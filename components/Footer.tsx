import Link from 'next/link';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from '@/data/nav';
import { contactInfo } from '@/data/contact';
import { Button } from './ui';
import FooterBand from './FooterBand';

/* Every page ends here (rendered by SiteShell). The contact band is
   hidden on /contact, where the page itself leads with the email. */

const ELSEWHERE = SOCIAL_LINKS.filter((l) => /GitHub|Scholar|LinkedIn/.test(l.label));

export default function Footer() {
  return (
    <footer className="vl-shell">
      <FooterBand>
        <div className="vl-footer__band">
          <div>
            <span className="vl-label vl-gold">Contact</span>
            <p className="vl-footer__pitch">
              I read every <em>letter</em>. Computer vision, agent infrastructure, or just an interesting question.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-3)', justifyContent: 'flex-end' }}>
            <Button href={`mailto:${contactInfo.email}`} variant="accent">
              {contactInfo.email}
            </Button>
          </div>
        </div>
      </FooterBand>

      <div className="vl-footer__cols">
        <div>
          <span className="vl-label">Site</span>
          <ul>
            {NAV_LINKS.filter((l) => !l.external).map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="vl-label">Elsewhere</span>
          <ul>
            {ELSEWHERE.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label.replace(/ — .*/, '')} ↗
                </a>
              </li>
            ))}
            {NAV_LINKS.filter((l) => l.external).map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="vl-label">Based</span>
          <ul>
            <li><p>{contactInfo.location}</p></li>
            <li><p>{contactInfo.timezone}</p></li>
          </ul>
        </div>
      </div>

      <div className="vl-footer__bottom vl-meta">
        <span>{SITE.copyright}</span>
        <span>{SITE.colophon}</span>
      </div>
    </footer>
  );
}
