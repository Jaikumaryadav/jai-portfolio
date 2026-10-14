import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const BAR_HEIGHTS = [38, 52, 46, 64, 58, 78, 70]
const LINE_POINTS = [
  [0, 62], [40, 48], [80, 55], [120, 32], [160, 40], [200, 18], [240, 24],
]

function buildPath(points: number[][]) {
  return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
}

export default function HeroAnalytics() {
  const reduceMotion = useReducedMotion()
  const linePath = buildPath(LINE_POINTS)

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="relative"
      aria-hidden="true"
    >
      {/* ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-accent)]/20 blur-2xl" />

      <div className="glass relative rounded-2xl p-5 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
              Revenue Trend
            </p>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
              Demo Dashboard
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <TrendingUp size={13} />
            +12.4%
          </span>
        </div>

        {/* line chart */}
        <div className="mb-5 rounded-xl border border-[var(--color-border)] bg-black/10 p-3">
          <svg viewBox="0 0 240 80" className="h-24 w-full overflow-visible">
            <defs>
              <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${linePath} L240,80 L0,80 Z`}
              fill="url(#lineFill)"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            />
            <motion.path
              d={linePath}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
            />
            {LINE_POINTS.map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={2.6}
                fill="var(--color-accent)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.14 }}
              />
            ))}
          </svg>
        </div>

        {/* bar chart */}
        <div className="mb-5 flex h-20 items-end gap-2 rounded-xl border border-[var(--color-border)] bg-black/10 p-3">
          {BAR_HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[var(--color-primary)] to-[var(--color-accent)]"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.07, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="rounded-xl border border-[var(--color-border)] bg-black/10 p-3"
          >
            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)]">+40%</p>
            <p className="text-xs text-[var(--color-muted)]">Efficiency</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="rounded-xl border border-[var(--color-border)] bg-black/10 p-3"
          >
            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)]">Power BI</p>
            <p className="text-xs text-[var(--color-muted)]">Analytics</p>
          </motion.div>
        </div>

        <p className="mt-4 text-center text-[10px] text-[var(--color-muted)]">
          Illustrative demo data — not a project result
        </p>
      </div>
    </motion.div>
  )
}
