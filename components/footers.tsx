'use client'

import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react'
import Link from 'next/link'
import { useLang } from '@/components/i18n'

export function Footer() {
  const { lang } = useLang()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { nameEn: 'Projects',   nameId: 'Proyek',      href: '/#projects' },
    { nameEn: 'Experience', nameId: 'Pengalaman',   href: '/#experience' },
    { nameEn: 'Education',  nameId: 'Pendidikan',   href: '/#education' },
    { nameEn: 'Skills',     nameId: 'Keahlian',     href: '/#skills' },
    { nameEn: 'Blog',       nameId: 'Blog',         href: '/#blog' },
    { nameEn: 'Studio',     nameId: 'Studio',       href: '/#studio' },
    { nameEn: 'Contact',    nameId: 'Kontak',       href: '/#contact' },
  ]

  const social = [
    { icon: Github,   href: 'https://github.com',          label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com',         label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://twitter.com',          label: 'Twitter' },
    { icon: Mail,     href: 'mailto:dewakadekdana@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-violet-200/40 dark:border-violet-500/10">

      {/* ── Background — mirrors Hero section ── */}
      {/* Light */}
      <div className="absolute inset-0 dark:hidden" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(99,102,241,0.08) 0%, transparent 60%), linear-gradient(180deg,#f0ebff 0%,#faf8ff 60%,#f5f3ff 100%)'
      }} />
      {/* Dark */}
      <div className="absolute inset-0 hidden dark:block" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(109,40,217,0.25) 0%, rgba(76,29,149,0.12) 40%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(79,70,229,0.18) 0%, transparent 60%), #050510'
      }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.8) 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}>
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-xl text-slate-900 dark:text-white">gunawanDev</p>
                <p className="text-xs font-mono text-violet-600 dark:text-violet-400">Full-Stack Web Developer</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              {lang === 'en'
                ? <>Building <span className="font-semibold text-violet-600 dark:text-violet-400">scalable, fast, and optimized</span> web applications by combining manual coding with artificial intelligence.</>
                : <>Membangun aplikasi web yang <span className="font-semibold text-violet-600 dark:text-violet-400">scalable, cepat, dan teroptimasi</span> dengan menggabungkan coding manual dan kecerdasan buatan.</>
              }
            </p>

            <div className="flex gap-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] border-violet-200 dark:border-violet-500/20 bg-white/60 dark:bg-violet-500/8 hover:border-violet-400 dark:hover:border-violet-400/40">
                  <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Open to work badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-300/40 dark:border-emerald-500/25 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {lang === 'en' ? 'Open to opportunities' : 'Terbuka untuk peluang'}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Navigation' : 'Navigasi'}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ nameEn, nameId, href }) => (
                <li key={nameEn}>
                  <Link href={href} className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    <span className="w-0 h-px bg-violet-500 group-hover:w-4 transition-all duration-300" />
                    {lang === 'en' ? nameEn : nameId}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Contact' : 'Kontak'}
            </p>
            <div className="space-y-3">
              {[
                { emoji: '📧', value: 'dewakadekdana@gmail.com', href: 'mailto:dewakadekdana@gmail.com', external: false },
                { emoji: '📱', value: '+62 815-2909-7310', href: 'tel:+6281529097310', external: false },
                { emoji: '📍', value: 'Bali, Indonesia', href: null, external: false },
                { emoji: '🌐', value: 'Portfolio', href: 'https://danagunawan-portofolio.vercel.app/', external: true },
              ].map(({ emoji, value, href, external }) =>
                href ? (
                  <a key={value} href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group">
                    <span className="text-base">{emoji}</span>
                    <span className="group-hover:underline underline-offset-2">{value}</span>
                  </a>
                ) : (
                  <div key={value} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-base">{emoji}</span>
                    <span>{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {currentYear}{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-400">gunawanDev</span>
            {' · '}I Dewa Kadek Dana Gunawan.{' '}
            {lang === 'en' ? 'All rights reserved.' : 'Semua hak dilindungi.'}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {lang === 'en'
              ? 'Built with Next.js · TypeScript · TailwindCSS'
              : 'Dibangun dengan Next.js · TypeScript · TailwindCSS'}
          </p>
        </div>
      </div>
    </footer>
  )
}