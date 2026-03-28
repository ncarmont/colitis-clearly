import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogArticlePage, { getStaticArticleSlugs } from '@/components/BlogArticlePage'
import { BLOG_ARTICLE_MAP } from '@/lib/blog-articles'
import { BASE_URL } from '@/lib/site'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getStaticArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = BLOG_ARTICLE_MAP[slug]

  if (!article) {
    return {}
  }

  return {
    title: `${article.title} | Project Remission UC`,
    description: article.description,
    alternates: {
      canonical: `${BASE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `${BASE_URL}/blog/${article.slug}`,
    },
  }
}

export default async function BlogArticleRoute({ params }: PageProps) {
  const { slug } = await params
  const article = BLOG_ARTICLE_MAP[slug]

  if (!article) {
    notFound()
  }

  return <BlogArticlePage article={article} />
}
