'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

type Paper = {
  slug: string
  title: string
  paper: string
  finding: string
  category: string
  date: string
}

const CATEGORY_ICONS: Record<string, string> = {
  Heart: '❤️', Brain: '🧠', Gut: '🦠', Cancer: '🔬',
  Inflammation: '🔥', Metabolism: '⚡', Longevity: '🧬', Skin: '✨',
  Comparison: '⚖️', Rankings: '🏆',
}

/**
 * Infinite-scroll research carousel using CSS translate for smooth movement.
 * Duplicates items to create seamless loop. Pauses on hover/touch.
 */
export default function ResearchCarousel({ papers }: { papers: Paper[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  // Duplicate for seamless loop
  const displayPapers = [...papers, ...papers]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf: number
    let offset = 0
    const speed = 0.4 // px per frame (~24px/sec at 60fps)

    const tick = () => {
      if (!paused) {
        offset += speed
        // Reset when first set has scrolled past
        const halfWidth = track.scrollWidth / 2
        if (halfWidth > 0 && offset >= halfWidth) {
          offset -= halfWidth
        }
        track.style.transform = `translateX(-${offset}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  return (
    <section className="relative bg-[#0a1628] pt-3 pb-3 md:pt-3 md:pb-4 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-[30%] w-[200px] h-[100px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[11px] md:text-xs font-bold text-white/40 tracking-[0.15em] uppercase">
            Latest Olive Oil Research Papers
          </h2>
          <Link href="/research" className="text-[10px] text-emerald-400/40 hover:text-emerald-400/70 transition-colors">
            All research →
          </Link>
        </div>
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

          {/* Sliding track */}
          <div
            ref={trackRef}
            className="flex gap-2.5 pb-1 will-change-transform"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
          >
            {displayPapers.map((paper, i) => (
              <Link
                key={`${paper.slug}-${i}`}
                href={`/blog/${paper.slug}`}
                className="shrink-0 w-[210px] md:w-[220px] bg-white/[0.06] border border-white/[0.08] rounded-lg p-3 hover:bg-white/[0.1] hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="text-[10px]">{CATEGORY_ICONS[paper.category] || '📄'}</span>
                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-wider">{paper.category}</span>
                </div>
                <h3 className="text-[11px] font-bold text-white/80 leading-snug line-clamp-2">
                  {paper.title}
                </h3>
                <p className="mt-1 text-[8px] text-white/25 italic truncate">
                  {paper.paper}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
