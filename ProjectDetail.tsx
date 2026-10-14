import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight, Database } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'

type Props = {
  project: Project | null
  onClose: () => void
  onViewDashboard: () => void
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[var(--color-border)] py-6 first:border-t-0 first:pt-0">
      <h4 className="mb-3 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        {title}
      </h4>
      {children}
    </div>
  )
}

export default function ProjectDetail({ project, onClose, onViewDashboard }: Props) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm sm:items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="glass relative w-full max-w-2xl rounded-2xl p-6 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
          >
            <X size={16} />
          </button>

          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">Project Overview</p>
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text)]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--color-border)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onViewDashboard}
              className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View Dashboard
              <ArrowRight size={14} />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            )}
          </div>

          <div className="mt-2">
            {project.dataPipeline && (
              <Section title="Data Pipeline">
                <ol className="space-y-2">
                  {project.dataPipeline.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-primary)]">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Section>
            )}

            {project.dataModel && (
              <Section title="Data Model — Star Schema">
                <div className="flex flex-wrap gap-2">
                  {project.dataModel.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 rounded-md bg-[var(--color-card)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)]"
                    >
                      <Database size={11} />
                      {t}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {project.businessQuestions && (
              <Section title="Business Questions Answered">
                <ul className="space-y-2.5">
                  {project.businessQuestions.map((q) => (
                    <li key={q.question} className="text-sm text-[var(--color-muted)]">
                      <span className="text-[var(--color-text)]">{q.question}</span>
                      <span className="mx-1.5 text-[var(--color-border)]">—</span>
                      {q.output}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {project.documentedValues && (
              <Section title="Documented Metrics">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.documentedValues.map((v) => (
                    <div key={v.label} className="rounded-lg border border-[var(--color-border)] p-3">
                      <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text)]">
                        {v.value}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">{v.label}</p>
                      {v.note && <p className="mt-0.5 text-[10px] text-[var(--color-accent)]">{v.note}</p>}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {project.dashboardPages && (
              <Section title="Dashboard Pages">
                <div className="flex flex-wrap gap-2">
                  {project.dashboardPages.map((p) => (
                    <span key={p} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]">
                      {p}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {project.kpis && (
              <Section title="Key Performance Indicators">
                <div className="flex flex-wrap gap-2">
                  {project.kpis.map((k) => (
                    <span key={k} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]">
                      {k}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {project.dax && (
              <Section title="DAX Measures">
                <div className="space-y-3">
                  {project.dax.map((m) => (
                    <div key={m.name} className="overflow-hidden rounded-lg border border-[var(--color-border)]">
                      <p className="border-b border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)]">
                        {m.name}
                      </p>
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words bg-black/20 px-3 py-2.5 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed text-[var(--color-accent)]">
                        {m.code}
                      </pre>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {project.keyInsights && (
              <Section title="Key Insights">
                <ul className="space-y-2">
                  {project.keyInsights.map((k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {k}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
