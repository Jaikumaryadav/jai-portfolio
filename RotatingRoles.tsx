import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function RotatingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <div className="relative h-8 overflow-hidden sm:h-9">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center font-[family-name:var(--font-mono)] text-base font-medium text-[var(--color-accent)] sm:text-lg"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
