import { ArrowRight, Calendar, BookOpen, Lightbulb, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices dan pattern untuk membangun large-scale React applications dengan performa tinggi.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'Architecture'],
    slug: '#',
    image: 'https://picsum.photos/seed/react-blog/800/450',
  },
  {
    title: 'Next.js 15: Fitur Baru dan Cara Migrasi',
    excerpt: 'Panduan komprehensif upgrade aplikasi Next.js ke versi 15 dengan fitur-fitur terbaru.',
    date: 'Dec 10, 2024',
    readTime: '12 min read',
    tags: ['Next.js', 'Web Dev', 'Tutorial'],
    slug: '#',
    image: 'https://picsum.photos/seed/nextjs-blog/800/450',
  },
  {
    title: 'TypeScript Deep Dive: Generics & Advanced Types',
    excerpt: 'Kuasai konsep TypeScript lanjutan untuk menulis kode yang lebih robust dan maintainable.',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Learning'],
    slug: '#',
    image: 'https://picsum.photos/seed/typescript-blog/800/450',
  },
]

const tilCards = [
  {
    title: 'CSS Container Queries',
    description: 'Container queries memungkinkan responsive design berdasarkan ukuran container, bukan viewport.',
    category: 'CSS',
    emoji: '🎨',
    date: 'Dec 20, 2024',
    color: '#f59e0b',
  },
  {
    title: 'React Server Components',
    description: 'Server components merender di server dan mengirim interactive components ke client secara efisien.',
    category: 'React',
    emoji: '⚛️',
    date: 'Dec 18, 2024',
    color: '#06b6d4',
  },
  {
    title: 'Web Performance Metrics',
    description: 'Memahami Core Web Vitals: LCP, FID, dan CLS untuk pengalaman pengguna yang optimal.',
    category: 'Performance',
    emoji: '⚡',
    date: 'Dec 16, 2024',
    color: '#10b981',
  },
  {
    title: 'Supabase Realtime',
    description: 'Supabase Realtime memungkinkan sinkronisasi data live menggunakan Postgres changes dan broadcast.',
    category: 'Database',
    emoji: '🗄️',
    date: 'Dec 14, 2024',
    color: '#7c3aed',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background — aurora effect */}
      <div className="absolute inset-0" style={{ background: '#090912' }} />
      {/* Aurora glow at top */}
      <div
        className="absolute top-0 left-0 right-0 h-64 opacity-30"
        style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.3) 0%, rgba(79,70,229,0.15) 40%, transparent 100%)' }}
      />
      {/* Aurora mid layer */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-40 opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(180deg, #10b981 0%, transparent 100%)' }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 opacity-15"
        style={{ background: 'linear-gradient(0deg, rgba(79,70,229,0.3) 0%, transparent 100%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Writing
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #6ee7b7 30%, #a78bfa 70%, #7c3aed 100%)' }}
          >
            Latest Articles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Insights, tutorial, dan pemikiran seputar web development dan software engineering.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.slug}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(124,58,237,0.04))' }}
            >
              {/* Blog image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Purple color mix overlay */}
                <div className="absolute inset-0 bg-violet-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090912] via-[#090912]/20 to-transparent" />
                {/* Read time badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-slate-300">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-200 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/15">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-400 group-hover:text-violet-300 pt-1 transition-colors">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* T.I.L Section */}
        <div
          className="rounded-3xl p-6 sm:p-10 border border-white/5 overflow-hidden relative"
          style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.02), rgba(124,58,237,0.06))' }}
        >
          {/* TIL background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(124,58,237,0.08)_0%,transparent_70%)]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(245,158,11,0.3)' }}
              >
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #a78bfa)' }}
                >
                  Today I Learned
                </h3>
                <p className="text-slate-500 text-sm">Catatan belajar harian seputar tech</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tilCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-5 border border-white/5 hover:border-violet-500/20 transition-all duration-300 overflow-hidden"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.02), rgba(0,0,0,0.2))' }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-xl"
                    style={{ background: card.color }}
                  />
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{card.emoji}</span>
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-white text-sm sm:text-base">{card.title}</h4>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: `${card.color}15`, color: card.color, border: `1px solid ${card.color}25` }}
                        >
                          {card.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {card.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}