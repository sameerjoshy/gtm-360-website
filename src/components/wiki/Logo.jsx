// GTM-360 logo mark — the circular-arrow motif used across the GTM-360 system.

export function Logo({ size = 32, variant = 'full', light = false }) {
  const mark = (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17" stroke="#4F46E5" strokeWidth="1.5" opacity="0.2" />
      <path d="M18 4 A14 14 0 0 1 32 18" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M32 18 A14 14 0 0 1 18 32" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M18 32 A14 14 0 0 1 4 18" stroke={light ? '#94A3B8' : '#0A192F'} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M4 18 A14 14 0 0 1 18 4" stroke={light ? '#94A3B8' : '#0A192F'} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polygon points="18,1 22,7 14,7" fill="#4F46E5" />
      <polygon points="35,18 29,14 29,22" fill="#6366f1" />
      <polygon points="18,35 14,29 22,29" fill={light ? '#94A3B8' : '#0A192F'} />
      <polygon points="1,18 7,22 7,14" fill={light ? '#94A3B8' : '#0A192F'} />
      <circle cx="18" cy="18" r="3" fill="#4F46E5" />
    </svg>
  )

  if (variant === 'mark') return mark

  return (
    <span className="flex items-center gap-2.5">
      {mark}
      <span className="flex flex-col leading-none">
        <span style={{ fontSize: size * 0.5, fontWeight: 700, letterSpacing: '-0.02em', color: light ? '#fff' : '#0A192F' }}>GTM-360</span>
        <span style={{ fontSize: size * 0.28, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4F46E5' }}>The Revenue OS</span>
      </span>
    </span>
  )
}