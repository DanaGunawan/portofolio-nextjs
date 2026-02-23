'use client'

import { ArrowRight, ExternalLink, Github, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/components/i18n'

export const dynamic = 'force-dynamic'

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    descEn: 'Information system for boarding house resident data management in Kelurahan Panjer with interactive Leaflet maps, resident management, reports, and statistics.',
    descId: 'Sistem informasi pendataan dan pengelolaan penghuni kos di Kelurahan Panjer dengan peta interaktif Leaflet, manajemen data penghuni, laporan, dan statistik.',
    tags: ['Laravel', 'Bootstrap', 'Leaflet', 'MySQL', 'PHP'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    github: '#',
    image: 'https://picsum.photos/seed/sigkos/800/450',
    images: [
      'https://picsum.photos/seed/sigkos1/800/500',
      'https://picsum.photos/seed/sigkos2/800/500',
      'https://picsum.photos/seed/sigkos3/800/500',
    ],
    year: '2023',
    role: 'Full-Stack Developer',
  },
  {
    slug: 'pomodoro-app',
    title: 'Pomodoro App',
    descEn: 'Pomodoro-based time management app with real-time timer, task list, session statistics, and automatic data sync via Supabase.',
    descId: 'Aplikasi manajemen waktu berbasis Pomodoro dengan timer real-time, daftar tugas, statistik sesi, dan sinkronisasi data otomatis via Supabase.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'TypeScript'],
    link: 'https://pomodoro-boost.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/pomodoro/800/450',
    images: [
      'https://picsum.photos/seed/pomodoro1/800/500',
      'https://picsum.photos/seed/pomodoro2/800/500',
      'https://picsum.photos/seed/pomodoro3/800/500',
    ],
    year: '2024',
    role: 'Full-Stack Developer',
  },
  {
    slug: 'tryout-cpns',
    title: 'Tryout CPNS',
    descEn: 'Online exam platform for CPNS preparation with complete question bank, auto timer, real-time result evaluation, and Midtrans payment integration.',
    descId: 'Platform tryout online untuk persiapan ujian CPNS dengan bank soal lengkap, timer otomatis, evaluasi hasil real-time, dan integrasi pembayaran Midtrans.',
    tags: ['Next.js', 'Supabase', 'Midtrans', 'Tailwind', 'TypeScript'],
    link: 'https://masukcpns.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/cpns/800/450',
    images: [
      'https://picsum.photos/seed/cpns1/800/500',
      'https://picsum.photos/seed/cpns2/800/500',
      'https://picsum.photos/seed/cpns3/800/500',
    ],
    year: '2024',
    role: 'Full-Stack Developer',
  },
]

// ─── Projects List Page ───────────────────────────────────────────────────────

export function ProjectsPage() {
  const { t, lang } = useLang()

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 60% 40% at 90% 10%, rgba(124,58,237,0.09) 0%, transparent 55%), linear-gradient(145deg,#f5f0ff 0%,#ffffff 50%,#f0ebff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#0F0A1E 50%,#1a0a2e 100%)' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="space-y-3 mb-14 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-700 dark:text-violet-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            {t.projects.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">{t.projects.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.slug}
              className="group relative rounded-2xl overflow-hidden border border-violet-100 dark:border-white/5 hover:border-violet-400/40 dark:hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)] hover:-translate-y-1"
              style={{ background: 'var(--card, white)' }}>
              <div className="relative overflow-hidden aspect-video">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0a0515] to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded-lg text-xs font-semibold text-white" style={{ background: 'rgba(124,58,237,0.85)', backdropFilter: 'blur(8px)' }}>{p.year}</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={p.github} className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github className="w-3.5 h-3.5" /></a>
                  <a href={p.link} className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors" aria-label="Live" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-3.5 h-3.5" /></a>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{lang === 'en' ? p.descEn : p.descId}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20">{tag}</span>
                  ))}
                </div>
                <Link href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors group/btn">
                  {t.projects.viewDetails}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Project Detail Page ──────────────────────────────────────────────────────

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { t, lang } = useLang()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <div className="pt-32 text-center text-slate-500">Project not found.</div>

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 dark:hidden" style={{ background: 'linear-gradient(180deg,#f5f0ff 0%,#ffffff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(180deg,#0a0515 0%,#07070f 100%)' }} />

      {/* Hero banner */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#07070f] via-white/30 dark:via-[#07070f]/50 to-transparent" />
        <div className="absolute inset-0" style={{ background: 'rgba(109,40,217,0.15)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        {/* Back link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Header card */}
        <div className="rounded-2xl p-6 sm:p-8 border border-violet-100 dark:border-violet-500/20 mb-8" style={{ background: 'var(--card, white)', boxShadow: '0 4px 40px rgba(124,58,237,0.08)' }}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono px-2 py-1 rounded-md bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400">{project.year}</span>
                <span className="text-xs font-mono px-2 py-1 rounded-md bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400">{project.role}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">{project.title}</h1>
            </div>
            <div className="flex gap-2 shrink-0">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 text-sm font-semibold hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                <ExternalLink className="w-4 h-4" /> {t.projects.live}
              </a>
            </div>
          </div>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
            {lang === 'en' ? project.descEn : project.descId}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-xl text-sm font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20">{tag}</span>
            ))}
          </div>
        </div>

        {/* Screenshot gallery */}
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-violet-100 dark:border-violet-500/15 aspect-video relative hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all">
              <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw,33vw" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}