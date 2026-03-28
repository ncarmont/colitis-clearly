# EVOO Rankings - Best Olive Oils Ranked by Polyphenols

## Project Overview

**Live Site:** https://www.best-olive-oil-ranked.com

A Next.js 15 website that ranks Extra Virgin Olive Oils (EVOOs) by their polyphenol content, using lab-verified data from independent testing facilities. The site features a comprehensive rankings table, research sections, and is optimized for SEO with health-focused content.

**Mission:** Help consumers find the highest quality, most health-beneficial olive oils based on scientifically verified polyphenol content.

## Technology Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Deployment**: Ready for Vercel/similar platforms

## Project Structure

```
evoo-rankings/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Main homepage with rankings table
│   ├── about/page.tsx          # About page
│   ├── research/
│   │   ├── page.tsx            # Research landing page
│   │   ├── overview/page.tsx   # Research overview
│   │   ├── producers/page.tsx  # Top producers analysis
│   │   ├── regions/page.tsx    # Geographic analysis
│   │   ├── cultivars/page.tsx  # Olive variety rankings
│   │   └── processing/page.tsx # Processing methods
│   ├── sitemap.ts              # XML sitemap for SEO
│   └── robots.ts               # Robots.txt configuration
├── components/
│   ├── Navigation.tsx          # Top navigation bar
│   └── Footer.tsx              # Footer with links & newsletter
├── public/
│   └── robots.txt              # Search engine instructions
└── next.config.ts              # Next.js configuration

```

## Data Structure

### OliveOil Type

```typescript
type OliveOil = {
  id: number              // Unique identifier
  rank: number            // Overall ranking (1-10)
  brand: string           // Product/brand name
  polyphenols: number     // Polyphenol content in mg/kg
  origin: string          // Country/region of origin
  harvestDate: string     // Harvest date (e.g., "Oct 2024")
  price: string           // Price tier ($, $$, $$$, $$$$)
  priceAmount: string     // Actual retail price (e.g., "$79.99")
  method: string          // Testing method (HPLC, qNMR, RSS)
  lab: string             // Laboratory name
  certificateLink?: string // Optional: Link to lab certificate
  cultivar: string        // Olive variety (Koroneiki, Arbosana, etc.)
  buyLink: string         // Purchase URL
  notes: string           // Additional information
}
```

## Current Rankings (Top 10)

1. **SP360 Organic** - 1462 mg/kg (Greece, Koroneiki)
2. **Pamako Premium** - 1222 mg/kg (Greece, Koroneiki)
3. **ONSURI Arbosana** - 968 mg/kg (California, Arbosana)
4. **PJ KABOS** - 858 mg/kg (Greece, Koroneiki)
5. **November Ultra Premium** - 847 mg/kg (Tunisia, Chetoui)
6. **Opus Oléa** - 674 mg/kg (California, Arbequina/Koroneiki)
7. **Zero Nutrition High Phenolic** - 582 mg/kg (Greece, Koroneiki)
8. **Vallesur** - 554 mg/kg (Spain, Picual)
9. **Citizens of Soil** - 526 mg/kg (Greece, Koroneiki)
10. **Odysea** - 480 mg/kg (Greece, Koroneiki)

## Lab Testing Methods

- **HPLC**: High-Performance Liquid Chromatography - Gold standard for polyphenol measurement
- **qNMR**: Quantitative Nuclear Magnetic Resonance - Advanced spectroscopic method
- **RSS**: Rapid Spectrophotometric Screening - Faster testing method

## Key Features

### Rankings Table
- Real-time search functionality
- Filter by origin/region
- Sort by rank or polyphenol content
- Lab verification with certificate links (📜 emoji)
- Direct buy links for each product
- Responsive design with smooth animations

### SEO Optimization
- Comprehensive metadata with Open Graph tags
- XML sitemap generation
- Keywords targeting high-polyphenol searches
- Structured research content
- Fast page loads with Next.js optimization

### Design System
- **Color Palette**:
  - Background: Dark mode (slate-900/gray-900)
  - Primary accent: Green-400 to Emerald-600
  - Secondary accents: Blue, Purple, Orange
- **Typography**: System fonts with gradient text effects
- **Animations**: Fade-in, slide-up, staggered row animations
- **Glass morphism**: Backdrop blur effects

### Performance Optimizations
- `useMemo` hooks for filtered/sorted data
- Constant data storage outside components
- Optimized re-renders
- Static data (no API calls needed)

## Research Content

The site includes comprehensive research on:

1. **Producers**: Verified high-polyphenol olive oil producers by region
2. **Regions**: Geographic and climatic factors affecting polyphenol content
3. **Cultivars**: Olive variety rankings (Koroneiki #1: 600-1000+ mg/kg)
4. **Processing**: Harvest timing, milling, temperature control, storage

## Development Commands

```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint
```

## 🚨 IMPORTANT: Development Workflow

**AFTER EVERY CHANGE YOU MAKE, YOU MUST:**

1. **Open the browser to view changes**: http://localhost:3000
2. Navigate to the affected page to verify changes render correctly
3. Check console for any errors
4. Test interactive features (clicking, filtering, navigation)
5. **Thoroughly test all changes on the actual running application** — open the relevant UI in the browser, interact with all affected features end-to-end, and confirm everything works correctly before finishing.

**The dev server is running on localhost:3000** - Always check your work visually! Do NOT consider a task done until you have verified it in the running app.

## 🚨 CRITICAL: Git Workflow - ALWAYS COMMIT AND PUSH

**AFTER TESTING YOUR CHANGES, YOU MUST:**

1. **Add all changes:**
   ```bash
   git add .
   ```

2. **Commit with descriptive message:**
   ```bash
   git commit -m "descriptive commit message"
   ```

3. **Push to remote:**
   ```bash
   git push
   ```

4. **WAIT 4 MINUTES for Vercel deployment to complete**

5. **Verify deployment success:**
   ```bash
   vercel inspect https://www.best-olive-oil-ranked.com --logs
   ```

   **Deployment URL:** https://www.best-olive-oil-ranked.com

   **Alternative domains:**
   - https://best-olive-oils-git-main-nickcarmont8-gmailcoms-projects.vercel.app
   - https://best-olive-oils-lujkzasdw-nickcarmont8-gmailcoms-projects.vercel.app

6. **Check your work on the live site:**

   After 4 minutes, your changes should be visible at:
   **https://www.best-olive-oil-ranked.com**

   Open this URL in your browser to verify:
   - Changes are deployed correctly
   - No visual regressions
   - Mobile responsiveness works
   - All features function as expected

7. **If deployment failed:**
   - Check the logs output from step 5
   - Fix any errors (build failures, runtime errors, etc.)
   - Repeat steps 1-6

**This is MANDATORY - never skip committing, pushing, and verifying deployment! Commit and push after EACH individual change, not just at the end.**

## Known Issues

- Next.js 15.5.4 dev tools error: "Cannot read properties of undefined (reading 'includes')" - This is a known Next.js bug that doesn't affect functionality
- Solution: Errors can be ignored or Next.js can be downgraded to 15.4.x

## Data Sources

All polyphenol data is verified through:
- Modern Olives Lab (HPLC testing)
- UC Davis Olive Center (qNMR testing)
- Australian Oils Research Lab (RSS method)
- Spanish certified laboratories

## Future Enhancements

- Add more EVOOs to rankings (expand beyond top 10)
- Implement newsletter signup backend
- Add user reviews/ratings
- Create comparison tool
- Add filtering by cultivar/lab method
- Implement price tracking over time
- Add health benefits calculator based on daily intake

## Maintenance

- Update harvest dates annually (October-November harvest season)
- Refresh lab certificates when new tests are performed
- Monitor for new high-polyphenol products
- Keep buy links up to date
- Update pricing information quarterly

## Contact & Social

- Website sections: Rankings, Research, About
- Footer includes: Privacy Policy, Terms of Service, Contact links
- Social media placeholders: Twitter/X, LinkedIn, Facebook

---

**Last Updated**: October 2024
**Next.js Version**: 15.5.4
**Node Version**: 18.x or higher recommended
