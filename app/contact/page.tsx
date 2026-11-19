import type { Metadata } from 'next';
import LinkedInBadge from '@/components/LinkedInBadge';
import { contactChannels, contactInfo } from '@/data/contact';
import { Button, Entry, EntryList, FieldList, PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact — Van-Loc Nguyen',
  description: 'All the ways to reach Van-Loc Nguyen.',
  alternates: {
    canonical: '/contact',
    types: { 'text/markdown': '/contact.md' },
  },
};

/* =========================================================
   CONTACT — email first, then every other channel.
   The footer drops its contact band on this page.
   ========================================================= */

export default function ContactPage() {
  return (
    <>
      <PageHeader
        name="Contact"
        title={<em>Contact</em>}
        dek="I read every letter. Email is still the best way in; everything else is below."
      />

      <Section id="email" eyebrow="Email" heading="The best way to reach me is still email">
        <div className="vl-split">
          <div>
            <p className="vl-pitch">
              Working on something that needs computer vision, agent infrastructure, or a careful pair of hands?
              Let&#39;s <em>talk</em>.
            </p>
            <p className="vl-entry__text" style={{ marginBottom: 'var(--s-5)' }}>
              Research collaborations, contract work, or just an interesting question.
            </p>
            <Button href={`mailto:${contactInfo.email}`} variant="accent">
              {contactInfo.email}
            </Button>
          </div>
          <aside className="vl-split__aside">
            <span className="vl-label vl-gold">Average response</span>
            <div className="vl-bignum">{contactInfo.responseTime}</div>
            <p className="vl-entry__text" style={{ marginBottom: 'var(--s-4)' }}>{contactInfo.responseNote}</p>
            <FieldList
              fields={[
                { k: 'Location', v: contactInfo.location },
                { k: 'Timezone', v: contactInfo.timezone },
              ]}
            />
          </aside>
        </div>
      </Section>

      <Section id="elsewhere" eyebrow="Elsewhere" heading="Other places to find me" count={`${contactChannels.length} channels`}>
        <EntryList>
          {contactChannels.map((ch) => (
            <Entry key={ch.platform} href={ch.href} meta={<span className="vl-entry__date">{ch.platform}</span>}>
              <h3 className="vl-entry__title vl-entry__title--mono">{ch.handle}</h3>
              <p className="vl-entry__text">{ch.note}</p>
            </Entry>
          ))}
        </EntryList>
        <LinkedInBadge />
      </Section>
    </>
  );
}
