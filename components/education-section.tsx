'use client'

import { Calendar, MapPin, Award } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { SectionBadge, Card, Tag } from '@/components/ui'

const certs = [
  { title: 'Learn to Create Back-End Applications for Beginners', issuer: 'Dicoding', date: 'Oct 2023', emoji: '🖥️' },
  { title: 'Cloud Practitioner Essentials (Learn Basic AWS Cloud)', issuer: 'Dicoding', date: 'Nov 2023', emoji: '☁️' },
  { title: 'Front End Web Development', issuer: 'Devsnest', date: 'Jun 2025', emoji: '🎨' },
]

export function EducationSection() {
  const { lang } = useLang()
  return (
    <section id="education" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.07) 0%, transparent 60%), linear-gradient(180deg,#f0f0ff 0%,#ffffff 40%,#f5f3ff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 60%), linear-gradient(180deg,#07080f 0%,#0A0C1E 50%,#0D0A20 100%)' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="space-y-3 mb-14">
          <SectionBadge label={lang === 'en' ? 'Education' : 'Pendidikan'} color="indigo" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            {lang === 'en' ? 'My Education' : 'Pendidikan Saya'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            {lang === 'en'
              ? 'Academic background and certifications that shaped my technical foundation.'
              : 'Latar belakang akademis dan sertifikasi yang membentuk fondasi teknis saya.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Degree card — NO glow, clean border only ── */}
          <Card className="p-0 overflow-hidden" hover={false}>
            {/* Solid top accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#6366f1,#4f46e5)' }} />
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                {/* Icon box — no glow, solid subtle bg */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700/50">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">D3 Informatics Management</h3>
                  {/* Company name — solid colour, no opacity trick */}
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base">Bali State Polytechnic</p>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />Jul 2022 – Oct 2025
                    </span>
                    <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />Bali, Indonesia
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Completed a D3 in Informatics Management with focus on web development, databases, and software engineering.'
                  : 'Menyelesaikan D3 Manajemen Informatika dengan fokus pada web development, basis data, dan rekayasa perangkat lunak.'}
              </p>

              {/* GPA badge — clear text, no blur */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-300 dark:border-indigo-600/60 bg-indigo-50 dark:bg-indigo-900/30">
                <span className="text-indigo-700 dark:text-indigo-300 font-mono text-xs uppercase tracking-wider font-bold">GPA</span>
                <span className="text-2xl font-black text-indigo-800 dark:text-indigo-200">3.75</span>
                <span className="text-indigo-600 dark:text-indigo-300 text-sm font-semibold">/ 4.00</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Database', 'System Analysis', 'Software Engineering'].map(h => <Tag key={h} label={h} />)}
              </div>
            </div>
          </Card>

          {/* ── Certifications ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Certifications' : 'Sertifikasi'}
              </h3>
            </div>
            {certs.map((c, i) => (
              <Card key={i} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/40">
                    {c.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">{c.title}</p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1">{c.issuer} · {c.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}