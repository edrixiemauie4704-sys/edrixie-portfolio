import { CaretDown, EnvelopeSimple } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { SocialLinks } from '@/components/brand/SocialLinks'
import { contactPage as c } from '@/content/contact'
import { allFaqs } from '@/content/faqs'
import { externalLinks, mailtoHref, site } from '@/content/site'
import { contactJsonLd } from '@/lib/seo'
import { ContactForm } from './ContactForm'
import './contact.css'

const pad2 = (n: number) => String(n).padStart(2, '0')

/** The message form beside the answers plate. Nested = inside Home, so headings step down one level. */
function ContactSheet({ nested }: { nested: boolean }) {
  const H = nested ? 'h3' : 'h2'
  return (
    <div className="ct-sheet">
      <section className="ct-panel" aria-labelledby="ct-card-title">
        <div className="ct-panel__topline">
          <p className="pg-mono">01 <span>·</span> Start a conversation</p>
          <span className="ct-panel__icon" aria-hidden="true"><EnvelopeSimple size={19} weight="regular" /></span>
        </div>
        <H id="ct-card-title" className="ct-panel__title">
          {c.cardTitle}
        </H>
        <p className="ct-panel__body">{c.cardBody}</p>
        <ContactForm nested={nested} />
      </section>

      <section className="ct-plate" aria-labelledby="ct-faq-title">
        <p className="pg-mono ct-plate__eyebrow">02 <span>·</span> {c.faqEyebrow}</p>
        <H id="ct-faq-title" className="ct-plate__title">
          {c.faqTitle}. <span>{c.faqSub}</span>
        </H>
        <div className="ct-acc">
          {allFaqs.map((q, i) => (
            <details key={q.question} name="contact-faq" open={i === 0}>
              <summary>
                <span className="ct-idx">{pad2(i + 1)}</span>
                <span>{q.question}</span>
                <CaretDown size={14} weight="bold" aria-hidden />
              </summary>
              <p>{q.answer}</p>
            </details>
          ))}
        </div>
        <div className="ct-direct">
          <a className="ct-mail" href={mailtoHref()}>
            <EnvelopeSimple size={16} weight="fill" aria-hidden />
            {site.email}
          </a>
          <a className="ct-mail" href={externalLinks.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp · +63 953 256 5819
          </a>
          <SocialLinks />
        </div>
      </section>
    </div>
  )
}

/**
 * Contact, "start a conversation": the form leads, with one-at-a-time answers and direct contact
 * links beside it for visitors who prefer to write directly.
 */
export function ContactPage({ page }: { page: PageRoute }) {
  return (
    <div className="pg ct">
      <PageMeta page={page} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contactJsonLd({ path: page.path, title: page.title, description: page.description, faq: allFaqs }) }} />
      <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ContactSheet nested={false} />
    </div>
  )
}

/** The same page as the last Home section, after Showcase (the sidebar Contact entry scrolls Home to #contact). */
export function ContactSection() {
  return (
    <section id="contact" className="pg pg--section ct" aria-labelledby="contact-title">
      <PageHeader level={2} id="contact-title" eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ContactSheet nested />
    </section>
  )
}
