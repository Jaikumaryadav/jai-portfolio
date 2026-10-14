import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileDown, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioData } from '../data/portfolio'
import { emailjsConfig, isEmailjsConfigured } from '../data/emailjs'

type SendState = 'idle' | 'sending' | 'sent' | 'error'

const contactCards = [
  { label: 'GitHub', value: '@' + portfolioData.githubUsername, href: portfolioData.github, Icon: GithubIcon },
  { label: 'LinkedIn', value: 'Jai Kumar Yadav', href: portfolioData.linkedin, Icon: LinkedinIcon },
  { label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}`, Icon: Mail },
  { label: 'Resume', value: 'View or download', href: portfolioData.resume, Icon: FileDown },
]

export default function Contact() {
  const [state, setState] = useState<SendState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isEmailjsConfigured) return

    setState('sending')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: emailjsConfig.publicKey }
      )
      setState('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-2 max-w-md text-[var(--color-muted)]">
            Have a project, opportunity, or analytics challenge? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-lg border border-[var(--color-border)] bg-black/10 px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-[var(--color-border)] bg-black/10 px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-black/10 px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]/50"
                placeholder="Tell me a bit about what you're looking for..."
              />
            </div>

            <button
              type="submit"
              disabled={!isEmailjsConfigured || state === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {state === 'sending' ? (
                'Sending...'
              ) : state === 'sent' ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </button>

            {state === 'error' && (
              <p className="flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle size={13} /> Something went wrong. Please try again or email directly.
              </p>
            )}
            {!isEmailjsConfigured && (
              <p className="text-xs text-[var(--color-muted)]">
                The contact form will go live once EmailJS is configured — for now, reach out directly using the
                details alongside.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {contactCards.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noreferrer' : undefined}
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-[var(--color-accent)]/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--color-muted)]">{label}</p>
                  <p className="truncate text-sm font-medium text-[var(--color-text)]">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
