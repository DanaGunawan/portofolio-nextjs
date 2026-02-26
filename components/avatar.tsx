'use client'

import { useEffect, useRef } from 'react'

export function Avatar() {
  const svgRef = useRef<SVGSVGElement>(null)
  const targetRef = useRef({ x: 150, y: 200 })
  const currentRef = useRef({ x: 150, y: 200 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const eyes = [
      { pupilId: 'av-pupil-l', cx: 132, cy: 164 },
      { pupilId: 'av-pupil-r', cx: 168, cy: 164 },
    ]
    const MAX_DIST = 3

    const onMouseMove = (e: MouseEvent) => {
      const svg = svgRef.current
      if (!svg) return
      const rect = svg.getBoundingClientRect()
      targetRef.current = {
        x: (e.clientX - rect.left) * (300 / rect.width),
        y: (e.clientY - rect.top) * (420 / rect.height),
      }
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.07
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.07
      const svg = svgRef.current
      if (svg) {
        eyes.forEach(({ pupilId, cx, cy }) => {
          const el = svg.getElementById(pupilId)
          if (!el) return
          const dx = currentRef.current.x - cx
          const dy = currentRef.current.y - cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const factor = Math.min(MAX_DIST / Math.max(dist, 1), 1)
          el.setAttribute('transform', `translate(${(dx * factor).toFixed(2)},${(dy * factor).toFixed(2)})`)
        })
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Developer character"
    >
      <defs>
        {/* Skin */}
        <linearGradient id="g-skin" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#FBBF6E" />
          <stop offset="100%" stopColor="#E8963A" />
        </linearGradient>
        <linearGradient id="g-skinDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4822E" />
          <stop offset="100%" stopColor="#B86A20" />
        </linearGradient>
        <linearGradient id="g-skinNeck" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5B860" />
          <stop offset="100%" stopColor="#D88030" />
        </linearGradient>
        {/* Hair */}
        <linearGradient id="g-hair" x1="0%" y1="0%" x2="15%" y2="100%">
          <stop offset="0%" stopColor="#2a1a0a" />
          <stop offset="100%" stopColor="#0e0808" />
        </linearGradient>
        <linearGradient id="g-hairShine" x1="20%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#4a2c10" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a0c04" stopOpacity="0" />
        </linearGradient>
        {/* Jacket */}
        <linearGradient id="g-jacket" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#192038" />
          <stop offset="100%" stopColor="#0b1020" />
        </linearGradient>
        <linearGradient id="g-sleeve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#141a30" />
          <stop offset="100%" stopColor="#0a0e1e" />
        </linearGradient>
        <linearGradient id="g-lapel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2848" />
          <stop offset="100%" stopColor="#101828" />
        </linearGradient>
        {/* Jeans */}
        <linearGradient id="g-jeansL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18224e" />
          <stop offset="100%" stopColor="#0c1230" />
        </linearGradient>
        <linearGradient id="g-jeansR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#141c44" />
          <stop offset="100%" stopColor="#080e26" />
        </linearGradient>
        {/* Sneakers */}
        <linearGradient id="g-shoe" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EEEEF8" />
          <stop offset="100%" stopColor="#CCCCDE" />
        </linearGradient>
        <linearGradient id="g-sole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CCCCDC" />
          <stop offset="100%" stopColor="#AAAABE" />
        </linearGradient>
        {/* Purple */}
        <linearGradient id="g-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        {/* Glows */}
        <radialGradient id="g-ambient" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-ground" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#060412" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#060412" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-faceLight" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFD080" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#E89040" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="f-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
        <filter id="f-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000020" floodOpacity="0.45"/>
        </filter>
        <filter id="f-hairShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#0a0408" floodOpacity="0.6"/>
        </filter>

        {/* Eye clips */}
        <clipPath id="clip-eL">
          <ellipse cx="132" cy="164" rx="9.5" ry="9"/>
        </clipPath>
        <clipPath id="clip-eR">
          <ellipse cx="168" cy="164" rx="9.5" ry="9"/>
        </clipPath>

        <style>{`
          @keyframes av-blink {
            0%,42%,100% { transform: scaleY(1); }
            44% { transform: scaleY(0.04); }
            46% { transform: scaleY(1); }
          }
          .eye-L { animation: av-blink 5.5s ease-in-out infinite;      transform-origin: 132px 164px; }
          .eye-R { animation: av-blink 5.5s ease-in-out infinite 0.08s; transform-origin: 168px 164px; }

          @keyframes av-breathe {
            0%,100% { transform: scaleY(1); }
            50% { transform: scaleY(1.013); }
          }
          .av-body { animation: av-breathe 4.5s ease-in-out infinite; transform-origin: 150px 310px; }

          @keyframes av-sway {
            0%,100% { transform: rotate(0deg) translateX(0); }
            30% { transform: rotate(-0.7deg) translateX(-1.5px); }
            70% { transform: rotate(0.5deg) translateX(1.2px); }
          }
          .av-sway { animation: av-sway 6.5s ease-in-out infinite; transform-origin: 150px 400px; }

          @keyframes av-nod {
            0%,100% { transform: rotate(0deg); }
            25% { transform: rotate(-0.9deg); }
            70% { transform: rotate(0.6deg); }
          }
          .av-head { animation: av-nod 7s ease-in-out infinite; transform-origin: 150px 170px; }

          @keyframes av-brow {
            0%,72%,100% { transform: translateY(0); }
            76%,91% { transform: translateY(-2px); }
          }
          .av-brow { animation: av-brow 7s ease-in-out infinite; }

          @keyframes av-cloth {
            0%,100% { transform: skewX(0deg); }
            40% { transform: skewX(-0.4deg); }
            75% { transform: skewX(0.3deg); }
          }
          .av-jacket { animation: av-cloth 4.5s ease-in-out infinite; transform-origin: 150px 270px; }

          @keyframes av-cur { 0%,48%{opacity:1} 49%,100%{opacity:0} }
          .av-cur { animation: av-cur 1.1s step-start infinite; }

          @keyframes orb1 { 0%,100%{transform:translateY(0) scale(1);opacity:.6} 50%{transform:translateY(-10px) scale(1.08);opacity:.95} }
          @keyframes orb2 { 0%,100%{transform:translateY(0);opacity:.38} 50%{transform:translateY(-12px);opacity:.78} }
          @keyframes orb3 { 0%,100%{transform:translateY(0);opacity:.28} 50%{transform:translateY(-7px);opacity:.62} }
          .o1 { animation: orb1 3.8s ease-in-out infinite; }
          .o2 { animation: orb2 4.6s ease-in-out infinite .9s; }
          .o3 { animation: orb3 5.2s ease-in-out infinite 1.6s; }

          @keyframes spark { 0%,100%{opacity:.2;transform:scale(.6) rotate(0deg)} 50%{opacity:1;transform:scale(1.3) rotate(18deg)} }
          .sp1 { animation: spark 2.9s ease-in-out infinite;      transform-origin: 38px 55px; }
          .sp2 { animation: spark 3.4s ease-in-out infinite 1s;   transform-origin: 270px 90px; }
          .sp3 { animation: spark 3.1s ease-in-out infinite 1.8s; transform-origin: 272px 195px; }

          @keyframes cdf { 0%,100%{transform:translateY(0);opacity:.58} 50%{transform:translateY(-8px);opacity:.92} }
          .av-cdf { animation: cdf 5s ease-in-out infinite; }

          @keyframes dp { 0%,100%{transform:scale(1);opacity:.42} 50%{transform:scale(1.6);opacity:.9} }
          .dp1 { animation: dp 2.1s ease-in-out infinite; }
          .dp2 { animation: dp 2.6s ease-in-out infinite .5s; }
          .dp3 { animation: dp 3s ease-in-out infinite 1s; }
        `}</style>
      </defs>

      {/* Ambient + Ground */}
      <ellipse cx="150" cy="330" rx="150" ry="100" fill="url(#g-ambient)"/>
      <ellipse cx="150" cy="415" rx="80" ry="9" fill="url(#g-ground)"/>

      <g className="av-sway">

        {/* ══════ LOWER BODY ══════ */}
        <g className="av-body">
          {/* Waistband */}
          <rect x="115" y="300" width="70" height="10" rx="3" fill="#141c3e"/>
          <rect x="115" y="300" width="70" height="3.5" rx="1.5" fill="#202c60" opacity="0.7"/>
          <rect x="123" y="299" width="5" height="9" rx="1.5" fill="#0e1432"/>
          <rect x="172" y="299" width="5" height="9" rx="1.5" fill="#0e1432"/>
          <rect x="143" y="300" width="14" height="9" rx="2" fill="#1a1a38"/>
          <rect x="144.5" y="301.5" width="11" height="6" rx="1.2" fill="#12123a"/>
          <rect x="147" y="303" width="6" height="3" rx="0.8" fill="#7c3aed" opacity="0.6"/>

          {/* Left leg */}
          <path d="M115 310 Q109 327 108 350 Q107 370 109 388 Q111 398 120 401 L138 401 Q145 398 145 388 L143 350 Q142 327 140 310Z"
            fill="url(#g-jeansL)"/>
          <path d="M124 317 Q122 340 123 362 Q124 377 126 387"
            stroke="#22305e" strokeWidth="1.2" fill="none" opacity="0.4"/>
          <ellipse cx="126" cy="354" rx="10" ry="6" fill="#121a40" opacity="0.3"/>

          {/* Right leg */}
          <path d="M160 310 Q160 327 160 350 Q159 370 157 388 Q155 398 162 401 L180 401 Q189 398 190 388 L190 350 Q189 327 185 310Z"
            fill="url(#g-jeansR)"/>
          <path d="M176 317 Q178 340 177 362 Q176 377 174 387"
            stroke="#181e4c" strokeWidth="1.2" fill="none" opacity="0.35"/>
          <ellipse cx="174" cy="354" rx="10" ry="6" fill="#0e1638" opacity="0.3"/>
          <path d="M143 310 Q152 315 160 310" stroke="#0e1432" strokeWidth="1.5" fill="none"/>

          {/* Sneaker Left */}
          <g filter="url(#f-shadow)">
            <rect x="109" y="393" width="27" height="9" rx="3" fill="#DCDCEA"/>
            <path d="M105 401 Q104 411 110 415 Q118 419 132 418 Q141 417 143 413 Q145 409 144 403 Q143 400 138 399 L113 399Z"
              fill="url(#g-shoe)"/>
            <ellipse cx="135" cy="409" rx="11" ry="7" fill="#F4F4FC"/>
            <path d="M105 410 Q105 418 115 420 Q126 422 136 421 Q143 420 144 416 Q145 412 143 410Z"
              fill="url(#g-sole)"/>
            <path d="M106 414 Q124 416 143 413" stroke="#B8B8CC" strokeWidth="0.9" fill="none" opacity="0.7"/>
            <path d="M110 406 Q125 403 141 406" stroke="url(#g-purple)" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9"/>
            <path d="M115 402 Q124 400 133 402" stroke="#D0D0E4" strokeWidth="1" fill="none" opacity="0.8"/>
            <path d="M121 399 Q126 398 131 399 L130 403 Q126 404 122 403Z" fill="#EEEEF8" opacity="0.8"/>
          </g>

          {/* Sneaker Right */}
          <g filter="url(#f-shadow)">
            <rect x="164" y="393" width="27" height="9" rx="3" fill="#DCDCEA"/>
            <path d="M157 403 Q156 410 160 414 Q166 419 178 419 Q189 418 191 414 Q193 410 192 403 Q191 400 186 399 L162 399Z"
              fill="url(#g-shoe)"/>
            <ellipse cx="162" cy="409" rx="11" ry="7" fill="#F4F4FC"/>
            <path d="M157 411 Q157 419 167 421 Q178 423 187 421 Q193 419 193 415 Q194 411 192 410Z"
              fill="url(#g-sole)"/>
            <path d="M158 415 Q175 417 192 414" stroke="#B8B8CC" strokeWidth="0.9" fill="none" opacity="0.7"/>
            <path d="M160 406 Q175 403 190 406" stroke="url(#g-purple)" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9"/>
            <path d="M163 402 Q172 400 181 402" stroke="#D0D0E4" strokeWidth="1" fill="none" opacity="0.8"/>
            <path d="M169 399 Q174 398 179 399 L178 403 Q174 404 170 403Z" fill="#EEEEF8" opacity="0.8"/>
          </g>
        </g>

        {/* ══════ JACKET + CROSSED ARMS ══════ */}
        <g className="av-jacket av-body">
          <path d="M108 232 Q102 246 100 264 Q98 284 100 300 L200 300 Q202 284 200 264 Q198 246 192 232 Q182 222 168 220 L132 220 Q118 222 108 232Z"
            fill="url(#g-jacket)"/>
          <path d="M108 232 Q102 246 100 264 Q98 284 100 300 L112 300 L112 232Z" fill="#0c1020" opacity="0.5"/>
          <path d="M188 232 L188 300 L200 300 Q202 284 200 264 Q198 246 192 232Z" fill="#0c1020" opacity="0.5"/>
          <line x1="150" y1="220" x2="150" y2="300" stroke="#0a0e1c" strokeWidth="1.8" opacity="0.7"/>
          <rect x="147" y="240" width="6" height="4.5" rx="1.5" fill="#252d58"/>
          <rect x="148" y="242" width="4" height="6" rx="1" fill="#181e40"/>
          <path d="M132 220 Q141 215 150 214 Q141 222 136 234 Q130 229 132 220Z" fill="url(#g-lapel)"/>
          <path d="M168 220 Q159 215 150 214 Q159 222 164 234 Q170 229 168 220Z" fill="url(#g-lapel)"/>
          <path d="M143 226 Q150 218 157 226 Q152 232 150 234 Q148 232 143 226Z" fill="#E8E8F6" opacity="0.92"/>
          <path d="M114 225 Q132 220 150 220" stroke="#182040" strokeWidth="1.2" fill="none" opacity="0.5"/>
          <path d="M186 225 Q168 220 150 220" stroke="#182040" strokeWidth="1.2" fill="none" opacity="0.5"/>

          {/* </> logo */}
          <rect x="131" y="242" width="38" height="24" rx="5" fill="#080c1c" opacity="0.75"/>
          <rect x="131" y="242" width="38" height="24" rx="5" fill="none" stroke="#7c3aed" strokeWidth="0.9" opacity="0.65"/>
          <text x="134" y="259" fontSize="11" fill="#a78bfa" fontFamily="monospace" fontWeight="700" letterSpacing="-0.5">&lt;/&gt;</text>
          <ellipse cx="150" cy="254" rx="16" ry="9" fill="#7c3aed" opacity="0.07"/>

          {/* Crossed arms */}
          <path d="M118 234 Q112 244 116 256 Q120 262 128 264" stroke="#D8923A" strokeWidth="17" fill="none" strokeLinecap="round"/>
          <path d="M118 230 Q111 241 115 254" stroke="url(#g-jacket)" strokeWidth="21" fill="none" strokeLinecap="round" opacity="0.95"/>
          <path d="M182 234 Q188 244 184 256 Q180 262 172 264" stroke="#D8923A" strokeWidth="17" fill="none" strokeLinecap="round"/>
          <path d="M182 230 Q189 241 185 254" stroke="url(#g-jacket)" strokeWidth="21" fill="none" strokeLinecap="round" opacity="0.95"/>
          <path d="M128 264 Q148 276 170 274 Q178 273 184 270" stroke="#D8923A" strokeWidth="13" fill="none" strokeLinecap="round"/>
          <path d="M128 261 Q148 273 168 272" stroke="url(#g-sleeve)" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.92"/>
          <path d="M172 264 Q155 278 134 276 Q126 275 120 271" stroke="#C87832" strokeWidth="13" fill="none" strokeLinecap="round"/>
          <path d="M172 261 Q154 275 136 274" stroke="url(#g-jacket)" strokeWidth="17" fill="none" strokeLinecap="round" opacity="0.97"/>
          <path d="M134 274 Q127 273 121 269" stroke="#101828" strokeWidth="16" fill="none" strokeLinecap="round"/>
          <path d="M134 274 Q127 273 121 269" stroke="#1a2440" strokeWidth="13" fill="none" strokeLinecap="round" opacity="0.6"/>
          <ellipse cx="186" cy="269" rx="9" ry="7" fill="url(#g-skin)"/>
          <ellipse cx="193" cy="264" rx="4.5" ry="3.2" fill="#EBA850"/>
          <ellipse cx="114" cy="269" rx="9" ry="7" fill="url(#g-skin)"/>
          <ellipse cx="107" cy="264" rx="4.5" ry="3.2" fill="#EBA850"/>
          <rect x="100" y="296" width="100" height="5" rx="2" fill="#080c18" opacity="0.55"/>
        </g>

        {/* ══════ HEAD ══════ */}
        <g className="av-head">

          {/* Neck */}
          <path d="M138 190 Q136 202 136 212 Q136 218 139 220 L161 220 Q164 218 164 212 Q164 202 162 190Z"
            fill="url(#g-skinNeck)"/>
          <ellipse cx="150" cy="220" rx="13" ry="4" fill="#B06818" opacity="0.18"/>

          {/* Ear right */}
          <ellipse cx="206" cy="172" rx="8" ry="10" fill="url(#g-skinDark)"/>
          <ellipse cx="207.5" cy="172" rx="5" ry="7" fill="#A86020" opacity="0.4"/>
          <path d="M204 165 Q208 172 204 179" stroke="#906028" strokeWidth="1.3" fill="none" opacity="0.55" strokeLinecap="round"/>
          {/* Ear left */}
          <ellipse cx="95" cy="172" rx="6" ry="8.5" fill="url(#g-skinDark)"/>
          <ellipse cx="94" cy="172" rx="3.5" ry="6" fill="#A86020" opacity="0.3"/>

          {/* HEAD SHAPE */}
          <ellipse cx="150" cy="162" rx="54" ry="52" fill="url(#g-skin)"/>
          <ellipse cx="150" cy="190" rx="48" ry="28" fill="url(#g-skin)"/>
          <path d="M104 170 Q98 188 106 204 Q116 218 134 224 Q142 227 150 227 Q158 227 166 224 Q184 218 194 204 Q202 188 196 170"
            fill="url(#g-skin)"/>

          {/* Face lighting */}
          <ellipse cx="145" cy="168" rx="46" ry="50" fill="url(#g-faceLight)"/>
          {/* Right side shadow */}
          <path d="M194 138 Q210 160 206 182 Q199 200 187 207 Q205 184 203 160 Q202 142 194 138Z"
            fill="#B86818" opacity="0.11"/>
          {/* Chin shadow */}
          <ellipse cx="150" cy="224" rx="28" ry="5.5" fill="#A86010" opacity="0.15"/>

          {/* ══════════════════════════════
              HAIR — natural wavy style
              Replaces cap, sits on top of head
              Forehead visible, no coverage of face
          ══════════════════════════════ */}
          <g filter="url(#f-hairShadow)">
            {/* Main hair mass — back layer */}
            <path d="M97 148
                     Q96 130 100 115
                     Q106 96 116 85
                     Q128 73 144 68
                     Q150 67 156 68
                     Q172 72 184 83
                     Q195 94 200 112
                     Q204 130 203 148
                     Q192 140 180 136
                     Q165 132 150 131
                     Q135 131 120 136
                     Q108 140 97 148Z"
              fill="url(#g-hair)"/>

            {/* Hair texture strands - left side */}
            <path d="M103 148 Q99 134 102 120 Q107 102 116 90"
              stroke="#3a2010" strokeWidth="2.5" fill="none" opacity="0.45" strokeLinecap="round"/>
            <path d="M108 143 Q105 128 108 114 Q113 98 121 87"
              stroke="#3a2010" strokeWidth="2" fill="none" opacity="0.38" strokeLinecap="round"/>
            <path d="M115 138 Q113 122 116 108 Q120 94 128 82"
              stroke="#4a2a12" strokeWidth="1.8" fill="none" opacity="0.32" strokeLinecap="round"/>

            {/* Hair texture strands - right side */}
            <path d="M197 148 Q201 134 198 120 Q193 102 184 90"
              stroke="#3a2010" strokeWidth="2.5" fill="none" opacity="0.45" strokeLinecap="round"/>
            <path d="M192 143 Q195 128 192 114 Q187 98 179 87"
              stroke="#3a2010" strokeWidth="2" fill="none" opacity="0.38" strokeLinecap="round"/>
            <path d="M185 138 Q187 122 184 108 Q180 94 172 82"
              stroke="#4a2a12" strokeWidth="1.8" fill="none" opacity="0.32" strokeLinecap="round"/>

            {/* Front hair — sits just above forehead, natural hairline */}
            <path d="M97 148
                     Q100 142 106 138
                     Q113 134 122 132
                     Q134 130 143 130
                     Q150 130 157 130
                     Q168 130 178 133
                     Q188 136 196 142
                     Q202 147 203 148
                     Q195 143 185 141
                     Q172 139 160 138
                     Q150 138 140 138
                     Q127 139 115 142
                     Q104 145 97 148Z"
              fill="url(#g-hair)" opacity="0.92"/>

            {/* Natural hairline curve over forehead */}
            <path d="M107 143
                     Q118 136 132 133
                     Q141 131 150 131
                     Q159 131 168 133
                     Q182 137 193 143"
              fill="url(#g-hair)"/>

            {/* Hair shine / highlight */}
            <path d="M130 70 Q148 66 168 72 Q182 80 190 95 Q178 82 165 76 Q150 71 135 73 Q120 76 110 86 Q116 74 130 70Z"
              fill="url(#g-hairShine)" opacity="0.55"/>

            {/* Wispy hair strands on forehead */}
            <path d="M128 133 Q126 138 125 143" stroke="#2a1808" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round"/>
            <path d="M140 131 Q138 136 138 141" stroke="#2a1808" strokeWidth="1.3" fill="none" opacity="0.5" strokeLinecap="round"/>
            <path d="M152 131 Q152 136 151 140" stroke="#2a1808" strokeWidth="1.3" fill="none" opacity="0.45" strokeLinecap="round"/>
            <path d="M164 132 Q164 137 163 142" stroke="#2a1808" strokeWidth="1.3" fill="none" opacity="0.45" strokeLinecap="round"/>
            <path d="M172 135 Q173 140 171 144" stroke="#2a1808" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round"/>

            {/* Side hair over ears */}
            <path d="M97 148 Q95 160 96 174 Q97 186 100 194"
              stroke="#1a0c04" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.88"/>
            <path d="M203 148 Q205 160 204 174 Q203 186 200 194"
              stroke="#1a0c04" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.88"/>

            {/* Subtle wave detail on top */}
            <path d="M118 102 Q130 96 143 98 Q152 99 162 96 Q174 93 184 99"
              stroke="#3a1e08" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round"/>
          </g>

          {/* ══ EYEBROWS — clearly visible below hairline ══ */}
          <g className="av-brow">
            <path d="M118 150 Q128 144 142 147"
              stroke="#0e0614" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
            <path d="M158 147 Q169 141 183 144"
              stroke="#0e0614" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
          </g>

          {/* LEFT EYE */}
          <g className="eye-L">
            <ellipse cx="132" cy="164" rx="9.5" ry="9" fill="white"/>
            <ellipse cx="132" cy="164" rx="9"   ry="8.5" fill="#F9F9FF"/>
            <g clipPath="url(#clip-eL)">
              <g id="av-pupil-l">
                <circle cx="132" cy="164" r="6.5" fill="#1C0A34"/>
                <circle cx="132" cy="164" r="6.5" fill="none" stroke="#4A1090" strokeWidth="1.3" opacity="0.55"/>
                <circle cx="132" cy="164" r="4"   fill="#080218"/>
                <circle cx="135.5" cy="160" r="2.5" fill="white" opacity="0.96"/>
                <circle cx="129.5" cy="168" r="1.1" fill="white" opacity="0.38"/>
              </g>
            </g>
            <path d="M122 157 Q132 151 142 157" stroke="#0C0620" strokeWidth="2.1" fill="none" strokeLinecap="round"/>
            <path d="M123 173 Q132 177 141 173" stroke="#0C0620" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.28"/>
            <path d="M122.5 158.5 L120 156" stroke="#0C0620" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
            <path d="M125.5 156 L124.5 153.5" stroke="#0C0620" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
          </g>

          {/* RIGHT EYE */}
          <g className="eye-R">
            <ellipse cx="168" cy="164" rx="9.5" ry="9" fill="white"/>
            <ellipse cx="168" cy="164" rx="9"   ry="8.5" fill="#F9F9FF"/>
            <g clipPath="url(#clip-eR)">
              <g id="av-pupil-r">
                <circle cx="168" cy="164" r="6.5" fill="#1C0A34"/>
                <circle cx="168" cy="164" r="6.5" fill="none" stroke="#4A1090" strokeWidth="1.3" opacity="0.55"/>
                <circle cx="168" cy="164" r="4"   fill="#080218"/>
                <circle cx="171.5" cy="160" r="2.5" fill="white" opacity="0.96"/>
                <circle cx="165.5" cy="168" r="1.1" fill="white" opacity="0.38"/>
              </g>
            </g>
            <path d="M158 157 Q168 151 178 157" stroke="#0C0620" strokeWidth="2.1" fill="none" strokeLinecap="round"/>
            <path d="M159 173 Q168 177 177 173" stroke="#0C0620" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.28"/>
            <path d="M177.5 158.5 L180 156" stroke="#0C0620" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
            <path d="M174.5 156 L175.5 153.5" stroke="#0C0620" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
          </g>

          {/* Screen light on eyes */}
          <ellipse cx="132" cy="164" rx="7.5" ry="7" fill="#8B5CF6" opacity="0.05"/>
          <ellipse cx="168" cy="164" rx="7.5" ry="7" fill="#8B5CF6" opacity="0.05"/>

          {/* NOSE */}
          <path d="M157 178 Q154 186 152 193 Q150 198 153 202 Q156 205 160 203 Q163 200 164 194 Q165 187 163 178"
            stroke="#C07828" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity="0.46"/>
          <ellipse cx="153" cy="202" rx="4" ry="2.8" fill="#B86818" opacity="0.13"/>
          <ellipse cx="161" cy="201" rx="3.5" ry="2.5" fill="#B86818" opacity="0.11"/>

          {/* MOUTH */}
          <path d="M137 215 Q150 211 164 212"
            stroke="#8A3018" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
          <path d="M138 217 Q150 222 165 218"
            stroke="#A04828" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.38"/>
          <circle cx="137" cy="215.5" r="1.4" fill="#904020" opacity="0.18"/>
          <circle cx="165" cy="213" r="1.4" fill="#904020" opacity="0.18"/>

          {/* Cheek blush */}
          <ellipse cx="200" cy="178" rx="13" ry="7.5" fill="#E87060" opacity="0.07" transform="rotate(-15 200 178)"/>
          <ellipse cx="106" cy="178" rx="11" ry="6.5" fill="#E87060" opacity="0.05" transform="rotate(15 106 178)"/>

        </g>{/* end av-head */}

      </g>{/* end av-sway */}

      {/* ══════ DECORATIONS ══════ */}
      <g className="o1">
        <circle cx="270" cy="55" r="20" fill="#7c3aed" filter="url(#f-blur)" opacity="0.18"/>
        <circle cx="270" cy="55" r="9" fill="#7c3aed" opacity="0.52" filter="url(#f-glow)"/>
        <circle cx="270" cy="55" r="4.5" fill="#C4B5FD" opacity="0.93"/>
        <circle cx="270" cy="55" r="16" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.18" strokeDasharray="3 4"/>
      </g>
      <g className="o2">
        <circle cx="24" cy="168" r="13" fill="#4f46e5" filter="url(#f-blur)" opacity="0.18"/>
        <circle cx="24" cy="168" r="6" fill="#6366f1" opacity="0.48" filter="url(#f-glow)"/>
        <circle cx="24" cy="168" r="3" fill="#A5B4FC" opacity="0.9"/>
      </g>
      <g className="o3">
        <circle cx="36" cy="318" r="12" fill="#7c3aed" filter="url(#f-blur)" opacity="0.18"/>
        <circle cx="36" cy="318" r="5.5" fill="#8B5CF6" opacity="0.5" filter="url(#f-glow)"/>
        <circle cx="36" cy="318" r="2.8" fill="#DDD6FE" opacity="0.88"/>
      </g>

      <g className="sp1">
        <path d="M38 48 L40 41 L42 48 L49 50 L42 52 L40 59 L38 52 L31 50Z" fill="#A78BFA" opacity="0.72"/>
        <circle cx="30" cy="44" r="1.5" fill="#A78BFA" opacity="0.42"/>
      </g>
      <g className="sp2">
        <path d="M270 85 L272 78 L274 85 L281 87 L274 89 L272 96 L270 89 L263 87Z" fill="#7C3AED" opacity="0.62"/>
        <circle cx="262" cy="82" r="1.3" fill="#A78BFA" opacity="0.38"/>
      </g>
      <g className="sp3">
        <path d="M274 192 L276 186 L278 192 L285 194 L278 196 L276 202 L274 196 L267 194Z" fill="#6366f1" opacity="0.55"/>
      </g>

      <g className="av-cdf">
        <rect x="12" y="52" width="74" height="30" rx="7" fill="#09071E" stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.55"/>
        <circle cx="20" cy="60" r="1.7" fill="#FF5F57"/>
        <circle cx="26" cy="60" r="1.7" fill="#FEBC2E"/>
        <circle cx="32" cy="60" r="1.7" fill="#28C840"/>
        <text x="16" y="72" fontSize="5" fill="#A78BFA" fontFamily="monospace">const dev =</text>
        <text x="16" y="80" fontSize="5" fill="#6EE7B7" fontFamily="monospace">  true ✓</text>
      </g>

      <g className="o1" style={{ animationDuration: '4.5s', animationDelay: '1.9s' }}>
        <text x="256" y="180" fontSize="20" fill="#7c3aed" fontFamily="monospace" opacity="0.2" fontWeight="bold">{"{ }"}</text>
      </g>

      <circle cx="278" cy="290" r="3.2" fill="#7C3AED" opacity="0.4" className="dp1"/>
      <circle cx="285" cy="282" r="2.3" fill="#A78BFA" opacity="0.3" className="dp2"/>
      <circle cx="273" cy="279" r="1.7" fill="#4F46E5" opacity="0.35" className="dp3"/>
    </svg>
  )
}