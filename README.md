# EVOO Rankings - Highest Polyphenol Extra Virgin Olive Oil Database

A Next.js website featuring science-backed rankings of extra virgin olive oils by polyphenol content.

## Features

- **Homepage**: Hero section with top rankings preview and health benefits
- **Rankings Page**: Complete sortable/filterable database of EVOOs by polyphenol content
- **Research Section**: Blog-style articles on EVOO health benefits and scientific studies
- **SEO Optimized**: Full metadata, Open Graph tags, sitemap, and robots.txt
- **Responsive Design**: Mobile-friendly with modern, health-focused styling
- **Navigation & Footer**: Consistent layout across all pages

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Your Rankings Data

### Update Rankings (app/rankings/page.tsx)

Replace the sample data in the `oils` array with your actual EVOO rankings:

```typescript
const [oils] = useState<OliveOil[]>([
  {
    id: 1,
    rank: 1,
    brand: "Your Brand Name",
    polyphenols: 850,
    origin: "Greece",
    harvestDate: "2024",
    price: "$$$",
    notes: "Your notes here"
  },
  // Add more oils...
])
```

### Update Homepage Preview (app/page.tsx)

Update the `topRankings` array with your top 3 oils:

```typescript
const topRankings = [
  { rank: 1, brand: "Your Top Brand", polyphenols: 850, origin: "Greece" },
  // Add 2 more...
]
```

## Customization

### SEO & Branding

- Update metadata in `app/layout.tsx`
- Update domain in `app/sitemap.ts` and `public/robots.txt`
- Customize colors in Tailwind classes (green-600 is primary)

### Adding Blog Articles

Edit `app/research/page.tsx` to add real articles with links to full content pages.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
evoo-rankings/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # XML sitemap generation
│   ├── rankings/
│   │   ├── layout.tsx      # Rankings page SEO
│   │   └── page.tsx        # Full rankings table
│   └── research/
│       ├── layout.tsx      # Research page SEO
│       └── page.tsx        # Blog/articles section
├── components/
│   ├── Navigation.tsx      # Site navigation bar
│   └── Footer.tsx          # Site footer
└── public/
    └── robots.txt          # Search engine crawler instructions
```

## Technologies

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks

## Next Steps

1. Add your actual EVOO ranking data
2. Create individual article pages for research section
3. Update domain in SEO files
4. Add your own styling tweaks
5. Deploy to Vercel, Netlify, or your hosting provider

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
