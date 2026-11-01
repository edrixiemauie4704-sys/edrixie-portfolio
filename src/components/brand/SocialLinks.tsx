import { Moon, Sun } from '@phosphor-icons/react'
import { socials } from '@/content/site'
import { useTheme } from '@/hooks/use-theme'
import { SocialIcon } from './SocialIcon'
import './social-links.css'

/** The row of social keys (sidebar header, Contact). One look everywhere; `className` places the row. */
export function SocialLinks({ className, showThemeToggle = false }: { className?: string; showThemeToggle?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <ul className={`social-keys ${className ?? ''}`} aria-label="Find me on">
      {socials.map((social) => (
        <li key={social.icon}>
          <a className="social-key" data-icon={social.icon} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} (opens in a new tab)`} title={social.label}>
            <SocialIcon icon={social.icon} />
          </a>
        </li>
      ))}
      {showThemeToggle ? (
        <li>
          <button
            type="button"
            className="social-key social-key--theme"
            onClick={() => void toggleTheme()}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
          </button>
        </li>
      ) : null}
    </ul>
  )
}
