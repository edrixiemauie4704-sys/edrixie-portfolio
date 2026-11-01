import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { chapterPath, seoWritingChapter, workChapters } from '@/content/home'
import { externalLinks } from '@/content/site'
import { chapterPicture } from '@/features/home/work/chapter-picture'
import './pages.css'

const featured = [
  { chapter: workChapters.find((chapter) => chapter.id === 'featured')!, title: 'Digital Marketing', detail: 'Brand identity, content, and campaign visuals.' },
  { chapter: workChapters.find((chapter) => chapter.id === 'apps')!, title: 'SEO Website Published Works', detail: 'Two published website projects.' },
  { chapter: workChapters.find((chapter) => chapter.id === 'side-projects')!, title: 'Graphic Design', detail: 'Branding, packaging, and marketing visuals.' },
  { chapter: seoWritingChapter, title: 'SEO Writing Published Works', detail: 'Published articles across technology, sports, culture, and travel.' },
]

export function ShowcasePage({ page }: { page: PageRoute }) {
  return (
    <div className="pg ps">
      <PageMeta page={page} />
      <PageHeader eyebrow="A closer look" titleThin="Ideas, made" titleBold="visible." lede="Explore digital marketing, published SEO website projects, graphic design, and published SEO writing—all gathered in one place." />
      <div className="ps__grid">
        {featured.map(({ chapter, title, detail }, index) => {
          const image = chapterPicture(chapter)
          const cropScale = image?.crop ? Math.max(1 / image.crop.width, 1 / (1.55 * image.crop.height)) : 0
          return (
            <Link className={`ps__card ps__card--${index + 1}`} to={chapterPath(chapter.id)} state={{ sheet: true }} key={chapter.id}>
              <span className="ps__image">
                {image ? image.crop ? (
                  <span className="ps__crop">
                    <img
                      src={image.src}
                      alt=""
                      width={image.width}
                      height={image.height}
                      style={{
                        width: `${image.width * cropScale * 100}cqw`,
                        left: `${-image.crop.x * cropScale * 100}cqw`,
                        top: `${-image.crop.y * cropScale * 100}cqw`,
                      }}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </span>
                ) : <img src={image.src} alt="" width={image.width} height={image.height} loading={index < 2 ? 'eager' : 'lazy'} /> : <span className="ps__fallback">{chapter.title}</span>}
                <span className="ps__number">{String(index + 1).padStart(2, '0')}</span>
              </span>
              <span className="ps__copy"><b>{title}</b><span>{detail}</span></span>
              <ArrowUpRight className="ps__arrow" size={19} weight="bold" aria-hidden />
            </Link>
          )
        })}
      </div>
      <a className="pg-btn ps__external" href={externalLinks.designs} target="_blank" rel="noreferrer">Browse Canva designs <ArrowUpRight size={16} weight="bold" aria-hidden /></a>
    </div>
  )
}
