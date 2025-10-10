import { NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'

export async function GET() {
  try {
    // Check if credentials are available
    if (!process.env.GA_PROPERTY_ID || !process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      console.log('GA credentials not configured')
      return NextResponse.json({ totalUsers: 0 })
    }

    // Parse the service account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)

    // Initialize the Analytics Data API client
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
    })

    // Run the report to get total users (all time)
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2020-01-01', // Start from when GA4 was available
          endDate: 'today',
        },
      ],
      metrics: [
        {
          name: 'totalUsers',
        },
      ],
    })

    // Extract the total users count
    const totalUsers = response.rows?.[0]?.metricValues?.[0]?.value || '0'

    return NextResponse.json({
      totalUsers: parseInt(totalUsers, 10),
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error)
    return NextResponse.json({ totalUsers: 0 })
  }
}

// Cache for 1 hour
export const revalidate = 3600
