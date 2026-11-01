import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What kind of work is in this portfolio?',
    answer: 'SEO content writing, digital marketing and content support, SEO website design, and graphic design.',
  },
  startSpeed: {
    question: 'How do you approach SEO writing?',
    answer: 'I begin by researching the topic, audience, and search intent, then focus on clear, accurate, readable content.',
  },
  needStack: {
    question: 'What topics do you write about?',
    answer: 'Samples cover digital security, artificial intelligence, technology, sports, gaming and entertainment, travel, and lifestyle.',
  },
  pricing: {
    question: 'Are the article samples published under your name?',
    answer: 'Some were created as part of agency work and appear under the agency’s or client’s name rather than a personal byline.',
  },
  afterWrite: {
    question: 'Where can I see the published website samples?',
    answer: 'Open the SEO Website Portfolio section to visit both published site samples.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
