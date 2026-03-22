'use client'

import Link from 'next/link'

interface Finding {
  stat: string
  label: string
  source: string
}

export default function MetaAnalysisTeaser({ findings, studyCount }: { findings: Finding[]; studyCount: number }) {
  // Show top 6 most impactful stats on mobile, more on desktop
  const featured = findings.slice(0, 8)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060e1a] to-[#0a1628]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-[10px] md:text-xs font-bold text-emerald-400/60 uppercase tracking-[0.15em]">
                Living Meta-Analysis
              </span>
            </div>
            <span className="hidden md:inline text-[9px] text-white/20 font-medium">
              {studyCount} peer-reviewed studies · Updated weekly
            </span>
          </div>
          <Link
            href="/research"
            className="text-[10px] md:text-xs text-emerald-400/50 hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1 group"
          >
            Full research
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Stats ribbon — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-2 md:gap-2.5 overflow-x-auto scrollbar-hide pb-1 md:pb-0 md:grid md:grid-cols-4 lg:grid-cols-8 snap-x snap-mandatory">
          {featured.map((f, i) => (
            <Link
              key={i}
              href="/research"
              className="flex-shrink-0 snap-start w-[130px] md:w-auto bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-3 text-center hover:bg-white/[0.06] hover:border-emerald-500/15 transition-all duration-200 group"
            >
              <div className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 group-hover:from-emerald-200 group-hover:to-emerald-400 transition-all">
                {f.stat}
              </div>
              <div className="text-[8px] md:text-[9px] text-white/35 leading-tight mt-1 line-clamp-2">
                {f.label}
              </div>
              <div className="text-[6px] md:text-[7px] text-emerald-400/30 mt-0.5 uppercase tracking-wider truncate">
                {f.source}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile study count */}
        <p className="md:hidden text-center text-[9px] text-white/15 mt-3">
          {studyCount} studies · {findings.length} key findings
        </p>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
    </section>
  )
}
