import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.best-olive-oil-ranked.com' // Update with your actual domain
  const currentDate = new Date()

  // Blog posts
  const blogPosts = [
    'what-are-polyphenols-olive-oil',
    'health-benefits-high-polyphenol-evoo',
    'top-10-highest-polyphenol-olive-oils',
    'how-to-choose-high-polyphenol-olive-oil',
    'best-olive-oil-for-heart-health',
    'olive-oil-vs-other-oils',
    'greek-vs-italian-vs-spanish-olive-oil',
    'best-olive-cultivars-high-polyphenols',
    'early-harvest-vs-late-harvest-olive-oil',
    'how-to-store-olive-oil-after-opening',
    'how-to-store-high-polyphenol-olive-oil',
    'best-olive-oil-for-cooking',
    'best-olive-oil-for-longevity',
    'olive-oil-for-brain-health-dementia',
    'oleocanthal-oleacein-explained',
    'lab-testing-methods-polyphenol-measurement',
    'olive-oil-polyphenol-myths-debunked',
    'how-much-polyphenol-olive-oil-daily',
    'harvest-date-olive-oil',
    'best-time-to-take-olive-oil',
    'olive-oil-anti-inflammatory',
    'olive-oil-longevity-blue-zones',
    'olive-oil-for-cholesterol',
    'olive-oil-for-blood-pressure',
    'olive-oil-for-blood-sugar',
  ]

  return [
    // Homepage - Highest priority, updated weekly
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Rankings page - Very high priority, updated weekly
    {
      url: `${baseUrl}/rankings`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Research section - High priority
    {
      url: `${baseUrl}/research`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research/overview`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/research/producers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/research/regions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/research/cultivars`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/research/processing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Blog landing page
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Individual blog posts - Good priority for SEO content
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    // Shop page
    {
      url: `${baseUrl}/shop`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // About + trust/legal pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.45,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.45,
    },
  ]
}
