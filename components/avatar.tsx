export function Avatar() {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Skin gradient */}
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#e8b98a" />
          <stop offset="100%" stopColor="#c98b5a" />
        </linearGradient>
        {/* Hoodie main */}
        <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1040" />
          <stop offset="50%" stopColor="#12082a" />
          <stop offset="100%" stopColor="#0a0515" />
        </linearGradient>
        {/* Hoodie purple accent */}
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id="outerGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#4c1d95" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        {/* Inner glow ring */}
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="transparent" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.5" />
        </radialGradient>
        {/* Laptop screen */}
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0a1e" />
          <stop offset="100%" stopColor="#1a0f3a" />
        </linearGradient>
        {/* Hair */}
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d1f3d" />
          <stop offset="100%" stopColor="#0f0a18" />
        </linearGradient>
        {/* Chair */}
        <linearGradient id="chairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1030" />
          <stop offset="100%" stopColor="#0d0820" />
        </linearGradient>
        {/* Desk */}
        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1c1035" />
          <stop offset="100%" stopColor="#110c25" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#7c3aed" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background ambient glow */}
      <ellipse cx="150" cy="200" rx="130" ry="100" fill="url(#outerGlow)" />

      {/* === DESK === */}
      <rect x="40" y="210" width="220" height="16" rx="4" fill="url(#deskGrad)" />
      <rect x="40" y="224" width="220" height="4" rx="2" fill="#7c3aed" opacity="0.4" />
      {/* Desk legs */}
      <rect x="55" y="228" width="10" height="40" rx="3" fill="#0f0a1e" />
      <rect x="235" y="228" width="10" height="40" rx="3" fill="#0f0a1e" />

      {/* === LAPTOP === */}
      {/* Laptop base */}
      <rect x="95" y="195" width="110" height="18" rx="4" fill="#1a1030" />
      <rect x="95" y="195" width="110" height="4" rx="2" fill="#7c3aed" opacity="0.3" />
      {/* Laptop screen body */}
      <rect x="100" y="130" width="100" height="68" rx="6" fill="#0f0a1e" stroke="#2d1f5e" strokeWidth="2" />
      {/* Screen content */}
      <rect x="106" y="136" width="88" height="56" rx="3" fill="url(#screenGrad)" />
      {/* Code lines on screen */}
      <rect x="112" y="142" width="45" height="3" rx="1.5" fill="#7c3aed" opacity="0.8" />
      <rect x="116" y="149" width="35" height="3" rx="1.5" fill="#a78bfa" opacity="0.6" />
      <rect x="116" y="156" width="50" height="3" rx="1.5" fill="#6ee7b7" opacity="0.5" />
      <rect x="112" y="163" width="30" height="3" rx="1.5" fill="#7c3aed" opacity="0.7" />
      <rect x="116" y="170" width="40" height="3" rx="1.5" fill="#a78bfa" opacity="0.5" />
      {/* Screen glow */}
      <rect x="106" y="136" width="88" height="56" rx="3" fill="#7c3aed" opacity="0.04" />
      {/* Laptop hinge */}
      <rect x="100" y="196" width="100" height="3" rx="1.5" fill="#2d1f5e" />

      {/* === CHAIR === */}
      {/* Chair back */}
      <rect x="115" y="230" width="70" height="50" rx="8" fill="url(#chairGrad)" opacity="0.9" />
      <rect x="122" y="237" width="56" height="36" rx="5" fill="#0a0615" opacity="0.5" />
      {/* Chair seat */}
      <rect x="105" y="278" width="90" height="18" rx="6" fill="url(#chairGrad)" />
      {/* Chair leg */}
      <rect x="143" y="294" width="14" height="6" rx="3" fill="#0f0a1e" />

      {/* === BODY / HOODIE === */}
      {/* Hoodie main shape */}
      <path
        d="M 90 285 
           Q 88 255 85 240
           Q 80 225 95 218
           L 115 210
           Q 130 205 150 204
           Q 170 205 185 210
           L 205 218
           Q 220 225 215 240
           Q 212 255 210 285 Z"
        fill="url(#hoodieGrad)"
      />
      {/* Hoodie center seam */}
      <line x1="150" y1="210" x2="150" y2="285" stroke="#2d1f5e" strokeWidth="1.5" opacity="0.6" />
      {/* Hoodie purple chest stripe */}
      <path
        d="M 133 212 Q 150 208 167 212 L 165 240 Q 150 244 135 240 Z"
        fill="url(#accentGrad)"
        opacity="0.15"
      />
      {/* Code badge on hoodie */}
      <rect x="130" y="248" width="40" height="22" rx="6" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" />
      <text x="150" y="263" textAnchor="middle" fontSize="11" fill="#a78bfa" fontFamily="monospace" fontWeight="bold">
        {'</>'}
      </text>
      {/* Hoodie hood outline */}
      <path
        d="M 110 215 Q 100 200 105 185 Q 110 170 120 168"
        fill="none"
        stroke="#2d1f5e"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 190 215 Q 200 200 195 185 Q 190 170 180 168"
        fill="none"
        stroke="#2d1f5e"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Arms */}
      <path
        d="M 90 220 Q 75 235 72 255 Q 70 265 78 268 Q 86 270 90 258 Q 93 245 97 232 Z"
        fill="url(#hoodieGrad)"
      />
      <path
        d="M 210 220 Q 225 235 228 255 Q 230 265 222 268 Q 214 270 210 258 Q 207 245 203 232 Z"
        fill="url(#hoodieGrad)"
      />
      {/* Hands */}
      <ellipse cx="76" cy="270" rx="10" ry="8" fill="url(#skinGrad)" />
      <ellipse cx="224" cy="270" rx="10" ry="8" fill="url(#skinGrad)" />

      {/* === NECK === */}
      <rect x="138" y="168" width="24" height="22" rx="6" fill="url(#skinGrad)" />

      {/* === HEAD === */}
      {/* Head base */}
      <ellipse cx="150" cy="145" rx="48" ry="52" fill="url(#skinGrad)" />

      {/* === HAIR === */}
      {/* Main hair */}
      <path
        d="M 102 130 
           Q 100 95 110 80 
           Q 125 62 150 60 
           Q 175 62 190 80 
           Q 200 95 198 130
           Q 190 115 180 110
           Q 165 105 150 105
           Q 135 105 120 110
           Q 110 115 102 130 Z"
        fill="url(#hairGrad)"
      />
      {/* Hair side details */}
      <path
        d="M 102 130 Q 100 140 104 148 Q 103 138 105 132 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M 198 130 Q 200 140 196 148 Q 197 138 195 132 Z"
        fill="url(#hairGrad)"
      />
      {/* Hair highlights */}
      <ellipse cx="135" cy="82" rx="14" ry="8" fill="#3d2b55" opacity="0.5" transform="rotate(-20 135 82)" />
      <ellipse cx="158" cy="75" rx="8" ry="5" fill="#4a3560" opacity="0.4" transform="rotate(10 158 75)" />

      {/* === FACE FEATURES === */}
      {/* Ears */}
      <ellipse cx="103" cy="148" rx="8" ry="10" fill="#d4965e" />
      <ellipse cx="103" cy="148" rx="5" ry="7" fill="#c07840" opacity="0.5" />
      <ellipse cx="197" cy="148" rx="8" ry="10" fill="#d4965e" />
      <ellipse cx="197" cy="148" rx="5" ry="7" fill="#c07840" opacity="0.5" />

      {/* Eyebrows */}
      <path d="M 125 128 Q 132 124 139 127" stroke="#1a0f2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 161 127 Q 168 124 175 128" stroke="#1a0f2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Eyes - whites */}
      <ellipse cx="132" cy="138" rx="10" ry="9" fill="white" />
      <ellipse cx="168" cy="138" rx="10" ry="9" fill="white" />
      {/* Iris */}
      <circle cx="134" cy="139" r="6" fill="#2d1060" />
      <circle cx="170" cy="139" r="6" fill="#2d1060" />
      {/* Pupil */}
      <circle cx="135" cy="140" r="3.5" fill="#0a0515" />
      <circle cx="171" cy="140" r="3.5" fill="#0a0515" />
      {/* Eye shine */}
      <circle cx="137" cy="137" r="1.8" fill="white" />
      <circle cx="173" cy="137" r="1.8" fill="white" />
      <circle cx="133" cy="142" r="0.8" fill="white" opacity="0.5" />
      <circle cx="169" cy="142" r="0.8" fill="white" opacity="0.5" />
      {/* Eye lashes top */}
      <path d="M 122 133 Q 132 129 142 133" stroke="#1a0f2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 158 133 Q 168 129 178 133" stroke="#1a0f2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 150 145 Q 146 155 148 160 Q 150 162 152 160 Q 154 155 150 145" fill="#c07840" opacity="0.4" />
      <circle cx="146" cy="159" r="3" fill="#b87040" opacity="0.25" />
      <circle cx="154" cy="159" r="3" fill="#b87040" opacity="0.25" />

      {/* Mouth - smile */}
      <path d="M 136 170 Q 150 180 164 170" stroke="#8b4513" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Smile inner */}
      <path d="M 138 172 Q 150 179 162 172" fill="#a05525" opacity="0.3" />
      {/* Teeth hint */}
      <path d="M 141 172 Q 150 177 159 172" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Cheek blush */}
      <ellipse cx="118" cy="158" rx="10" ry="6" fill="#e87878" opacity="0.2" />
      <ellipse cx="182" cy="158" rx="10" ry="6" fill="#e87878" opacity="0.2" />

      {/* === FLOATING ELEMENTS === */}
      {/* Purple orb top left */}
      <circle cx="55" cy="80" r="8" fill="#7c3aed" opacity="0.5" filter="url(#glow)" />
      <circle cx="55" cy="80" r="4" fill="#a78bfa" opacity="0.8" />
      {/* Small stars/dots */}
      <circle cx="240" cy="100" r="3" fill="#7c3aed" opacity="0.6" filter="url(#glow)" />
      <circle cx="65" cy="170" r="2" fill="#a78bfa" opacity="0.5" />
      <circle cx="245" cy="160" r="5" fill="#4f46e5" opacity="0.4" filter="url(#glow)" />
      <circle cx="260" cy="200" r="2.5" fill="#7c3aed" opacity="0.5" />
      {/* Sparkles */}
      <path d="M 250 75 L 252 70 L 254 75 L 259 77 L 254 79 L 252 84 L 250 79 L 245 77 Z" fill="#a78bfa" opacity="0.6" />
      <path d="M 45 120 L 46.5 116 L 48 120 L 52 121.5 L 48 123 L 46.5 127 L 45 123 L 41 121.5 Z" fill="#7c3aed" opacity="0.5" />

      {/* Screen light reflection on face */}
      <ellipse cx="150" cy="175" rx="30" ry="12" fill="#7c3aed" opacity="0.06" />

      {/* WiFi icon floating */}
      <g transform="translate(42, 188)" opacity="0.4" filter="url(#glow)">
        <path d="M 0 14 Q 7 6 14 14" stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 3 11 Q 7 7 11 11" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="7" cy="9" r="2" fill="#7c3aed" />
      </g>
    </svg>
  )
}