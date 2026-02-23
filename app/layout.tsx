import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/components/i18n'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://danagunawan-portofolio.vercel.app'),
  title: {
    default: 'gunawanDev — Full-Stack AI Web Developer',
    template: '%s | gunawanDev',
  },
  description:
    'Portfolio of I Dewa Kadek Dana Gunawan — Full-Stack AI Web Developer from Bali, Indonesia. Building scalable, fast, and optimized web apps with React, Next.js, Laravel, and AI tools.',
  keywords: [
    'Full-Stack Developer', 'AI Web Developer', 'Next.js', 'React', 'Laravel',
    'TypeScript', 'Bali Developer', 'Indonesia Developer', 'gunawanDev',
  ],
  authors: [{ name: 'I Dewa Kadek Dana Gunawan', url: 'https://danagunawan-portofolio.vercel.app' }],
  creator: 'I Dewa Kadek Dana Gunawan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danagunawan-portofolio.vercel.app',
    title: 'gunawanDev — Full-Stack AI Web Developer',
    description: 'Portfolio of I Dewa Kadek Dana Gunawan — Full-Stack AI Web Developer from Bali, Indonesia.',
    siteName: 'gunawanDev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gunawanDev — Full-Stack AI Web Developer',
    description: 'Portfolio of I Dewa Kadek Dana Gunawan — Full-Stack AI Web Developer from Bali, Indonesia.',
    creator: '@gunawandev',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LangProvider>
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}