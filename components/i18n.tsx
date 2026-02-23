'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'id'

export const translations = {
  en: {
    nav: {
      projects: 'Projects',
      blog: 'Blog',
      til: 'T.I.L',
      work: 'Work',
      skills: 'Skills & Tools',
      experience: 'Experience',
      studio: 'Studio',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Dana 👋",
      role: 'Full-Stack AI Web Developer',
      desc: 'Blending manual coding with artificial intelligence to build web applications that are',
      descHighlight: 'scalable, fast, and optimized.',
      cta1: 'Get in Touch',
      cta2: 'View My Work',
      currently: 'Currently exploring: AI Agents & LLMs',
      stats: { projects: 'Projects', gpa: 'GPA', exp: 'Yrs Exp' },
    },
    projects: {
      badge: 'My Work',
      title: 'Featured Projects',
      subtitle: 'A selection of projects showcasing my expertise in full-stack development and innovative solutions.',
      viewDetails: 'View Details',
      viewAll: 'View All Projects',
      live: 'Live Demo',
    },
    experience: {
      badge: 'Career Path',
      title: 'Work Experience',
      subtitle: 'My professional journey and education that shaped my skills.',
      certs: 'Certifications',
    },
    skills: {
      badge: 'Tech Stack',
      title: 'Skills & Tools',
      subtitle: 'Technologies and tools I use to build modern web applications.',
      certs: 'Certifications',
    },
    blog: {
      badge: 'Writing',
      title: 'Latest Articles',
      subtitle: 'Insights, tutorials, and thoughts on web development and software engineering.',
      read: 'Read Article',
      readAll: 'Read All Articles',
      til: 'Today I Learned',
      tilSub: 'Daily learning notes about tech',
    },
    contact: {
      badge: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Have an interesting project or want to collaborate? Feel free to reach out!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: '✅ Message sent! I will get back to you soon.',
      namePh: 'Dana Gunawan',
      emailPh: 'your@email.com',
      subjectPh: 'What is this about?',
      messagePh: 'Tell me about your project or idea...',
      location: 'Bali, Indonesia',
      findMe: 'Find me on',
      portfolio: 'Portfolio',
    },
    studio: {
      badge: 'About Me',
      title: 'Studio',
      subtitle: "A glimpse into who I am, what I do, and how I work.",
      bio1: "I'm I Dewa Kadek Dana Gunawan — a Full-Stack AI Web Developer from Bali, Indonesia. I combine manual coding with AI tools to build fast, scalable, and optimized web applications.",
      bio2: "Currently studying D3 Manajemen Informatika at Politeknik Negeri Bali (GPA 3.71/4.00), I'm passionate about creating digital experiences that are not just functional, but truly delightful.",
      bio3: "I enjoy working at the intersection of design and engineering — whether that's crafting pixel-perfect UIs or architecting robust back-end systems.",
      currently: 'Currently',
      learning: 'Learning',
      building: 'Building',
      listening: 'Listening',
      stack: 'Current Stack',
      funFacts: 'Fun Facts',
    },
    til: {
      badge: 'Learning Log',
      title: 'Today I Learned',
      subtitle: 'Short notes on things I discover while building and learning.',
    },
    work: {
      badge: 'Experience',
      title: 'Work History',
      subtitle: 'My professional roles and what I built at each.',
    },
    footer: {
      tagline: 'Full-Stack AI Developer',
      desc: 'Building scalable, fast, and optimized web apps by combining manual coding with artificial intelligence.',
      nav: 'Navigation',
      connect: 'Connect',
      open: 'Open to opportunities',
      built: 'Built with',
      rights: 'All rights reserved.',
    },
  },
  id: {
    nav: {
      projects: 'Proyek',
      blog: 'Blog',
      til: 'T.I.L',
      work: 'Pekerjaan',
      skills: 'Keahlian & Tools',
      experience: 'Pengalaman',
      studio: 'Studio',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, Saya Dana 👋',
      role: 'Full-Stack AI Web Developer',
      desc: 'Memadukan coding manual dengan kecerdasan buatan untuk membangun aplikasi web yang',
      descHighlight: 'scalable, cepat, dan teroptimasi.',
      cta1: 'Hubungi Saya',
      cta2: 'Lihat Proyek',
      currently: 'Sedang mempelajari: AI Agents & LLMs',
      stats: { projects: 'Proyek', gpa: 'IPK', exp: 'Thn Pengalaman' },
    },
    projects: {
      badge: 'Karya Saya',
      title: 'Proyek Unggulan',
      subtitle: 'Kumpulan proyek yang menampilkan keahlian full-stack development dan solusi inovatif.',
      viewDetails: 'Lihat Detail',
      viewAll: 'Lihat Semua Proyek',
      live: 'Demo Langsung',
    },
    experience: {
      badge: 'Jalur Karir',
      title: 'Pengalaman Kerja',
      subtitle: 'Perjalanan profesional dan pendidikan yang membentuk keahlian saya.',
      certs: 'Sertifikasi',
    },
    skills: {
      badge: 'Tech Stack',
      title: 'Keahlian & Tools',
      subtitle: 'Teknologi dan tools yang saya gunakan untuk membangun aplikasi web modern.',
      certs: 'Sertifikasi',
    },
    blog: {
      badge: 'Tulisan',
      title: 'Artikel Terbaru',
      subtitle: 'Insights, tutorial, dan pemikiran seputar web development dan software engineering.',
      read: 'Baca Artikel',
      readAll: 'Baca Semua Artikel',
      til: 'Hari Ini Saya Belajar',
      tilSub: 'Catatan belajar harian seputar tech',
    },
    contact: {
      badge: 'Kontak',
      title: 'Hubungi Saya',
      subtitle: 'Ada proyek menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi!',
      name: 'Nama',
      email: 'Email',
      subject: 'Subjek',
      message: 'Pesan',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: '✅ Pesan terkirim! Saya akan segera menghubungi kamu.',
      namePh: 'Dana Gunawan',
      emailPh: 'email@kamu.com',
      subjectPh: 'Tentang apa ini?',
      messagePh: 'Ceritakan proyek atau ide kamu...',
      location: 'Bali, Indonesia',
      findMe: 'Temukan saya di',
      portfolio: 'Portofolio',
    },
    studio: {
      badge: 'Tentang Saya',
      title: 'Studio',
      subtitle: 'Sekilas tentang siapa saya, apa yang saya lakukan, dan bagaimana saya bekerja.',
      bio1: 'Saya I Dewa Kadek Dana Gunawan — seorang Full-Stack AI Web Developer dari Bali, Indonesia. Saya menggabungkan coding manual dengan tools AI untuk membangun aplikasi web yang cepat, scalable, dan teroptimasi.',
      bio2: 'Saat ini menempuh D3 Manajemen Informatika di Politeknik Negeri Bali (IPK 3.71/4.00), saya bersemangat menciptakan pengalaman digital yang tidak hanya fungsional, tetapi benar-benar menyenangkan.',
      bio3: 'Saya menikmati bekerja di persimpangan desain dan rekayasa — baik itu merancang UI yang sempurna maupun membangun sistem back-end yang robust.',
      currently: 'Saat Ini',
      learning: 'Sedang Belajar',
      building: 'Sedang Membangun',
      listening: 'Sedang Didengarkan',
      stack: 'Stack Saat Ini',
      funFacts: 'Fakta Menarik',
    },
    til: {
      badge: 'Log Belajar',
      title: 'Hari Ini Saya Belajar',
      subtitle: 'Catatan singkat tentang hal-hal yang saya temukan saat membangun dan belajar.',
    },
    work: {
      badge: 'Pengalaman',
      title: 'Riwayat Kerja',
      subtitle: 'Peran profesional saya dan apa yang saya bangun di setiap posisi.',
    },
    footer: {
      tagline: 'Full-Stack AI Developer',
      desc: 'Membangun aplikasi web yang scalable, cepat, dan teroptimasi dengan menggabungkan coding manual dan kecerdasan buatan.',
      nav: 'Navigasi',
      connect: 'Terhubung',
      open: 'Terbuka untuk peluang',
      built: 'Dibuat dengan',
      rights: 'Hak cipta dilindungi.',
    },
  },
}

type T = typeof translations.en

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}