import { motion } from 'framer-motion'
import { Code2, LineChart, PieChart, Wrench } from 'lucide-react'
import { skillCategories, libraries } from '../data/skills'

const ICONS: Record<string, React.ElementType> = {
  languages: Code2,
  analytics: LineChart,
  visualization: PieChart,
  tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Skills
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">The stack behind the analysis.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[cat.id]
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass group flex flex-col rounded-2xl p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted)]">{cat.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--color-border)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-[var(--color-border)] p-6"
        >
          <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[var(--color-muted)]">
            Python Libraries
          </p>
          <div className="flex flex-wrap gap-2">
            {libraries.map((lib) => (
              <span
                key={lib}
                className="rounded-md bg-[var(--color-card)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
              >
                {lib}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
