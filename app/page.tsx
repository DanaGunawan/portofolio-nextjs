'use client'

import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Calendar, Clock, Lightbulb, Briefcase, GraduationCap, MapPin, Code2, Server, Wrench, Award, Send, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLang } from '@/components/i18n'
import { Avatar } from '@/components/avatar'

// ─── DATA ───────────────────────────────────────────────────────────────────

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    descEn: 'Information system for boarding house resident data management in Kelurahan Panjer with interactive Leaflet maps, reports, and statistics.',
    descId: 'Sistem informasi pendataan penghuni kos di Kelurahan Panjer dengan peta interaktif Leaflet, laporan, dan statistik.',
    tags: ['Laravel', 'Bootstrap', 'Leaflet', 'MySQL'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    image: 'https://picsum.photos/seed/sigkos/800/450',
  },
  {
    slug: 'pomodoro-app',
    title: 'Pomodoro App',
    descEn: 'Pomodoro-based time management app with real-time timer, task list, and session statistics synced via Supabase.',
    descId: 'Aplikasi manajemen waktu berbasis Pomodoro dengan timer real-time, daftar tugas, dan statistik sesi via Supabase.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'TypeScript'],
    link: 'https://pomodoro-boost.vercel.app/',
    image: 'https://picsum.photos/seed/pomodoro/800/450',
  },
  {
    slug: 'tryout-cpns',
    title: 'Tryout CPNS',
    descEn: 'Online exam platform for CPNS preparation with question bank, auto timer, real-time results, and Midtrans payment integration.',
    descId: 'Platform tryout online untuk persiapan ujian CPNS dengan bank soal, timer otomatis, hasil real-time, dan integrasi pembayaran Midtrans.',
    tags: ['Next.js', 'Supabase', 'Midtrans', 'Tailwind'],
    link: 'https://masukcpns.vercel.app/',
    image: 'https://picsum.photos/seed/cpns/800/450',
  },
]

const blogPosts = [
  { title: 'Building Scalable React Applications', excerpt: 'Best practices and patterns for structuring large-scale React apps with performance in mind.', date: 'Dec 15, 2024', read: '8 min', tags: ['React', 'Performance'], img: 'https://picsum.photos/seed/react-blog/800/450' },
  { title: 'Next.js 15: New Features & Migration Guide', excerpt: 'Comprehensive guide to upgrading your Next.js apps to version 15 with all new features.', date: 'Dec 10, 2024', read: '12 min', tags: ['Next.js', 'Tutorial'], img: 'https://picsum.photos/seed/nextjs-blog/800/450' },
  { title: 'TypeScript Deep Dive: Generics & Advanced Types', excerpt: 'Master advanced TypeScript to write more robust and maintainable code.', date: 'Dec 5, 2024', read: '10 min', tags: ['TypeScript', 'JS'], img: 'https://picsum.photos/seed/typescript-blog/800/450' },
]

const tilEntries = [
  { title: 'CSS Container Queries', desc: 'Container queries enable responsive design based on container size — a game changer for component-level responsiveness.', category: 'CSS', date: 'Dec 20, 2024' },
  { title: 'React Server Components', desc: 'RSC renders on the server and sends interactive components to the client, reducing client-side JS bundle size.', category: 'React', date: 'Dec 18, 2024' },
  { title: 'Core Web Vitals', desc: "LCP, FID, and CLS are Google's key metrics for measuring real-world web user experience. Optimize these for SEO.", category: 'Performance', date: 'Dec 16, 2024' },
  { title: 'Supabase Realtime', desc: 'Supabase Realtime enables live data sync via Postgres changes, presence, and broadcast — no extra infra needed.', category: 'Database', date: 'Dec 14, 2024' },
  { title: 'Next.js Turbopack', desc: "Turbopack is Vercel's Rust-based bundler, up to 700x faster than Webpack for local development in Next.js 15.", category: 'Next.js', date: 'Dec 12, 2024' },
  { title: 'TypeScript satisfies', desc: 'The `satisfies` operator validates a value against a type without widening it — keeping type safety and precise inference.', category: 'TypeScript', date: 'Dec 10, 2024' },
]

const skillCats = [
  { category: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
  { category: 'Backend', icon: Server, skills: ['PHP', 'Laravel', 'Node.js', 'SQL', 'RESTful API', 'Supabase'] },
  { category: 'Tools & Platforms', icon: Wrench, skills: ['GitHub', 'Postman', 'Vercel', 'ChatGPT / AI Tools', 'VS Code', 'AWS (Basic)'] },
  { category: 'Other', icon: Code2, skills: ['Debugging', 'System Optimization', 'Version Control', 'Responsive Design', 'SEO'] },
]

const certs = [
  { title: 'Belajar Membuat Aplikasi Back-End untuk Pemula', issuer: 'Dicoding', date: 'Oct 2023', emoji: '🖥️' },
  { title: 'Cloud Practitioner Essentials (AWS Cloud)', issuer: 'Dicoding', date: 'Nov 2023', emoji: '☁️' },
]

const experiences = [
  {
    title: 'WordPress Developer', company: 'PT. Digjaya Digital', period: 'Aug 2024 – Feb 2025', location: 'Bali, Indonesia',
    descEn: 'Developed websites using WordPress with theme customization, plugin integration, and performance optimization. Delivered responsive, high-performing digital solutions.',
    descId: 'Mengembangkan website menggunakan WordPress dengan kustomisasi tema, integrasi plugin, dan optimasi performa.',
    highlights: ['Theme Customization', 'Plugin Integration', 'Performance Optimization', 'SEO'], icon: Briefcase,
  },
  {
    title: 'D3 Manajemen Informatika', company: 'Politeknik Negeri Bali', period: '2022 – Present', location: 'Bali, Indonesia',
    descEn: 'Studying Informatics Management with focus on web development, databases, and software engineering. GPA: 3.71 / 4.00.',
    descId: 'Menempuh D3 Manajemen Informatika dengan fokus pada web development, basis data, dan rekayasa perangkat lunak. IPK: 3.71 / 4.00.',
    highlights: ['Web Development', 'Database', 'System Analysis', 'GPA 3.71/4.00'], icon: GraduationCap,
  },
]

// ─── SHARED HELPERS ──────────────────────────────────────────────────────────

function SectionBadge({ label, color = 'violet' }: { label: string; color?: 'violet' | 'emerald' | 'indigo' | 'amber' }) {
  const cls = {
    violet: 'border-violet-400/30 bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
    emerald: 'border-emerald-400/30 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    indigo: 'border-indigo-400/30 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
    amber: 'border-amber-400/30 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  }[color]
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {label}
    </div>
  )
}

function Card({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] ${hover ? 'hover:border-violet-300 dark:hover:border-violet-500/25 hover:shadow-[0_4px_30px_rgba(124,58,237,0.08)] transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ─── TAG CHIP ─────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20">
      {label}
    </span>
  )
}

// ─── SECTION DIVIDER ─────────────────────────────────────────────────────────
function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-violet-300/40 dark:via-violet-500/20 to-transparent my-2" />
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE — All sections in one scroll
// ══════════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
    setSubmitting(false)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200 bg-violet-50 dark:bg-violet-500/5 border-violet-200 dark:border-violet-500/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15 dark:focus:border-violet-400"

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(99,102,241,0.08) 0%, transparent 60%), linear-gradient(180deg,#f0ebff 0%,#faf8ff 60%,#f5f3ff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(109,40,217,0.25) 0%, rgba(76,29,149,0.12) 40%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(79,70,229,0.18) 0%, transparent 60%), #050510' }} />
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
                <a href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                  style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)' }}>
                  {t.hero.cta1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-700 dark:text-violet-300 border border-violet-400/40 bg-violet-50 dark:bg-violet-500/10 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all duration-300 hover:scale-105">
                  {t.hero.cta2}
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
                  { val: '3.71', label: t.hero.stats.gpa },
                  { val: '1+', label: t.hero.stats.exp },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>{val}</p>
                    <p className="text-xs text-slate-500 mt-1">{label}</p>
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

      {/* ════════════════════════════════════════════════════════════
          PROJECTS
      ════════════════════════════════════════════════════════════ */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 60% 40% at 90% 10%, rgba(124,58,237,0.09) 0%, transparent 55%), linear-gradient(145deg,#f5f0ff 0%,#ffffff 50%,#f0ebff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#0F0A1E 50%,#1a0a2e 100%)' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="space-y-3 mb-14">
            <SectionBadge label={t.projects.badge} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.projects.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.slug}
                className="group relative rounded-2xl overflow-hidden border border-violet-100 dark:border-white/5 hover:border-violet-400/40 dark:hover:border-violet-500/30 bg-white dark:bg-white/[0.02] transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)] hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-video">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0a0515] to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold text-white" style={{ background: 'rgba(124,58,237,0.85)', backdropFilter: 'blur(8px)' }}>{p.tags[0]}</span>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors block" aria-label="Live Demo">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{lang === 'en' ? p.descEn : p.descId}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(tag => <Tag key={tag} label={tag} />)}
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
      </section>

      {/* ════════════════════════════════════════════════════════════
          EXPERIENCE
      ════════════════════════════════════════════════════════════ */}
      <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 40% 30% at 20% 30%, rgba(109,40,217,0.07) 0%, transparent 60%), linear-gradient(180deg,#f8f5ff 0%,#ffffff 40%,#f2eeff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 40% 30% at 10% 30%, rgba(124,58,237,0.08) 0%, transparent 60%), linear-gradient(180deg,#080810 0%,#0D0A20 50%,#100D22 100%)' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="space-y-3 mb-14">
            <SectionBadge label={t.experience.badge} color="indigo" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.experience.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.experience.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(180deg,#7c3aed,#4f46e5 60%,transparent 100%)' }} />
            <div className="space-y-8">
              {experiences.map((e, i) => {
                const Icon = e.icon
                return (
                  <div key={i} className="relative md:pl-20 group">
                    <div className="absolute left-3.5 top-7 w-5 h-5 rounded-full hidden md:flex items-center justify-center transition-transform group-hover:scale-125" style={{ border: '2px solid #7c3aed', background: 'rgba(124,58,237,0.12)' }}>
                      <div className="w-2 h-2 rounded-full bg-violet-600" />
                    </div>
                    <Card className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-5">
                        <div className="shrink-0 space-y-2">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))', border: '1px solid rgba(124,58,237,0.25)' }}>
                            <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                          </div>
                          <p className="text-sm text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{e.period}</p>
                          <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{e.location}</p>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{e.title}</h3>
                            <p className="text-violet-600 dark:text-violet-400 font-semibold">{e.company}</p>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{lang === 'en' ? e.descEn : e.descId}</p>
                          <div className="flex flex-wrap gap-2">
                            {e.highlights.map(h => <Tag key={h} label={h} />)}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certs */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.experience.certs}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certs.map((c, i) => (
                <Card key={i} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))', border: '1px solid rgba(124,58,237,0.25)' }}>{c.emoji}</div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">{c.title}</p>
                      <p className="text-xs text-violet-600 dark:text-violet-400 font-medium mt-1">{c.issuer} · {c.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SKILLS
      ════════════════════════════════════════════════════════════ */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 60%), linear-gradient(135deg,#f3f0ff 0%,#faf8ff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(circle at 25% 25%, rgba(124,58,237,0.12) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79,70,229,0.1) 0%, transparent 50%), #0A0A18' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
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
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(s => <Tag key={s} label={s} />)}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BLOG
      ════════════════════════════════════════════════════════════ */}
      <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(110,231,183,0.1) 0%, rgba(167,139,250,0.07) 40%, transparent 70%), linear-gradient(180deg,#f0fdf9 0%,#fdf9ff 30%,#ffffff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.07) 15%, transparent 40%), #090912' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="space-y-3 mb-14">
            <SectionBadge label={t.blog.badge} color="emerald" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.blog.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.blog.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {blogPosts.map((post, i) => (
              <a key={i} href="#"
                className="group rounded-2xl overflow-hidden border border-violet-100 dark:border-white/5 hover:border-violet-400/30 dark:hover:border-violet-500/25 bg-white dark:bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(124,58,237,0.1)] block">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:768px) 100vw,33vw" />
                  <div className="absolute inset-0 bg-violet-900/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#090912] to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-white">
                    <Clock className="w-3 h-3" />{post.read} read
                  </div>
                </div>
                <div className="p-5 space-y-2.5">
                  <p className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</p>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors text-sm sm:text-base leading-snug">{post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">{post.tags.map(t => <Tag key={t} label={t} />)}</div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                    {t.read} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Divider />

          {/* T.I.L sub-section */}
          <div className="pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(124,58,237,0.15))', border: '1px solid rgba(245,158,11,0.25)' }}>
                <Lightbulb className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t.blog.til}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm">{t.blog.tilSub}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tilEntries.map((entry, i) => (
                <div key={i}
                  className="group p-5 rounded-2xl border border-violet-100 dark:border-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/35 bg-white dark:bg-violet-500/5 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)] transition-all duration-300 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))', border: '1px solid rgba(124,58,237,0.2)' }}>
                      <Lightbulb className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/25 whitespace-nowrap">
                      {entry.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">{entry.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{entry.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 pt-1 border-t border-violet-100 dark:border-violet-500/10">
                    <Calendar className="w-3 h-3" />{entry.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STUDIO / ABOUT
      ════════════════════════════════════════════════════════════ */}
      <section id="studio" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 60%), linear-gradient(135deg,#f5f2ff 0%,#ffffff 60%,#f0ebff 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), #07070F' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
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
                    <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">Full-Stack AI Web Developer</p>
                    <p className="text-slate-500 text-xs">Bali, Indonesia 🇮🇩</p>
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
                    { label: t.studio.building, value: 'This Portfolio 🚀' },
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
                  {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Laravel', 'Vercel'].map(s => <Tag key={s} label={s} />)}
                </div>
              </Card>
              <Card className="p-5">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">✨ {t.studio.funFacts}</h4>
                <ul className="space-y-2">
                  {(lang === 'en'
                    ? ['Based in beautiful Bali, Indonesia 🏝️', 'GPA 3.71/4.00 at Politeknik Negeri Bali', 'Passionate about AI-assisted development', 'Former social org leader (Aksosma 2022)', 'Coffee-fueled coder ☕']
                    : ['Tinggal di Bali yang indah 🏝️', 'IPK 3.71/4.00 di Politeknik Negeri Bali', 'Passionate tentang pengembangan AI', 'Mantan ketua Aksosma 2022', 'Developer bertenaga kopi ☕']
                  ).map((f, i) => (
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

      {/* ════════════════════════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 65%), linear-gradient(180deg,#ffffff 0%,#f5f1ff 60%,#ede9fe 100%)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(79,70,229,0.1) 0%, transparent 60%), #0A0A1A' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="space-y-3 mb-14">
            <SectionBadge label={t.contact.badge} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.contact.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { emoji: '📧', label: t.contact.email, value: 'dewakadekdana@gmail.com', href: 'mailto:dewakadekdana@gmail.com' },
                { emoji: '📱', label: 'Phone', value: '+62 815-2909-7310', href: 'tel:+6281529097310' },
                { emoji: '📍', label: 'Location', value: t.contact.location, href: '#' },
              ].map(({ emoji, label, value, href }) => (
                <a key={label} href={href}
                  className="group flex items-center gap-4 rounded-2xl p-5 border border-violet-100 dark:border-white/5 hover:border-violet-300 dark:hover:border-violet-500/25 bg-white dark:bg-white/[0.02] transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)] hover:-translate-y-0.5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(79,70,229,0.12))', border: '1px solid rgba(124,58,237,0.2)' }}>{emoji}</div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{label}</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl p-5 border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02]">
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">{t.contact.findMe}</p>
                <div className="flex gap-2">
                  {[
                    { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { Icon: Mail, href: 'mailto:dewakadekdana@gmail.com', label: 'Email' },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-violet-100 dark:border-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all" aria-label={label}>
                      <Icon className="w-4 h-4" />
                      <span className="text-xs">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-px" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.4),rgba(79,70,229,0.2),rgba(124,58,237,0.4))' }}>
                <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 space-y-4 bg-white dark:bg-[#0f0a1e]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.name}</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputCls} placeholder={t.contact.namePh} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.email}</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder={t.contact.emailPh} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.subject}</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} required className={inputCls} placeholder={t.contact.subjectPh} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.message}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputCls} resize-none`} placeholder={t.contact.messagePh} />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)' }}>
                    {submitting
                      ? <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />{t.contact.sending}</>
                      : <>{t.contact.send}<Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>}
                  </button>
                  {submitted && (
                    <div className="p-4 rounded-xl border border-emerald-400/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm text-center">{t.contact.success}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}