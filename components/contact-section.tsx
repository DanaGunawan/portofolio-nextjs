'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dewakadekdana@gmail.com',
      href: 'mailto:dewakadekdana@gmail.com',
      color: '#7c3aed',
      emoji: '📧',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 815-2909-7310',
      href: 'tel:+6281529097310',
      color: '#4f46e5',
      emoji: '📱',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bali, Indonesia',
      href: '#',
      color: '#06b6d4',
      emoji: '📍',
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#0A0A1A' }} />
      {/* Animated gradient background on the form area */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(79,70,229,0.1)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Contact
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)' }}
          >
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Ada project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, color, emoji }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl p-5 border border-white/5 hover:border-violet-500/25 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)] hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(124,58,237,0.04))' }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  {emoji}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</p>
                  <p className="font-semibold text-white text-sm sm:text-base group-hover:text-violet-200 transition-colors">{value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}

            {/* Social Links */}
            <div
              className="rounded-2xl p-5 border border-white/5"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(124,58,237,0.04))' }}
            >
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#ffffff' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0ea5e9' },
                  { icon: Mail, href: 'mailto:dewakadekdana@gmail.com', label: 'Email', color: '#7c3aed' },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-white/5 hover:border-violet-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                    <span className="text-xs text-slate-500">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Portfolio link */}
            <a
              href="https://danagunawan-portofolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl p-5 border border-violet-500/20 transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.08))' }}
            >
              <div>
                <p className="text-violet-400 text-xs font-mono">Portfolio</p>
                <p className="text-white text-sm font-semibold">danagunawan-portofolio.vercel.app</p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}
              >
                <ExternalLink className="w-4 h-4 text-violet-400" />
              </div>
            </a>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {/* Animated gradient border wrapper */}
            <div
              className="rounded-2xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(79,70,229,0.2) 50%, rgba(124,58,237,0.4) 100%)',
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 sm:p-8 space-y-5"
                style={{ background: 'linear-gradient(145deg, #0f0a1e, #0a0515)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 border border-white/10 outline-none transition-all duration-200 focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] text-sm"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                      placeholder="Dana Gunawan"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 border border-white/10 outline-none transition-all duration-200 focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] text-sm"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 border border-white/10 outline-none transition-all duration-200 focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] text-sm"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    placeholder="Tentang apa?"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 border border-white/10 outline-none transition-all duration-200 focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] resize-none text-sm"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    placeholder="Ceritakan project atau ide kamu..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Success */}
                {submitted && (
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm text-center">
                    ✅ Pesan terkirim! Saya akan segera menghubungi kamu.
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