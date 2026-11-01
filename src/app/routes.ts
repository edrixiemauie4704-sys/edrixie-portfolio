import type { Icon } from '@phosphor-icons/react'
import { Briefcase, Compass, Envelope, FileText, House, Images, Palette, ShieldCheck, Stack, User } from '@phosphor-icons/react'
import { externalLinks, site } from '@/content/site'

/**
 * The route registry: the one list that drives the router, the sidebar, the search palette
 * and every page title. Add a page = add one entry here.
 */

export type NavGroupId = 'menu' | 'discover' | 'general' | 'appearance'

export const NAV_GROUPS: { id: NavGroupId; label: string }[] = [
  { id: 'menu', label: 'Explore' },
  { id: 'general', label: 'About & Contact' },
  { id: 'discover', label: 'Resources' },
  { id: 'appearance', label: 'Appearance' },
]

export type PageRoute = {
  kind: 'page'
  id: string
  path: string
  /** Short name for the sidebar and search. */
  label: string
  /** Unique document title. */
  title: string
  description: string
  icon: Icon
  /** Omit to keep the page out of the sidebar (legal pages). */
  group?: NavGroupId
  badge?: number
  /** A Home section id: the sidebar and search scroll Home to it instead of opening `path`. */
  section?: string
  /** Still the RouteStage placeholder: kept out of the sitemap (RouteStage also marks it noindex).
   *  Remove when the page is built and registered in router.tsx PAGE_COMPONENTS. */
  draft?: true
}

export type ExternalRoute = {
  kind: 'external'
  id: string
  href: string
  label: string
  description: string
  icon: Icon
  group: NavGroupId
}

export type NavEntry = PageRoute | ExternalRoute

/** Every page title ends with your name (content/site.ts). */
const SUFFIX = site.name

export const pages: PageRoute[] = [
  {
    kind: 'page',
    id: 'home',
    path: '/',
    label: 'Home',
    title: `${SUFFIX} | SEO Content Writer & Digital Content Specialist`,
    description: 'Explore Edrixie’s SEO articles, website copy, digital marketing content, and graphic design portfolio.',
    icon: House,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'work',
    path: '/work',
    label: 'Projects',
    title: `Work | ${SUFFIX}`,
    description: 'SEO content writing, digital marketing support, published websites, and graphic design.',
    icon: Briefcase,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'services',
    path: '/services',
    label: 'Services',
    title: `Services | ${SUFFIX}`,
    description: 'A look at the writing, digital content, website, and design work in the portfolio.',
    icon: Stack,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'showcase',
    path: '/showcase',
    label: 'Showcase',
    title: `Showcase | ${SUFFIX}`,
    description: 'A visual selection of Edrixie’s writing, design, digital marketing, and website projects.',
    icon: Images,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'about',
    path: '/about',
    label: 'About',
    title: `About & Resume | ${SUFFIX}`,
    description: 'Read Edrixie’s full resume, including content writing experience, teaching practice, education, honors, and skills.',
    icon: User,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    title: `Contact | ${SUFFIX}`,
    description: 'Get in touch about content writing, digital marketing support, SEO website design, or graphic design.',
    icon: Envelope,
    group: 'general',
  },
  {
    kind: 'page',
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    title: `Privacy Policy | ${SUFFIX}`,
    description: 'What this site stores, what it does not, and how to ask for your data.',
    icon: ShieldCheck,
  },
  {
    kind: 'page',
    id: 'terms',
    path: '/terms',
    label: 'Terms of Service',
    title: `Terms of Service | ${SUFFIX}`,
    description: 'The terms for using this portfolio site.',
    icon: FileText,
  },
]

export const externals: ExternalRoute[] = [
  {
    kind: 'external',
    id: 'designs',
    href: externalLinks.designs,
    label: 'Canva designs',
    description: 'Browse Edrixie’s Canva design portfolio.',
    icon: Palette,
    group: 'discover',
  },
  {
    kind: 'external',
    id: 'resource',
    href: externalLinks.resource,
    label: 'Previous portfolio',
    description: 'Visit Edrixie’s previous portfolio, with writing, website, digital marketing, and graphic design samples.',
    icon: Compass,
    group: 'discover',
  },
]

/** Sidebar entries per group, in registry order (pages first, then external links). */
export function navEntries(group: NavGroupId): NavEntry[] {
  const order: Record<string, number> = {
    home: 0,
    work: 1,
    services: 2,
    showcase: 3,
    about: 4,
    contact: 5,
  }
  return [...pages.filter((p) => p.group === group), ...externals.filter((e) => e.group === group)]
    .sort((a, b) => (order[a.id] ?? 100) - (order[b.id] ?? 100))
}

/** Where a nav entry goes: its Home section when it has one, else its page. */
export function navTarget(page: PageRoute): string {
  return page.section ? `/#${page.section}` : page.path
}

export const notFoundTitle = `Page Not Found | ${SUFFIX}`
