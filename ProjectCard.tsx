import { motion } from 'framer-motion'
import { Download, Eye, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  onView: () => void
  onDetail: () => void
}

export default function ProjectCard({ project, onView, onDetail }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_0_1px_var(--color-accent)]"
    >
      <button
        onClick={onView}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-black/20"
        aria-label={`View ${project.title} dashboard`}
      >
        <img
          src={project.image}
          alt={`${project.title} dashboard screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
            const el = (e.target as HTMLImageElement).nextElementSibling as HTMLElement
            if (el) el.style.display = 'flex'
          }}
        />
        <div className="hidden h-full w-full items-center justify-center text-sm text-[var(--color-muted)]">
          Dashboard Preview Coming Soon
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <Eye size={15} />
            View Dashboard
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <button onClick={onDetail} className="text-left">
          <h3 className="flex items-center gap-1.5 font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
            {project.title}
            <ArrowUpRight size={14} className="text-[var(--color-muted)]" />
          </h3>
        </button>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text)]"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-2 py-0.5 text-[11px] text-[var(--color-muted)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4 text-xs">
          <button
            onClick={onView}
            className="flex items-center gap-1.5 font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)]"
          >
            <Eye size={13} />
            View Dashboard
          </button>
          {project.downloadable && (
            <a
              href={project.image}
              download
              className="flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text)]"
            >
              <Download size={13} />
              Download
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="ml-auto flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text)]"
            >
              <GithubIcon size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
