import Link from 'next/link'
import SmallAd from '@/components/SmallAd'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { BASE_URL, SITE_NAME } from '@/lib/site'
import { BLOG_ARTICLE_MAP, BLOG_ARTICLES, type BlogArticle } from '@/lib/blog-articles'

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
  const relatedArticles = article.relatedSlugs
    .map((slug) => BLOG_ARTICLE_MAP[slug])
    .filter(Boolean)

  const url = `${BASE_URL}/blog/${article.slug}`

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.description}
        datePublished={article.datePublished}
        url={url}
        authorName={`${SITE_NAME} Editorial Team`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
      />
      <FAQSchema faqs={article.faqs} />

      <main className="min-h-screen bg-[#060e1a] text-white">
        <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0b2d2b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
              <span>←</span>
              Back to blog
            </Link>
            <div className="mt-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              {article.category}
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>{new Date(article.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>{article.readTime}</span>
              <span>Evidence-first clinical explainer</span>
            </div>
          </div>
        </section>

        <article className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[minmax(0,1fr)_300px] md:px-6 md:py-14">
          <div className="space-y-8">
            <MedicalDisclaimer />

            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-6">
              <p className="text-lg leading-relaxed text-slate-200">{article.intro}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {article.keyPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </section>

            <SmallAd className="max-w-3xl" />

            {article.sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:p-7">
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <div className="mt-4 space-y-4 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.callout ? (
                  <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm leading-relaxed text-cyan-50">
                    {section.callout}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-sm text-slate-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:p-7">
              <h2 className="text-2xl font-bold text-white">References</h2>
              <div className="mt-5 grid gap-3">
                {article.references.map((reference) => (
                  <a
                    key={reference.href}
                    href={reference.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition hover:border-emerald-300/30 hover:bg-white/[0.04] hover:text-white"
                  >
                    {reference.label}
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:p-7">
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-4">
                {article.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                    <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/70">
                Continue Reading
              </p>
              <div className="mt-4 space-y-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-emerald-300/30 hover:bg-white/[0.04]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{related.category}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{related.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                Flagship Page
              </p>
              <h2 className="mt-3 text-xl font-bold text-white">Compare UC treatments side by side.</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Use the treatment rankings to compare response rates, remission data, route, risks, and best-fit use cases.
              </p>
              <Link
                href="/rankings"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                View rankings
              </Link>
            </div>

            <SmallAd />
          </aside>
        </article>
      </main>
    </>
  )
}

export function getStaticArticleSlugs() {
  return BLOG_ARTICLES.map((article) => article.slug)
}
