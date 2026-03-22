import Link from 'next/link'

interface Finding {
  stat: string
  label: string
  source: string
}

export default function MetaAnalysisTeaser({
  findings,
  studyCount,
}: {
  findings: Finding[]
  studyCount: number
}) {
  const featuredFindings = findings.slice(0, 4)

  return (
    <section className="glass-panel rounded-[34px] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-100/70">
            Meta-Analysis Teaser
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
            The short version of the UC evidence stack.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Snapshot findings pulled from {studyCount} research summaries so visitors can move from headline numbers to the fuller trial context.
          </p>
        </div>

        <Link
          href="/research"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white hover:border-emerald-accent/40 hover:bg-white/[0.07]"
        >
          Explore the research library <span>→</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featuredFindings.map((finding) => (
          <div
            key={`${finding.source}-${finding.label}`}
            className="card-lift rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-100/65">{finding.source}</p>
            <p className="font-display mt-4 text-4xl tracking-tight text-amber-accent">{finding.stat}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{finding.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
