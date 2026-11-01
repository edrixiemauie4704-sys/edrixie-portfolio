import { ArrowUpRight, Printer } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { externalLinks, site } from '@/content/site'
import './pages.css'

const strengths = ['SEO content writing', 'Digital content support', 'SEO website design', 'Graphic design']
const resumeTools = ['Google Docs', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Canva', 'Google Search Console', 'Semrush', 'Squarespace']

export function ResumePage({ page }: { page: PageRoute }) {
  return (
    <div className="pg rs">
      <PageMeta page={page} />
      <header className="rs__header">
        <div><p className="pg-mono">Resume · Portfolio profile</p><h1>{site.name}</h1><p className="rs__role">{site.role}</p></div>
        <div className="rs__actions">
          <a className="pg-btn" href={externalLinks.resume} target="_blank" rel="noreferrer">Open full resume <ArrowUpRight size={16} weight="bold" aria-hidden /></a>
          <button className="pg-btn" type="button" onClick={() => window.print()}><Printer size={16} weight="bold" aria-hidden /> Print this page</button>
        </div>
      </header>
      <div className="rs__contact"><span>Philippines · UTC+8</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <section className="rs__section"><h2>Profile</h2><p>Research-driven content writer and digital content specialist creating clear, reader-focused online content since 2022. My work spans SEO writing, digital marketing content, website projects, and visual design.</p></section>
      <section className="rs__section"><h2>Strengths</h2><ul className="rs__strengths">{strengths.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="rs__section"><h2>Tools</h2><p>{resumeTools.join(' · ')}</p></section>
      <footer className="rs__footer"><span>Full resume available through the link above.</span><a href="/">Portfolio home</a></footer>
    </div>
  )
}
