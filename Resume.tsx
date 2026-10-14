import { motion } from 'framer-motion'
import { Eye, FileDown } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="glass rounded-3xl p-10 text-center sm:p-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-balance text-[var(--color-text)] sm:text-3xl">
            Let's build something meaningful with data.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-[var(--color-muted)]">
            Interested in my experience and analytics journey? View or download my resume.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a
              href={portfolioData.resume}
              download
              className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
