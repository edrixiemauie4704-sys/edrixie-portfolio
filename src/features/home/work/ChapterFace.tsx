import { AirplaneTilt, GameController, Globe, Megaphone, Palette, ShieldCheck, Trophy, type Icon } from '@phosphor-icons/react'
import type { WorkChapter } from '@/content/schema'

const VISUALS: Record<string, { label: string; Icon: Icon }> = {
  'case-studies': { label: 'DIGITAL · SECURITY · AI', Icon: ShieldCheck },
  process: { label: 'SPORTS · CULTURE', Icon: Trophy },
  screens: { label: 'GAMES · ENTERTAINMENT', Icon: GameController },
  websites: { label: 'TRAVEL · LIFESTYLE', Icon: AirplaneTilt },
  featured: { label: 'DIGITAL CONTENT', Icon: Megaphone },
  apps: { label: 'SEO WEBSITES', Icon: Globe },
  'side-projects': { label: 'VISUAL DESIGN', Icon: Palette },
}
const NAMES_MAX = 110 // characters; a longer list (Websites, 10 pages) shows the chapter line instead

/**
 * A chapter card: its logos as embossed app icons on paper, the build names under the title
 * ("Marks").
 * `foot={false}` keeps only the marks (when the title is set beside it).
 */
export function ChapterFace({ chapter, foot = true }: { chapter: WorkChapter; foot?: boolean }) {
  const visual = VISUALS[chapter.id] ?? { label: chapter.title, Icon: Palette }
  const VisualIcon = visual.Icon
  const names = chapter.items.map((item) => item.name).join(' · ')
  return (
    <span className="wa__face" data-category={chapter.id}>
      <span className="wa__face-label">{visual.label}</span>
      <span className="wa__illustration" aria-hidden>
        <VisualIcon weight="light" />
      </span>
      {foot ? (
        <span className="wa__face-foot">
          <b>{chapter.title}</b>
          <span>{names && names.length <= NAMES_MAX ? names : chapter.line}</span>
        </span>
      ) : null}
    </span>
  )
}
