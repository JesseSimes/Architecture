// PLACEHOLDER ONLY. Every usage of <PlaceholderArt /> in this project
// marks a spot where a real photograph or scanned drawing belongs.
// Replace with a real <img src="..." alt="..." /> when assets are ready.

const palettes = [
  { bg: '#E4DFD1', ink: '#1C1B18', fill: '#F1EDE1', glass: '#7C93A6' },
  { bg: '#EDEAE2', ink: '#1C1B18', fill: '#F6F4EE', glass: '#B9C7D4' },
  { bg: '#DCD6C8', ink: '#1C1B18', fill: '#EFEBE0', glass: '#7C93A6' },
  { bg: '#F0EDE4', ink: '#1C1B18', fill: '#E4DFD1', glass: '#B9C7D4' },
]

export default function PlaceholderArt({ variant = 'elevation', seed = 0, className = '' }) {
  const p = palettes[seed % palettes.length]

  const content = {
    elevation: (
      <>
        <rect width="800" height="450" fill={p.bg} />
        <rect x="230" y="200" width="340" height="200" fill={p.fill} stroke={p.ink} strokeWidth="1" />
        <rect x="270" y="260" width="50" height="80" fill={p.glass} />
        <rect x="360" y="260" width="50" height="80" fill={p.glass} />
        <line x1="150" y1="400" x2="650" y2="400" stroke={p.ink} strokeWidth="0.8" />
      </>
    ),
    plan: (
      <>
        <rect width="800" height="450" fill="#2B4C6F" />
        <g fill="none" stroke="#DCE6EE" strokeWidth="1">
          <rect x="150" y="130" width="220" height="200" />
          <rect x="410" y="180" width="240" height="170" />
          <line x1="260" y1="130" x2="260" y2="330" />
          <line x1="520" y1="180" x2="520" y2="350" />
          <circle cx="390" cy="260" r="16" />
        </g>
      </>
    ),
    section: (
      <>
        <rect width="800" height="450" fill="#2B4C6F" />
        <g fill="none" stroke="#DCE6EE" strokeWidth="1">
          <line x1="80" y1="380" x2="720" y2="380" />
          <line x1="80" y1="380" x2="80" y2="240" />
          <line x1="80" y1="240" x2="280" y2="240" />
          <line x1="280" y1="240" x2="280" y2="150" />
          <line x1="280" y1="150" x2="480" y2="150" />
          <line x1="480" y1="150" x2="480" y2="380" />
        </g>
      </>
    ),
    interior: (
      <>
        <rect width="800" height="450" fill={p.fill} />
        <rect x="80" y="70" width="640" height="310" fill={p.bg} stroke={p.ink} strokeWidth="1" />
        <rect x="140" y="220" width="140" height="90" fill={p.glass} />
        <rect x="520" y="220" width="140" height="90" fill={p.glass} />
      </>
    ),
    massing: (
      <>
        <rect width="800" height="450" fill={p.bg} />
        <polyline
          points="180,380 180,200 320,150 460,200 460,380"
          fill="none"
          stroke={p.ink}
          strokeWidth="1.2"
        />
        <line x1="120" y1="380" x2="680" y2="380" stroke={p.ink} strokeWidth="0.8" />
      </>
    ),
  }[variant]

  return (
    <svg
      className={className}
      viewBox="0 0 800 450"
      role="img"
      aria-label="Placeholder architectural drawing, real image pending"
    >
      {content}
    </svg>
  )
}
