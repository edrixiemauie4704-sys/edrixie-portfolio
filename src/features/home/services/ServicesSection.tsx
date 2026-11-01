import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { chapterPath } from '@/content/home'
import { services, servicesPage, servicesSection } from '@/content/services'
import './services.css'

const pad = (n: number) => String(n).padStart(2, '0')

const toolLabels: Record<string, string> = {
  'service-1': 'Writing & research tools',
  'service-2': 'Marketing & publishing tools',
  'service-3': 'Website builders & SEO tools',
  'service-4': 'Design tools',
}

/** A clean service grid keeps each offer and its supporting apps easy to scan. */
export function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? 'h1' : 'h2'
  return (
    <section id="services" className="sv" aria-labelledby="services-title">
      <header className="sv__head">
        <div className="sv__heading">
          <p className="sv__eyebrow">
            {servicesSection.eyebrow}
            <span className="sv__rule" aria-hidden />
          </p>
          <Title id="services-title" className="sv__title">
            <span>{servicesSection.titleThin}</span> <b>{servicesSection.titleBold}</b>
          </Title>
        </div>
        <p className="sv__lede">{servicesPage.lede}</p>
      </header>

      <ol className="sv__grid">
        {services.map((service, i) => (
          <li key={service.id} className="sv__item">
            <Link
              to={chapterPath(servicesSection.work[service.id] ?? 'screens')}
              state={{ sheet: true }}
              preventScrollReset
              className="sv__card"
            >
              <span className="sv__meta">
                <span className="sv__index">{pad(i + 1)}</span>
                <span className="sv__outcome">{service.outcome}</span>
              </span>

              <span className="sv__copy">
                <span className="sv__name">{service.title}</span>
                <span className="sv__desc">{service.summary}</span>
              </span>

              <span className="sv__tool-group">
                <span className="sv__tool-label">{toolLabels[service.id] ?? 'Tools'}</span>
                <span className="sv__tags">
                  {service.tools.map((tool) => (
                    <span className="sv__tag" key={tool.name}>
                      <span className="sv__tag-icon" aria-hidden="true">
                        <img src={tool.logo} alt="" width={18} height={18} loading="lazy" />
                      </span>
                      <span>{tool.name}</span>
                    </span>
                  ))}
                </span>
              </span>

              <span className="sv__explore">
                {servicesSection.explore}
                <ArrowUpRight size={16} weight="bold" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
