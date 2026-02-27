'use client'

import { Calendar, MapPin, Briefcase, UtensilsCrossed } from 'lucide-react'
import { useLang } from '@/components/i18n'
import { SectionBadge, Card, Tag } from '@/components/ui'

const experiences = [
  {
    title: 'Backend Developer',
    company: 'PT. Kirana Bali Wisata',
    period: 'Sep 2025 – Present',
    location: 'Bali, Indonesia',
    descEn: 'Building structured and scalable web applications using Laravel, PHP, TailwindCSS, and JavaScript. Developed the backend booking engine for Rajaprana (rajaprana.com) covering spa services and activity packages with RESTful APIs to manage products, availability, pricing, and transaction flows. Built a full-stack monolithic app for HotelDomestik (hoteldomestik.com) handling hotel room reservations, voucher systems, price calculation, and validation — all focused on data consistency and reliability.',
    descId: 'Membangun aplikasi web terstruktur dan skalabel menggunakan Laravel, PHP, TailwindCSS, dan JavaScript. Mengembangkan backend booking engine untuk Rajaprana dan aplikasi monolitik full-stack untuk HotelDomestik.',
    highlights: ['Laravel', 'RESTful API', 'Database Design', 'Authentication', 'PHP'],
    icon: Briefcase,
  },
  {
    title: 'WordPress Developer',
    company: 'PT. Digjaya Digital',
    period: 'Aug 2024 – Feb 2025',
    location: 'Bali, Indonesia',
    descEn: 'Contributed to the development of client websites using WordPress. Built custom, responsive layouts with Elementor, implemented custom PHP/JavaScript functionality within themes and plugins, worked with JetEngine for dynamic content structures and WooCommerce for e-commerce. Also handled performance optimization, SEO configuration, and technical troubleshooting.',
    descId: 'Mengembangkan website klien menggunakan WordPress dengan Elementor, kustomisasi PHP/JavaScript, JetEngine, dan WooCommerce. Menangani optimasi performa, konfigurasi SEO, dan troubleshooting teknis.',
    highlights: ['WordPress', 'Elementor', 'PHP', 'WooCommerce', 'JetEngine', 'SEO'],
    icon: Briefcase,
  },
  {
    title: 'Food & Beverage Server',
    company: 'Six Senses Uluwatu',
    period: 'Sep 2022 – Dec 2022',
    location: 'Bali, Indonesia',
    descEn: 'First professional experience after high school graduation. Assisted guests during breakfast, lunch, and dinner service, took orders, delivered food and beverages, and maintained restaurant cleanliness. Gained foundational skills in hospitality standards, team communication, and calm performance under pressure — building confidence, discipline, and professional responsibility.',
    descId: 'Pengalaman profesional pertama setelah lulus SMA. Membantu tamu saat makan pagi, siang, dan malam, mengambil pesanan, mengantarkan makanan/minuman, dan menjaga kebersihan restoran.',
    highlights: ['Guest Service', 'Teamwork', 'Hospitality Standards', 'Communication'],
    icon: UtensilsCrossed,
  },
]

export function ExperienceSection() {
  const { t, lang } = useLang()
  return (
    <section id="experience" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 40% 30% at 20% 30%, rgba(109,40,217,0.07) 0%, transparent 60%), linear-gradient(180deg,#f8f5ff 0%,#ffffff 40%,#f2eeff 100%)' }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'radial-gradient(ellipse 40% 30% at 10% 30%, rgba(124,58,237,0.08) 0%, transparent 60%), linear-gradient(180deg,#080810 0%,#0D0A20 50%,#100D22 100%)' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
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
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{e.location}</p>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{e.title}</h3>
                          <p className="text-violet-600 dark:text-violet-400 font-semibold">{e.company}</p>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{lang === 'en' ? e.descEn : e.descId}</p>
                        <div className="flex flex-wrap gap-2">{e.highlights.map(h => <Tag key={h} label={h} />)}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}