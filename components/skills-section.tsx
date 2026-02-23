import { Award, Code2, Server, Wrench, Palette } from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend',
    icon: Code2,
    color: '#7c3aed',
    gradient: 'from-violet-600/20 to-purple-700/10',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    color: '#4f46e5',
    gradient: 'from-indigo-600/20 to-blue-700/10',
    skills: ['PHP', 'Laravel', 'Node.js', 'SQL', 'RESTful API', 'Supabase'],
  },
  {
    category: 'Tools & Platform',
    icon: Wrench,
    color: '#06b6d4',
    gradient: 'from-cyan-600/20 to-indigo-700/10',
    skills: ['GitHub', 'Postman', 'Vercel', 'ChatGPT / AI Tools', 'VS Code', 'AWS (Dasar)'],
  },
  {
    category: 'Lainnya',
    icon: Palette,
    color: '#a855f7',
    gradient: 'from-purple-600/20 to-violet-700/10',
    skills: ['Debugging', 'System Optimization', 'Version Control', 'Responsive Design', 'SEO', 'Agile'],
  },
]

const certifications = [
  {
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    issuer: 'Dicoding',
    year: 'Okt 2023',
    emoji: '🖥️',
  },
  {
    title: 'Cloud Practitioner Essentials (AWS Cloud)',
    issuer: 'Dicoding',
    year: 'Nov 2023',
    emoji: '☁️',
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - mesh gradient feel */}
      <div className="absolute inset-0" style={{ background: '#0A0A18' }} />
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-8 blur-[100px]" style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-6 blur-[100px]" style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-4 blur-[120px]" style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />
      {/* Top/bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Tech Stack
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #7c3aed 100%)' }}
          >
            Skills & Tools
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi web modern.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-6 border border-white/5 hover:border-violet-500/25 transition-all duration-500 overflow-hidden bg-gradient-to-br ${cat.gradient}`}
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.03), ${cat.color}08)`,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-2xl"
                  style={{ background: cat.color }}
                />
                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 0 1px ${cat.color}30` }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{cat.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: `${cat.color}10`,
                        color: cat.color,
                        borderColor: `${cat.color}25`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              <Award className="w-5 h-5 text-violet-400" />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ffffff, #a78bfa)' }}
            >
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 rounded-2xl p-5 border border-white/5 hover:border-violet-500/25 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)]"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(124,58,237,0.05))' }}
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))', border: '1px solid rgba(124,58,237,0.3)' }}
                >
                  {cert.emoji}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base leading-snug">{cert.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-violet-400 text-xs font-medium">{cert.issuer}</span>
                    <span className="text-slate-600 text-xs">·</span>
                    <span className="text-slate-500 text-xs">{cert.year}</span>
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