'use client'

import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { use } from 'react'
import { useLang } from '@/components/i18n'

export const dynamic = 'force-dynamic'

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    subtitle: 'GIS-Based Boarding House Information System',
    year: '2024',
    role: 'Full-Stack Developer',
    status: 'Live',
    descEn: 'A comprehensive GIS-based information system for recording and managing boarding house residents in Panjer Subdistrict. Built with Laravel on the backend and featuring interactive Leaflet maps for spatial visualization of boarding house locations, complete resident data management, PDF export, reporting dashboards, and role-based admin authentication.',
    descId: 'Sistem informasi berbasis GIS untuk pendataan dan pengelolaan penghuni kos di Kelurahan Panjer. Dibangun dengan Laravel sebagai backend, dilengkapi peta interaktif Leaflet untuk visualisasi spasial lokasi kos, manajemen data penghuni lengkap, ekspor PDF, dashboard laporan, dan autentikasi admin berbasis peran.',
    tags: ['Laravel', 'TailwindCSS', 'Bootstrap', 'Leaflet.js', 'MySQL', 'PHP'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    github: '#',
    image: 'https://picsum.photos/seed/sigkos/1200/600',
    images: [
      'https://picsum.photos/seed/sigkos1/800/500',
      'https://picsum.photos/seed/sigkos2/800/500',
      'https://picsum.photos/seed/sigkos3/800/500',
    ],
    featuresEn: [
      'Interactive Leaflet map to visualize boarding house locations across the subdistrict',
      'Complete resident data management — add, edit, delete, and search records',
      'Reporting module with statistics and visual dashboards',
      'PDF export for resident reports and official documents',
      'Role-based admin authentication and access control',
      'Responsive dashboard UI built with Bootstrap & TailwindCSS',
    ],
    featuresId: [
      'Peta interaktif Leaflet untuk visualisasi lokasi kos di seluruh kelurahan',
      'Manajemen data penghuni lengkap — tambah, edit, hapus, dan cari data',
      'Modul laporan dengan statistik dan dashboard visual',
      'Ekspor PDF untuk laporan penghuni dan dokumen resmi',
      'Autentikasi admin berbasis peran dan kontrol akses',
      'UI dashboard responsif dengan Bootstrap & TailwindCSS',
    ],
    challengeEn: 'Integrating real-time geospatial data with Leaflet inside a Laravel MVC structure while keeping the map performant with many markers.',
    challengeId: 'Mengintegrasikan data geospasial real-time dengan Leaflet di dalam struktur MVC Laravel sambil menjaga performa peta dengan banyak marker.',
    demoUser: 'admin1@panjer.com',
    demoPass: 'password',
    color: 'from-violet-600 to-indigo-600',
    emoji: '🗺️',
  },
  {
    slug: 'zonaCPNS',
    title: 'ZONACPNS',
    subtitle: 'Online Exam Platform for Civil Servant Preparation',
    year: '2025',
    role: 'Full-Stack Developer',
    status: 'Live',
    descEn: 'A fully-featured online exam platform for CPNS (Indonesian Civil Servant) test preparation. Offers 6 different tryout packages with a complete question bank, automatic countdown timer, instant real-time result evaluation, and Midtrans payment gateway integration for purchasing premium packages. All participant data and results are stored and synced via Supabase.',
    descId: 'Platform tryout online berfitur lengkap untuk persiapan ujian CPNS. Menyediakan 6 paket tryout berbeda dengan bank soal lengkap, timer hitung mundur otomatis, evaluasi hasil real-time instan, dan integrasi payment gateway Midtrans untuk pembelian paket premium. Semua data peserta dan hasil disimpan via Supabase.',
    tags: ['Next.js 15', 'TailwindCSS', 'Supabase', 'Midtrans', 'TypeScript'],
    link: 'https://zonacpns.com',
    github: '#',
    image: 'https://picsum.photos/seed/cpns/1200/600',
    images: [
      'https://picsum.photos/seed/cpns1/800/500',
      'https://picsum.photos/seed/cpns2/800/500',
      'https://picsum.photos/seed/cpns3/800/500',
    ],
    featuresEn: [
      '6 different CPNS tryout packages with complete question banks',
      'Automatic countdown timer with auto-submit on time expiry',
      'Instant result evaluation with score calculation and answer review',
      'Supabase backend for participant data and result storage',
      'Midtrans payment gateway integration for premium package purchases',
      'Responsive UI built with Next.js 15 and TailwindCSS',
    ],
    featuresId: [
      '6 paket tryout CPNS berbeda dengan bank soal lengkap',
      'Timer hitung mundur otomatis dengan auto-submit saat waktu habis',
      'Evaluasi hasil instan dengan perhitungan skor dan review jawaban',
      'Backend Supabase untuk penyimpanan data peserta dan hasil',
      'Integrasi payment gateway Midtrans untuk pembelian paket premium',
      'UI responsif dengan Next.js 15 dan TailwindCSS',
    ],
    challengeEn: 'Building a secure and reliable exam timer that handles edge cases like browser refresh and tab switching without compromising exam integrity.',
    challengeId: 'Membangun timer ujian yang aman dan andal yang menangani kasus seperti refresh browser dan pergantian tab tanpa mengorbankan integritas ujian.',
    demoUser: null,
    demoPass: null,
    color: 'from-blue-600 to-violet-600',
    emoji: '📝',
  },
  {
    slug: 'rajaprana',
    title: 'Rajaprana',
    subtitle: 'Booking Engine for Spa & Activity Reservations',
    year: '2025',
    role: 'Backend Developer',
    status: 'Live',
    descEn: 'A production-grade backend booking engine for Rajaprana, a travel and wellness brand offering spa services and activity packages in Bali. Built with Laravel, the system provides a full management dashboard, RESTful APIs consumed by the frontend, automated Excel and PDF sales reporting, Fullcalendar-based availability management, transaction email notifications, and Jokul payment gateway integration.',
    descId: 'Backend booking engine production-grade untuk Rajaprana, brand travel dan wellness yang menawarkan layanan spa dan paket aktivitas di Bali. Dibangun dengan Laravel, sistem ini menyediakan dashboard manajemen lengkap, RESTful API untuk frontend, laporan penjualan Excel dan PDF otomatis, manajemen ketersediaan berbasis Fullcalendar, notifikasi email transaksi, dan integrasi payment gateway Jokul.',
    tags: ['Laravel', 'TailwindCSS', 'Fullcalendar', 'Jokul Payment', 'PHP', 'MySQL'],
    link: 'https://rajaprana.com',
    github: '#',
    image: 'https://picsum.photos/seed/rajaprana/1200/600',
    images: [
      'https://picsum.photos/seed/raja1/800/500',
      'https://picsum.photos/seed/raja2/800/500',
      'https://picsum.photos/seed/raja3/800/500',
    ],
    featuresEn: [
      'Backend management dashboard for all spa services and activity packages',
      'RESTful APIs to manage products, availability, pricing, and transaction flows',
      'Fullcalendar integration for visual availability and booking management',
      'Automated Excel and PDF sales report generation',
      'Transaction email notifications sent to customers after successful payment',
      'Jokul payment gateway integration with webhook handling',
      'Data consistency-focused architecture with proper validation layers',
    ],
    featuresId: [
      'Dashboard manajemen backend untuk semua layanan spa dan paket aktivitas',
      'RESTful API untuk manajemen produk, ketersediaan, harga, dan alur transaksi',
      'Integrasi Fullcalendar untuk manajemen ketersediaan dan pemesanan visual',
      'Pembuatan laporan penjualan Excel dan PDF otomatis',
      'Notifikasi email transaksi dikirim ke pelanggan setelah pembayaran berhasil',
      'Integrasi payment gateway Jokul dengan penanganan webhook',
      'Arsitektur yang fokus pada konsistensi data dengan lapisan validasi yang tepat',
    ],
    challengeEn: 'Designing a reliable booking engine that prevents double bookings across concurrent requests while keeping API response times fast for the frontend.',
    challengeId: 'Merancang booking engine yang andal yang mencegah double booking pada permintaan bersamaan sambil menjaga waktu respons API tetap cepat untuk frontend.',
    demoUser: null,
    demoPass: null,
    color: 'from-emerald-600 to-violet-600',
    emoji: '🧘',
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
export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { lang } = useLang()
  const project = projects.find(p => p.slug === slug)

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

  const features = lang === 'en' ? project.featuresEn : project.featuresId
  const challenge = lang === 'en' ? project.challengeEn : project.challengeId

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page BG */}
      <div className="absolute inset-0 dark:hidden" style={{ background: 'linear-gradient(180deg,#f5f0ff 0%,#ffffff 30%,#faf8ff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(180deg,#0a0515 0%,#07070f 40%,#080810 100%)' }} />

      {/* ── Hero banner ── */}
      <div className="relative h-64 sm:h-80 lg:h-[420px] overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        {/* Colour overlay matching project */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#07070f] via-white/10 dark:via-[#07070f]/30 to-transparent" />

        {/* Centred title over banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <span className="text-5xl drop-shadow-lg">{project.emoji}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white drop-shadow-xl">{project.title}</h1>
          <p className="text-white/80 font-medium text-base sm:text-lg max-w-xl drop-shadow">{project.subtitle}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {project.role}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/80 backdrop-blur-sm text-white border border-emerald-400/40">
              ● {project.status}
            </span>
          </div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="-mt-8 sm:-mt-12 space-y-6">

          {/* Back link */}
          <Link href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors group bg-white dark:bg-[#0f0a1e] px-4 py-2 rounded-xl border border-violet-200 dark:border-violet-500/20 hover:border-violet-400 dark:hover:border-violet-400/40 shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {lang === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>

          {/* ── Overview card ── */}
          <div className="rounded-2xl border border-violet-200 dark:border-violet-500/20 bg-white dark:bg-[#0f0a1e] shadow-[0_4px_40px_rgba(124,58,237,0.1)] overflow-hidden">
            <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
            <div className="p-6 sm:p-8 space-y-6">

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                {/* <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 text-sm font-semibold hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:scale-105">
                  <Github className="w-4 h-4" /> GitHub
                </a> */}
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                  <ExternalLink className="w-4 h-4" />
                  {lang === 'en' ? 'Live Demo' : 'Demo Langsung'}
                </a>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
                {lang === 'en' ? project.descEn : project.descId}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Tag key={tag} label={tag} />)}
              </div>

              {/* Demo credentials */}
              {project.demoUser && (
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/8">
                  <p className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
                    {lang === 'en' ? '🔑 Demo Credentials' : '🔑 Kredensial Demo'}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-semibold">Email:</span> {project.demoUser}</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-semibold">Password:</span> {project.demoPass}</p>
                </div>
              )}
            </div>
          </div>

          {/* ── Key Features ── */}
          <div className="rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === 'en' ? '✨ Key Features' : '✨ Fitur Utama'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base p-3 rounded-xl bg-violet-50 dark:bg-violet-500/5 border border-violet-100 dark:border-violet-500/10">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-violet-500 dark:text-violet-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Challenge & Solution ── */}
          <div className="rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {lang === 'en' ? '⚡ Key Challenge' : '⚡ Tantangan Utama'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              {challenge}
            </p>
          </div>

          {/* ── Screenshots ── */}
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

          {/* ── Other projects ── */}
          <div className="rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
              {lang === 'en' ? '🚀 Other Projects' : '🚀 Proyek Lainnya'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.filter(p => p.slug !== project.slug).map(p => (
                <Link key={p.slug} href={`/projects/${p.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-violet-100 dark:border-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/35 bg-violet-50 dark:bg-violet-500/5 hover:bg-violet-100 dark:hover:bg-violet-500/10 transition-all">
                  <span className="text-3xl">{p.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">{p.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{p.subtitle}</p>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-violet-400 rotate-180 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-violet-100 dark:border-violet-500/10">
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