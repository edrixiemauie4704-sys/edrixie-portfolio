import type { WorkChapter, WorkItem } from './schema'
import { method } from './method'
import { externalLinks } from './site'

/**
 * Home page copy. The hero pairs a thin line with a bold one. The bold line is sized in `cqi` in
 * features/home/hero/hero.css so it fills the column: re-measure it when you change the words
 * (see the comment on `.hero__title` there).
 */
export const homeHero = {
  eyebrow: 'CONTENT · SEO · DESIGN',
  headlineThin: 'Content that',
  headlineBold: 'connects.',
  subhead: 'I turn research into clear writing, thoughtful design, and SEO-friendly websites that help brands reach the right people.',
  cta: { label: 'Let’s work together', to: '/#contact' },
  focus: ['SEO content writing', 'Digital content support', 'Website design'],
}

/**
 * The statement under the hero: words light up as the page scrolls, each keyword lands bold and
 * moves the tracker. Replace the words, keep four keywords (the tracker shows them in order).
 * A string is plain words; `{ key }` is a keyword.
 */
export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'I bring',
    { key: 'research,' },
    'writing,',
    { key: 'design,' },
    'and digital tools together to make',
    { key: 'content' },
    'clear, useful, and',
    { key: 'reader-focused.' },
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Writing, design, and websites.',
  },
  proof: {
    eyebrow: 'Portfolio',
    title: 'Selected writing and creative work.',
  },
  objections: {
    eyebrow: 'Before you write',
    title: 'A little more about my process.',
  },
}

export const ctaBand = {
  title: 'Have a project in mind?',
  body: 'Get in touch to talk about content writing, digital marketing support, graphic design, or an SEO website.',
  button: 'Contact me',
}

/** The URL of a chapter's showcase sheet. Real, shareable and in the sitemap. */
export const chapterPath = (id: string) => `/work/${id}`

export const workSection = {
  ...homeSections.work,
  titleThin: 'Writing, design,',
  titleBold: 'and digital work.',
  all: { label: 'Explore the portfolio', to: '/work' },
}

const article = (id: string, name: string, group: string, href?: string, image?: WorkItem['image']): WorkItem => ({
  id,
  name,
  group,
  kicker: group,
  summary: 'Article sample from the portfolio.',
  ...(href ? { href } : {}),
  ...(image ? { image } : {}),
})

const screenshotCrop = (src: string, alt: string, width: number, height: number, x: number, y: number, cropWidth: number, cropHeight: number): WorkItem['image'] => ({
  src,
  alt,
  width,
  height,
  crop: { x, y, width: cropWidth, height: cropHeight },
})

const digitalSafetyCover = screenshotCrop('/images/seo-writing/digital-security.png', 'Laptop displaying a digital safety lock', 1200, 711, 429, 180, 352, 198)
const mobileSecurityCover = screenshotCrop('/images/seo-writing/digital-security.png', 'Phone secured with a chain and padlock', 1200, 711, 40, 481, 198, 198)
const sovereignCloudCover = screenshotCrop('/images/seo-writing/digital-security.png', 'Laptop and phone on a desk', 1200, 711, 808, 358, 334, 222)
const blockchainCover = screenshotCrop('/images/seo-writing/digital-security.png', 'Phone and notebook beside a blockchain note', 1200, 711, 800, 20, 342, 228)
const kcexCover = screenshotCrop('/images/seo-writing/digital-security.png', 'KCEX trading interface preview', 1200, 711, 40, 180, 371, 206)
const sportsFallbackCover = screenshotCrop('/images/seo-writing/sports.png', 'Sports balls and equipment', 1249, 712, 385, 0, 470, 95)
const cflCover = screenshotCrop('/images/seo-writing/sports.png', 'Canadian football game in a stadium', 1249, 712, 18, 22, 354, 202)
const mlbCover = screenshotCrop('/images/seo-writing/sports.png', 'Baseball stadium', 1249, 712, 18, 358, 344, 228)
const hockeyCover = screenshotCrop('/images/seo-writing/sports.png', 'Hockey players competing on the ice', 1249, 712, 386, 241, 472, 313)
const nascarCover = screenshotCrop('/images/seo-writing/sports.png', 'NASCAR race at Darlington', 1249, 712, 873, 357, 348, 198)
const gamingArticleCover = screenshotCrop('/images/seo-writing/entertainment.png', 'Neon game-on sign', 1407, 737, 1050, 124, 336, 190)
const musicCover = screenshotCrop('/images/seo-writing/entertainment.png', 'Concert crowd under stage lights', 1407, 737, 736, 444, 299, 197)
const showgirlCover = screenshotCrop('/images/seo-writing/entertainment.png', 'Performer holding a record award', 1407, 737, 45, 181, 671, 350)
const pokerCover = screenshotCrop('/images/seo-writing/entertainment.png', 'Colorful poker chips', 1407, 737, 733, 124, 302, 179)
const europeCover = screenshotCrop('/images/seo-writing/travel-lifestyle.png', 'Traveler overlooking a coastal landscape', 1264, 708, 60, 27, 331, 230)
const corporateTravelCover = screenshotCrop('/images/seo-writing/travel-lifestyle.png', 'Business travelers at an airport', 1264, 708, 876, 20, 357, 238)
const offlineTrendCover = screenshotCrop('/images/seo-writing/travel-lifestyle.png', 'Friends spending time together around vintage technology', 1264, 708, 412, 298, 443, 259)
const richmondCover = screenshotCrop('/images/seo-writing/travel-lifestyle.png', 'Cyclist riding through a green neighborhood', 1264, 708, 60, 374, 331, 221)
const layoverCover = screenshotCrop('/images/seo-writing/travel-lifestyle.png', 'Travel accessories arranged on a world map', 1264, 708, 876, 374, 357, 215)
const rockySmithImage = { src: '/images/graphic-design/rocky-smith-brand-identity.png', alt: 'Rocky Smith & Co. brand identity and logo presentation', width: 1414, height: 738 }
const chewtopiaImage = { src: '/images/graphic-design/chewtopia-packaging.png', alt: 'Chewtopia colorful packaging and brand design', width: 1373, height: 754 }
const positivePosterImage = { src: '/images/graphic-design/positive-poster.png', alt: 'Colorful positive affirmation poster design', width: 1192, height: 737 }
const chefAidPosterImage = { src: '/images/graphic-design/chef-aid-festival-poster.png', alt: 'Chef Aid Music Festival poster design', width: 1254, height: 749 }
const knoxvilleSiteImage = { src: '/images/websites/knoxville-epoxy-site.png', alt: 'Knoxville Epoxy Floor Pros website shown on desktop, tablet, and mobile', width: 1348, height: 766 }
const pslSiteImage = { src: '/images/websites/psl-wine-cellar-site.png', alt: 'PSL Custom Wine Cellar website shown on desktop and mobile', width: 1420, height: 756 }
const pawliesImage = { src: '/images/digital-marketing/pawlies-brand-campaign.png', alt: 'Pawlies cat food brand, packaging, and social campaign concepts', width: 1255, height: 717 }
const brewoImage = { src: '/images/digital-marketing/brewo-cafe-brand.png', alt: 'Brewo Cafe brand identity, packaging, menu, and promotional content', width: 1312, height: 740 }
const cutDistrictImage = { src: '/images/digital-marketing/cut-district-campaign.png', alt: 'The Cut District barbershop brand identity and campaign designs', width: 1248, height: 745 }
const kimchiImage = { src: '/images/digital-marketing/kimchi-packaging-campaign.png', alt: 'Kimchi product identity, packaging, and food campaign concepts', width: 1257, height: 733 }
const wanderluxeImage = { src: '/images/digital-marketing/wanderluxe-brand-campaign.png', alt: 'Wanderluxe travel agency brand identity and campaign designs', width: 1354, height: 678 }

/**
 * The Work chapters, in bento order. Add, remove or reorder a chapter here; the bento, the sheets and
 * the sitemap follow (the bento's grid areas in work.css are keyed by chapter id). A chapter with a
 * `lead` is a single build; one with no landscape picture shows category artwork instead.
 */
export const workChapters: WorkChapter[] = [
  {
    id: 'case-studies',
    title: 'Digital Security, AI & Technology',
    line: 'Research-driven writing on digital topics.',
    count: 5,
    unit: 'articles',
    description: 'Articles on digital safety, mobile security, artificial intelligence, privacy, and blockchain.',
    items: [
      article('nz-digital-safety', 'New Zealand Digital Safety Guide: Essential Tips for Tech-Savvy Travelers in 2026', 'Digital security', 'https://www.travelsafe-abroad.com/new-zealand-digital-safety-guide/', digitalSafetyCover),
      article('mobile-app-security', 'Enhancing Digital Resilience: Top Mobile App Security and Performance Trends for 2026', 'Digital security', 'https://jewishpostandnews.ca/features/enhancing-digital-resilience-top-mobile-app-security-and-performance-trends-for-2026/', mobileSecurityCover),
      article('sovereign-cloud', 'AI Agents and the Sovereign Cloud: How 2026 is Redefining Digital Privacy', 'Artificial intelligence', 'https://webtosociety.com/ai-agents-and-the-sovereign-cloud-how-2026-is-redefining-digital-privacy/', sovereignCloudCover),
      article('currencies-blockchain', 'How National Currencies and Blockchain Systems Collide in 2026', 'Blockchain', 'https://blockonomi.com/how-national-currencies-and-blockchain-systems-collide-in-2026/', blockchainCover),
      article('currencies-blockchain-kcex', 'How National Currencies and Blockchain Systems Collide in 2026 | KCEX News', 'Blockchain', 'https://www.kcex.com/news/17509', kcexCover),
    ],
  },
  {
    id: 'process',
    title: 'Sports',
    line: 'Sports coverage across major leagues and events.',
    count: 5,
    unit: 'articles',
    description: 'Sports articles covering football, NASCAR, baseball, hockey, and Canadian football.',
    items: [
      article('world-cup-preview', 'FIFA World Cup 2026 Group Stage Preview: Tactical Analysis and Predictions', 'Sports', 'https://hayters.com/fifa-world-cup-2026-group-stage-preview-tactical-analysis-and-predictions/', sportsFallbackCover),
      article('tyler-reddick', 'Tyler Reddick Dominates Darlington as 750HP Package Faces First Major Test', 'Sports', 'https://speedwaymedia.com/2026/04/02/tyler-reddick-dominates-darlington-as-750hp-package-faces-first-major-test/', nascarCover),
      article('mlb-trade-deadline', 'MLB Trade Deadline 2026: Why Bubble Teams Hold the Keys to the August Marketplace', 'Sports', 'https://baseballegg.com/2026/07/08/mlb-trade-deadline-2026-why-bubble-teams-hold-the-keys-to-the-august-marketplace/', mlbCover),
      article('nhl-contenders', 'Canadian NHL Contenders: Why Leafs, Oilers, and Canucks Performance Requires an Urgent Rethink', 'Sports', 'https://www.sportsgamblingpodcast.com/2025/11/21/canadian-nhl-contenders-why-leafs-oilers-and-canucks-performance-requires-an-urgent-rethink/', hockeyCover),
      article('cfl-final-four', 'The Final Four: Breaking Down the Unstoppable Forces in the 2025 CFL Division Finals', 'Sports', 'https://thesportscast.net/2025/11/07/the-final-four-breaking-down-the-unstoppable-forces-in-the-2025-cfl-division-finals/', cflCover),
    ],
  },
  {
    id: 'screens',
    title: 'Gaming & Entertainment',
    line: 'Culture, entertainment, and gaming stories.',
    count: 5,
    unit: 'articles',
    description: 'Writing on gaming, music, pop culture, poker, and retro-gaming.',
    items: [
      article('gaming-work-education', 'Beyond the Console: How Gaming is Reshaping the Future of Work and Education', 'Gaming & entertainment', 'https://wealthybyte.com/beyond-the-console-how-gaming-is-reshaping-the-future-of-work-and-education/', gamingArticleCover),
      article('sonic-collisions', 'Sonic Collisions: Why 2026 Is the Year of the Unexpected Musical Hybrid', 'Gaming & entertainment', undefined, musicCover),
      article('life-of-a-showgirl', 'Taylor Swift’s The Life of a Showgirl Goes Platinum in NZ: Chart Chaos in Aotearoa', 'Gaming & entertainment', 'https://www.contactmusic.com/story/470/3411475/taylor-swift-s-the-life-of-a-showgirl-goes-platinum-in-nz-chart-chaos-in-aotearoa', showgirlCover),
      article('regional-poker', 'The Rise of Regional Powerhouses: Why Alberta and Quebec Dominate the Canadian Poker Map in 2026', 'Gaming & entertainment', 'https://pokerdiscover.com/blog/the-rise-of-regional-powerhouses-why-alberta-and-quebec-dominate-the-canadian-poker-map-in-2026', pokerCover),
      article('retro-gaming', 'Local Businesses Report Surge in “Retro-Gaming” Trend; What’s Behind the Nostalgia?', 'Gaming & entertainment', 'https://breakingac.com/news-from-our-partners/local-businesses-report-surge-in-retro-gaming-trend-whats-behind-the-nostalgia/'),
    ],
  },
  {
    id: 'websites',
    title: 'Travel & Lifestyle',
    line: 'Practical travel and lifestyle stories.',
    count: 5,
    unit: 'articles',
    description: 'Travel and lifestyle articles on offline culture, business travel, layovers, places to live, and Europe.',
    items: [
      article('offline-is-online', 'The “Offline Is the New Online” Trend: Why Gen Z is Ditching Screens for Vintage Tech and IRL Culture', 'Travel & lifestyle', 'https://www.cuindependent.com/the-offline-is-the-new-online-trend-why-gen-z-is-ditching-screens-for-vintage-tech-and-irl-culture/', offlineTrendCover),
      article('corporate-travel-budget', 'Corporate Travel on a Budget: How Strategic Sponsorships & Partnerships are Shaping UK Business Trips', 'Travel & lifestyle', 'https://travellingforbusiness.co.uk/content/corporate-travel-on-a-budget-how-strategic-sponsorships-partnerships-are-shaping-uk-business-trips/', corporateTravelCover),
      article('canada-layover', '5 Ways Canadians Can Stay Busy During a Long Layover', 'Travel & lifestyle', 'https://traveltweaks.com/5-ways-canadians-can-stay-busy-during-a-long-layover-68762/', layoverCover),
      article('richmond-fulham', 'Why Richmond and Fulham Topped the Best Places to Live 2026 List: South West London’s Green Revolution', 'Travel & lifestyle', 'https://www.swlondoner.co.uk/life/02042026-why-richmond-and-fulham-topped-the-best-places-to-live-2026-list-south-west-londons-green-revolution', richmondCover),
      article('europe-off-season', 'The Smart Way to Travel Europe: Off-Season Tips for Fewer Crowds and Better Value', 'Travel & lifestyle', 'https://continenthop.com/blog/smart-way-to-travel-europe/', europeCover),
    ],
  },
  {
    id: 'featured',
    title: 'Digital Marketing & Content Support',
    line: 'Brand identity, content, and campaign visuals.',
    count: 5,
    unit: 'projects',
    description: 'Brand identity, packaging, social content, and campaign design concepts for pet food, coffee, grooming, food, and travel brands.',
    lead: pawliesImage,
    gallery: [brewoImage, cutDistrictImage, kimchiImage, wanderluxeImage],
    link: { label: 'View more Canva designs', href: externalLinks.designs, external: true },
    items: [
      { id: 'pawlies-brand-campaign', name: 'Pawlies Pet Food', kicker: 'Brand identity & campaign', summary: 'A warm pet food concept spanning packaging, product visuals, and social content.', image: pawliesImage, href: externalLinks.designs },
      { id: 'brewo-cafe-brand', name: 'Brewo Cafe', kicker: 'Cafe branding', summary: 'A friendly cafe identity carried through menus, packaging, and promotional content.', image: brewoImage, href: externalLinks.designs },
      { id: 'cut-district-campaign', name: 'The Cut District', kicker: 'Barbershop campaign', summary: 'A confident barbershop identity with campaign graphics and social media designs.', image: cutDistrictImage, href: externalLinks.designs },
      { id: 'kimchi-packaging-campaign', name: 'Kimchi', kicker: 'Packaging & content', summary: 'A fresh product identity with packaging and food-focused promotional visuals.', image: kimchiImage, href: externalLinks.designs },
      { id: 'wanderluxe-brand-campaign', name: 'Wanderluxe Travel Agency', kicker: 'Travel branding', summary: 'A travel brand expressed through identity, destination materials, and service content.', image: wanderluxeImage, href: externalLinks.designs },
    ],
  },
  {
    id: 'apps',
    title: 'SEO Website Portfolio',
    line: 'Two published websites from the portfolio.',
    count: 2,
    unit: 'websites',
    description: 'A pair of published SEO websites, available to open live.',
    items: [
      article('knoxville-epoxy-site', 'Knoxville Epoxy Floor Pros', 'Website design', 'https://ibis986377fa.ippeisite.com/', knoxvilleSiteImage),
      article('psl-wine-cellar-site', 'PSL Custom Wine Cellar', 'Website design', 'https://caribou33a2b6ec.ippeisite.com/', pslSiteImage),
    ],
  },
  {
    id: 'side-projects',
    title: 'Graphic Design',
    line: 'Branding and marketing visuals.',
    count: 4,
    unit: 'projects',
    description: 'A selection of brand identity, packaging, poster, and campaign design work.',
    lead: rockySmithImage,
    gallery: [chewtopiaImage, positivePosterImage, chefAidPosterImage],
    link: { label: 'View more Canva designs', href: externalLinks.designs, external: true },
    items: [
      { id: 'rocky-smith-brand-identity', name: 'Rocky Smith & Co. Brand Identity', kicker: 'Brand identity', summary: 'A bold identity presentation for a contemporary creative brand.', image: rockySmithImage, href: externalLinks.designs },
      { id: 'chewtopia-packaging', name: 'Chewtopia Packaging Design', kicker: 'Packaging', summary: 'A playful product packaging concept built around bright color and expressive type.', image: chewtopiaImage, href: externalLinks.designs },
      { id: 'positive-affirmation-poster', name: 'Positive Affirmation Poster', kicker: 'Poster design', summary: 'A colorful typographic poster designed to feel upbeat and encouraging.', image: positivePosterImage, href: externalLinks.designs },
      { id: 'chef-aid-festival-poster', name: 'Chef Aid Music Festival Poster', kicker: 'Campaign design', summary: 'An illustrated festival poster combining food, music, and event details.', image: chefAidPosterImage, href: externalLinks.designs },
    ],
  },
]

/** The writing service brings the four article topics together on one shareable showcase page. */
export const seoWritingChapter: WorkChapter = {
  id: 'seo-writing',
  title: 'SEO Content Writing',
  line: 'Research-led articles for search and people.',
  count: 20,
  unit: 'articles',
  description: 'A selection of research-driven articles across digital security and technology, sports, gaming and entertainment, and travel and lifestyle.',
  items: workChapters
    .filter((chapter) => ['case-studies', 'process', 'screens', 'websites'].includes(chapter.id))
    .flatMap((chapter) => chapter.items),
}

export const findChapter = (id: string | undefined) =>
  id === seoWritingChapter.id ? seoWritingChapter : workChapters.find((chapter) => chapter.id === id)
