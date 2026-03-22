import Link from 'next/link'
import type { Metadata } from 'next'
import { RESOURCE_LIBRARY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'UC Resource Library | Colitis Clearly',
  description: 'A curated resource library of reputable ulcerative colitis organizations, guideline hubs, and medical references.',
}

export default function ResourceLibraryPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
          <span>←</span>
          Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Resource Library</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
          Reputable places to continue reading once you want patient support materials, formal guidance, or broader medical overviews.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {RESOURCE_LIBRARY.map((resource) => (
            <a
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 transition hover:border-emerald-300/30 hover:bg-white/[0.05]"
            >
              <h2 className="text-2xl font-bold text-white">{resource.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
