import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/**
 * Shared visual marks for service skills and writing platforms. Pages reference these, never a raw path.
 * The numbered marks are replaceable skill placeholders; the named brand marks are local SVG logos.
 */
export const tools = {
  toolA: mark('Research', 'tool-01.svg'),
  toolB: mark('SEO', 'tool-02.svg'),
  toolC: mark('Writing', 'tool-03.svg'),
  toolD: mark('Content strategy', 'tool-04.svg'),
  toolE: mark('Branding', 'tool-05.svg'),
  toolF: mark('Social media', 'tool-06.svg'),
  toolG: mark('Graphic design', 'tool-07.svg'),
  toolH: mark('Visual storytelling', 'tool-08.svg'),
  toolI: mark('Marketing materials', 'tool-09.svg'),
  toolJ: mark('Website design', 'tool-10.svg'),
  toolK: mark('Digital content', 'tool-11.svg'),
  toolL: mark('Editing', 'tool-12.svg'),
  googleDocs: mark('Google Docs', 'google-docs.svg'),
  chatgpt: mark('ChatGPT', 'chatgpt.svg'),
  claude: mark('Claude', 'claude.svg'),
  gemini: mark('Gemini', 'gemini.svg'),
  perplexity: mark('Perplexity', 'perplexity.svg'),
  squarespace: mark('Squarespace', 'squarespace.svg'),
  grammarly: mark('Grammarly', 'grammarly.svg'),
  searchConsole: mark('Search Console', 'search-console.svg'),
  semrush: mark('Semrush', 'semrush.svg'),
  ahrefs: mark('Ahrefs', 'ahrefs.svg'),
  surfer: mark('Surfer', 'surfer.svg'),
  canva: mark('Canva', 'canva.svg'),
  metaBusiness: mark('Meta Business Suite', 'meta-business.svg'),
  buffer: mark('Buffer', 'buffer.svg'),
  googleAnalytics: mark('Google Analytics', 'google-analytics.svg'),
  mailchimp: mark('Mailchimp', 'mailchimp.svg'),
  capcut: mark('CapCut', 'capcut.svg'),
  pagespeed: mark('PageSpeed Insights', 'pagespeed.svg'),
  wordpress: mark('WordPress', 'wordpress.svg'),
  wix: mark('Wix', 'wix.svg'),
  webflow: mark('Webflow', 'webflow.svg'),
  yoast: mark('Yoast SEO', 'yoast.svg'),
  rankMath: mark('Rank Math', 'rank-math.svg'),
  illustrator: mark('Illustrator', 'illustrator.svg'),
  photoshop: mark('Photoshop', 'photoshop.svg'),
  adobeExpress: mark('Adobe Express', 'adobe-express.svg'),
  figma: mark('Figma', 'figma.svg'),
} satisfies Record<string, ToolMark>

/** The daily drivers, in the order you want them shown. */
export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolC,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolG,
  tools.toolH,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
]
