import type { Image } from './schema'
import { site } from './site'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I began creating research-driven content in 2022, writing to make ideas easier to understand, more engaging, and more useful to readers.',
  lead: 'Thoughtful content, made for people.',
  leadQuiet: 'I start with audience research, then shape each piece to be clear, accurate, and genuinely useful.',
  note: {
    company: 'I begin by understanding the audience and the intent behind a search.',
    product: { label: 'My writing focuses on clarity, accuracy, and readability.', href: 'https://itxmyportfolio.my.canva.site/applicant-edrixie-s-portfolio/writing-portfolio' },
    rest: '',
  },
  picture: {
    src: '/images/profile/edrixie-cutout.png',
    alt: `Portrait of ${site.name}`,
    width: 1100,
    height: 1430,
  } satisfies Image,
}

export const capabilities: { title: string }[] = [
  { title: 'SEO content writing' },
  { title: 'Digital content support' },
  { title: 'Graphic design' },
  { title: 'SEO website design' },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'place', title: 'Research-led', detail: 'Audience and search intent come first.' },
  { id: 'community', title: 'Reader-focused', detail: 'Clear, accurate, useful content.' },
  { id: 'partner', title: 'Visual storytelling', detail: 'Design and digital content for brands.' },
]
