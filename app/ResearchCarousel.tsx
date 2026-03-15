'use client'

import { useRef, useEffect } from 'react'
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

export default function ResearchCarousel({ papers }: { papers: Paper[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let raf: number
    let paused = false
    const speed = 0.3 // px per frame — slow gentle drift

    const scroll = () => {
      if (!paused && el) {
        el.scrollLeft += speed
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(scroll)
    }
    raf = requestAnimationFrame(scroll)

    const pause = () => { paused = true }
    const resume = () => { paused = false }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause)
    el.addEventListener('touchend', () => setTimeout(resume, 3000))

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section className="bg-[#0a1628] pt-3 pb-3 md:pt-3 md:pb-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[11px] md:text-xs font-bold text-white/40 tracking-[0.15em] uppercase">
            Latest Olive Oil Research Papers
          </h2>
          <Link href="/research" className="text-[10px] text-emerald-400/40 hover:text-emerald-400/70 transition-colors">
            All research →
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />
          <div ref={scrollRef} className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
            {papers.map((paper) => (
              <Link
                key={paper.slug}
                href={`/blog/${paper.slug}`}
                className="shrink-0 w-[210px] md:w-[220px] bg-white/[0.06] border border-white/[0.08] rounded-lg p-3 hover:bg-white/[0.1] transition-colors"
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
