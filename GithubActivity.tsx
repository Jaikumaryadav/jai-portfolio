import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolio'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

type Status = 'idle' | 'loading' | 'ready' | 'empty' | 'error'

export default function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!portfolioData.githubUsername) {
      setStatus('empty')
      return
    }

    let cancelled = false
    setStatus('loading')

    fetch(`https://api.github.com/users/${portfolioData.githubUsername}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed')
        return res.json()
      })
      .then((data: Repo[]) => {
        if (cancelled) return
        if (!Array.isArray(data) || data.length === 0) {
          setStatus('empty')
        } else {
          setRepos(data)
          setStatus('ready')
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              GitHub Activity
            </h2>
            <p className="mt-2 text-[var(--color-muted)]">Recent public repositories.</p>
          </div>
          {portfolioData.github && (
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              <GithubIcon size={15} />
              View GitHub Profile
            </a>
          )}
        </motion.div>

        {status === 'loading' && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass h-32 animate-pulse rounded-2xl" />
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="glass rounded-2xl p-8 text-center text-sm text-[var(--color-muted)]">
            Couldn't load live GitHub data right now. You can still browse the profile directly.
          </div>
        )}

        {status === 'empty' && (
          <div className="glass rounded-2xl p-8 text-center text-sm text-[var(--color-muted)]">
            GitHub activity will appear once the GitHub profile is connected.
          </div>
        )}

        {status === 'ready' && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass group flex flex-col rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                    {repo.name}
                  </h3>
                  <ExternalLink size={13} className="mt-1 shrink-0 text-[var(--color-muted)]" />
                </div>
                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-[var(--color-muted)]">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-muted)]">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
