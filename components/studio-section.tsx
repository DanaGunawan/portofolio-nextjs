'use client'

import { Code2 } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { SectionBadge, Card, Tag } from '@/components/ui'

export function StudioSection() {
  const { t } = useLang()
  return (
    <section id="studio" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 60%), linear-gradient(135deg,#f5f2ff 0%,#ffffff 60%,#f0ebff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), #07070F' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="space-y-3 mb-14">
          <SectionBadge label={t.studio.badge} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.studio.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.studio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))', border: '1px solid rgba(124,58,237,0.25)' }}>👨‍💻</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">I Dewa Kadek Dana Gunawan</h3>
                  <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">Full-Stack Web Developer</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Bali, Indonesia 🇮🇩</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                <p>{t.studio.bio1}</p>
                <p>{t.studio.bio2}</p>
                <p>{t.studio.bio3}</p>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t.studio.currently}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: t.studio.learning, value: 'AI Agents & LLMs' },
                  { label: t.studio.building, value: 'HotelDomestik 🏨' },
                  { label: t.studio.listening, value: 'Lo-fi Hip Hop 🎵' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-3 rounded-xl bg-violet-50 dark:bg-violet-500/8 border border-violet-100 dark:border-violet-500/15">
                    <p className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-5">
            <Card className="p-5">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Code2 className="w-4 h-4 text-violet-500" />{t.studio.stack}</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Supabase', 'Vercel'].map(s => <Tag key={s} label={s} />)}
              </div>
            </Card>
            <Card className="p-5">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">✨ {t.studio.funFacts}</h4>
              <ul className="space-y-2">
                {[
                  'Based in beautiful Bali, Indonesia 🏝️',
                  'GPA 3.75 / 4.00 — Bali State Polytechnic',
                  'Passionate about AI-assisted development',
                  'Former community volunteer (Aksosma 2022)',
                  'Coffee-fueled coder ☕',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-violet-400 mt-0.5 shrink-0">→</span>{f}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}