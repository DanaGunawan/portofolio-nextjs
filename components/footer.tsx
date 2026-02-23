import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'T.I.L', href: '/til' },
    { name: 'Work', href: '/work' },
    { name: 'Skills', href: '/skills' },
    { name: 'Studio', href: '/studio' },
    { name: 'Contact', href: '/contact' },
  ]

  const social = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:dewakadekdana@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--border)]">
      {/* Light mode background */}
      <div className="absolute inset-0 dark:hidden"
        style={{
          background: 'linear-gradient(180deg, #f5f1ff 0%, #ede9fe 100%)',
        }}
      />
      {/* Dark mode background */}
      <div className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, #0a0515 0%, #07070f 100%)',
        }}
      />
      {/* Gradient top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 opacity-20 dark:opacity-15 blur-3xl rounded-full"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
              >
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-xl text-[color:var(--foreground)]">gunawanDev</p>
                <p className="text-xs font-mono text-violet-600 dark:text-violet-400">Full-Stack AI Developer</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)] max-w-sm">
              Membangun aplikasi web yang <span className="font-semibold text-violet-600 dark:text-violet-400">scalable, cepat, dan teroptimasi</span> dengan menggabungkan coding manual dan kecerdasan buatan.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                  style={{
                    borderColor: 'rgba(124,58,237,0.2)',
                    background: 'rgba(124,58,237,0.06)',
                  }}
                >
                  <Icon className="w-4 h-4 text-[color:var(--muted-foreground)] group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{
                background: 'rgba(16,185,129,0.08)',
                borderColor: 'rgba(16,185,129,0.25)',
                color: '#059669',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to opportunities
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--muted-foreground)]">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <span className="w-0 h-px bg-violet-500 group-hover:w-4 transition-all duration-300" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--muted-foreground)]">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:dewakadekdana@gmail.com"
                className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="text-base">📧</span>
                <span className="group-hover:underline underline-offset-2">dewakadekdana@gmail.com</span>
              </a>
              <a
                href="tel:+6281529097310"
                className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="text-base">📱</span>
                <span>+62 815-2909-7310</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
                <span className="text-base">📍</span>
                <span>Bali, Indonesia</span>
              </div>
              <a
                href="https://danagunawan-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="text-base">🌐</span>
                <span className="group-hover:underline underline-offset-2">Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[color:var(--muted-foreground)]">
            © {currentYear}{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-400">gunawanDev</span>
            {' '}· I Dewa Kadek Dana Gunawan. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-[color:var(--muted-foreground)]">
            <span>Built with</span>
            <span className="text-red-500">❤️</span>
            <span>using</span>
            <span className="font-semibold text-violet-600 dark:text-violet-400">Next.js</span>
            <span>&</span>
            <span className="font-semibold text-violet-600 dark:text-violet-400">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}