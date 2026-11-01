import { ArrowUpRight, MapPin } from '@phosphor-icons/react'
import { aboutSection, capabilities, credentials, type AboutCredential } from '@/content/about'
import { socials } from '@/content/site'
import { personJsonLd } from '@/lib/seo'
import './about.css'

const pad2 = (n: number) => String(n).padStart(2, '0')

const personLd = personJsonLd({
  description: aboutSection.lede,
  skills: capabilities.map((c) => c.title),
  sameAs: socials.filter((s) => !s.partner).map((s) => s.href),
})

function Credential({ c }: { c: AboutCredential }) {
  const body = (
    <>
      <span className="ab__cred-mark">
        {c.image ? <img className={c.imageDark ? 'only-light' : undefined} src={c.image.src} alt="" width={c.image.width} height={c.image.height} loading="lazy" decoding="async" /> : <MapPin size={16} weight="fill" aria-hidden />}
        {c.imageDark ? <img className="only-dark" src={c.imageDark.src} alt="" width={c.imageDark.width} height={c.imageDark.height} loading="lazy" decoding="async" /> : null}
      </span>
      <span className="ab__cred-copy">
        <b>{c.title}</b>
        <small>{c.detail}</small>
      </span>
    </>
  )
  return c.href ? (
    <a className="ab__cred" href={c.href} target="_blank" rel="noopener noreferrer">
      {body}
      <ArrowUpRight className="ab__cred-go" size={15} weight="bold" aria-hidden />
    </a>
  ) : (
    <span className="ab__cred">{body}</span>
  )
}

/**
 * About, "The floor": the desk illustration set large, standing on a
 * hairline floor that runs edge to edge, the story set over its space; the four roles with their
 * tools as raised paper keys and the credentials sit below the floor. The picture rises onto the
 * floor as it scrolls in (CSS scroll-driven, compositor only; still under reduced motion).
 */
export function AboutSection() {
  const s = aboutSection
  return (
    <section id="about" className="ab" aria-labelledby="ab-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personLd }} />
      <header>
        <p className="wk-eyebrow">{s.eyebrow}</p>
        <h2 id="ab-title" className="ab__title">
          {s.titleThin} <span>{s.titleBold}</span>
        </h2>
        <p className="ab__lede">{s.lede}</p>
      </header>

      <div className="ab__story">
        <div className="ab__story-copy">
          <h3 className="ab__lead">{s.lead}</h3>
          <p className="ab__lead-quiet">{s.leadQuiet}</p>
          <ul className="ab__caps">
            {capabilities.map((c, i) => (
              <li key={c.title} className="ab__cap">
                <span className="ab__cap-title">{c.title}</span>
                <span className="ab__cap-i" aria-hidden>
                  {pad2(i + 1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="ab__pic">
          <img
            src={s.picture.src}
            sizes="auto, (min-width: 1024px) 32vw, 92vw"
            alt={s.picture.alt}
            width={s.picture.width}
            height={s.picture.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="ab__below">
        <p className="ab__note">
          <strong>{s.note.company}</strong>{' '}
          <a href={s.note.product.href} target="_blank" rel="noopener noreferrer">
            {s.note.product.label}
          </a>{' '}
          {s.note.rest}
        </p>
      </div>

      <div className="ab__creds">
        {credentials.map((c) => (
          <Credential key={c.id} c={c} />
        ))}
      </div>
    </section>
  )
}
