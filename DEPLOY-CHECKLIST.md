# 🚀 Pre-Deployment Checklist - EVOO Rankings

## ⚠️ CRITICAL: Complete Before Going Live

### 1. Update Domain URLs (Required)
**Status**: 🔴 Not Done

Update `https://evoo-rankings.com` to your actual domain in:

- [ ] `app/layout.tsx` (line 17)
- [ ] `app/sitemap.ts` (line 4)
- [ ] `app/page.tsx` (schema URLs)
- [ ] `public/robots.txt` (line 9)
- [ ] `components/ArticleSchema.tsx`
- [ ] `components/BreadcrumbSchema.tsx`

**How to do it**:
```bash
# Use find and replace in your editor
# Find: https://evoo-rankings.com
# Replace: https://your-actual-domain.com
```

---

### 2. Add Open Graph Images (Highly Recommended)
**Status**: 🟡 Optional but recommended

Create and add:
- [ ] `/public/og-image.jpg` (1200x630px)
- [ ] `/public/logo.png` (for schema)
- [ ] Update `app/layout.tsx` openGraph.images

**Design tips**:
- Include "30 Lab-Verified EVOOs" text
- Use olive oil imagery
- Brand colors: Green (#10b981), White
- Tool: Canva (free templates available)

---

### 3. Environment Variables (If Needed)
**Status**: ✅ Not required for static site

If you add dynamic features later:
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

### 4. Vercel Deployment Settings
**Status**: 🟡 Check before deploy

In Vercel dashboard:
- [ ] Framework Preset: Next.js
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `.next`
- [ ] Install Command: `npm install`
- [ ] Node Version: 18.x or higher

---

### 5. Analytics Setup (After Deploy)
**Status**: 🟡 Do immediately after launch

**Google Analytics 4**:
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

**Google Search Console**:
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership:
   - Option 1: Add meta tag to `app/layout.tsx`
   - Option 2: Upload HTML file to `/public`
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

---

### 6. Social Media Setup
**Status**: 🟡 Create after deploy

- [ ] Twitter: @EVOORankings (or your chosen handle)
- [ ] Update handle in `app/layout.tsx` (line 42)
- [ ] Create initial posts with rankings link
- [ ] Share on Reddit: r/oliveoil, r/nutrition, r/mediterraneandiet

---

## 📋 Build Verification

Before deploying, ensure:

```bash
# 1. Clean build
npm run build

# Expected output: ✓ Compiled successfully
# Total pages: 33
# First Load JS: ~121 kB

# 2. No TypeScript errors
npm run build 2>&1 | grep -i "error"
# Should be empty

# 3. Test locally
npm run dev
# Open http://localhost:3000
# Check all pages load correctly
```

---

## 🔍 Post-Deployment Verification (First 24 Hours)

### Immediate Checks:
- [ ] Site loads at your domain
- [ ] All 33 pages accessible
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Images load correctly
- [ ] Buy links work (test 3-5 randomly)

### SEO Checks:
- [ ] Rich Results Test: https://search.google.com/test/rich-results
  - Test homepage for Product schema
  - Should show "Page is eligible for rich results"

- [ ] Schema Validator: https://validator.schema.org/
  - Copy homepage HTML
  - Paste and validate
  - Fix any errors

- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
  - Should pass all checks

- [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ on both mobile and desktop

### Google Search Console:
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Request indexing for:
  - Homepage
  - Rankings page
  - Top 3 blog posts
- [ ] Check coverage report (24-48 hours later)

---

## 🎯 Week 1 Tasks

### Day 1 (Launch Day):
- [x] Deploy to Vercel
- [ ] Verify all pages work
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap to GSC
- [ ] Share on social media

### Day 2-3:
- [ ] Request indexing for all key pages in GSC
- [ ] Create social media profiles
- [ ] Post about launch on Reddit (carefully, follow rules)
- [ ] Monitor GSC for crawl errors

### Day 4-7:
- [ ] Check if Google indexed key pages (use site:your-domain.com)
- [ ] Fix any schema validation errors
- [ ] Respond to any user feedback
- [ ] Plan first backlink outreach

---

## 📊 Monitoring Dashboard

### Daily (First Week):
- Google Search Console: Check for critical errors
- Analytics: Monitor traffic spikes

### Weekly (First Month):
- GSC: Review indexed pages count
- Analytics: Check user behavior
- Schema: Re-test rich results

### Monthly (Ongoing):
- GSC: Keyword performance
- Analytics: Traffic trends
- Backlinks: New links acquired
- Rankings: Track position changes

---

## 🆘 Troubleshooting

### "Pages not indexed"
- **Wait**: Google needs 3-7 days
- **Check**: robots.txt not blocking
- **Submit**: Use URL inspection tool in GSC
- **Verify**: Sitemap submitted correctly

### "Schema errors in GSC"
- **Test**: Use Rich Results Test tool
- **Fix**: Update schema in code
- **Redeploy**: Push changes to Vercel
- **Wait**: 48 hours for re-crawl

### "No organic traffic"
- **Normal**: Takes 30-60 days for SEO
- **Check**: Site indexed (site:your-domain.com)
- **Verify**: No indexing blocks
- **Patience**: Keep creating content

---

## ✅ Success Criteria

### Week 1:
- [ ] All pages accessible
- [ ] No critical errors in GSC
- [ ] Homepage indexed by Google
- [ ] Analytics tracking works
- [ ] 10+ pages indexed

### Month 1:
- [ ] All 33 pages indexed
- [ ] Rich results appearing in search
- [ ] First organic visitors (even if just 5-10)
- [ ] No crawl errors
- [ ] Schema validates without errors

### Month 3:
- [ ] 100+ organic visitors/month
- [ ] Rankings for long-tail keywords
- [ ] Featured snippets for 1-2 queries
- [ ] 5+ external backlinks
- [ ] Product carousels showing in search

---

## 📞 Need Help?

1. **Build errors**: Check `npm run build` output
2. **Schema errors**: Review `SEO-GUIDE.md`
3. **Component usage**: See `components/README-SEO.md`
4. **Vercel issues**: Check Vercel deployment logs

---

## 🎉 You're Ready to Deploy!

Once all 🔴 red items are complete, you can deploy with confidence.

**Final command**:
```bash
git add .
git commit -m "SEO optimization complete - ready for production"
git push origin main
```

Vercel will auto-deploy. Monitor the build at https://vercel.com/dashboard

---

**Good luck with your launch! 🚀**

Remember: SEO takes 3-6 months to show significant results. Stay consistent with content updates and monitoring.
