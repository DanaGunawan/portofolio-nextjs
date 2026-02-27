'use client'

import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { Avatar } from '@/components/avatar'

export function HeroSection() {
  const { t, lang } = useLang()

  return (
    <section id="home" className="relative min-h-screen w-full pt-20 flex items-center overflow-hidden">
      {/* BG light */}
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(99,102,241,0.08) 0%, transparent 60%), linear-gradient(180deg,#f0ebff 0%,#faf8ff 60%,#f5f3ff 100%)' }} />
      {/* BG dark */}
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(109,40,217,0.25) 0%, rgba(76,29,149,0.12) 40%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(79,70,229,0.18) 0%, transparent 60%), #050510' }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(124,58,237,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-violet-500 opacity-50 dark:opacity-40 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 right-[6%] w-2 h-2 rounded-full bg-indigo-400 opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-[15%] w-2 h-2 rounded-full bg-violet-400 opacity-35 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-300/40 dark:border-violet-500/20 bg-violet-100/60 dark:bg-violet-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-violet-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-violet-700 dark:text-violet-300 text-sm font-medium">{t.hero.currently}</span>
            </div>

            <div className="space-y-2">
              <p className="text-violet-600 dark:text-violet-400 font-mono text-sm tracking-widest uppercase">{t.hero.greeting}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white">
                {lang === 'en' ? "I'm " : 'Saya '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed 0%,#6366f1 50%,#4f46e5 100%)' }}>
                  gunawanDev
                </span>
              </h1>
              <div className="h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5)' }} />
            </div>

            <p className="text-lg sm:text-xl font-semibold text-violet-600 dark:text-violet-400">{t.hero.role}</p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {t.hero.desc} <span className="font-semibold text-violet-600 dark:text-violet-300">{t.hero.descHighlight}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]" style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)' }}>
                {t.hero.cta1}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-700 dark:text-violet-300 border border-violet-400/40 bg-violet-50 dark:bg-violet-500/10 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all duration-300 hover:scale-105">
                {t.hero.cta2}
              </a>
              <a href="/cv-dana-gunawan.pdf" download className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-400/40 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </div>

            <div className="flex gap-3">
              {[
                { href: 'https://github.com', Icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:dewakadekdana@gmail.com', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                  className="p-3 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/8 text-violet-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-300 hover:border-violet-400 dark:hover:border-violet-400/40 transition-all hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-violet-200/60 dark:border-white/5">
              {[
                { val: '3+', label: t.hero.stats.projects },
                { val: '3.75', label: t.hero.stats.gpa },
                { val: '2+', label: t.hero.stats.exp },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>{val}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-[-20px] rounded-full opacity-25 dark:opacity-30 animate-pulse" style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.5) 0%,transparent 70%)', animationDuration: '4s' }} />
              <div className="absolute inset-[-8px] rounded-full border border-violet-300/30 dark:border-violet-500/20" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-[-18px] rounded-full border border-dashed border-indigo-300/20 dark:border-indigo-500/15" style={{ animation: 'spin 30s linear infinite reverse' }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-300/40 dark:border-violet-500/30"
                style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(79,70,229,0.08),rgba(76,29,149,0.15))', boxShadow: '0 0 60px rgba(124,58,237,0.15)', animation: 'float 6s ease-in-out infinite' }}>
                <Avatar />
              </div>
              {[
                { label: '⚡ Full-Stack Dev', pos: 'top-0 -right-4 sm:-right-10', delay: '1s' },
                { label: '🤖 AI Powered', pos: 'bottom-0 -left-4 sm:-left-10', delay: '2s' },
              ].map(({ label, pos, delay }) => (
                <div key={label} className={`absolute ${pos} px-3 py-1.5 rounded-xl text-xs font-bold text-white border border-violet-400/30 dark:border-violet-400/20`}
                  style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.88),rgba(79,70,229,0.88))', backdropFilter: 'blur(10px)', animation: `float 5s ease-in-out infinite ${delay}` }}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#07070f] to-transparent" />
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      `}</style>
    </section>
  )
}