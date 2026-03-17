'use client'

import { useEffect, useRef } from 'react'

/**
 * SmallAd — Inline AdSense ad unit.
 * When a slot ID is provided: renders a manual ad unit.
 * When no slot ID: renders a multiplex/auto ad that Google fills.
 * No height restrictions — let Google's responsive system handle sizing.
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
  variant = 'inline',
  className = '',
  dark = true,
}: SmallAdProps) {
  const adRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      const w = window as Window & { adsbygoogle?: unknown[] }
      w.adsbygoogle = w.adsbygoogle || []
      w.adsbygoogle.push({})
    } catch {
      // adsbygoogle not loaded yet
    }
  }, [])

  const bgClass = dark
    ? 'border-white/[0.04]'
    : 'border-gray-200/30'

  const labelClass = dark ? 'text-white/15' : 'text-gray-400'

  return (
    <div
      className={`w-full my-4 ${className}`}
      aria-label="Advertisement"
      data-nosnippet
    >
      <p className={`text-[7px] ${labelClass} text-center uppercase tracking-[0.2em] font-medium mb-1`}>
        Advertisement
      </p>
      <div className={`w-full border ${bgClass} rounded-lg overflow-hidden`}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '50px' }}
          data-ad-client={PUB_ID}
          {...(slot ? { 'data-ad-slot': slot } : {})}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}
