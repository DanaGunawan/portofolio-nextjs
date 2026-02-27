'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import ReactCountryFlag from 'react-country-flag'
import { useLang, Lang } from './i18n'

// Country code for SVG flag (ISO 3166-1 alpha-2)
const FLAG_CODE: Record<Lang, string> = { en: 'GB', id: 'ID' }
const LABEL: Record<Lang, string>     = { en: 'EN', id: 'ID' }

const NAV_SECTIONS = [
  { id: 'projects' },
  { id: 'experience' },
  { id: 'education' },
  { id: 'skills' },
  // { id: 'blog' },
  { id: 'studio' },
  { id: 'contact' },
]

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted]           = useState(false)
  const [open, setOpen]                 = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname    = usePathname()
  const isDetailPage = pathname.startsWith('/projects/')

  // Avoid hydration mismatch for theme icon
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (!isDetailPage) {
        const ids = NAV_SECTIONS.map(s => s.id)
        for (const id of [...ids].reverse()) {
          const el = document.getElementById(id)
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveSection(id)
            return
          }
        }
        setActiveSection('')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isDetailPage])

  const navLabelMap: Record<string, string> = {
    ...(t.nav as Record<string, string>),
    education: lang === 'en' ? 'Education' : 'Pendidikan',
  }

  const navItems = NAV_SECTIONS.map(s => ({
    id:    s.id,
    href:  `/#${s.id}`,
    label: navLabelMap[s.id] ?? s.id,
  }))

  const isActive = (id: string) => !isDetailPage && activeSection === id

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (!isDetailPage && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }) }
    }
  }

  const isDark = resolvedTheme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  // ── Flag pill component ─────────────────────────────────────
  function FlagPill({ l, onClick }: { l: Lang; onClick: () => void }) {
    const active = lang === l
    return (
      <button
        onClick={onClick}
        aria-label={l === 'en' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
          active
            ? 'bg-violet-600 dark:bg-violet-500 text-white'
            : 'text-slate-500 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-500/20'
        }`}
      >
        {/* SVG flag via react-country-flag — works on all OS/browsers */}
        <ReactCountryFlag
          countryCode={FLAG_CODE[l]}
          svg
          style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }}
          aria-hidden="true"
        />
        <span>{LABEL[l]}</span>
      </button>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'border-b border-violet-200/60 dark:border-violet-500/10 backdrop-blur-xl bg-white/85 dark:bg-[#07070f]/85 shadow-[0_4px_30px_rgba(124,58,237,0.06)]'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group" onClick={() => setOpen(false)}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)' }}
          >
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
            gunawan<span className="text-violet-600 dark:text-violet-400">Dev</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              onClick={() => handleNavClick(href)}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(id)
                  ? 'text-violet-700 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/10'
                  : 'text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-500/10'
              }`}
            >
              {label}
              {isActive(id) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500" />
              )}
            </Link>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2">

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:border-violet-400 dark:hover:border-violet-400/40 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:scale-105 active:scale-95"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* Language toggle — dual pill with SVG flags */}
          <div className="flex items-center rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 overflow-hidden">
            <FlagPill l="en" onClick={() => setLang('en')} />
            <div className="w-px h-5 bg-violet-200 dark:bg-violet-500/30" />
            <FlagPill l="id" onClick={() => setLang('id')} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:border-violet-400 dark:hover:border-violet-400/40 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-violet-200/60 dark:border-violet-500/10 backdrop-blur-xl bg-white/95 dark:bg-[#07070f]/95 ${
        open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              onClick={() => { handleNavClick(href); setOpen(false) }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                isActive(id)
                  ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-700 dark:hover:text-violet-300'
              }`}
            >
              <span>{label}</span>
              {isActive(id) && <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />}
            </Link>
          ))}

          {/* Mobile theme + language */}
          <div className="mt-3 pt-3 border-t border-violet-100 dark:border-violet-500/10 flex items-center gap-2 px-1">
            {mounted && (
              <button
                onClick={() => { toggleTheme(); setOpen(false) }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-violet-200 dark:border-violet-500/20 text-slate-600 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-sm font-medium transition-all"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
            <div className="flex gap-1 ml-auto">
              {(['en', 'id'] as Lang[]).map((l) => {
                const active = lang === l
                return (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false) }}
                    className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      active
                        ? 'bg-violet-600 dark:bg-violet-500 text-white'
                        : 'border border-violet-200 dark:border-violet-500/20 text-slate-600 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-500/10'
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={FLAG_CODE[l]}
                      svg
                      style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }}
                      aria-hidden="true"
                    />
                    <span>{LABEL[l]}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}