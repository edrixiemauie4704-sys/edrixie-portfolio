import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { ArrowRight, ArrowUpRight, X } from '@phosphor-icons/react'
import { HeadMeta } from '@/app/PageMeta'
import { chapterPath, workChapters, seoWritingChapter } from '@/content/home'
import type { WorkChapter, WorkItem } from '@/content/schema'
import { gsap, MOTION_CONDITIONS, spring } from '@/lib/motion/gsap'
import { chapterJsonLd, chapterTitle } from '@/lib/seo'
import { useSheet } from './use-sheet'
import './work-sheet.css'

type SheetState = { sheet?: boolean } | null

/**
 * The showcase for one Work chapter, at its own URL (/work/<chapter>) so it can be shared, indexed
 * and opened directly. A native modal <dialog> (focus trap, Escape, top layer) holding a sheet that
 * rises over Home. Closing goes back in history when the visitor came from Home, so Back closes it
 * too. The last chapter stays rendered while the sheet leaves.
 */
export function WorkSheet({ chapter }: { chapter: WorkChapter | null }) {
  const navigate = useNavigate()
  const location = useLocation()
  const fromHome = !!(location.state as SheetState)?.sheet
  const [shown, setShown] = useState<WorkChapter | null>(chapter)
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const previewRef = useRef<HTMLDialogElement>(null)
  if (chapter && chapter !== shown) setShown(chapter)

  const requestClose = () => {
    if (fromHome) navigate(-1)
    else navigate('/', { preventScrollReset: true })
  }
  const { dialogRef, panelRef, scrimRef, onDragStart } = useSheet({
    open: !!chapter,
    onRequestClose: requestClose,
    onClosed: () => setShown(null),
  })

  // New chapter (opened, or "Next" inside the sheet): back to the top and bring the builds in.
  const bodyRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const body = bodyRef.current
    if (!body || !shown) return
    body.scrollTop = 0
    headRef.current?.removeAttribute('data-scrolled')
    if (window.matchMedia(MOTION_CONDITIONS.reduce).matches) return
    const items = Array.from(body.querySelectorAll('[data-reveal]')).slice(0, 8)
    const images = Array.from(body.querySelectorAll<HTMLElement>('.sh__shot img')).slice(0, 8)
    const timeline = gsap.timeline({ delay: 0.04 })
    timeline.from(headRef.current, { y: -12, autoAlpha: 0, duration: 0.36, ease: 'power2.out' })
    timeline.from(items, { y: 24, autoAlpha: 0, stagger: 0.055, ...spring({ response: 0.55 }) }, '-=0.14')
    timeline.from(images, { clipPath: 'inset(0 100% 0 0 round 18px)', scale: 1.04, stagger: 0.045, duration: 0.62, ease: 'power2.out' }, '<0.06')
    return () => {
      timeline.revert()
    }
  }, [shown])

  useEffect(() => {
    const preview = previewRef.current
    if (!preview) return
    if (selectedWork && !preview.open) preview.showModal()
    if (!selectedWork && preview.open) preview.close()
  }, [selectedWork])

  const onBodyScroll = () => {
    const scrolled = (bodyRef.current?.scrollTop ?? 0) > 4
    headRef.current?.toggleAttribute('data-scrolled', scrolled)
  }

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === scrimRef.current) requestClose()
  }

  const next = shown?.id === seoWritingChapter.id
    ? undefined
    : shown
      ? workChapters[(workChapters.indexOf(shown) + 1) % workChapters.length]
      : undefined

  return (
    <dialog
      ref={dialogRef}
      className="sh"
      aria-labelledby="sh-title"
      data-lenis-prevent
      onCancel={(event) => {
        event.preventDefault()
        requestClose()
      }}
      onClick={onDialogClick}
    >
      <div ref={scrimRef} className="sh__scrim" />
      {chapter ? (
        <>
          <HeadMeta title={chapterTitle(chapter)} description={chapter.description} path={chapterPath(chapter.id)} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: chapterJsonLd(chapter, chapterPath(chapter.id)) }} />
        </>
      ) : null}

      <div ref={panelRef} className="sh__panel" tabIndex={-1}>
        <div className="sh__grab" onPointerDown={onDragStart} aria-hidden>
          <span />
        </div>

        {shown ? (
          <>
            <header ref={headRef} className="sh__head" onPointerDown={onDragStart}>
              <p className="sh__eyebrow"><span>Edrixie</span><i aria-hidden>·</i>Selected work</p>
              <button type="button" className="sh__close" onClick={requestClose} aria-label="Close">
                <X size={20} weight="bold" aria-hidden />
              </button>
            </header>

            <div ref={bodyRef} className="sh__body" onScroll={onBodyScroll}>
              <ChapterHero chapter={shown} />
              <p className="sh__intro">{shown.description}</p>
              {shown.items.some((item) => item.image) ? (
                <>
                  <Showcase items={shown.items} onPreview={setSelectedWork} />
                  {shown.link ? (
                    <a className="btn-line sh__collection-link" href={shown.link.href} target="_blank" rel="noopener" data-reveal>
                      {shown.link.label}<ArrowUpRight size={16} weight="bold" aria-hidden />
                    </a>
                  ) : null}
                </>
              ) : shown.lead ? <Single chapter={shown} /> : <Groups items={shown.items} />}

              {next && next !== shown ? (
                <nav className="sh__next" aria-label="More work" data-reveal>
                  <Link to={chapterPath(next.id)} replace state={location.state} preventScrollReset>
                    <span className="wk-count">Next</span>
                    <span className="sh__next-title">{next.title}</span>
                    <ArrowRight size={22} weight="bold" aria-hidden />
                  </Link>
                </nav>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
      <dialog
        ref={previewRef}
        className="sh__preview"
        aria-labelledby="sh-preview-title"
        onClose={() => setSelectedWork(null)}
        onClick={(event) => {
          if (event.target === previewRef.current) previewRef.current?.close()
        }}
      >
        {selectedWork ? (
          <>
            <button type="button" className="sh__preview-close" onClick={() => previewRef.current?.close()} aria-label="Close project preview">
              <X size={18} weight="bold" aria-hidden />
            </button>
            {selectedWork.image ? (
              <div className="sh__preview-image">
                <img
                  src={selectedWork.image.src}
                  alt={selectedWork.image.alt}
                  style={{ objectPosition: selectedWork.image.crop ? `${((selectedWork.image.crop.x + selectedWork.image.crop.width / 2) / selectedWork.image.width) * 100}% ${((selectedWork.image.crop.y + selectedWork.image.crop.height / 2) / selectedWork.image.height) * 100}%` : 'center' }}
                />
              </div>
            ) : null}
            <div className="sh__preview-copy">
              <p className="wk-count">{selectedWork.kicker}</p>
              <h3 id="sh-preview-title">{selectedWork.name}</h3>
              <p>{selectedWork.summary}</p>
              <div className="sh__preview-actions">
                {selectedWork.href ? (
                  <a className="btn-line" href={selectedWork.href} target="_blank" rel="noopener">
                    Open published work <ArrowUpRight size={16} weight="bold" aria-hidden />
                  </a>
                ) : <span className="wk-count">Portfolio sample</span>}
                <button type="button" onClick={() => previewRef.current?.close()}>Back to collection</button>
              </div>
            </div>
          </>
        ) : null}
      </dialog>
    </dialog>
  )
}
function ChapterHero({ chapter }: { chapter: WorkChapter }) {
  const visuals = [chapter.lead, ...(chapter.gallery ?? []), ...chapter.items.map((item) => item.image)]
    .filter((image): image is NonNullable<typeof image> => !!image)
    .filter((image, index, all) => all.findIndex((candidate) => candidate.src === image.src && candidate.crop?.x === image.crop?.x && candidate.crop?.y === image.crop?.y) === index)
    .slice(0, 3)

  return (
    <section className="sh__hero" aria-labelledby="sh-title">
      <div className="sh__hero-copy">
        <p className="sh__hero-kicker"><span>Portfolio / Selected work</span><i aria-hidden />Chapter {String(workChapters.findIndex((item) => item.id === chapter.id) + 1).padStart(2, '0')}</p>
        <h2 id="sh-title" className="sh__title">{chapter.title}</h2>
        <p className="sh__line">{chapter.line}</p>
        <div className="sh__hero-facts">
          <strong>{String(chapter.count).padStart(2, '0')}</strong>
          <span>{chapter.unit}<br />in this collection</span>
          <i aria-hidden />
          <span>Scroll<br />to explore</span>
          <b aria-hidden>↓</b>
        </div>
      </div>
      {visuals.length ? (
        <div className="sh__hero-art" aria-hidden="true">
          {visuals.map((image, index) => (
            <figure className={`sh__hero-photo sh__hero-photo--${index + 1}`} key={`${image.src}-${image.crop?.x ?? 0}-${image.crop?.y ?? 0}`}>
              <img src={image.src} alt="" style={{ objectPosition: image.crop ? `${((image.crop.x + image.crop.width / 2) / image.width) * 100}% ${((image.crop.y + image.crop.height / 2) / image.height) * 100}%` : 'center' }} />
            </figure>
          ))}
          <span className="sh__hero-stamp">Edrixie<br /><i>creative portfolio</i></span>
        </div>
      ) : <span className="sh__hero-mark" aria-hidden>Selected<br />work</span>}
    </section>
  )
}

/** Picture-led builds: the first one leads in a wide row, the rest in a grid. */
function Showcase({ items, onPreview }: { items: WorkItem[]; onPreview: (item: WorkItem) => void }) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const groups = [...new Set(items.map((item) => item.group ?? item.kicker))]
  const groupsWithItems = groups.map((group) => ({
    name: group,
    items: items.filter((item) => (item.group ?? item.kicker) === group),
  }))
  const visibleGroups = groupsWithItems.filter(({ name }) => activeGroup === null || activeGroup === name)

  return (
    <div className="sh__sets">
      <nav className="sh__filters" aria-label="Filter work by category">
        <span className="sh__filters-label">Browse by</span>
        <button type="button" className={activeGroup === null ? 'is-active' : ''} aria-pressed={activeGroup === null} onClick={() => setActiveGroup(null)}>
          All work <i>{items.length}</i>
        </button>
        {groupsWithItems.map(({ name, items: groupItems }) => (
          <button type="button" key={name} className={activeGroup === name ? 'is-active' : ''} aria-pressed={activeGroup === name} onClick={() => setActiveGroup(name)}>
            {name} <i>{groupItems.length}</i>
          </button>
        ))}
      </nav>
      {visibleGroups.map(({ name: group, items: groupItems }, gi) => (
        <section key={group} className="sh__set">
          <h3 className="sh__group-title" data-reveal>
            <span className="sh__group-index">{String(gi + 1).padStart(2, '0')}</span>
            <span>{group}</span>
            <small>{groupItems.length} {groupItems.length === 1 ? 'piece' : 'pieces'}</small>
          </h3>
          <Grid items={groupItems} lead={activeGroup === null && gi === 0 && groupItems.length > 2} onPreview={onPreview} />
        </section>
      ))}
    </div>
  )
}

function Grid({ items, lead, onPreview }: { items: WorkItem[]; lead: boolean; onPreview: (item: WorkItem) => void }) {
  return (
    <ul className="sh__grid">
      {items.map((item, i) => (
        <li key={item.id} className={lead && i === 0 ? 'sh__item sh__item--lead' : 'sh__item'} data-reveal>
          <button type="button" className="sh__link" onClick={() => onPreview(item)} aria-label={`Preview ${item.name}`}>
            <span className={item.image?.crop || item.href ? 'sh__shot' : 'sh__shot sh__shot--contain'}>
              {item.image ? (
                item.image.crop ? (
                  <span className="sh__crop" aria-label={item.image.alt} role="img">
                    <img
                      src={item.image.src}
                      alt=""
                      width={item.image.width}
                      height={item.image.height}
                      style={{
                        width: `${(item.image.width / item.image.crop.width) * 100}%`,
                        left: `${(-item.image.crop.x / item.image.crop.width) * 100}%`,
                        top: `${(-item.image.crop.y / item.image.crop.width) * 160}%`,
                      }}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </span>
                ) : (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                )
              ) : (
                <span className="sh__art-placeholder" aria-label={`${item.kicker} article artwork`} role="img">
                  <span>{item.kicker}</span>
                </span>
              )}
              <span className="sh__image-label">
                {item.kicker}
                {item.status ? <i>{item.status}</i> : null}
              </span>
            </span>
            <span className="sh__cap">
              <h3 className="sh__name">{item.name}</h3>
              <span className="sh__sum">{item.summary}</span>
              <span className="sh__peek">Quick preview <ArrowUpRight size={14} weight="bold" aria-hidden /></span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

/** Builds with no pictures (side projects and experiments): grouped rows. */
function Groups({ items }: { items: WorkItem[] }) {
  const groups = [...new Set(items.map((item) => item.kicker))]
  return (
    <div className="sh__groups">
      {groups.map((group) => (
        <section key={group} className="sh__group" data-reveal>
          <h3 className="sh__group-title">{group}</h3>
          <ul>
            {items
              .filter((item) => item.kicker === group)
              .map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <a className="sh__row sh__row--link" href={item.href} target="_blank" rel="noopener">
                      <span className="wk-count">{group}</span>
                      <h4 className="sh__name">{item.name}<ArrowUpRight size={15} weight="bold" aria-hidden /></h4>
                      <p className="sh__sum">{item.summary}</p>
                    </a>
                  ) : (
                    <div className="sh__row">
                      <span className="wk-count">{group}</span>
                      <h4 className="sh__name">{item.name}</h4>
                      <p className="sh__sum">{item.summary}</p>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

/** One build with a gallery (the featured project). */
function Single({ chapter }: { chapter: WorkChapter }) {
  const { lead, gallery = [], link } = chapter
  return (
    <div className="sh__single">
      {lead ? (
        <a className="sh__shot sh__shot--lead" href={link?.href ?? lead.src} target="_blank" rel="noopener" data-reveal>
          <img src={lead.src} alt={lead.alt} width={lead.width} height={lead.height} decoding="async" />
        </a>
      ) : null}
      {link ? (
        <a className="btn-line sh__live" href={link.href} target="_blank" rel="noopener" data-reveal>
          {link.label}
          <ArrowUpRight size={16} weight="bold" aria-hidden />
        </a>
      ) : null}
      <ul className="sh__gallery">
        {gallery.map((img) => (
          <li key={img.src} data-reveal>
            <a className="sh__shot" href={link?.href ?? img.src} target="_blank" rel="noopener">
              <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
