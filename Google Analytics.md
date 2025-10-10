# Google Analytics Setup Guide
## Reusable Guide for Any Next.js Project

This is a comprehensive, copy-paste guide to add Google Analytics (GA4) tracking to any Next.js project. Use this guide with any LLM or follow manually.

---

## Table of Contents
1. [Quick Setup (5 minutes)](#quick-setup)
2. [Step-by-Step Instructions](#step-by-step-instructions)
3. [Implementation Code](#implementation-code)
4. [Environment Variables](#environment-variables)
5. [Verification & Testing](#verification-testing)
6. [LLM Prompt Template](#llm-prompt-template)

---

## Quick Setup

### What You Need
- A Google Analytics 4 (GA4) account
- A Next.js project (App Router or Pages Router)
- 5 minutes

### Overview
1. Create GA4 property and get Measurement ID (format: `G-XXXXXXXXXX`)
2. Add GA4 script to your Next.js layout/app
3. Deploy and verify tracking works

---

## Step-by-Step Instructions

### 1. Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon, bottom left)
3. Under **Property** column, click **Create Property**
4. Fill in property details:
   - **Property name**: Your website name (e.g., "My Awesome Site")
   - **Reporting time zone**: Your timezone
   - **Currency**: Your currency
5. Click **Next**
6. Fill in business details (optional but recommended)
7. Click **Create**
8. Accept the Terms of Service
9. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)
   - You'll see it on the next screen
   - Also available in: Admin → Property Settings → Measurement ID

### 2. Set Up Data Stream

1. In Admin → Data Streams
2. Click **Add Stream** → **Web**
3. Enter your website URL (e.g., `https://yoursite.com`)
4. Enter stream name (e.g., "Main Website")
5. Click **Create Stream**
6. **Copy the Measurement ID** shown (if you haven't already)

---

## Implementation Code

### For Next.js App Router (Next.js 13+)

#### File: `app/layout.tsx`

Add this code to your root layout:

```tsx
import type { Metadata } from "next";
import "./globals.css";

// Replace with your actual domain
const baseUrl = 'https://yourwebsite.com'

// Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Your Website Title",
  description: "Your website description",
  // ... other metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### For Next.js Pages Router (Next.js 12 and earlier)

#### File: `pages/_app.tsx`

```tsx
import type { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles/globals.css'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your ID

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
```

### Alternative: Using Environment Variables (Recommended for Production)

#### Step 1: Create `.env.local`

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Step 2: Update your code

```tsx
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// Then use GA_MEASUREMENT_ID in your script tags as shown above
```

#### Step 3: Add to `.gitignore` (if not already there)

```
.env.local
.env*.local
```

#### Step 4: Add to Vercel/Netlify

1. Go to your deployment platform dashboard
2. Settings → Environment Variables
3. Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
4. Save and redeploy

---

## Environment Variables

### Development (.env.local)
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Production (Vercel/Netlify/etc.)
Add the same variable in your platform's environment settings.

**Important Notes:**
- Use `NEXT_PUBLIC_` prefix for client-side variables in Next.js
- Never commit `.env.local` to git
- Always add to `.gitignore`

---

## Verification & Testing

### 1. Test Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Open browser to `http://localhost:3000`

3. Open browser DevTools (F12)

4. Go to **Console** tab

5. Type: `window.dataLayer`
   - You should see an array with GA data

6. Check **Network** tab:
   - Filter by "gtag" or "analytics"
   - You should see requests to `google-analytics.com`

### 2. Test in Production

1. Deploy your site

2. Visit your live URL

3. Go to Google Analytics dashboard

4. Click **Reports** → **Realtime**

5. You should see yourself as an active user within 30 seconds

### 3. Verify Data is Being Collected

1. Wait 24-48 hours for data to populate

2. In GA dashboard, go to **Reports** → **Life cycle** → **Acquisition**

3. You should start seeing traffic data

---

## Advanced: Track Custom Events

### Add Custom Event Tracking

```tsx
// Example: Track button click
const handleButtonClick = () => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'CTA Button',
      value: 1
    });
  }

  // Your button logic here
}
```

### Track Page Views (for Single Page Apps)

```tsx
// In your layout or a custom hook
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useGoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])
}

// Use in your layout:
// useGoogleAnalytics()
```

---

## Common Issues & Troubleshooting

### Issue: No data in Google Analytics

**Solutions:**
1. Wait 24-48 hours (GA4 has delay)
2. Check Realtime view instead
3. Verify Measurement ID is correct
4. Check browser console for errors
5. Disable ad blockers during testing

### Issue: "gtag is not defined" error

**Solution:**
Add check before using gtag:
```tsx
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'your_event')
}
```

### Issue: Data not showing in Vercel production

**Solution:**
1. Verify environment variable is set in Vercel
2. Redeploy after adding env variable
3. Check that variable starts with `NEXT_PUBLIC_`

### Issue: Ad blockers interfering

**Note:** Ad blockers (uBlock, AdBlock Plus) will block GA tracking. This is expected behavior. Your actual users with ad blockers won't be tracked.

---

## LLM Prompt Template

Use this prompt with any LLM to implement Google Analytics:

```
I want to add Google Analytics (GA4) tracking to my Next.js project.

Project details:
- Next.js version: [13/14/15]
- Router type: [App Router / Pages Router]
- My GA4 Measurement ID: G-XXXXXXXXXX

Please implement GA4 tracking following these requirements:
1. Add the gtag.js script to my layout/app
2. Use environment variables (NEXT_PUBLIC_GA_MEASUREMENT_ID)
3. Ensure it works with server-side rendering
4. Add TypeScript types if needed
5. Include verification steps

For App Router, modify: app/layout.tsx
For Pages Router, modify: pages/_app.tsx

Please provide:
- The complete code changes
- Environment variable setup
- Testing/verification steps
```

---

## Best Practices

### ✅ DO:
- Use environment variables for Measurement ID
- Test in both development and production
- Wait 24-48 hours for full data population
- Use Realtime view for immediate verification
- Add `.env.local` to `.gitignore`
- Set up environment variables in your deployment platform

### ❌ DON'T:
- Hardcode Measurement ID in source code (use env vars instead)
- Commit `.env.local` to version control
- Expect instant data (GA4 has delays)
- Track sensitive user information
- Use GA3 (Universal Analytics) - it's deprecated

---

## Security & Privacy

### GDPR Compliance

If you have European users, you need:

1. **Cookie Consent Banner**
   - Use libraries like `react-cookie-consent`
   - Don't load GA until user consents

2. **Example with Consent:**

```tsx
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    // Check if user previously consented
    const hasConsent = localStorage.getItem('analytics-consent') === 'true'
    setConsent(hasConsent)
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem('analytics-consent', 'true')
    setConsent(true)
    // Initialize GA here
  }

  return (
    <html>
      <head>
        {consent && (
          <>
            {/* GA scripts here */}
          </>
        )}
      </head>
      <body>
        {children}
        {!consent && (
          <div className="cookie-banner">
            We use cookies to improve your experience.
            <button onClick={handleAcceptCookies}>Accept</button>
          </div>
        )}
      </body>
    </html>
  )
}
```

### Data Privacy

1. **Anonymize IP addresses** (enabled by default in GA4)
2. **Don't track PII** (Personally Identifiable Information)
3. **Add Privacy Policy** to your website
4. **Respect DNT** (Do Not Track) browser settings

---

## Quick Reference

### Essential Files

```
your-project/
├── app/
│   └── layout.tsx          # Add GA code here (App Router)
├── pages/
│   └── _app.tsx           # Add GA code here (Pages Router)
├── .env.local             # GA_MEASUREMENT_ID (local)
├── .env.example           # Template for other developers
└── .gitignore             # Must include .env.local
```

### Essential Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check environment variables
echo $NEXT_PUBLIC_GA_MEASUREMENT_ID
```

### Essential Links

- [Google Analytics](https://analytics.google.com/)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Documentation](https://nextjs.org/docs)
- [gtag.js Reference](https://developers.google.com/tag-platform/gtagjs)

---

## Complete Example Project Structure

```tsx
// app/layout.tsx (Complete example)
import type { Metadata } from "next";
import "./globals.css";

const baseUrl = 'https://yourwebsite.com'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Your Website",
  description: "Your description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

```env
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LQ9T4462C0
```

```
# .env.example (commit this)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Summary Checklist

Use this checklist for every new project:

- [ ] Created GA4 property in Google Analytics
- [ ] Copied Measurement ID (G-XXXXXXXXXX)
- [ ] Added GA script to `app/layout.tsx` or `pages/_app.tsx`
- [ ] Created `.env.local` with `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] Created `.env.example` for team reference
- [ ] Tested locally (`window.dataLayer` exists)
- [ ] Added environment variable to deployment platform (Vercel/Netlify)
- [ ] Deployed to production
- [ ] Verified in GA Realtime view
- [ ] Added Privacy Policy (if required)
- [ ] Set up cookie consent (if EU users)

---

## Success! 🎉

You now have Google Analytics tracking on your Next.js site.

**Within 30 seconds:** You should see yourself in Realtime view
**Within 24 hours:** You'll see traffic data in Reports
**Within 48 hours:** Full reporting data available

---

**Last Updated:** January 2025
**Tested With:** Next.js 13, 14, 15
**GA Version:** GA4 (Google Analytics 4)

---

## Need Help?

- [Google Analytics Help Center](https://support.google.com/analytics)
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow - google-analytics tag](https://stackoverflow.com/questions/tagged/google-analytics)
