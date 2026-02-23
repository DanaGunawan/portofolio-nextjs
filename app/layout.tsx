import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'gunawanDev - Software Engineer & Developer',
  description: 'Portfolio of gunawanDev showcasing projects, skills, and experiences in full-stack development, web design, and software engineering.',
  keywords: ['developer', 'portfolio', 'full-stack', 'web development', 'software engineer'],
  authors: [{ name: 'gunawanDev' }],
  creator: 'gunawanDev',
  metadataBase: new URL('https://gunawandev.com'),
  openGraph: {
    title: 'gunawanDev - Software Engineer',
    description: 'Full-stack developer showcasing projects and expertise',
    url: 'https://gunawandev.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gunawanDev Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gunawanDev - Software Engineer',
    description: 'Full-stack developer portfolio',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <BackToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
