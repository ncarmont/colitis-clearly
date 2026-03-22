'use client'

import Link from 'next/link'

interface Finding {
  stat: string
  label: string
  source: string
}

export default function MetaAnalysisTeaser({ findings, studyCount }: { findings: Finding[]; studyCount: number }) {
  const featured = findings.slice(0, 8)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060e1a] to-[#0a1628]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        {/* Header — clear label explaining what this is */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-[11px] md:text-xs font-bold text-emerald-400/70 uppercase tracking-[0.12em]">
              Proven Health Benefits
            </span>
          </div>
          <Link
            href="/research"
            className="text-[10px] md:text-xs text-emerald-400/50 hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1 group"
          >
            All research
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Subtitle — explains what this data actually is */}
        <p className="text-[9px] md:text-[10px] text-white/25 mb-3">
          Aggregated from {studyCount} peer-reviewed studies · {findings.length} key findings · Updated weekly
        </p>

        {/* Stats ribbon — compact cards, horizontal scroll mobile, grid desktop */}
        <div className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide pb-0.5 md:pb-0 md:grid md:grid-cols-4 lg:grid-cols-8 snap-x snap-mandatory">
          {featured.map((f, i) => (
            <Link
              key={i}
              href="/research"
              className="flex-shrink-0 snap-start w-[110px] md:w-auto bg-white/[0.03] border border-white/[0.06] rounded-lg px-2.5 py-2 text-center hover:bg-white/[0.06] hover:border-emerald-500/15 transition-all duration-200 group"
            >
              <div className="text-base md:text-lg font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 group-hover:from-emerald-200 group-hover:to-emerald-400 transition-all leading-tight">
                {f.stat}
              </div>
              <div className="text-[7.5px] md:text-[8.5px] text-white/35 leading-tight mt-0.5 line-clamp-2">
                {f.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
    </section>
  )
}
