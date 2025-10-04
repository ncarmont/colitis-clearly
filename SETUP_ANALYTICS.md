# Google Analytics Visitor Counter Setup

## What's Implemented

A visitor counter now appears in the top-right corner of your website showing total visitors since launch. It uses:
- Google Analytics 4 API to fetch real visitor data
- 24-hour caching to minimize API calls
- Graceful fallback (shows "—") if credentials aren't configured

## Setup Instructions

### Step 1: Create Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **IAM & Admin** > **Service Accounts**
4. Click **Create Service Account**
   - Name: `ga4-visitor-counter`
   - Description: `Service account for fetching GA4 visitor data`
5. Grant role: **Viewer** (under "Quick access" > "Basic")
6. Click **Done**

### Step 2: Create Service Account Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON** format
5. Click **Create** - a JSON file will download

### Step 3: Get Your GA4 Property ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon at bottom left)
3. Select your property
4. Click **Property Settings**
5. Copy the **Property ID** (it's just numbers, e.g., `123456789`)

### Step 4: Grant Service Account Access to GA4

1. Still in GA4 Admin > **Property Access Management**
2. Click **+** (Add users)
3. Enter the service account email (from the JSON file: `client_email` field)
   - Example: `ga4-visitor-counter@your-project.iam.gserviceaccount.com`
4. Select role: **Viewer**
5. Click **Add**

### Step 5: Compress Credentials JSON (One Line)

**On Mac/Linux:**
```bash
jq -c . ~/Downloads/your-service-account-key.json
```

**On Windows (PowerShell):**
```powershell
Get-Content your-service-account-key.json | ConvertFrom-Json | ConvertTo-Json -Compress
```

**Or manually:** Remove all newlines and extra spaces from the JSON file so it's one continuous line.

### Step 6: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** > **Environment Variables**
3. Add two variables:

**Variable 1:**
- Name: `GA_PROPERTY_ID`
- Value: Your GA4 Property ID (numbers only, e.g., `123456789`)
- Environment: Production, Preview, Development (check all)

**Variable 2:**
- Name: `GA_CREDENTIALS_JSON`
- Value: The compressed JSON from Step 5 (entire one-line JSON)
- Environment: Production, Preview, Development (check all)

4. Click **Save**

### Step 7: Redeploy

1. Go to **Deployments** tab
2. Click **⋯** on latest deployment
3. Click **Redeploy**
4. Select **Use existing Build Cache**
5. Click **Redeploy**

### Step 8: Verify

After 2-3 minutes:
1. Visit https://www.best-olive-oil-ranked.com
2. You should see the visitor counter in the top-right corner
3. It may show "—" initially if you have no visitors yet
4. Check browser console for any errors

## Local Development (Optional)

To test locally:

1. Create `.env.local` file in project root:
```bash
GA_PROPERTY_ID=123456789
GA_CREDENTIALS_JSON={"type":"service_account","project_id":"..."}
```

2. Restart dev server:
```bash
npm run dev
```

3. Visit http://localhost:3000

## Troubleshooting

**Counter shows "—":**
- Environment variables not set in Vercel
- Service account doesn't have access to GA4 property
- GA4 Property ID is incorrect
- Check Vercel function logs for errors

**Counter shows "0":**
- Normal if site is brand new
- Wait 24-48 hours for GA4 to collect data

**API errors:**
- Check Vercel function logs: Settings > Functions > View logs
- Verify service account has "Viewer" role in GA4
- Verify credentials JSON is valid (try parsing it)

## How It Works

1. **Component** (`VisitorCounter.tsx`): Shows counter badge
2. **API Route** (`app/api/totalUsers/route.ts`): Fetches data from GA4
3. **Caching**: Results cached for 24 hours in `/tmp/visitors.json`
4. **Graceful degradation**: Shows "—" if API fails (no error messages to users)

## Security

- Service account credentials stored as environment variables (never committed)
- Service account has read-only access
- API route only returns total visitor count (no sensitive data)
- Results cached to minimize API calls
