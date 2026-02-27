import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footers'
import { LangProvider } from '@/components/i18n'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gunawanDev — Full-Stack Web Developer',
  description: 'Portfolio of I Dewa Kadek Dana Gunawan — Full-Stack Web Developer based in Bali, Indonesia. Specialising in Laravel, Next.js, and AI-assisted development.',
  keywords: ['gunawanDev', 'Full-Stack Developer', 'Laravel', 'Next.js', 'Bali', 'Indonesia', 'Web Developer'],
  authors: [{ name: 'I Dewa Kadek Dana Gunawan' }],
  creator: 'I Dewa Kadek Dana Gunawan',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'gunawanDev — Full-Stack Web Developer',
    description: 'Portfolio of I Dewa Kadek Dana Gunawan — Full-Stack Web Developer based in Bali, Indonesia.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline SVG favicon — gunawanDev logo (Code2 style) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-[#07070f] text-slate-900 dark:text-white antialiased`}>
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}