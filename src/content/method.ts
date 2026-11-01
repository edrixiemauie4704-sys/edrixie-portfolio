import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'My Approach',
  title: 'Research. Write. Refine.',
  summary: 'I start with the audience and search intent, shape the story with clear writing, then refine it for accuracy, readability, and SEO.',
  steps: [
    { name: 'Research', body: 'Understand the topic, audience, and intent behind the search.', inputs: ['Topic research', 'Audience needs', 'Search intent', 'Source review'] },
    { name: 'Write', body: 'Turn the research into useful, engaging content with a clear structure.', inputs: ['Article outline', 'Clear language', 'Useful detail'] },
    { name: 'Refine', body: 'Review accuracy, readability, and SEO before the final handoff.', inputs: ['Fact check', 'Readability', 'SEO review'] },
  ] satisfies MethodStep[],
}
