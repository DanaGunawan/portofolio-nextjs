'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setIsVisible(scrolled > 400)
      setScrollPercent(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 20
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: isVisible ? 'auto' : 'none',
        /* Light mode: white card with purple */
        background: 'var(--card)',
        boxShadow: '0 4px 20px rgba(124,58,237,0.2), 0 0 0 1px rgba(124,58,237,0.15)',
      }}
    >
      {/* SVG progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 48 48"
      >
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(124,58,237,0.15)"
          strokeWidth="2.5"
        />
        {/* Progress */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="url(#backTopGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s ease' }}
        />
        <defs>
          <linearGradient id="backTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon */}
      <ChevronUp
        className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ color: 'var(--primary)' }}
      />
    </button>
  )
}