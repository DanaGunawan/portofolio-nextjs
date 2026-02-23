import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'WordPress Developer',
    company: 'PT. Digjaya Digital',
    period: 'Aug 2024 – Feb 2025',
    location: 'Bali, Indonesia',
    description: 'Pengembangan website menggunakan WordPress dengan fokus pada kustomisasi tema, integrasi plugin, serta optimasi performa. Menghadirkan solusi digital yang responsif, mudah digunakan, dan berkinerja tinggi.',
    highlights: ['Theme Customization', 'Plugin Integration', 'Performance Optimization', 'Responsive Design'],
    color: '#7c3aed',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'D3 Manajemen Informatika',
    company: 'Politeknik Negeri Bali',
    period: '2022 – Sekarang',
    location: 'Bali, Indonesia',
    description: 'Studi di bidang Manajemen Informatika dengan fokus pada pengembangan web, basis data, dan sistem informasi. IPK: 3.71 / 4.00',
    highlights: ['Web Development', 'Database Management', 'System Analysis', 'IPK 3.71/4.00'],
    color: '#4f46e5',
    icon: GraduationCap,
  },
]

const certifications = [
  {
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    issuer: 'Dicoding',
    date: 'Oktober 2023',
    modules: ['Pengenalan Back-End', 'Dasar Node.js', 'Web Service dengan Node.js', 'RESTful API & Postman'],
  },
  {
    title: 'Cloud Practitioner Essentials (AWS Cloud)',
    issuer: 'Dicoding',
    date: 'November 2023',
    modules: ['Amazon Web Services', 'Komputasi di Cloud', 'Infrastruktur Global', 'Jaringan Cloud'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0A20 50%, #100D22 100%)' }} />
      {/* Horizontal line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      {/* Side glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl" />
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-indigo-600/8 blur-3xl" />
      {/* Subtle horizontal lines */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(167,139,250,1) 40px, rgba(167,139,250,1) 41px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Career Path
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #4f46e5 100%)' }}
          >
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Perjalanan profesional dan pendidikan yang membentuk keahlian saya.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, #7c3aed 0%, #4f46e5 50%, transparent 100%)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <div key={idx} className="group relative md:pl-20">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3 sm:left-5 top-8 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                    style={{ borderColor: exp.color, background: `${exp.color}20` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-violet-500/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                    style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(124,58,237,0.04) 100%)' }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
                      {/* Left meta */}
                      <div className="sm:col-span-1 space-y-3">
                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: exp.color }} />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-sm" style={{ color: exp.color }}>
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right content */}
                      <div className="sm:col-span-3 space-y-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                          <p className="font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium border"
                              style={{ background: `${exp.color}10`, color: exp.color, borderColor: `${exp.color}30` }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              🏆
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ffffff, #a78bfa)' }}
            >
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.12)] overflow-hidden group"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(124,58,237,0.05))' }}
              >
                {/* Gradient corner accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: 'radial-gradient(circle at top right, #7c3aed, transparent 70%)' }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    📜
                  </div>
                  <div className="space-y-2 min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base leading-snug">{cert.title}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-violet-400 text-xs font-medium">{cert.issuer}</span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-500 text-xs">{cert.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.modules.map((m) => (
                        <span key={m} className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-slate-400 border border-white/5">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}