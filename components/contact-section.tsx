'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { SectionBadge } from '@/components/ui'

export function ContactSection() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError(t.contact.error ?? 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200 bg-violet-50 dark:bg-violet-500/5 border-violet-200 dark:border-violet-500/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15 dark:focus:border-violet-400"

  return (
    <section id="contact" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 65%), linear-gradient(180deg,#ffffff 0%,#f5f1ff 60%,#ede9fe 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(79,70,229,0.1) 0%, transparent 60%), #0A0A1A' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-3 mb-14">
          <SectionBadge label={t.contact.badge} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.contact.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Info cards ── */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { emoji: '📧', label: 'Email', value: 'dewakadekdana@gmail.com', href: 'mailto:dewakadekdana@gmail.com' },
              { emoji: '📱', label: 'Phone', value: '+62 815-2909-7310', href: 'tel:+6281529097310' },
              { emoji: '📍', label: 'Location', value: 'Bali, Indonesia', href: '#' },
              { emoji: '🌐', label: 'Portfolio', value: 'danagunawan-portofolio.vercel.app', href: 'https://danagunawan-portofolio.vercel.app/' },
            ].map(({ emoji, label, value, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl p-5 border border-violet-100 dark:border-white/5 hover:border-violet-300 dark:hover:border-violet-500/25 bg-white dark:bg-white/[0.02] transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)] hover:-translate-y-0.5">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(79,70,229,0.12))', border: '1px solid rgba(124,58,237,0.2)' }}>{emoji}</div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">{label}</p>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors break-all">{value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl p-5 border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02]">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mb-3">{t.contact.findMe}</p>
              <div className="flex gap-2">
                {[
                  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:dewakadekdana@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-violet-100 dark:border-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-px" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.4),rgba(79,70,229,0.2),rgba(124,58,237,0.4))' }}>
              <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 space-y-4 bg-white dark:bg-[#0f0a1e]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.name}</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputCls} placeholder={t.contact.namePh} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.email}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder={t.contact.emailPh} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.subject}</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required className={inputCls} placeholder={t.contact.subjectPh} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.message}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputCls} resize-none`} placeholder={t.contact.messagePh} />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)' }}>
                  {submitting
                    ? <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />{t.contact.sending}</>
                    : <>{t.contact.send}<Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>}
                </button>

                {submitted && (
                  <div className="p-4 rounded-xl border border-emerald-400/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm text-center">
                    ✅ {t.contact.success}
                  </div>
                )}
                {error && (
                  <div className="p-4 rounded-xl border border-red-400/30 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm text-center">
                    ❌ {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}