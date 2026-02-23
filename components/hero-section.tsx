'use client'

import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from './avatar'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* === RICH BACKGROUND GRADIENTS === */}
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050510]" />
      {/* Radial purple center bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(109,40,217,0.25)_0%,rgba(76,29,149,0.12)_40%,transparent_70%)]" />
      {/* Bottom purple-indigo fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(79,70,229,0.18)_0%,transparent_60%)]" />
      {/* Left accent glow */}
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2)_0%,transparent_70%)] blur-3xl" />
      {/* Right accent glow */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-3xl" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-32 left-[10%] w-3 h-3 rounded-full bg-violet-500 opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-48 right-[15%] w-2 h-2 rounded-full bg-indigo-400 opacity-50 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4s' }} />
      <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-purple-400 opacity-40 animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '3.5s' }} />
      <div className="absolute top-1/2 right-[8%] w-4 h-4 rounded-full bg-violet-600 opacity-30 animate-pulse" style={{ animationDuration: '5s' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-7 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-violet-300 text-sm font-medium">Currently exploring: AI Agents & LLMs</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-violet-400 font-mono text-sm tracking-widest uppercase">Hi, I&apos;m Dana 👋</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-white">I&apos;m </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #4f46e5 100%)',
                  }}
                >
                  gunawanDev
                </span>
              </h1>
              <div className="h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }} />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              Full-Stack AI Web Developer memadukan keahlian coding dengan kecerdasan buatan untuk membangun aplikasi web yang{' '}
              <span className="text-violet-300 font-semibold">scalable, cepat, dan teroptimasi</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-300 border border-violet-500/40 bg-violet-500/10 backdrop-blur-sm hover:bg-violet-500/20 hover:border-violet-400/60 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-3">
              {[
                { href: 'https://github.com', icon: Github, label: 'GitHub', color: 'hover:bg-white/10 hover:text-white' },
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-500/20 hover:text-blue-400' },
                { href: 'mailto:dewakadekdana@gmail.com', icon: Mail, label: 'Email', color: 'hover:bg-violet-500/20 hover:text-violet-300' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-slate-400 transition-all duration-300 hover:scale-110 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/5">
              {[
                { value: '3+', label: 'Projects' },
                { value: '3.71', label: 'GPA' },
                { value: '1+', label: 'Years Exp' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-2xl font-black bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #7c3aed)' }}
                  >
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer glow rings */}
              <div
                className="absolute inset-[-20px] rounded-full opacity-30 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
                  animationDuration: '4s',
                }}
              />
              <div
                className="absolute inset-[-8px] rounded-full border border-violet-500/20"
                style={{ animation: 'spin 20s linear infinite' }}
              />
              <div
                className="absolute inset-[-16px] rounded-full border border-dashed border-indigo-500/15"
                style={{ animation: 'spin 30s linear infinite reverse' }}
              />

              {/* Avatar container */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(79,70,229,0.1) 50%, rgba(76,29,149,0.2) 100%)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 60px rgba(124,58,237,0.25), inset 0 0 40px rgba(124,58,237,0.05)',
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <Avatar />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 sm:-top-2 sm:-right-6 px-3 py-1.5 rounded-xl text-xs font-semibold text-white border border-violet-400/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.8), rgba(79,70,229,0.8))',
                  backdropFilter: 'blur(10px)',
                  animation: 'float 5s ease-in-out infinite 1s',
                }}
              >
                ⚡ Full-Stack Dev
              </div>
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-2 sm:-left-6 px-3 py-1.5 rounded-xl text-xs font-semibold text-white border border-indigo-400/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.8), rgba(124,58,237,0.8))',
                  backdropFilter: 'blur(10px)',
                  animation: 'float 5s ease-in-out infinite 2s',
                }}
              >
                🤖 AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07070F] to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}