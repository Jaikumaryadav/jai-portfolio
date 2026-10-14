import { Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Email"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
