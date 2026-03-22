import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import ScrollReveal from '@/components/ScrollReveal'
import { BLOG_ARTICLES } from '@/lib/blog-articles'

export const metadata: Metadata = {
  title: 'UC Science Blog | Colitis Clearly',
  description:
    'Evidence-based ulcerative colitis explainers on diagnosis, flare management, diet, biomarkers, and treatment decisions.',
}

const categoryStyles: Record<string, string> = {
  Foundations: 'border-emerald-accent/30 bg-emerald-accent/12 text-emerald-100',
  Comparisons: 'border-cyan-400/30 bg-cyan-400/12 text-cyan-100',
  'Flare Management': 'border-amber-accent/30 bg-amber-accent/12 text-amber-100',
  'Diet & Lifestyle': 'border-teal-accent/30 bg-teal-accent/12 text-teal-100',
  'Diet & Microbiome': 'border-violet-400/30 bg-violet-400/12 text-violet-100',
  Biomarkers: 'border-rose-400/30 bg-rose-400/12 text-rose-100',
  Treatments: 'border-sky-400/30 bg-sky-400/12 text-sky-100',
}

const posts = [...BLOG_ARTICLES].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
)

export default function BlogIndexPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  if (!featured) {
    return null
  }

  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,165,0.14),transparent_36%),linear-gradient(180deg,#08111c_0%,#0a1628_52%,#08111c_100%)]" />
        <div className="absolute inset-0 opacity-35 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 md:px-6 md:pb-16 md:pt-14">
          <div className="hero-shimmer glass-panel rounded-[38px] px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto max-w-4xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-teal-accent/20 bg-teal-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal-100/80">
                  Science Library
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 text-4xl tracking-tight text-white md:text-6xl">
                  Warm, readable UC explainers built from real clinical questions.
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                  Browse by flare management, diet, biomarkers, treatment comparisons, and the fundamentals patients usually need first.
                </p>
              </div>

              <div className="animate-fade-in-up mt-8" style={{ animationDelay: '340ms' }}>
                <MedicalDisclaimer compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="card-lift glass-panel block rounded-[34px] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span
                className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
                  categoryStyles[featured.category] || 'border-white/10 bg-white/[0.05] text-slate-100'
                }`}
              >
                {featured.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {featured.readTime}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{featured.datePublished}</span>
            </div>

            <h2 className="font-display mt-6 max-w-3xl text-4xl tracking-tight text-white md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{featured.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100">
              Read the feature <span>→</span>
            </div>
          </Link>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post, index) => (
            <ScrollReveal key={post.slug} delay={Math.min(index * 45, 220)}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-lift glass-panel block h-full rounded-[30px] p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
                      categoryStyles[post.category] || 'border-white/10 bg-white/[0.05] text-slate-100'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold leading-snug text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{post.description}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-500">{post.datePublished}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
