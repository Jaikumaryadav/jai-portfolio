import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { portfolioData, aboutHighlights, education } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            About Me
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Turning data into meaningful business decisions.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">{portfolioData.summary}</p>

            <div className="mt-8 space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/40 p-4"
                >
                  <GraduationCap size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{edu.degree}</p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {edu.institution}
                      {edu.period && ` · ${edu.period}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass flex flex-col justify-between rounded-xl p-5"
                style={{ minHeight: '132px' }}
              >
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text)]">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{item.sub}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: aboutHighlights.length * 0.08 }}
              className="flex flex-col justify-center rounded-xl border border-dashed border-[var(--color-border)] p-5 text-sm text-[var(--color-muted)]"
              style={{ minHeight: '132px' }}
            >
              MBA candidate applying analytics coursework directly to hands-on BI and reporting work.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
