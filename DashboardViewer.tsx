import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function DashboardViewer({ project, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const [scale, setScale] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setIndex(0)
    setScale(1)
    setPos({ x: 0, y: 0 })
  }, [project])

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project])

  if (!project) return null

  const images = project.images.length ? project.images : [project.image]

  const go = (dir: number) => {
    setScale(1)
    setPos({ x: 0, y: 0 })
    setIndex((i) => (i + dir + images.length) % images.length)
  }

  const toggleZoom = () => {
    setScale((s) => (s > 1 ? 1 : 2))
    setPos({ x: 0, y: 0 })
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale === 1) return
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }))
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} dashboard viewer`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-display)] text-base font-semibold text-white">
              {project.title}
            </p>
            {images.length > 1 && (
              <p className="text-xs text-white/50">
                {index + 1} / {images.length}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggleZoom}
              aria-label={scale > 1 ? 'Zoom out' : 'Zoom in'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white"
            >
              {scale > 1 ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
            </button>
            <a
              href={images[index]}
              download
              aria-label="Download dashboard image"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white"
            >
              <Download size={16} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="View on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white"
              >
                <GithubIcon size={15} />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6">
          {images.length > 1 && (
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white sm:left-6"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${project.title} dashboard screenshot`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onDoubleClick={toggleZoom}
            draggable={false}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
              cursor: scale > 1 ? 'grab' : 'zoom-in',
              touchAction: 'none',
            }}
            className="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl transition-transform duration-150"
          />

          {images.length > 1 && (
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white sm:right-6"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 pb-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setScale(1)
                  setPos({ x: 0, y: 0 })
                  setIndex(i)
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        )}

        {project.github && (
          <div className="flex justify-center pb-5 sm:hidden">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/60"
            >
              View source <ExternalLink size={12} />
            </a>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
