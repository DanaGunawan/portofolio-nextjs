'use client'

import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/components/i18n'
import { SectionBadge, Tag } from '@/components/ui'

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    descEn: 'GIS-based information system for recording and managing boarding house residents in Panjer Subdistrict. Features resident data management, reporting, statistics, PDF export, and interactive Leaflet maps to visualize locations.',
    descId: 'Sistem informasi berbasis GIS untuk pendataan penghuni kos di Kelurahan Panjer dengan manajemen data, laporan, statistik, ekspor PDF, dan peta interaktif Leaflet.',
    tags: ['Laravel', 'TailwindCSS', 'Bootstrap', 'Leaflet'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    image: 'https://picsum.photos/seed/sigkos/800/450',
  },
  {
    slug: 'zonaCPNS',
    title: 'ZONACPNS',
    descEn: 'Online exam platform for CPNS preparation with 6 different tryout packages, automatic timer, real-time result evaluation, Supabase data storage, and Midtrans payment integration.',
    descId: 'Platform tryout online untuk persiapan CPNS dengan 6 paket tryout, timer otomatis, evaluasi hasil real-time, penyimpanan Supabase, dan integrasi pembayaran Midtrans.',
    tags: ['Next.js 15', 'TailwindCSS', 'Supabase', 'Midtrans'],
    link: 'https://zonacpns.com',
    image: 'https://picsum.photos/seed/cpns/800/450',
  },
  {
    slug: 'rajaprana',
    title: 'Rajaprana',
    descEn: 'Backend booking engine for spa & activity reservations. Includes management dashboard, RESTful APIs for products/availability/pricing, automated Excel/PDF sales reports, transaction email notifications, and Jokul payment integration.',
    descId: 'Backend booking engine untuk reservasi spa dan aktivitas. Dashboard manajemen, RESTful API, laporan penjualan Excel/PDF otomatis, notifikasi email transaksi, dan integrasi Jokul payment.',
    tags: ['Laravel', 'TailwindCSS', 'Fullcalendar', 'Jokul'],
    link: 'https://rajaprana.com',
    image: 'https://picsum.photos/seed/rajaprana/800/450',
  },
]

export function ProjectsSection() {
  const { t, lang } = useLang()
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center"
    >
      {/* ── Light mode background ── */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 90% 10%, rgba(124,58,237,0.09) 0%, transparent 55%), linear-gradient(145deg,#f5f0ff 0%,#ffffff 50%,#f0ebff 100%)',
        }}
      />
      {/* ── Dark mode background ── */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(135deg,#0D0D1A 0%,#0F0A1E 50%,#1a0a2e 100%)',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="space-y-3 mb-14">
          <SectionBadge label={t.projects.badge} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="group relative rounded-2xl overflow-hidden
                /* Light mode card */
                border border-violet-200 bg-white
                shadow-[0_2px_16px_rgba(109,40,217,0.08)]
                hover:shadow-[0_8px_40px_rgba(109,40,217,0.18)]
                hover:border-violet-400
                /* Dark mode card */
                dark:border-white/5 dark:bg-white/[0.02]
                dark:hover:border-violet-500/30
                dark:hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]
                transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                />
                {/*
                  FIX: Light mode overlay — pakai from-white/60 bukan from-white/90
                  agar gambar tidak tampak pucat/buram
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#0a0515]/90 to-transparent" />

                {/* Tag chip */}
                <span
                  className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold text-white"
                  style={{
                    background: 'rgba(124,58,237,0.85)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {p.tags[0]}
                </span>

                {/* External link button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors block"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                {/*
                  FIX: text-slate-600 (lebih gelap) untuk light mode agar tidak pucat
                */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {lang === 'en' ? p.descEn : p.descId}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold
                    text-violet-700 dark:text-violet-400
                    hover:text-violet-800 dark:hover:text-violet-300
                    transition-colors group/btn"
                >
                  {t.projects.viewDetails}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}