import { motion, type Variants } from 'framer-motion'
import { Mail, ArrowRight, FileDown } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import RotatingRoles from './RotatingRoles'
import HeroAnalytics from './HeroAnalytics'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-4 font-[family-name:var(--font-mono)] text-sm text-[var(--color-muted)]"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-balance text-[var(--color-text)] sm:text-5xl lg:text-6xl"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.2} className="mt-3">
            <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
              Data Analyst
            </span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.3} className="mt-3">
            <RotatingRoles roles={portfolioData.roles} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>
            <a
              href={portfolioData.resume}
              download
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="mt-9 flex items-center gap-4"
          >
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </div>

        <HeroAnalytics />
      </div>
    </section>
  )
}
