'use client'

import { useEffect, useRef } from 'react'

/**
 * SmallAd — A compact, tasteful inline ad unit.
 * Designed to blend with the site's dark aesthetic.
 * Max height constrained to keep it subtle.
 * 
 * Variants:
 * - "banner" (default): Slim horizontal banner, max 90px tall
 * - "inline": Slightly taller, fits between content sections, max 120px
 * - "sidebar": For desktop sidebars or in-content placements, max 250px
 */

const PUB_ID = 'ca-pub-1361556625262612'

interface SmallAdProps {
  slot?: string
  variant?: 'banner' | 'inline' | 'sidebar'
  className?: string
  dark?: boolean
}

export default function SmallAd({
  slot,
  variant = 'banner',
  className = '',
  dark = true,
}: SmallAdProps) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      const w = window as Window & { adsbygoogle?: unknown[] }
      w.adsbygoogle = w.adsbygoogle || []
      w.adsbygoogle.push({})
    } catch {
      // adsbygoogle not loaded
    }
  }, [])

  if (!slot) return null

  const maxHeights = {
    banner: '90px',
    inline: '120px',
    sidebar: '250px',
  }

  const bgClass = dark
    ? 'bg-white/[0.03] border-white/[0.06]'
    : 'bg-gray-50/80 border-gray-200/50'

  const labelClass = dark
    ? 'text-white/20'
    : 'text-gray-400'

  return (
    <div
      className={`w-full overflow-hidden rounded-xl border ${bgClass} my-3 ${className}`}
      style={{ maxHeight: maxHeights[variant] }}
      aria-label="Advertisement"
      data-nosnippet
    >
      <p className={`text-[8px] ${labelClass} text-center pt-1 uppercase tracking-[0.15em] font-medium`}>
        Ad
      </p>
      <div className="px-2 pb-1" style={{ maxHeight: `calc(${maxHeights[variant]} - 20px)`, overflow: 'hidden' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-client={PUB_ID}
          data-ad-slot={slot}
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}
