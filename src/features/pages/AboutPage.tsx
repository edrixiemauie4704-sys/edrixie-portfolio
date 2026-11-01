import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { AboutSection } from '@/features/home/about/AboutSection'

export function AboutPage({ page }: { page: PageRoute }) {
  return <><PageMeta page={page} /><AboutSection standalone /></>
}
