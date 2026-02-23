'use client'

import { useEffect, useRef } from 'react'

export function Avatar() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Pupil centers in SVG coordinate space (both eyes same size, symmetric 3/4 view)
    // Left eye pupil center: (148, 148), Right eye pupil center: (174, 148)
    const eyes = [
      { pupilId: 'av-pupil-l', maxDist: 2.5, cx: 148, cy: 148 },
      { pupilId: 'av-pupil-r', maxDist: 2.5, cx: 174, cy: 148 },
    ]

    const onMouseMove = (e: MouseEvent) => {
      const svg = svgRef.current
      if (!svg) return

      const rect = svg.getBoundingClientRect()
      // Mouse in SVG coordinate space
      const scaleX = 300 / rect.width
      const scaleY = 300 / rect.height
      const mx = (e.clientX - rect.left) * scaleX
      const my = (e.clientY - rect.top) * scaleY

      eyes.forEach(({ pupilId, maxDist, cx, cy }) => {
        const el = svg.getElementById(pupilId)
        if (!el) return
        const dx = mx - cx
        const dy = my - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const factor = Math.min(maxDist / Math.max(dist, 1), 1)
        const ox = dx * factor
        const oy = dy * factor
        el.setAttribute('transform', `translate(${ox.toFixed(2)}, ${oy.toFixed(2)})`)
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Skin */}
        <linearGradient id="av-skin" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor="#f5c888" />
          <stop offset="100%" stopColor="#d8924e" />
        </linearGradient>
        <linearGradient id="av-skinSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d8924e" />
          <stop offset="100%" stopColor="#c07840" />
        </linearGradient>

        {/* Hair — two-block jet black */}
        <linearGradient id="av-hair" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#1c1428" />
          <stop offset="50%" stopColor="#0e0a18" />
          <stop offset="100%" stopColor="#060410" />
        </linearGradient>
        <linearGradient id="av-hairGloss" x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#3d2858" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#1a0f2e" stopOpacity="0" />
        </linearGradient>

        {/* T-shirt */}
        <linearGradient id="av-shirt" x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#1e2a4c" />
          <stop offset="100%" stopColor="#0e1428" />
        </linearGradient>

        {/* Jeans */}
        <linearGradient id="av-jeans" x1="0%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#1e2858" />
          <stop offset="100%" stopColor="#111830" />
        </linearGradient>

        {/* Chair */}
        <linearGradient id="av-chair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c1838" />
          <stop offset="100%" stopColor="#0c0a20" />
        </linearGradient>

        {/* Desk */}
        <linearGradient id="av-desk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#261e44" />
          <stop offset="100%" stopColor="#160e2e" />
        </linearGradient>

        {/* Laptop */}
        <linearGradient id="av-laptop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c163c" />
          <stop offset="100%" stopColor="#0e0a22" />
        </linearGradient>

        {/* Screen */}
        <linearGradient id="av-screen" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#0a081e" />
          <stop offset="100%" stopColor="#10102a" />
        </linearGradient>

        {/* Purple */}
        <linearGradient id="av-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        {/* Glows */}
        <radialGradient id="av-ambient" cx="50%" cy="70%" r="55%">
          <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="av-screenLight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="av-faceGlow" cx="40%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="av-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="av-blurSoft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>

        {/* Clip — keep pupils inside eye whites */}
        <clipPath id="av-clip-eyeL">
          <ellipse cx="148" cy="148" rx="7" ry="6.5" />
        </clipPath>
        <clipPath id="av-clip-eyeR">
          <ellipse cx="174" cy="148" rx="7" ry="6.5" />
        </clipPath>

        <style>{`
          /* Blink — same timing both eyes */
          @keyframes av-blink {
            0%,44%,100% { transform: scaleY(1); }
            46%          { transform: scaleY(0.06); }
            48%          { transform: scaleY(1); }
          }
          .av-eye-l { animation: av-blink 5s ease-in-out infinite;     transform-origin: 148px 148px; }
          .av-eye-r { animation: av-blink 5s ease-in-out infinite 0.1s; transform-origin: 174px 148px; }

          /* Code scroll */
          @keyframes av-codeUp { 0%{transform:translateY(0)} 100%{transform:translateY(-8px)} }
          .av-code { animation: av-codeUp 3.5s ease-in-out infinite alternate; }

          /* Screen flicker */
          @keyframes av-flicker { 0%,91%,100%{opacity:1} 92%{opacity:.88} 93%{opacity:1} }
          .av-scr { animation: av-flicker 11s ease-in-out infinite; }

          /* Floating orbs */
          @keyframes av-f1 { 0%,100%{transform:translateY(0) scale(1);opacity:.65} 50%{transform:translateY(-8px) scale(1.07);opacity:.95} }
          @keyframes av-f2 { 0%,100%{transform:translateY(0);opacity:.4} 50%{transform:translateY(-10px);opacity:.8} }
          @keyframes av-f3 { 0%,100%{transform:translateY(0);opacity:.3} 50%{transform:translateY(-6px);opacity:.65} }
          .av-o1 { animation: av-f1 3.8s ease-in-out infinite; }
          .av-o2 { animation: av-f2 4.6s ease-in-out infinite .8s; }
          .av-o3 { animation: av-f3 5.3s ease-in-out infinite 1.5s; }

          /* Sparkle */
          @keyframes av-sp { 0%,100%{opacity:.2;transform:scale(.65) rotate(0deg)} 50%{opacity:1;transform:scale(1.3) rotate(20deg)} }
          .av-sp1 { animation: av-sp 2.8s ease-in-out infinite;       transform-origin: 42px 80px; }
          .av-sp2 { animation: av-sp 3.3s ease-in-out infinite  .9s;  transform-origin: 268px 120px; }
          .av-sp3 { animation: av-sp 3.0s ease-in-out infinite  1.7s; transform-origin: 265px 192px; }

          /* Cursor blink */
          @keyframes av-cur { 0%,48%{opacity:1} 49%,100%{opacity:0} }
          .av-cur { animation: av-cur 1.1s step-start infinite; }

          /* Breathe */
          @keyframes av-breathe { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.015)} }
          .av-body { animation: av-breathe 4.5s ease-in-out infinite; transform-origin: 170px 252px; }

          /* Head subtle nod */
          @keyframes av-nod { 0%,100%{transform:rotate(0deg)} 20%{transform:rotate(-1.2deg)} 65%{transform:rotate(0.8deg)} }
          .av-head { animation: av-nod 6s ease-in-out infinite; transform-origin: 161px 180px; }

          /* Eyebrow raise */
          @keyframes av-brow { 0%,74%,100%{transform:translateY(0)} 78%,93%{transform:translateY(-1.5px)} }
          .av-brow { animation: av-brow 7s ease-in-out infinite; }

          /* Code float card */
          @keyframes av-cdf { 0%,100%{transform:translateY(0);opacity:.55} 50%{transform:translateY(-7px);opacity:.88} }
          .av-cdf { animation: av-cdf 5s ease-in-out infinite; }

          /* Dot pulse */
          @keyframes av-dp { 0%,100%{transform:scale(1);opacity:.45} 50%{transform:scale(1.5);opacity:.9} }
          .av-dp1 { animation: av-dp 2.1s ease-in-out infinite; }
          .av-dp2 { animation: av-dp 2.6s ease-in-out infinite .45s; }
          .av-dp3 { animation: av-dp 3.0s ease-in-out infinite .9s; }
        `}</style>
      </defs>

      {/* ── AMBIENT ──────────────────────────────────────────── */}
      <ellipse cx="150" cy="215" rx="148" ry="102" fill="url(#av-ambient)" />

      {/* ── DESK ─────────────────────────────────────────────── */}
      <rect x="20" y="207" width="262" height="13" rx="4" fill="url(#av-desk)" />
      <rect x="20" y="207" width="262" height="3" rx="2" fill="#4a2d88" opacity="0.5" />
      <rect x="20" y="218" width="262" height="2" rx="1" fill="url(#av-purple)" opacity="0.28" />
      <rect x="42" y="220" width="11" height="52" rx="3" fill="#100c22" />
      <rect x="249" y="220" width="11" height="52" rx="3" fill="#100c22" />
      <ellipse cx="151" cy="275" rx="110" ry="5" fill="#060412" opacity="0.3" />

      {/* ── LAPTOP BASE ──────────────────────────────────────── */}
      <rect x="84" y="192" width="134" height="17" rx="5" fill="url(#av-laptop)" />
      <rect x="84" y="192" width="134" height="4" rx="2" fill="#36247a" opacity="0.45" />
      <rect x="128" y="198" width="46" height="7" rx="2.5" fill="#1c1450" />
      {/* Keys */}
      {[0,1,2].map(r => [0,1,2,3,4,5,6,7].map(c => (
        <rect key={`${r}${c}`} x={90+c*15} y={194+r*4} width="11" height="2.8" rx="1" fill="#38267c" opacity="0.44" />
      )))}

      {/* ── LAPTOP SCREEN ────────────────────────────────────── */}
      <path d="M84 192 L84 116 Q84 110 90 110 L222 110 Q228 110 228 116 L228 192Z"
        fill="url(#av-laptop)" stroke="#36247a" strokeWidth="1.5" />
      {/* Webcam */}
      <circle cx="156" cy="113" r="1.5" fill="#22165a" />
      {/* Screen area */}
      <path d="M89 187 L89 118 Q89 115 92 115 L220 115 Q223 115 223 118 L223 187Z"
        fill="url(#av-screen)" className="av-scr" />
      <path d="M89 187 L89 118 Q89 115 92 115 L220 115 Q223 115 223 118 L223 187Z"
        fill="url(#av-screenLight)" />
      {/* Screen border glow */}
      <path d="M89 187 L89 118 Q89 115 92 115 L220 115 Q223 115 223 118 L223 187Z"
        fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.45" />

      {/* ── CODE CONTENT ─────────────────────────────────────── */}
      <g className="av-code">
        {/* Tab bar */}
        <rect x="89" y="115" width="131" height="8" rx="0" fill="#130f2e" />
        <rect x="89" y="115" width="42" height="8" rx="0" fill="#0e0b22" />
        <text x="93" y="121.5" fontSize="4" fill="#a78bfa" fontFamily="monospace">index.tsx</text>
        <text x="135" y="121.5" fontSize="4" fill="#3c2e68" fontFamily="monospace">utils.ts</text>

        {/* Gutter */}
        <rect x="89" y="123" width="13" height="64" fill="#0c0a1e" />
        <line x1="102" y1="123" x2="102" y2="187" stroke="#28205a" strokeWidth="0.7" />
        {[130,137,144,151,158,165,172,179,186].map((y,i) => (
          <text key={i} x="92" y={y} fontSize="4" fill="#362860" fontFamily="monospace">{i+1}</text>
        ))}

        {/* Code lines */}
        <rect x="105" y="126" width="16" height="3"  rx="1.4" fill="#7c3aed" opacity="0.9" />
        <rect x="123" y="126" width="10" height="3"  rx="1.4" fill="#e2e8f0" opacity="0.42" />
        <rect x="135" y="126" width="22" height="3"  rx="1.4" fill="#6ee7b7" opacity="0.68" />
        <rect x="159" y="126" width="8"  height="3"  rx="1.4" fill="#e2e8f0" opacity="0.32" />
        <rect x="169" y="126" width="18" height="3"  rx="1.4" fill="#fbbf24" opacity="0.58" />

        <rect x="109" y="133" width="22" height="3"  rx="1.4" fill="#7c3aed" opacity="0.82" />
        <rect x="133" y="133" width="34" height="3"  rx="1.4" fill="#a78bfa" opacity="0.68" />
        <rect x="169" y="133" width="6"  height="3"  rx="1.4" fill="#e2e8f0" opacity="0.38" />
        <rect x="177" y="133" width="16" height="3"  rx="1.4" fill="#f9a8d4" opacity="0.62" />

        <rect x="109" y="140" width="14" height="3"  rx="1.4" fill="#7c3aed" opacity="0.78" />
        <rect x="125" y="140" width="24" height="3"  rx="1.4" fill="#e2e8f0" opacity="0.48" />
        <rect x="151" y="140" width="8"  height="3"  rx="1.4" fill="#6ee7b7" opacity="0.72" />
        <rect x="161" y="140" width="26" height="3"  rx="1.4" fill="#a78bfa" opacity="0.52" />

        <rect x="109" y="147" width="18" height="3"  rx="1.4" fill="#7c3aed" opacity="0.75" />
        <rect x="129" y="147" width="10" height="3"  rx="1.4" fill="#fbbf24" opacity="0.58" />
        <rect x="141" y="147" width="22" height="3"  rx="1.4" fill="#6ee7b7" opacity="0.62" />

        <rect x="105" y="154" width="10" height="3"  rx="1.4" fill="#7c3aed" opacity="0.88" />
        <rect x="117" y="154" width="16" height="3"  rx="1.4" fill="#a78bfa" opacity="0.5" />

        {/* Active line */}
        <rect x="102" y="160" width="118" height="5.5" rx="1.5" fill="#7c3aed" opacity="0.1" />
        <rect x="105" y="161.5" width="20" height="3.2" rx="1.4" fill="#a78bfa" opacity="0.88" />
        <rect x="127" y="161.5" width="14" height="3.2" rx="1.4" fill="#6ee7b7" opacity="0.72" />
        <rect x="143" y="161.5" width="20" height="3.2" rx="1.4" fill="#f9a8d4" opacity="0.6" />
        {/* Cursor */}
        <rect x="165" y="161" width="1.8" height="4.5" rx="0.6" fill="#c4b5fd" className="av-cur" />

        <rect x="105" y="168" width="8"  height="3"  rx="1.4" fill="#7c3aed" opacity="0.8" />
        <rect x="115" y="168" width="20" height="3"  rx="1.4" fill="#fbbf24" opacity="0.52" />

        <rect x="105" y="175" width="6"  height="3"  rx="1.4" fill="#e2e8f0" opacity="0.32" />
      </g>

      {/* ── CHAIR ────────────────────────────────────────────── */}
      <rect x="248" y="196" width="30" height="70" rx="11" fill="url(#av-chair)" />
      <rect x="252" y="200" width="22" height="60" rx="8"  fill="#080618" opacity="0.42" />
      <ellipse cx="257" cy="240" rx="5" ry="9" fill="#18143a" opacity="0.45" />
      <rect x="224" y="258" width="80" height="16" rx="8"  fill="url(#av-chair)" />
      <rect x="228" y="260" width="68" height="5"  rx="3"  fill="#221a42" opacity="0.4" />
      <rect x="225" y="246" width="20" height="6"  rx="3"  fill="#18143a" />
      <rect x="255" y="273" width="9"  height="20" rx="3"  fill="#0e0c1e" />
      <ellipse cx="259" cy="295" rx="28" ry="5" fill="#08061a" opacity="0.55" />
      {[-38,-10,18,46].map((deg,i) => (
        <line key={i} x1="259" y1="293"
          x2={259+Math.cos(deg*Math.PI/180)*25}
          y2={293+Math.sin(deg*Math.PI/180)*4}
          stroke="#0e0c1e" strokeWidth="3.5" strokeLinecap="round" />
      ))}

      {/* ── BODY ─────────────────────────────────────────────── */}
      <g className="av-body">
        {/* Torso */}
        <path d="M148 212 Q138 210 134 219 Q128 234 128 258 Q128 267 140 270 L198 270 Q210 267 210 258 Q210 234 204 219 Q200 210 190 212Z"
          fill="url(#av-shirt)" />
        {/* Collar */}
        <path d="M155 212 Q169 207 183 212" stroke="#283060" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* Side seams */}
        <path d="M134 220 Q131 232 132 244" stroke="#1c2850" strokeWidth="1" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M204 220 Q207 232 206 244" stroke="#1c2850" strokeWidth="1" fill="none" opacity="0.48" strokeLinecap="round" />
        <line x1="169" y1="212" x2="169" y2="270" stroke="#1c2850" strokeWidth="0.8" opacity="0.28" />

        {/* Jeans */}
        <path d="M128 265 L128 290 Q128 299 139 299 L168 299 Q179 299 179 290 L179 265Z"
          fill="url(#av-jeans)" />
        <rect x="128" y="264" width="53" height="6" rx="2" fill="#18224a" opacity="0.8" />
        <rect x="136" y="263" width="3" height="7" rx="1" fill="#0e1432" opacity="0.6" />
        <rect x="164" y="263" width="3" height="7" rx="1" fill="#0e1432" opacity="0.6" />
        <line x1="153" y1="270" x2="153" y2="299" stroke="#182244" strokeWidth="1" opacity="0.45" />

        {/* ── ARMS (relaxed, resting on desk) ── */}
        {/* Left arm */}
        <path d="M138 222 Q126 232 114 244 Q106 252 102 259"
          stroke="#d8924e" strokeWidth="11" fill="none" strokeLinecap="round" />
        {/* Sleeve over upper arm */}
        <path d="M138 219 Q127 228 118 236"
          stroke="url(#av-shirt)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.88" />
        {/* Forearm */}
        <path d="M102 259 Q95 264 88 266 Q82 267 78 265"
          stroke="#d8924e" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Left hand resting */}
        <ellipse cx="75" cy="265" rx="10" ry="7" fill="url(#av-skin)" />
        <ellipse cx="67" cy="261" rx="4.5" ry="3.2" fill="#e8b46a" />
        <ellipse cx="74" cy="259" rx="4.8" ry="3.4" fill="#e8b46a" />
        <ellipse cx="82" cy="260" rx="4.2" ry="3"   fill="#d8924e" />
        <ellipse cx="70" cy="269" rx="3.5" ry="2.2" fill="#c87c40" opacity="0.82" />

        {/* Right arm */}
        <path d="M200 222 Q212 232 219 242 Q224 250 225 258"
          stroke="#d8924e" strokeWidth="11" fill="none" strokeLinecap="round" />
        {/* Sleeve over upper arm */}
        <path d="M200 219 Q211 228 218 237"
          stroke="url(#av-shirt)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.88" />
        {/* Forearm */}
        <path d="M225 258 Q225 264 218 268 Q212 271 203 270"
          stroke="#d8924e" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Right hand resting — STILL, no typing animation */}
        <ellipse cx="199" cy="270" rx="10" ry="7" fill="url(#av-skin)" />
        <ellipse cx="191" cy="265" rx="4.5" ry="3.2" fill="#e8b46a" />
        <ellipse cx="198" cy="263" rx="4.8" ry="3.4" fill="#e8b46a" />
        <ellipse cx="206" cy="265" rx="4.2" ry="3"   fill="#d8924e" />
        <ellipse cx="194" cy="273" rx="3.5" ry="2.2" fill="#c87c40" opacity="0.82" />
      </g>

      {/* ═══════════════════════════════════════════════════════
          HEAD  — 3/4 view, elongated oval, symmetric eyes
      ═══════════════════════════════════════════════════════ */}
      <g className="av-head">

        {/* Neck */}
        <rect x="153" y="177" width="26" height="28" rx="9" fill="url(#av-skin)" />
        <rect x="153" y="193" width="26" height="12" rx="7" fill="#c87c40" opacity="0.22" />

        {/* Ear — right side, visible in 3/4 */}
        <ellipse cx="206" cy="158" rx="7"   ry="9.5" fill="url(#av-skinSide)" />
        <ellipse cx="207" cy="158" rx="4.2" ry="6.5" fill="#b07038" opacity="0.36" />
        <path d="M204 153 Q208 158 204 163" stroke="#986030" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />

        {/* ── HEAD SHAPE — nice elongated oval for 3/4 profile ── */}
        {/* Main skull */}
        <ellipse cx="166" cy="146" rx="44" ry="50" fill="url(#av-skin)" />
        {/* Jaw — slightly narrower ellipse to give oval/elongated look */}
        <ellipse cx="164" cy="182" rx="30" ry="15" fill="url(#av-skin)" />
        {/* Cheekbone to jaw join */}
        <path d="M131 158 Q127 172 130 183 Q135 194 150 198 Q162 202 168 201 Q180 200 192 195 Q200 190 202 181 Q205 170 200 158"
          fill="url(#av-skin)" />

        {/* Face screen glow */}
        <ellipse cx="162" cy="148" rx="40" ry="46" fill="url(#av-faceGlow)" />
        {/* Far-side shadow */}
        <path d="M199 126 Q215 146 212 168 Q206 182 196 188 Q210 166 210 146 Q210 130 199 126Z"
          fill="#c07840" opacity="0.14" />
        {/* Under-chin shadow */}
        <ellipse cx="165" cy="198" rx="28" ry="6" fill="#c07840" opacity="0.18" />

        {/* ── TWO-BLOCK HAIR ── */}
        {/* Main hair block — thick top */}
        <path d="M130 120
                 Q126 100 133 84
                 Q141 65 164 62
                 Q188 59 203 74
                 Q218 88 216 110
                 Q214 124 210 130
                 Q200 112 184 106
                 Q170 102 156 103
                 Q143 105 135 115
                 Q132 117 130 120Z"
          fill="url(#av-hair)" />
        {/* Hard undercut line — left */}
        <path d="M130 120 Q126 132 127 144 Q128 154 131 163"
          stroke="#040210" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        {/* Hard undercut line — right */}
        <path d="M210 130 Q214 142 213 154 Q212 164 208 172"
          stroke="#040210" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        {/* Side shave fade */}
        <path d="M128 128 Q123 142 125 158 Q127 168 132 175"
          stroke="#0c0818" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.72" />
        <path d="M212 137 Q216 152 214 165 Q212 175 208 181"
          stroke="#0c0818" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.72" />
        {/* Side-part parting line */}
        <path d="M147 66 Q144 78 142 92 Q141 104 143 114"
          stroke="#040210" strokeWidth="1.8" fill="none" opacity="0.6" />
        {/* Hair flow strands */}
        <path d="M143 68 Q134 80 131 96 Q129 109 130 121"
          stroke="#1a0f2e" strokeWidth="2.2" fill="none" opacity="0.45" />
        <path d="M164 63 Q171 75 173 91 Q175 105 173 114"
          stroke="#1a0f2e" strokeWidth="2"   fill="none" opacity="0.38" />
        <path d="M186 69 Q196 82 197 97 Q198 109 196 118"
          stroke="#1a0f2e" strokeWidth="1.8" fill="none" opacity="0.30" />
        {/* Gloss highlight */}
        <ellipse cx="160" cy="78" rx="22" ry="9"  fill="url(#av-hairGloss)" transform="rotate(-9 160 78)" />
        <ellipse cx="183" cy="74" rx="10" ry="4.5" fill="#2a1e3a" opacity="0.5" transform="rotate(6 183 74)" />
        {/* Fade stipple dots */}
        {[[128,146],[127,152],[128,158],[128,165],[213,154],[212,162]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="1" fill="#1a0f2e" opacity={0.50-i*0.05} />
        ))}

        {/* ── EYEBROWS — symmetric, same height ── */}
        <g className="av-brow">
          {/* Left brow */}
          <path d="M138 121 Q147 116 156 119"
            stroke="#120a20" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          {/* Right brow */}
          <path d="M163 119 Q172 114 181 117"
            stroke="#120a20" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>

        {/* ── EYES — identical size, symmetric ── */}
        {/* 
            Both eyes:  ellipse rx=7 ry=6.5
            Left  eye center: (148, 148)
            Right eye center: (174, 148)
            Same Y coordinate → perfectly level
        */}

        {/* Left eye */}
        <g className="av-eye-l">
          <ellipse cx="148" cy="148" rx="7"   ry="6.5" fill="white" />
          <g clipPath="url(#av-clip-eyeL)">
            <g id="av-pupil-l">
              <circle cx="148" cy="148" r="5"   fill="#160828" />
              <circle cx="148" cy="148" r="3.2" fill="#06040e" />
              {/* Iris ring */}
              <circle cx="148" cy="148" r="5"   fill="none" stroke="#3a0c80" strokeWidth="0.8" opacity="0.5" />
              {/* Shine */}
              <circle cx="150" cy="145.5" r="1.7" fill="white" />
              <circle cx="147" cy="151"   r="0.9" fill="white" opacity="0.4" />
            </g>
          </g>
          {/* Upper lash */}
          <path d="M141 144 Q148 140 155 144" stroke="#0e0818" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Lower lash */}
          <path d="M141 152 Q148 155 155 152" stroke="#0e0818" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.38" />
        </g>

        {/* Right eye */}
        <g className="av-eye-r">
          <ellipse cx="174" cy="148" rx="7"   ry="6.5" fill="white" />
          <g clipPath="url(#av-clip-eyeR)">
            <g id="av-pupil-r">
              <circle cx="174" cy="148" r="5"   fill="#160828" />
              <circle cx="174" cy="148" r="3.2" fill="#06040e" />
              {/* Iris ring */}
              <circle cx="174" cy="148" r="5"   fill="none" stroke="#3a0c80" strokeWidth="0.8" opacity="0.5" />
              {/* Shine */}
              <circle cx="176" cy="145.5" r="1.7" fill="white" />
              <circle cx="173" cy="151"   r="0.9" fill="white" opacity="0.4" />
            </g>
          </g>
          {/* Upper lash */}
          <path d="M167 144 Q174 140 181 144" stroke="#0e0818" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Lower lash */}
          <path d="M167 152 Q174 155 181 152" stroke="#0e0818" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.38" />
        </g>

        {/* Screen light in both eyes */}
        <ellipse cx="148" cy="148" rx="5.5" ry="5" fill="#a78bfa" opacity="0.07" />
        <ellipse cx="174" cy="148" rx="5.5" ry="5" fill="#a78bfa" opacity="0.07" />

        {/* ── NOSE ── */}
        <path d="M166 155 Q163 163 161 168 Q159 173 162 176 Q165 178 169 176 Q172 174 173 170 Q175 163 172 155"
          stroke="#b87840" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.55" />
        <ellipse cx="162" cy="176" rx="3.5" ry="2.5" fill="#b87840" opacity="0.17" />
        <ellipse cx="170" cy="175" rx="3"   ry="2.2" fill="#b87840" opacity="0.15" />
        <circle  cx="166" cy="177" r="2.8"           fill="#d8924e" opacity="0.1" />

        {/* Philtrum */}
        <path d="M166 178 Q166 182 166 185" stroke="#c07840" strokeWidth="0.8" fill="none" opacity="0.3" />

        {/* ── MOUTH — focused, composed ── */}
        <path d="M154 187 Q162 184 170 185 Q163 182 154 187Z"
          fill="#b06040" opacity="0.22" />
        <path d="M152 189 Q162 185 172 186"
          stroke="#8a3e28" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M153 190.5 Q162 195 171 191"
          stroke="#a05030" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.45" />
        <circle cx="152" cy="189.5" r="1" fill="#a05030" opacity="0.2" />

        {/* ── CHEEK warmth ── */}
        <ellipse cx="200" cy="162" rx="11" ry="6" fill="#e87060" opacity="0.07" />
        <ellipse cx="134" cy="162" rx="9"  ry="5" fill="#e87060" opacity="0.05" />

        {/* Screen glow on face */}
        <ellipse cx="162" cy="150" rx="36" ry="32" fill="#a78bfa" opacity="0.04" />

      </g>{/* end av-head */}

      {/* ── FLOATING DECORATIONS ─────────────────────────────── */}

      {/* Orb 1 — top right */}
      <g className="av-o1">
        <circle cx="260" cy="66" r="16" fill="#7c3aed" filter="url(#av-blurSoft)" opacity="0.18" />
        <circle cx="260" cy="66" r="7"  fill="#7c3aed" opacity="0.52" filter="url(#av-glow)" />
        <circle cx="260" cy="66" r="3.5" fill="#c4b5fd" opacity="0.92" />
        <circle cx="260" cy="66" r="13" fill="none" stroke="#7c3aed" strokeWidth="0.6" opacity="0.16" strokeDasharray="3 4" />
      </g>

      {/* Orb 2 — left mid */}
      <g className="av-o2">
        <circle cx="36" cy="144" r="11" fill="#4f46e5" filter="url(#av-blurSoft)" opacity="0.17" />
        <circle cx="36" cy="144" r="5"  fill="#6366f1" opacity="0.45" filter="url(#av-glow)" />
        <circle cx="36" cy="144" r="2.5" fill="#a5b4fc" opacity="0.9" />
      </g>

      {/* Orb 3 — bottom left */}
      <g className="av-o3">
        <circle cx="48" cy="252" r="10" fill="#7c3aed" filter="url(#av-blurSoft)" opacity="0.18" />
        <circle cx="48" cy="252" r="4.5" fill="#8b5cf6" opacity="0.48" filter="url(#av-glow)" />
        <circle cx="48" cy="252" r="2.2" fill="#ddd6fe" opacity="0.88" />
      </g>

      {/* Sparkle 1 — top left */}
      <g className="av-sp1">
        <path d="M42 73 L44 68 L46 73 L51 75 L46 77 L44 82 L42 77 L37 75Z" fill="#a78bfa" opacity="0.72" />
        <circle cx="35" cy="70" r="1.3" fill="#a78bfa" opacity="0.45" />
      </g>

      {/* Sparkle 2 — top right */}
      <g className="av-sp2">
        <path d="M268 113 L270 108 L272 113 L277 115 L272 117 L270 122 L268 117 L263 115Z" fill="#7c3aed" opacity="0.65" />
        <circle cx="261" cy="110" r="1.2" fill="#a78bfa" opacity="0.4" />
      </g>

      {/* Sparkle 3 — right mid */}
      <g className="av-sp3">
        <path d="M265 186 L267 182 L269 186 L274 188 L269 190 L267 194 L265 190 L260 188Z" fill="#6366f1" opacity="0.58" />
      </g>

      {/* Floating code card */}
      <g className="av-cdf">
        <rect x="22" y="74" width="62" height="25" rx="6" fill="#0e0828" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.5" />
        {/* Window buttons */}
        <circle cx="28" cy="79" r="1.5" fill="#ff5f57" />
        <circle cx="33" cy="79" r="1.5" fill="#febc2e" />
        <circle cx="38" cy="79" r="1.5" fill="#28c840" />
        <text x="26" y="89" fontSize="4.5" fill="#a78bfa" fontFamily="monospace">const dev =</text>
        <text x="26" y="96" fontSize="4.5" fill="#6ee7b7" fontFamily="monospace">  "gunawanDev"</text>
      </g>

      {/* Floating brackets */}
      <g className="av-o1" style={{ animationDuration: '4.5s', animationDelay: '1.8s' }}>
        <text x="255" y="166" fontSize="17" fill="#7c3aed" fontFamily="monospace" opacity="0.24" fontWeight="bold">{"{ }"}</text>
      </g>

      {/* Dot cluster — bottom right */}
      <circle cx="274" cy="230" r="2.8" fill="#7c3aed" opacity="0.4" className="av-dp1" />
      <circle cx="280" cy="224" r="2"   fill="#a78bfa" opacity="0.3" className="av-dp2" />
      <circle cx="270" cy="221" r="1.5" fill="#4f46e5" opacity="0.35" className="av-dp3" />

      {/* Desk reflection */}
      <ellipse cx="155" cy="210" rx="68" ry="4" fill="#7c3aed" opacity="0.05" />
    </svg>
  )
}