import { ArrowUpRight, Briefcase, Envelope, Images, Stack, User } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { tools } from '@/content/tools'
import { site } from '@/content/site'
import { useLocalTime } from '@/hooks/use-local-time'
import './home-overview.css'

const destinations = [
  { label: 'Projects', detail: 'Writing, websites, and brand work', href: '/work', Icon: Briefcase, number: '01' },
  { label: 'Services', detail: 'Ways I can support your next project', href: '/services', Icon: Stack, number: '02' },
  { label: 'Showcase', detail: 'A visual tour of selected work', href: '/showcase', Icon: Images, number: '03' },
  { label: 'About', detail: 'My approach, strengths, and resume', href: '/about', Icon: User, number: '04' },
  { label: 'Contact', detail: 'Let’s talk about your project', href: '/contact', Icon: Envelope, number: '05' },
]

const featuredTools = [
  tools.googleDocs, tools.chatgpt, tools.claude, tools.gemini, tools.perplexity,
  tools.grammarly, tools.canva, tools.searchConsole, tools.semrush, tools.squarespace,
]

export function HomeOverviewSection() {
  const time = useLocalTime(site.timeZone)
  return (
    <section className="ho" aria-labelledby="ho-title">
      <header className="ho__head">
        <p className="wk-eyebrow">Start here</p>
        <h2 id="ho-title">A thoughtful portfolio, <i>made easy to explore.</i></h2>
        <p>Choose a page to see the work, services, and details that matter to you.</p>
      </header>

      <nav className="ho__destinations" aria-label="Explore the portfolio">
        {destinations.map(({ label, detail, href, Icon, number }) => (
          <Link className="ho__destination" to={href} key={href}>
            <span className="ho__destination-top"><small>{number}</small><Icon size={19} weight="regular" aria-hidden /></span>
            <span className="ho__destination-name">{label}</span>
            <span className="ho__destination-detail">{detail}</span>
            <ArrowUpRight className="ho__destination-arrow" size={17} weight="bold" aria-hidden />
          </Link>
        ))}
      </nav>

      <div className="ho__details">
        <section className="ho__strengths" aria-labelledby="ho-strengths-title">
          <p className="pg-mono">My strengths</p>
          <h3 id="ho-strengths-title">Research-led. Reader-first. <i>Versatile.</i></h3>
          <ul>
            <li>Writing and content work since 2022</li>
            <li>SEO research, clear structure, and careful editing</li>
            <li>Content, visual design, and website support</li>
          </ul>
          <p className="ho__clock"><span className="ho__clock-dot" aria-hidden />{site.timePlace}<time dateTime={time.iso}>{time.label}</time></p>
        </section>

        <section className="ho__tools" aria-labelledby="ho-tools-title">
          <p className="pg-mono">My toolkit</p>
          <h3 id="ho-tools-title">Tools I work with</h3>
          <ul>
            {featuredTools.map((tool) => (
              <li key={tool.name} title={tool.name}>
                <img src={tool.logo} alt="" width={22} height={22} loading="lazy" />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
          <Link className="ho__tools-link" to="/services">See tools by service <ArrowUpRight size={14} weight="bold" aria-hidden /></Link>
        </section>
      </div>
    </section>
  )
}
