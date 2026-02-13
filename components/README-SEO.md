# SEO Components Documentation

## Overview
This directory contains reusable SEO schema components that can be added to any page to enhance search engine visibility with rich snippets.

---

## 📦 Available Components

### 1. **ArticleSchema.tsx**
Adds Article structured data to blog posts for enhanced search results.

**Props**:
- `title` (required): Article headline
- `description` (required): Short description
- `datePublished` (required): ISO date string (e.g., "2024-10-04")
- `dateModified` (optional): ISO date string for updates
- `url` (required): Full URL to article
- `imageUrl` (optional): OG image URL
- `authorName` (optional): Author name (defaults to "EVOO Rankings Team")

**Usage**:
```tsx
import ArticleSchema from '@/components/ArticleSchema'

export default function BlogPost() {
  return (
    <>
      <ArticleSchema
        title="What Are Polyphenols in Olive Oil?"
        description="Complete guide to understanding polyphenols in extra virgin olive oil"
        datePublished="2024-10-04"
        url="https://www.best-olive-oil-ranked.com/blog/what-are-polyphenols-olive-oil"
      />
      <main>
        {/* Blog content */}
      </main>
    </>
  )
}
```

**Benefits**:
- Article rich snippets in Google
- Author attribution
- Publication dates in search results
- Featured image in SERPs

---

### 2. **FAQSchema.tsx**
Creates FAQ structured data for expandable FAQ boxes in Google search results.

**Props**:
- `faqs` (required): Array of `{ question: string, answer: string }` objects

**Usage**:
```tsx
import FAQSchema from '@/components/FAQSchema'

const faqs = [
  {
    question: "What are polyphenols in olive oil?",
    answer: "Polyphenols are natural antioxidant compounds found in extra virgin olive oil that provide significant health benefits including anti-inflammatory and cardiovascular protection."
  },
  {
    question: "How much polyphenol olive oil should I consume daily?",
    answer: "The EU health claim recommends consuming at least 20g (about 1.5 tablespoons) of olive oil containing at least 5mg of hydroxytyrosol and derivatives daily for cardiovascular benefits."
  }
]

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main>
        {/* Page content with FAQ section */}
      </main>
    </>
  )
}
```

**Benefits**:
- Expandable FAQ boxes in Google search
- "People also ask" section eligibility
- More SERP real estate
- Voice search optimization

---

### 3. **BreadcrumbSchema.tsx**
Adds breadcrumb navigation structured data for better site hierarchy in search results.

**Props**:
- `items` (required): Array of `{ name: string, url: string }` objects

**Usage**:
```tsx
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Research', url: '/research' },
  { name: 'Producers', url: '/research/producers' }
]

export default function ProducersPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main>
        {/* Page content */}
      </main>
    </>
  )
}
```

**Benefits**:
- Breadcrumb trails in Google search results
- Better understanding of site structure
- Improved navigation UX in SERPs
- Helps Google understand page hierarchy

---

## 🎯 Best Practices

### **When to Use Each Schema**

1. **ArticleSchema**
   - ✅ Blog posts
   - ✅ News articles
   - ✅ Research pages with original content
   - ❌ Product listings
   - ❌ Homepage

2. **FAQSchema**
   - ✅ Pages with Q&A sections
   - ✅ Support/Help pages
   - ✅ Blog posts answering common questions
   - ✅ Product pages with FAQs
   - ❌ Pages without questions/answers

3. **BreadcrumbSchema**
   - ✅ All pages except homepage
   - ✅ Deep navigation pages
   - ✅ Category/subcategory pages
   - ❌ Homepage (no parent)

---

## 🚀 Implementation Checklist

### **For New Blog Posts**:
- [ ] Add ArticleSchema with correct metadata
- [ ] Include FAQSchema if page has Q&A section
- [ ] Add BreadcrumbSchema (Home > Blog > Post Title)
- [ ] Set canonical URL in page metadata
- [ ] Add Open Graph image

### **For Research Pages**:
- [ ] Add BreadcrumbSchema
- [ ] Set canonical URL
- [ ] Add ArticleSchema if page has original research
- [ ] Consider FAQSchema for common questions

### **For Product/Ranking Pages**:
- [ ] Use Product schema (already in app/page.tsx)
- [ ] Add BreadcrumbSchema if nested
- [ ] Set canonical URL
- [ ] Include aggregate ratings

---

## 📊 Testing Your Schema

After adding schema components, validate them:

1. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Paste your page URL
   - Check for errors/warnings

2. **Schema Validator**
   - URL: https://validator.schema.org/
   - Copy/paste your JSON-LD
   - Verify syntax and completeness

3. **Google Search Console**
   - Check "Enhancements" section
   - View which schemas are detected
   - Monitor for issues

---

## ⚠️ Common Mistakes to Avoid

1. **Missing Required Fields**
   - Always provide required props
   - Don't leave dates as empty strings
   - Ensure URLs are absolute (include https://)

2. **Invalid JSON**
   - Escape special characters in strings
   - Don't use quotes inside quotes without escaping
   - Test JSON syntax before deploying

3. **Duplicate Schema**
   - Don't add the same schema type twice on one page
   - One ArticleSchema per blog post
   - One BreadcrumbSchema per page

4. **Incorrect Dates**
   - Use ISO format: "2024-10-04" or "2024-10-04T12:00:00Z"
   - Don't use relative dates ("yesterday")
   - Ensure dateModified is after datePublished

5. **Wrong URLs**
   - Always use absolute URLs with domain
   - Match the canonical URL
   - No trailing slashes unless intentional

---

## 🔄 Updating Schema

When updating content:

1. **Update dateModified** in ArticleSchema
2. **Add new FAQ items** to FAQSchema array
3. **Revalidate** with Google's tools
4. **Monitor** Google Search Console for changes

---

## 📈 Expected Results

After implementing these schemas, expect to see (within 2-4 weeks):

- ✅ Breadcrumb trails in search results
- ✅ Article metadata (author, date) in SERPs
- ✅ Expandable FAQ boxes
- ✅ Higher click-through rates (CTR)
- ✅ More featured snippets
- ✅ Better mobile search appearance

---

## 🆘 Troubleshooting

### **Schema Not Showing in Search**
- Google can take 2-4 weeks to process
- Check for validation errors
- Ensure page is indexed (use Search Console)
- Verify robots.txt isn't blocking

### **Validation Errors**
- Check all required fields are provided
- Verify date formats (ISO 8601)
- Ensure URLs are absolute
- Escape special characters

### **Duplicate Schema**
- Only one ArticleSchema per page
- Check if parent layout has schema
- Remove redundant schema blocks

---

## 📚 Additional Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [JSON-LD Playground](https://json-ld.org/playground/)

---

**Last Updated**: October 4, 2024
