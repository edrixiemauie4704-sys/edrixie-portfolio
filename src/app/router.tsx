import type { ComponentType } from 'react'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'
import { ContactPage } from '@/features/contact/ContactPage'
import { HomePage } from '@/features/home/HomePage'
import { LegalPage } from '@/features/legal/LegalPage'
import { ProjectsPage } from '@/features/pages/ProjectsPage'
import { ServicesPage } from '@/features/pages/ServicesPage'
import { AboutPage } from '@/features/pages/AboutPage'
import { ShowcasePage } from '@/features/pages/PortfolioShowcasePage'
import { AppShell } from './AppShell'
import { RouteStage } from './RouteStage'
import { notFoundTitle, pages, type PageRoute } from './routes'

/** Built pages by registry id. Any page not listed here still renders the bare RouteStage. */
const PAGE_COMPONENTS: Partial<Record<string, ComponentType<{ page: PageRoute }>>> = {
  home: HomePage,
  contact: ContactPage,
  work: ProjectsPage,
  services: ServicesPage,
  about: AboutPage,
  showcase: ShowcasePage,
  privacy: LegalPage,
  terms: LegalPage,
}

function elementFor(page: PageRoute) {
  // Draft routes retain their in-Home section destination until the page is built.
  if (page.draft && page.section) return <Navigate to={`/#${page.section}`} replace />
  const Page = PAGE_COMPONENTS[page.id] ?? RouteStage
  return <Page page={page} />
}

/**
 * Home is a layout over its own URL and the Work chapter URLs (/work/<chapter>). Moving between
 * them keeps Home mounted, so a chapter sheet opens over the page you were on and closes back to it.
 * HomePage reads the chapter from the URL; the child routes render nothing themselves.
 */
function routeFor(page: PageRoute): RouteObject {
  if (page.path === '/') {
    return { element: elementFor(page), children: [{ index: true }, { path: 'work/:chapter' }] }
  }
  return { path: page.path.slice(1), element: elementFor(page) }
}

/** Every route comes from the registry in routes.ts. */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [...pages.map(routeFor), { path: 'resume', element: <Navigate to="/about" replace /> }, { path: '*', element: <RouteStage title={notFoundTitle} label="Page not found" /> }],
  },
])
