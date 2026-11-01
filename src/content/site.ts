import type { SocialLink } from './schema'

/**
 * Who the site is about. START HERE: every page, the sidebar, the SEO tags and the legal pages read
 * these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Edrixie',
  brand: 'Edrixie Portfolio',
  /** The brand name as the sidebar logo shows it: the second part takes the accent color. */
  brandParts: ['Edrixie', 'Portfolio'],
  /** Your logo mark, one file per theme (`light` = for light backgrounds). The 96px copies are the
   *  sidebar header (shown at 32-36px); the full ones are the Work logo faces. */
  logo: {
    light: '/images/brand/mark.webp',
    dark: '/images/brand/mark-light.webp',
    headerLight: '/images/brand/mark-96.webp',
    headerDark: '/images/brand/mark-light-96.webp',
  },
  /** The live address, no trailing slash. Canonical URLs, the sitemap and the JSON-LD use it. */
  url: 'https://edrixieportfolio.com',
  role: 'Content Writer · Digital Content Specialist',
  email: 'edrixiemauie4704@gmail.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within one business day.',
  location: '',
  /** Two-letter country code (ISO 3166) for the Person JSON-LD address. */
  countryCode: '',
  /** Your clock, shown live at the top of the sidebar. Any IANA zone, e.g. 'America/New_York'. */
  timeZone: 'UTC',
  timePlace: '',
  avatar: { src: '/images/profile/edrixie-cutout.png', alt: 'Edrixie', width: 1100, height: 1430 },
  /** The sidebar picture (112px, 44px on the rail). */
  avatarSmall: '/images/profile/edrixie-cutout.png',
} as const

/** Up to five fit the sidebar header. `icon` picks the glyph in components/brand/SocialIcon.tsx. */
export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edrixiemauie', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/edrixieee?exln=MWw1dnQxc3gzMXVoYg%3D%3D&utm_source=qr', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1StrLHmNv3/?mibextid=wwXIfr', icon: 'facebook' },
]

/** Portfolio links shared by Edrixie. */
export const externalLinks = {
  resource: 'https://itxmyportfolio.my.canva.site/applicant-edrixie-s-portfolio',
  resume: 'https://drive.google.com/file/d/1pHzIyoOLnwWXTlscLV78H-WvLnGyPKUQ/view?usp=sharing',
  designs: 'https://drive.google.com/drive/folders/1e_80Kx9oUG1hUEiCRqxaTPgeGLI50KPW',
  whatsapp: 'https://wa.me/639532565819',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
