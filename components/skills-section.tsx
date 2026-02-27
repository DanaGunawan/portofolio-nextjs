'use client'

import { Code2, Server, Wrench } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { SectionBadge, Card, Tag } from '@/components/ui'

const skillCats = [
  { category: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
  { category: 'Backend', icon: Server, skills: ['PHP', 'Laravel', 'Node.js', 'SQL', 'RESTful API', 'Supabase'] },
  { category: 'Tools & Platforms', icon: Wrench, skills: ['GitHub', 'Postman', 'Vercel', 'ChatGPT', 'Claude', 'AWS (Basic)'] },
  { category: 'Other', icon: Code2, skills: ['Debugging & Troubleshooting', 'System Optimization', 'Version Control', 'Responsive Design', 'Basic SEO'] },
]

export function SkillsSection() {
  const { t } = useLang()
  return (
    <section id="skills" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 60%), linear-gradient(135deg,#f3f0ff 0%,#faf8ff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(circle at 25% 25%, rgba(124,58,237,0.12) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79,70,229,0.1) 0%, transparent 50%), #0A0A18' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-3 mb-14">
          <SectionBadge label={t.skills.badge} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.skills.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.skills.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCats.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))', border: '1px solid rgba(124,58,237,0.25)' }}>
                    <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">{cat.skills.map(s => <Tag key={s} label={s} />)}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}