import { NextResponse } from 'next/server'

// MANUAL UPDATE: Update this number periodically by checking your Instagram
const FALLBACK_FOLLOWERS = 0 // Update this with your current follower count

export async function GET() {
  // For now, use the manual fallback since Instagram blocks automated scraping
  // To update: manually check your follower count and update FALLBACK_FOLLOWERS above
  return NextResponse.json({ followers: FALLBACK_FOLLOWERS })

  /* Automated fetching is disabled due to Instagram's anti-scraping measures
  try {
    const username = 'bestoliveoilranked.com_'

    const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data')
    }

    const html = await response.text()
    const match = html.match(/"edge_followed_by":\{"count":(\d+)\}/)

    if (match && match[1]) {
      const followers = parseInt(match[1], 10)
      return NextResponse.json({ followers })
    }

    return NextResponse.json({ followers: FALLBACK_FOLLOWERS })
  } catch (error) {
    console.error('Error fetching Instagram followers:', error)
    return NextResponse.json({ followers: FALLBACK_FOLLOWERS })
  }
  */
}

// Cache the response for 1 hour
export const revalidate = 3600
