'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  // Get slot IDs from: AdSense → Ads → By ad unit → Display ads
  // For now using data-ad-format="auto" which uses your auto-ads config
  slot?: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
  layout?: string
  className?: string
  label?: boolean   // show subtle "Advertisement" label for trust
}

const PUB_ID = 'ca-pub-1361556625262612'

export default function AdUnit({
  slot,
  format = 'auto',
  layout,
  className = '',
  label = true,
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      const w = window as Window & { adsbygoogle?: unknown[] }
      w.adsbygoogle = w.adsbygoogle || []
      w.adsbygoogle.push({})
    } catch {
      // adsbygoogle not loaded yet — auto ads will handle it
    }
  }, [])

  if (!slot) return null  // Don't render until slot ID is configured

  return (
    <div
      ref={adRef}
      className={`ad-unit-wrapper ${className}`}
      aria-label="Advertisement"
      data-nosnippet
    >
      {label && (
        <p className="text-[9px] text-gray-400 text-center mb-1 uppercase tracking-widest font-medium">
          Advertisement
        </p>
      )}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { 'data-ad-layout': layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// ── Auto-ads placement hint component ────────────────────────────────────────
// Drop this anywhere you want to SUGGEST a good ad break to Google's auto ads.
// No slot ID needed — it just signals a high-quality placement opportunity.
export function AdBreakHint({ id }: { id: string }) {
  return (
    <div
      id={id}
      data-ad-break="true"
      className="ad-break-hint w-full"
      aria-hidden="true"
    />
  )
}
