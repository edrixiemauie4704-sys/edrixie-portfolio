import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { chapterPath, workChapters } from '@/content/home'
import { externalLinks } from '@/content/site'
import { chapterPicture } from '@/features/home/work/chapter-picture'
import './pages.css'

const featuredIds = ['featured', 'apps', 'side-projects', 'case-studies']
const featured = featuredIds.map((id) => workChapters.find((chapter) => chapter.id === id)).filter((chapter) => chapter !== undefined)

export function ShowcasePage({ page }: { page: PageRoute }) {
  return (
    <div className="pg ps">
      <PageMeta page={page} />
      <PageHeader eyebrow="A closer look" titleThin="Ideas, made" titleBold="visible." lede="A visual selection of digital marketing, website, and graphic design projects. Open any collection to see the work in context." />
      <div className="ps__grid">
        {featured.map((chapter, index) => {
          const image = chapterPicture(chapter)
          return (
            <Link className={`ps__card ps__card--${index + 1}`} to={chapterPath(chapter.id)} state={{ sheet: true }} key={chapter.id}>
              <span className="ps__image">
                {image ? <img src={image.src} alt="" width={image.width} height={image.height} loading={index < 2 ? 'eager' : 'lazy'} /> : <span className="ps__fallback">{chapter.title}</span>}
                <span className="ps__number">{String(index + 1).padStart(2, '0')}</span>
              </span>
              <span className="ps__copy"><b>{chapter.title}</b><span>{chapter.line}</span></span>
              <ArrowUpRight className="ps__arrow" size={19} weight="bold" aria-hidden />
            </Link>
          )
        })}
      </div>
      <a className="pg-btn ps__external" href={externalLinks.designs} target="_blank" rel="noreferrer">Browse Canva designs <ArrowUpRight size={16} weight="bold" aria-hidden /></a>
    </div>
  )
}
