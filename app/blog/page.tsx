import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { BLOG_ARTICLES } from '@/lib/blog-articles'

export const metadata: Metadata = {
  title: 'UC Science Blog | Colitis Clearly',
  description: 'Evidence-based ulcerative colitis explainers on diagnosis, flare management, diet, biologics, biomarkers, and treatment decisions.',
  keywords: 'ulcerative colitis blog, UC flare management, biologics for ulcerative colitis, fecal calprotectin, ulcerative colitis diet',
  openGraph: {
    title: 'UC Science Blog | Colitis Clearly',
    description: 'Evidence-based ulcerative colitis explainers and treatment deep dives.',
    type: 'website',
  }
}

const posts = [...BLOG_ARTICLES].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
)

export default function BlogIndexPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0b2d2b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            Science Library
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Ulcerative colitis articles built from trials, biomarkers, and real clinical questions.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Start with the diagnosis guide, compare biologics and JAK inhibitors, or use the flare-management and biomarker explainers to understand what changes next.
          </p>
          <div className="mt-8">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Link href={`/blog/${featured.slug}`} className="group block rounded-[28px] border border-white/8 bg-white/[0.04] p-7 transition hover:border-emerald-300/30 hover:bg-white/[0.06]">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
              Featured
            </span>
            <span>{featured.category}</span>
            <span>{featured.readTime}</span>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold text-white transition group-hover:text-emerald-200">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            {featured.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
            Read article <span>→</span>
          </div>
        </Link>

        <SmallAd className="mt-8" />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-emerald-300/30 hover:bg-white/[0.05]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-400">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
