import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { WorkSection } from '@/features/home/work/WorkSection'

export function ProjectsPage({ page }: { page: PageRoute }) {
  return <><PageMeta page={page} /><WorkSection standalone /></>
}
