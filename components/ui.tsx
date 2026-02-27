'use client'

// ─── Shared UI primitives ─────────────────────────────────────────────────────

export function SectionBadge({ label, color = 'violet' }: { label: string; color?: 'violet' | 'emerald' | 'indigo' | 'amber' }) {
  const cls = {
    violet: 'border-violet-400/30 bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
    emerald: 'border-emerald-400/30 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    indigo: 'border-indigo-400/30 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
    amber: 'border-amber-400/30 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  }[color]
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {label}
    </div>
  )
}

export function Card({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`rounded-2xl border border-violet-100 dark:border-white/5 bg-white dark:bg-white/[0.02] ${hover ? 'hover:border-violet-300 dark:hover:border-violet-500/25 hover:shadow-[0_4px_30px_rgba(124,58,237,0.08)] transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function Tag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20">
      {label}
    </span>
  )
}

export function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-violet-300/40 dark:via-violet-500/20 to-transparent my-2" />
}