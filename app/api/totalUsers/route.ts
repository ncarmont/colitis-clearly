import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import fs from 'fs'
import path from 'path'

const CACHE_PATH = path.join('/tmp', 'visitors.json')
const CACHE_DURATION = 86400000 // 24 hours in milliseconds

export async function GET() {
  try {
    // Check if we have cached data
    if (fs.existsSync(CACHE_PATH)) {
      const cached = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'))
      const age = Date.now() - cached.timestamp
      if (age < CACHE_DURATION) {
        return NextResponse.json({ totalUsers: cached.value })
      }
    }

    // Check for required environment variables
    if (!process.env.GA_PROPERTY_ID || !process.env.GA_CREDENTIALS_JSON) {
      console.error('Missing GA_PROPERTY_ID or GA_CREDENTIALS_JSON environment variables')
      // Return fallback value
      return NextResponse.json({ totalUsers: '—' })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GA_CREDENTIALS_JSON),
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    })

    const analytics = google.analyticsdata({ version: 'v1beta', auth })

    const response = await analytics.properties.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
        metrics: [{ name: 'totalUsers' }],
      },
    })

    const totalUsers = response.data.rows?.[0]?.metricValues?.[0]?.value || '0'

    // Cache the result
    fs.writeFileSync(
      CACHE_PATH,
      JSON.stringify({ timestamp: Date.now(), value: totalUsers })
    )

    return NextResponse.json({ totalUsers })
  } catch (err) {
    console.error('Error fetching total users:', err)
    return NextResponse.json({ totalUsers: '—' }, { status: 200 })
  }
}
