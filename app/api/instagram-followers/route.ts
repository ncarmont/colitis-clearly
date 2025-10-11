import { NextResponse } from 'next/server'

// MANUAL UPDATE: Update this number periodically by checking your Instagram
const FALLBACK_FOLLOWERS = 0 // Update this with your current follower count

export async function GET() {
  // For now, use the manual fallback since Instagram blocks automated scraping
  // To update: manually check your follower count and update FALLBACK_FOLLOWERS above
  return NextResponse.json({ followers: FALLBACK_FOLLOWERS })
}

// Cache the response for 1 hour
export const revalidate = 3600
