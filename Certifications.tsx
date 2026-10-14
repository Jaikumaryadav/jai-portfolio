import { motion } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Structured learning behind the hands-on work.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Award size={18} />
                </div>
                {cert.date && (
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-muted)]">
                    {cert.date}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
                {cert.organization}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-[15px] font-semibold leading-snug text-[var(--color-text)]">
                {cert.name}
              </h3>

              {cert.skills && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-[var(--color-card)] px-2 py-0.5 text-[11px] text-[var(--color-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {cert.credential && (
                <div className="mt-4 flex items-center gap-1.5 border-t border-[var(--color-border)] pt-3 text-[11px] text-[var(--color-muted)]">
                  <BadgeCheck size={13} className="text-[var(--color-accent)]" />
                  <span className="truncate font-[family-name:var(--font-mono)]">{cert.credential}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
