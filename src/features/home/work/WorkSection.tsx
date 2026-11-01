import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { chapterPath, workChapters, workSection } from '@/content/home'
import { chapterPicture } from './chapter-picture'
import { ChapterFace } from './ChapterFace'
import './work.css'

/** Tiles are lazy, so Chrome reads their real width (`auto`); the fallback is the largest tile's share
 *  of the screen (measured: ~37vw from 1280 up, ~62vw at 1024, ~85vw on phones). */
const TILE_SIZES = 'auto, (min-width: 1280px) 38vw, (min-width: 1024px) 62vw, 88vw'
const DISPLAY_ORDER = ['featured', 'websites', 'apps', 'screens', 'case-studies', 'process', 'side-projects']
const selectedChapters = [...workChapters].sort((a, b) => DISPLAY_ORDER.indexOf(a.id) - DISPLAY_ORDER.indexOf(b.id))

/**
 * Work: a bento of the eight chapters. Every chapter on one screen as tiles of different sizes, the biggest
 * chapters largest (grid areas in work.css, keyed by chapter id); the tile is "A Clean frame". Nothing
 * holds: tiles rise in as they scroll into view. Every tile is a real link to /work/<chapter>, which opens that chapter's sheet over Home.
 */
export function WorkSection() {
  return (
    <section id="work" className="wk wb" aria-labelledby="work-title">
      <header className="wb__head">
        <div className="wb__head-label">
          <p className="wk-eyebrow">{workSection.eyebrow}</p>
          <span>PORTFOLIO INDEX <i>·</i> 01—{String(workChapters.length).padStart(2, '0')}</span>
        </div>
        <div className="wb__head-main">
          <h2 id="work-title" className="wk-title">
            <span className="wk-title__thin">{workSection.titleThin}</span> <span className="wk-title__bold">{workSection.titleBold}</span>
          </h2>
          <div className="wb__head-side">
            <p>Stories, brand worlds, and digital experiences—gathered into one place.</p>
            <div className="wb__head-collection">
              <span><b>{String(workChapters.length).padStart(2, '0')}</b> collections</span>
              <a href="#work-collections" aria-label="Browse selected work collections">
                <ArrowDown size={17} weight="bold" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </header>
      <ul id="work-collections" className="wb__grid">
        {selectedChapters.map((chapter, index) => {
          const pic = chapterPicture(chapter)
          return (
            <li key={chapter.id} className="wb__cell" data-area={chapter.id}>
              <Link to={chapterPath(chapter.id)} state={{ sheet: true }} preventScrollReset className="wb__tile" data-kind={pic ? 'pic' : 'marks'}>
                <span className="wb__media" aria-hidden>
                  {pic ? (
                    pic.crop ? (
                      <span className="wb__crop">
                        <img
                          src={pic.src}
                          alt=""
                          width={pic.width}
                          height={pic.height}
                          style={{
                            width: `${(pic.width / pic.crop.width) * 100}cqw`,
                            left: `${(-pic.crop.x / pic.crop.width) * 100}cqw`,
                            top: `${(-pic.crop.y / pic.crop.width) * 100}cqw`,
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    ) : (
                      <img
                        src={pic.src}
                        srcSet={pic.srcSet}
                        sizes={pic.srcSet ? TILE_SIZES : undefined}
                        alt=""
                        width={pic.width}
                        height={pic.height}
                        loading="lazy"
                        decoding="async"
                      />
                    )
                  ) : <ChapterFace chapter={chapter} foot={false} />}
                </span>
                <span className="wb__cap">
                  <span className="wb__cap-meta"><i>{String(index + 1).padStart(2, '0')}</i><span>{chapter.count} {chapter.unit}</span></span>
                  <b>{chapter.title}</b>
                  <span className="wb__cap-arrow" aria-hidden="true"><ArrowUpRight size={17} weight="bold" /></span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
