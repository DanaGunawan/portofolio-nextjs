'use client'

import { ArrowRight, Calendar, Clock, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { useLang } from '@/components/i18n'
import { SectionBadge, Tag, Divider } from '@/components/ui'

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

export function BlogSection() {
  const { t } = useLang()
  return (
    <section
      id="blog"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center"
    >
      {/* ── Light mode background ── */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(110,231,183,0.1) 0%, rgba(167,139,250,0.07) 40%, transparent 70%), linear-gradient(180deg,#f0fdf9 0%,#fdf9ff 30%,#ffffff 100%)',
        }}
      />
      {/* ── Dark mode background ── */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            'linear-gradient(180deg, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.07) 15%, transparent 40%), #090912',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="space-y-3 mb-14">
          <SectionBadge label={t.blog.badge} color="emerald" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            {t.blog.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Blog post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="group rounded-2xl overflow-hidden
                /* Light mode */
                border border-violet-200 bg-white
                shadow-[0_2px_16px_rgba(109,40,217,0.08)]
                hover:shadow-[0_8px_40px_rgba(109,40,217,0.16)]
                hover:border-violet-400
                /* Dark mode */
                dark:border-white/5 dark:bg-white/[0.02]
                dark:hover:border-violet-500/25
                dark:hover:shadow-[0_4px_30px_rgba(124,58,237,0.1)]
                transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width:768px) 100vw,33vw"
                />
                {/* Subtle overlay — tidak terlalu putih di light mode */}
                <div className="absolute inset-0 bg-violet-900/10 mix-blend-multiply" />
                {/*
                  FIX: from-white/50 bukan from-white/90 agar gambar tidak buram
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-[#090912]/90 to-transparent" />

                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-white">
                  <Clock className="w-3 h-3" />{post.read} read
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2.5">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />{post.date}
                </p>
                {/*
                  FIX: group-hover:text-violet-700 (bukan violet-300) di light mode
                */}
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors text-sm sm:text-base leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tg) => (
                    <Tag key={tg} label={tg} />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-700 dark:text-violet-400 group-hover:text-violet-800 dark:group-hover:text-violet-300 transition-colors">
                  Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <Divider />

        {/* T.I.L section */}
        <div className="pt-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(124,58,237,0.15))',
                border: '1px solid rgba(245,158,11,0.25)',
              }}
            >
              <Lightbulb className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {t.blog.til}
              </h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm">{t.blog.tilSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tilEntries.map((entry, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl space-y-3
                  /* Light mode */
                  border border-violet-200 bg-white
                  shadow-[0_1px_12px_rgba(109,40,217,0.07)]
                  hover:border-violet-400
                  hover:shadow-[0_4px_24px_rgba(109,40,217,0.14)]
                  /* Dark mode */
                  dark:border-violet-500/15 dark:bg-violet-500/5
                  dark:hover:border-violet-500/35
                  dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]
                  transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(79,70,229,0.15))',
                      border: '1px solid rgba(124,58,237,0.2)',
                    }}
                  >
                    <Lightbulb className="w-4 h-4 text-violet-700 dark:text-violet-400" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/25 whitespace-nowrap">
                    {entry.category}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                  {entry.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {entry.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 pt-1 border-t border-violet-100 dark:border-violet-500/10">
                  <Calendar className="w-3 h-3" />{entry.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}