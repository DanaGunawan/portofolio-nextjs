'use client'

import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/components/i18n'

export const dynamic = 'force-dynamic'

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    year: '2023',
    role: 'Full-Stack Developer',
    descEn: 'A comprehensive information system for boarding house resident data management in Kelurahan Panjer. Features interactive Leaflet maps for visualizing boarding house locations, complete resident management, detailed reports, and statistical dashboards.',
    descId: 'Sistem informasi lengkap untuk pendataan penghuni kos di Kelurahan Panjer. Dilengkapi peta interaktif Leaflet untuk visualisasi lokasi kos, manajemen data penghuni lengkap, laporan terperinci, dan dashboard statistik.',
    tags: ['Laravel', 'Bootstrap', 'Leaflet.js', 'MySQL', 'PHP'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    github: '#',
    image: 'https://picsum.photos/seed/sigkos/1200/600',
    images: [
      'https://picsum.photos/seed/sigkos1/800/500',
      'https://picsum.photos/seed/sigkos2/800/500',
      'https://picsum.photos/seed/sigkos3/800/500',
    ],
    featuresEn: [
      'Interactive Leaflet map for boarding house locations',
      'Resident data management system',
      'Statistical reports and dashboards',
      'Admin authentication & role management',
      'Responsive Bootstrap UI',
    ],
    featuresId: [
      'Peta interaktif Leaflet untuk lokasi kos',
      'Sistem manajemen data penghuni',
      'Laporan statistik dan dashboard',
      'Autentikasi admin & manajemen peran',
      'UI Bootstrap yang responsif',
    ],
    demoUser: 'admin1@panjer.com',
    demoPass: 'password',
  },
  {
    slug: 'pomodoro-app',
    title: 'Pomodoro App',
    year: '2024',
    role: 'Full-Stack Developer',
    descEn: 'A productivity-focused Pomodoro time management app with real-time timer, task list management, and detailed session statistics. All data is synced in real-time using Supabase, ensuring your progress is always saved.',
    descId: 'Aplikasi manajemen waktu berbasis Pomodoro yang berfokus pada produktivitas dengan timer real-time, manajemen daftar tugas, dan statistik sesi terperinci. Semua data disinkronkan secara real-time menggunakan Supabase.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    link: 'https://pomodoro-boost.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/pomodoro/1200/600',
    images: [
      'https://picsum.photos/seed/pomodoro1/800/500',
      'https://picsum.photos/seed/pomodoro2/800/500',
      'https://picsum.photos/seed/pomodoro3/800/500',
    ],
    featuresEn: [
      'Pomodoro timer with custom intervals',
      'Task list with completion tracking',
      'Session statistics & history',
      'Real-time Supabase data sync',
      'Responsive modern design',
    ],
    featuresId: [
      'Timer Pomodoro dengan interval kustom',
      'Daftar tugas dengan pelacakan penyelesaian',
      'Statistik sesi & riwayat',
      'Sinkronisasi data real-time via Supabase',
      'Desain modern yang responsif',
    ],
    demoUser: null,
    demoPass: null,
  },
  {
    slug: 'tryout-cpns',
    title: 'Tryout CPNS',
    year: '2024',
    role: 'Full-Stack Developer',
    descEn: 'A comprehensive online exam platform for CPNS (civil servant) test preparation. Features a complete question bank, auto timer, real-time result evaluation, participant data management, and Midtrans payment gateway integration for premium packages.',
    descId: 'Platform tryout online lengkap untuk persiapan ujian CPNS. Dilengkapi bank soal lengkap, timer otomatis, evaluasi hasil real-time, manajemen data peserta, dan integrasi payment gateway Midtrans untuk paket premium.',
    tags: ['Next.js', 'Supabase', 'Midtrans', 'Tailwind CSS', 'TypeScript'],
    link: 'https://masukcpns.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/cpns/1200/600',
    images: [
      'https://picsum.photos/seed/cpns1/800/500',
      'https://picsum.photos/seed/cpns2/800/500',
      'https://picsum.photos/seed/cpns3/800/500',
    ],
    featuresEn: [
      'Complete CPNS question bank',
      'Auto-timer with real-time countdown',
      'Instant result evaluation & scoring',
      'Participant data management via Supabase',
      'Midtrans payment gateway integration',
    ],
    featuresId: [
      'Bank soal CPNS lengkap',
      'Timer otomatis dengan hitung mundur real-time',
      'Evaluasi dan penilaian hasil instan',
      'Manajemen data peserta via Supabase',
      'Integrasi payment gateway Midtrans',
    ],
    demoUser: null,
    demoPass: null,
  },
]

// ─── TAG ─────────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 rounded-xl text-sm font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20">
      {label}
    </span>
  )
}

// ─── PROJECT DETAIL PAGE ─────────────────────────────────────────────────────

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { t, lang } = useLang()
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <div className="relative min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'linear-gradient(180deg,#f5f0ff 0%,#ffffff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(180deg,#0a0515 0%,#07070f 100%)' }} />
        <div className="relative z-10 space-y-4">
          <p className="text-6xl">🔍</p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h1>
          <p className="text-slate-500 dark:text-slate-400">The project you're looking for doesn't exist.</p>
          <Link href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white mt-4"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 dark:hidden" style={{ background: 'linear-gradient(180deg,#f5f0ff 0%,#ffffff 30%,#faf8ff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(180deg,#0a0515 0%,#07070f 40%,#080810 100%)' }} />

      {/* Hero banner image */}
      <div className="relative h-56 sm:h-72 lg:h-96 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'rgba(109,40,217,0.2)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#07070f] via-white/20 dark:via-[#07070f]/40 to-transparent" />
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Pull card up over banner */}
        <div className="-mt-12 sm:-mt-16">

          {/* Back link */}
          <Link href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors mb-6 group bg-white dark:bg-[#0f0a1e] px-4 py-2 rounded-xl border border-violet-200 dark:border-violet-500/20 hover:border-violet-400 dark:hover:border-violet-400/40 shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {lang === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>

          {/* Main info card */}
          <div className="rounded-2xl border border-violet-200 dark:border-violet-500/20 bg-white dark:bg-[#0f0a1e] shadow-[0_4px_40px_rgba(124,58,237,0.1)] overflow-hidden mb-8">
            {/* Gradient top border */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#6366f1,#4f46e5)' }} />

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/25">{project.year}</span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/25">{project.role}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">{project.title}</h1>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 text-sm font-semibold hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:scale-105">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                    <ExternalLink className="w-4 h-4" />
                    {lang === 'en' ? 'Live Demo' : 'Demo Langsung'}
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
                {lang === 'en' ? project.descEn : project.descId}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Tag key={tag} label={tag} />)}
              </div>

              {/* Demo credentials if any */}
              {project.demoUser && (
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/8">
                  <p className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
                    {lang === 'en' ? 'Demo Credentials' : 'Kredensial Demo'}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Email:</span> {project.demoUser}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Password:</span> {project.demoPass}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className="rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
              {lang === 'en' ? '✨ Key Features' : '✨ Fitur Utama'}
            </h2>
            <ul className="space-y-3">
              {(lang === 'en' ? project.featuresEn : project.featuresId).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-violet-700 dark:text-violet-400" style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                    {i + 1}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot Gallery */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
              {lang === 'en' ? '📸 Screenshots' : '📸 Tangkapan Layar'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <div key={i} className="group rounded-xl overflow-hidden border border-violet-100 dark:border-violet-500/15 aspect-video relative hover:border-violet-300 dark:hover:border-violet-500/35 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.12)]">
                  <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw,33vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-violet-100 dark:border-violet-500/10">
            <Link href="/#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:scale-105">
              <ArrowLeft className="w-4 h-4" />
              {lang === 'en' ? 'All Projects' : 'Semua Proyek'}
            </Link>
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
              <ExternalLink className="w-4 h-4" />
              {lang === 'en' ? 'View Live Project' : 'Lihat Proyek Langsung'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}