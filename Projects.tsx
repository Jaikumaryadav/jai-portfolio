import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectFilters, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import DashboardViewer from './DashboardViewer'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [viewing, setViewing] = useState<Project | null>(null)
  const [detail, setDetail] = useState<Project | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category.includes(filter))),
    [filter]
  )

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Featured Analytics Projects
          </h2>
          <p className="mt-2 max-w-xl text-[var(--color-muted)]">
            From raw data to business intelligence — explore the dashboards, pipelines, models and insights behind
            my work.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  filter === f ? 'text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {f}
              </span>
              {filter !== f && (
                <span className="absolute inset-0 rounded-full border border-[var(--color-border)]" />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={() => setViewing(project)}
                onDetail={() => setDetail(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <DashboardViewer project={viewing} onClose={() => setViewing(null)} />
      <ProjectDetail
        project={detail}
        onClose={() => setDetail(null)}
        onViewDashboard={() => {
          if (detail) setViewing(detail)
          setDetail(null)
        }}
      />
    </section>
  )
}
