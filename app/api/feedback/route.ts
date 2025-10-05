import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { comment } = await request.json()

    // Validate input
    if (!comment || comment.trim().length === 0) {
      return NextResponse.json(
        { error: 'Comment is required' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = 'EVOO Rankings - New Feedback Submission'
    const emailBody = `
New feedback received from best-olive-oil-ranked.com:

${comment}

---
Submitted at: ${new Date().toISOString()}
    `.trim()

    // Use Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        const Resend = (await import('resend')).Resend
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: 'EVOO Rankings <feedback@best-olive-oil-ranked.com>',
          to: 'buildskiki@gmail.com',
          subject: emailSubject,
          text: emailBody,
        })

        return NextResponse.json({ success: true })
      } catch (e) {
        console.error('Resend error:', e)
        // Continue to fallback methods
      }
    }

    // Fallback: Use Web3Forms (free service)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: emailSubject,
          from_name: 'EVOO Rankings Feedback',
          email: 'buildskiki@gmail.com',
          message: emailBody,
        }),
      })

      if (web3formsResponse.ok) {
        return NextResponse.json({ success: true })
      }
    }

    // If no email service configured, log to console (dev mode fallback)
    console.log('=== FEEDBACK SUBMISSION ===')
    console.log(emailBody)
    console.log('==========================')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Feedback submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    )
  }
}
