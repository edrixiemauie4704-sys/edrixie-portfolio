import { useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { homeHero } from '@/content/home'
import { site } from '@/content/site'
import { useScrollScene } from '@/hooks/use-scroll-scene'
import { scrollToSection } from '@/lib/motion/smooth-scroll'
import { heroScene } from './hero-scene'
import './hero.css'

/**
 * Hero: an editorial introduction paired with Edrixie's portrait. The thin headline line leads into
 * an italic accent line; on scroll the two lines part and sink back (hero-scene.ts / scroll timeline).
 * Each line sits in a `__layer` wrapper: the scroll motion moves the wrapper, the load entrance
 * animates the line, so the two never fight over one transform.
 */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  useScrollScene(ref, heroScene)

  return (
    <section ref={ref} id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__eyebrow">{homeHero.eyebrow}</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__layer hero__layer--thin">
            <span className="hero__line hero__line--thin">{homeHero.headlineThin}</span>
          </span>
          <span className="hero__layer hero__layer--bold">
            <span className="hero__line hero__line--bold">{homeHero.headlineBold}</span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__sub">{homeHero.subhead}</p>

          {/* Glides Home to the Contact section (a same-path link, so Lenis keeps its glide). */}
          <Link
            to={homeHero.cta.to}
            className="hero__cta btn-line"
            onClick={(event) => {
              // A new-tab click (Ctrl / Cmd / middle) keeps the link's own behaviour.
              if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
              event.preventDefault()
              scrollToSection('contact')
            }}
          >
            {homeHero.cta.label}
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        <ul className="hero__focus" aria-label="Areas of focus">
          {homeHero.focus.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <figure className="hero__visual">
        <span className="hero__portrait-orbit" aria-hidden="true" />
        <img src={site.avatar.src} alt="Portrait of Edrixie" width={site.avatar.width} height={site.avatar.height} />
        <figcaption className="hero__portrait-note">
          <span>MY APPROACH</span>
          <b>Research-led.<br />Reader-focused.</b>
        </figcaption>
      </figure>
    </section>
  )
}
