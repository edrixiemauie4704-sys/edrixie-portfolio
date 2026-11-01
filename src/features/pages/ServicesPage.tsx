import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { ServicesSection } from '@/features/home/services/ServicesSection'

export function ServicesPage({ page }: { page: PageRoute }) {
  return <><PageMeta page={page} /><ServicesSection standalone /></>
}
