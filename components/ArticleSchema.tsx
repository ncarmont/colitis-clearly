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
  imageUrl = 'https://evoo-rankings.com/og-image.jpg',
  authorName = 'EVOO Rankings Team'
}: ArticleSchemaProps) {
  const baseUrl = 'https://evoo-rankings.com'

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
      "name": "EVOO Rankings",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
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
