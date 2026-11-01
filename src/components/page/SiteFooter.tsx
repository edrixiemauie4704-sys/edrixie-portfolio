import { Link } from 'react-router'
import { site } from '@/content/site'
import './site-footer.css'

/** One quiet line under every page: copyright and the legal links. */
export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-foot">
      <p>
        © {year} {site.name}. All rights reserved.
      </p>
      <nav aria-label="Legal">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </nav>
    </footer>
  )
}
