import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'What I create',
  title: 'Writing, design, and digital content.',
  lede: 'Content creation, design, research, and digital support to strengthen online brand presence.',
}

/** The Home Services section: display copy, work destinations, and service cards. */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'What I',
  titleBold: 'create.',
  explore: 'View work',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: { 'service-1': 'seo-writing', 'service-2': 'featured', 'service-3': 'apps', 'service-4': 'side-projects' } as Record<string, string>,
}

const writingBullets: [string, string, string] = ['Articles & Amazon A+ Content', 'Storybooks & workbooks', 'Etsy listing copy']

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'SEO Content Writing',
    summary: 'SEO-aware articles, Amazon A+ Content, Etsy listing copy, storybooks, and workbooks shaped around their readers.',
    outcome: 'Clear and useful',
    bullets: writingBullets,
    tools: [tools.googleDocs, tools.chatgpt, tools.claude, tools.gemini, tools.perplexity, tools.grammarly, tools.searchConsole, tools.semrush, tools.ahrefs, tools.surfer],
  },
  {
    id: 'service-2',
    title: 'Digital Marketing & Content Support',
    summary: 'Social content, Etsy listing visuals, and campaign support that keep product brands consistent across channels.',
    outcome: 'Brand-ready content',
    bullets: ['Social media content', 'Etsy product listings', 'Campaign support'],
    tools: [tools.canva, tools.metaBusiness, tools.buffer, tools.googleAnalytics, tools.mailchimp, tools.capcut],
  },
  {
    id: 'service-3',
    title: 'SEO Website Design',
    summary: 'Published website projects presented in the portfolio.',
    outcome: 'Published websites',
    bullets: ['SEO-focused work', 'Two live samples', 'Open published sites'],
    tools: [tools.squarespace, tools.searchConsole, tools.googleAnalytics, tools.pagespeed, tools.wordpress, tools.wix, tools.webflow, tools.yoast, tools.rankMath],
  },
  {
    id: 'service-4',
    title: 'Graphic Design',
    summary: 'Brand and marketing design, including original book covers and coordinated back-cover layouts.',
    outcome: 'Visual storytelling',
    bullets: ['Front & back book covers', 'Brand identity', 'Marketing graphics'],
    tools: [tools.canva, tools.illustrator, tools.photoshop, tools.adobeExpress, tools.figma],
  },
]
