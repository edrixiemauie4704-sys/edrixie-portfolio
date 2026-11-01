import { ArrowUpRight, MapPin, Printer } from '@phosphor-icons/react'
import { aboutSection, capabilities, credentials, type AboutCredential } from '@/content/about'
import { resumeEducation, resumeExperience, resumeProfile, resumeSkills } from '@/content/resume'
import { externalLinks, site, socials } from '@/content/site'
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
export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const s = aboutSection
  const Title = standalone ? 'h1' : 'h2'
  return (
    <section id="about" className="ab" aria-labelledby="ab-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personLd }} />
      <header>
        <p className="wk-eyebrow">{standalone ? 'About · Resume' : s.eyebrow}</p>
        <Title id="ab-title" className="ab__title">
          {s.titleThin} <span>{s.titleBold}</span>
        </Title>
        <p className="ab__lede">{s.lede}</p>
      </header>

      {standalone ? (
        <section className="ab__resume" aria-label="Resume summary">
          <div className="ab__resume-intro">
            <p className="pg-mono">Resume at a glance</p>
            <strong>{resumeProfile.name}</strong>
            <span>{site.role} · Writing and content work since 2022</span>
            <span>{site.timePlace}</span>
          </div>
          <div className="ab__resume-actions">
            <a className="pg-btn" href={externalLinks.resume} target="_blank" rel="noreferrer">
              Open full resume <ArrowUpRight size={16} weight="bold" aria-hidden />
            </a>
            <button className="pg-btn" type="button" onClick={() => window.print()}>
              <Printer size={16} weight="bold" aria-hidden /> Print this page
            </button>
          </div>
        </section>
      ) : null}

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

      {standalone ? (
        <section className="ab__cv" aria-labelledby="ab-cv-title">
          <div className="ab__cv-heading">
            <p className="pg-mono">Resume · Full profile</p>
            <div className="ab__cv-heading-main">
              <h2 id="ab-cv-title">Experience, education <i>&amp;</i> skills</h2>
              <p>{resumeProfile.summary}</p>
            </div>
          </div>

          <div className="ab__cv-contact" aria-label="Resume contact details">
            <a href={`tel:${resumeProfile.phone.replaceAll(' ', '')}`}>{resumeProfile.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{resumeProfile.location}</span>
            <a href={socials.find((social) => social.label === 'LinkedIn')?.href} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={externalLinks.resource} target="_blank" rel="noreferrer">Previous portfolio</a>
          </div>

          <nav className="ab__cv-nav" aria-label="Resume sections">
            <a href="#ab-cv-experience">Experience <span>04</span></a>
            <a href="#ab-cv-education">Education <span>02</span></a>
            <a href="#ab-cv-skills">Skills <span>{String(resumeSkills.length).padStart(2, '0')}</span></a>
          </nav>

          <div className="ab__cv-grid">
            <section className="ab__cv-experience" aria-labelledby="ab-cv-experience">
              <h3 id="ab-cv-experience">Work experience</h3>
              {resumeExperience.map((job, index) => (
                <article className="ab__cv-entry" key={`${job.organization}-${job.role}`}>
                  <span className="ab__cv-entry-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div className="ab__cv-entry-head">
                    <div><h4>{job.role}</h4><p>{job.organization}</p></div>
                    <time><span>{job.dates}</span></time>
                  </div>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </article>
              ))}
            </section>

            <aside className="ab__cv-aside">
              <section aria-labelledby="ab-cv-education">
                <h3 id="ab-cv-education">Education</h3>
                {resumeEducation.map((record) => (
                  <article className="ab__cv-education" key={record.program}>
                    <time>{record.dates}</time>
                    <h4>{record.program}</h4>
                    <p>{record.school}</p>
                    <ul>{record.honors.map((honor) => <li key={honor}>{honor}</li>)}</ul>
                  </article>
                ))}
              </section>
              <section aria-labelledby="ab-cv-skills">
                <h3 id="ab-cv-skills">Skills</h3>
                <ul className="ab__cv-skills">{resumeSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </section>
            </aside>
          </div>
        </section>
      ) : null}
    </section>
  )
}
