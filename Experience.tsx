import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Where the skills above have been applied.</p>
        </motion.div>

        <div className="relative pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)]">
                    {job.role}
                  </h3>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{job.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--color-border)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
