import { BASE_URL, SITE_NAME } from '@/lib/site'

type ArticleSchemaProps = {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
  authorName?: string
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl = `${BASE_URL}/icon.svg`,
  authorName = `${SITE_NAME} Editorial Team`
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/icon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
