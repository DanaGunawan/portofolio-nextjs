import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    slug: 'sigkos-panjer',
    title: 'SIGKOS PANJER',
    description: 'Sistem informasi pendataan dan pengelolaan penghuni kos di Kelurahan Panjer dengan peta interaktif Leaflet.',
    tags: ['Laravel', 'Bootstrap', 'Leaflet', 'MySQL'],
    link: 'https://sigkoskelurahanpanjer.web.id/',
    github: '#',
    image: 'https://picsum.photos/seed/sigkos/800/450',
    color: 'from-emerald-600/20 to-violet-700/20',
    accent: '#10b981',
  },
  {
    slug: 'pomodoro-app',
    title: 'Pomodoro App',
    description: 'Aplikasi manajemen waktu berbasis Pomodoro dengan timer, daftar tugas, dan statistik sesi real-time.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'TypeScript'],
    link: 'https://pomodoro-boost.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/pomodoro/800/450',
    color: 'from-violet-600/20 to-indigo-700/20',
    accent: '#7c3aed',
  },
  {
    slug: 'tryout-cpns',
    title: 'Tryout CPNS',
    description: 'Platform tryout online untuk persiapan ujian CPNS dengan bank soal, timer otomatis, dan integrasi pembayaran.',
    tags: ['Next.js', 'Supabase', 'Midtrans', 'Tailwind'],
    link: 'https://masukcpns.vercel.app/',
    github: '#',
    image: 'https://picsum.photos/seed/cpns/800/450',
    color: 'from-blue-600/20 to-violet-700/20',
    accent: '#4f46e5',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070F]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0D0D1A_0%,#0F0A1E_50%,#1a0a2e_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_80%_20%,rgba(124,58,237,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(79,70,229,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-mono tracking-wider uppercase">
     <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            My Work
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)' }}
          >
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Proyek-proyek pilihan yang menampilkan keahlian full-stack development, integrasi AI, dan solusi inovatif.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:-translate-y-1"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(124,58,237,0.05) 100%)' }}
            >
              {/* Gradient overlay bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Preview Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] via-[#0a0515]/40 to-transparent" />
                {/* Tech category badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className="px-2 py-1 rounded-lg text-xs font-semibold text-white backdrop-blur-sm border border-white/10"
                    style={{ background: `${project.accent}30` }}
                  >
                    {project.tags[0]}
                  </span>
                </div>
                {/* Hover action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-colors"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="relative z-10 p-5 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs font-medium border border-violet-500/20"
                      style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View detail button */}
                <div className="pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom glow bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center pt-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}