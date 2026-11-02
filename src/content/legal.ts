import { site } from './site'

export type LegalSection = {
  heading: string
  paragraphs: string[]
  links?: { label: string; href: string }[]
}

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** Keep the privacy details aligned with src/lib/storage.ts and the mailto-only contact form. */
export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'November 3, 2026',
  intro: `This notice explains how ${site.name} handles information when you visit ${site.url.replace('https://', '')}. The portfolio does not require an account, and its contact form does not submit information to a website server.`,
  sections: [
    {
      heading: 'Information you choose to send',
      paragraphs: [
        `The contact form prepares an email in your own mail app. It does not transmit or store the form fields on this website. If you choose to send that email, ${site.email} receives the name, reply address, message, and any other information you include.`,
        'I use correspondence to reply to your inquiry and, where relevant, discuss or provide requested services. I keep it only for as long as it is reasonably needed for those purposes or to meet applicable record-keeping obligations. You can ask me to correct or delete information by emailing the address below; some records may need to be kept where the law requires it.',
      ],
    },
    {
      heading: 'Information stored in your browser',
      paragraphs: [
        'This site saves your light or dark theme preference and whether the navigation sidebar is collapsed in your browser’s local storage. These preferences stay on your device and are not sent to the portfolio. You can clear them through your browser’s site-data settings.',
      ],
    },
    {
      heading: 'Analytics and cookies',
      paragraphs: [
        'The current site build does not load an analytics or advertising service, and the portfolio itself does not use tracking cookies. Cloudflare, which delivers and protects the site, may process technical request information and use security measures, which can include cookies, to operate its network.',
      ],
    },
    {
      heading: 'Hosting and external websites',
      paragraphs: [
        'Cloudflare hosts this portfolio and may process technical data such as an IP address, requested page, request time, and browser or device information to deliver, secure, and troubleshoot the site. Its handling of that information is also governed by Cloudflare’s own privacy terms.',
        'Links to LinkedIn, Instagram, Facebook, Google Drive, Canva, publishers, and other services take you to third-party websites. Those services have their own privacy practices; this policy does not cover them.',
      ],
      links: [{ label: 'Cloudflare Privacy Policy', href: 'https://www.cloudflare.com/privacypolicy/' }],
    },
    {
      heading: 'Your privacy choices',
      paragraphs: [
        `If you are in the Philippines, the Data Privacy Act of 2012 may provide rights regarding personal information, including the right to be informed, access or correct information, object to certain processing, request erasure or blocking, and raise a concern with the National Privacy Commission. These rights are subject to the conditions and exceptions in law. Contact ${site.email} to make a request.`,
      ],
      links: [
        { label: 'Data Privacy Act of 2012 (Official Gazette)', href: 'https://officialgazette.gov.ph/2012/15/republic-act-no-10173/' },
        { label: 'National Privacy Commission · Data Subject Rights', href: 'https://privacy.gov.ph/data-subject-rights/' },
      ],
    },
    {
      heading: 'Changes to this notice',
      paragraphs: ['If the site’s data practices change, this notice will be updated and the revision date above will change.'],
    },
    {
      heading: 'Contact',
      paragraphs: [`For privacy questions or requests, email ${site.email}.`],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'November 3, 2026',
  intro: `These terms apply when you use ${site.url.replace('https://', '')}, the portfolio of ${site.name} (${site.brand}). By browsing the site, you agree to use it lawfully and in line with these terms.`,
  sections: [
    {
      heading: 'Using this portfolio',
      paragraphs: [
        'You may browse the site and share links to its public pages for personal, informational, or hiring purposes. Do not interfere with the site, attempt unauthorized access, misuse its contact details, or copy its content for commercial use without permission.',
        'Some portfolio pieces are concepts or sample work. Project names, visual mockups, and examples are shown to illustrate creative work; they do not imply endorsement, partnership, or a relationship with a named brand unless the page explicitly says so.',
      ],
    },
    {
      heading: 'Inquiries and professional services',
      paragraphs: [
        'Portfolio descriptions are informational and are not an offer to provide services on fixed terms. Sending an inquiry does not create a client relationship. Any project begins only after both parties agree in writing on its scope, schedule, fees, deliverables, and applicable rights.',
        'No search ranking, traffic, sales, audience response, or other business result is guaranteed. Outcomes depend on factors beyond the portfolio owner’s control and any project agreement.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'Edrixie’s original writing and creative work remain hers or belong to the relevant rights holders, as applicable. You may view the work and share links to it; copying, republishing, adapting, or using it commercially requires permission from the relevant rights holder.',
        'The website’s underlying template and code are by BrewedOps and remain subject to the PolyForm Noncommercial License 1.0.0 and the template’s additional permission for this portfolio. That permission allows this portfolio to be built, hosted, and used to present Edrixie and her services; it does not permit reselling the template or building websites from it for others for payment.',
        'Third-party names, logos, publications, and linked work remain the property of their respective owners and are shown for identification, attribution, or portfolio context. Rights to commissioned work are determined by the written agreement for that project.',
      ],
      links: [
        { label: 'BrewedOps portfolio template', href: 'https://github.com/brewed-ops/portfoliov2-template' },
        { label: 'PolyForm Noncommercial License 1.0.0', href: 'https://polyformproject.org/licenses/noncommercial/1.0.0/' },
      ],
    },
    {
      heading: 'Availability and information',
      paragraphs: [
        'The site is provided as available. I aim to keep its information useful and current, but content may change and I do not promise uninterrupted access or that every item will always be complete or error-free. Portfolio information is general and is not professional, legal, financial, or technical advice.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: [
        'External links are included for convenience or to show published work. They lead to services operated by others; I do not control their content, availability, or terms. Your use of those services is governed by their own terms and policies.',
      ],
    },
    {
      heading: 'Changes to these terms',
      paragraphs: ['These terms may be updated as the portfolio changes. The revision date above shows when this page was most recently updated.'],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the Philippines, without limiting any mandatory protections that apply to you. Disputes relating to use of this site are subject to the jurisdiction of the competent courts in the Philippines.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about these terms: ${site.email}.`],
    },
  ],
}
