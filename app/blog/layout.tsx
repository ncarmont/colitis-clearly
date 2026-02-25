import type { ReactNode } from 'react'
import AdUnit from '@/components/AdUnit'

export default function BlogLayout({ children }: { children: ReactNode }) {
  const topSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_TOP
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM

  return (
    <>
      {/* Blog-wide top ad (after nav, before article body) */}
      {topSlot && (
        <div className="ad-section-break" data-ad-region="blog-top">
          <p className="ad-label">Advertisement</p>
          <AdUnit slot={topSlot} format="auto" className="w-full max-w-[728px] mx-auto" label={false} />
        </div>
      )}

      {children}

      {/* Blog-wide bottom ad (after article, before footer) */}
      {bottomSlot && (
        <div className="ad-section-break bg-slate-100" data-ad-region="blog-bottom">
          <p className="ad-label">Advertisement</p>
          <AdUnit slot={bottomSlot} format="auto" className="w-full max-w-[728px] mx-auto" label={false} />
        </div>
      )}
    </>
  )
}
