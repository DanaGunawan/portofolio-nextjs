import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/10 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/projects" className="btn-secondary inline-flex items-center justify-center gap-2">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 p-8 rounded-lg glass">
          <p className="text-muted-foreground text-sm mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-primary hover:text-primary-hover font-semibold transition-colors">
              About
            </Link>
            <span className="text-border">•</span>
            <Link href="/blog" className="text-primary hover:text-primary-hover font-semibold transition-colors">
              Blog
            </Link>
            <span className="text-border">•</span>
            <Link href="/contact" className="text-primary hover:text-primary-hover font-semibold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
