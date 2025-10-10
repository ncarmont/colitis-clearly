# Google Analytics Visitor Count Setup

This guide will help you display total visitor count from Google Analytics on your website.

## Prerequisites

- Google Analytics 4 (GA4) property already set up (✅ You have this: `G-LQ9T4462C0`)
- Access to Google Cloud Console
- Admin access to your GA4 property

## Step-by-Step Setup

### 1. Create a Service Account in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select or create a project
3. Navigate to **IAM & Admin** → **Service Accounts**
4. Click **+ CREATE SERVICE ACCOUNT**
5. Fill in the details:
   - **Service account name**: `ga-data-api`
   - **Service account ID**: Will auto-populate
   - **Description**: "Service account for fetching GA4 data"
6. Click **CREATE AND CONTINUE**
7. Skip granting roles (not needed for GA4)
8. Click **DONE**

### 2. Create and Download Service Account Key

1. Find your newly created service account in the list
2. Click on it to open details
3. Go to the **KEYS** tab
4. Click **ADD KEY** → **Create new key**
5. Select **JSON** format
6. Click **CREATE**
7. A JSON file will download automatically - **SAVE THIS FILE SECURELY**

### 3. Enable Google Analytics Data API

1. In Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Google Analytics Data API"
3. Click on it and click **ENABLE**

### 4. Grant Service Account Access to GA4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (the one with ID `G-LQ9T4462C0`)
3. Click **Admin** (gear icon in bottom left)
4. In the **Property** column, click **Property Access Management**
5. Click the **+** button (top right)
6. Select **Add users**
7. Enter the service account email (found in the JSON file, looks like: `ga-data-api@your-project.iam.gserviceaccount.com`)
8. Select role: **Viewer**
9. Click **Add**

### 5. Get Your GA4 Property ID

1. In Google Analytics, go to **Admin**
2. Make sure you're looking at the correct property
3. Click on **Property Settings**
4. Find **PROPERTY ID** - it's a number like `123456789`
5. **Copy this number** (NOT the G-LQ9T4462C0 measurement ID)

### 6. Configure Environment Variables

1. Open the JSON key file you downloaded in step 2
2. Copy the entire contents
3. Create a `.env.local` file in your project root:

```bash
# In the evoo-rankings directory
touch .env.local
```

4. Add these variables to `.env.local`:

```env
GA_PROPERTY_ID=123456789
GOOGLE_APPLICATION_CREDENTIALS_JSON='{"type":"service_account","project_id":"...your entire JSON here..."}'
```

**Important Notes:**
- Replace `123456789` with your actual Property ID from step 5
- Replace the JSON with your actual service account key file contents
- Keep the single quotes around the JSON
- Make sure the entire JSON is on one line (no line breaks)
- **NEVER commit `.env.local` to git** (it's already in `.gitignore`)

### 7. Add to Vercel Environment Variables

For production deployment:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add both variables:
   - `GA_PROPERTY_ID`: Your property ID
   - `GOOGLE_APPLICATION_CREDENTIALS_JSON`: Your service account JSON (paste the entire JSON)
4. Make sure to select all environments (Production, Preview, Development)
5. Click **Save**
6. **Redeploy your site** for changes to take effect

## Verification

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000

3. Check the browser console for any errors

4. After a few seconds, you should see the visitor count appear in the top-right corner

5. To test the API directly, visit:
   ```
   http://localhost:3000/api/analytics-visitors
   ```
   You should see JSON like:
   ```json
   {"totalUsers": 1234, "lastUpdated": "2025-01-10T..."}
   ```

## Troubleshooting

### "GA credentials not configured"
- Make sure `.env.local` file exists
- Check that environment variables are properly formatted
- Restart dev server after adding `.env.local`

### "Permission denied" or 403 errors
- Verify service account has Viewer access to GA4 property
- Wait a few minutes after granting access (can take time to propagate)
- Make sure you enabled the Google Analytics Data API

### No data showing
- Verify your GA_PROPERTY_ID is correct (numeric ID, not G-xxx)
- Check that your GA4 property has actual data
- Look for errors in server console

### JSON parsing errors
- Ensure the entire JSON is wrapped in single quotes
- Make sure there are no line breaks in the JSON string
- Verify all escape characters are preserved (especially `\n` in private_key)

## Security Best Practices

✅ **DO:**
- Keep service account keys secure
- Use `.env.local` for local development
- Use Vercel environment variables for production
- Regularly rotate service account keys (every 90 days recommended)

❌ **DON'T:**
- Commit `.env.local` to version control
- Share service account keys publicly
- Use the same service account across multiple projects
- Give more permissions than "Viewer" role

## What This Displays

The visitor counter shows:
- **Total unique users** from all time (since you started using GA4)
- Formatted with thousands separator (e.g., "1,234" or "1.2K")
- Updates every hour (cached for performance)
- Displays next to Instagram follower count in top-right

---

**Setup Checklist:**

- [ ] Created service account in Google Cloud
- [ ] Downloaded JSON key file
- [ ] Enabled Google Analytics Data API
- [ ] Granted service account access to GA4 property
- [ ] Found GA4 Property ID
- [ ] Created `.env.local` with both variables
- [ ] Added environment variables to Vercel
- [ ] Restarted dev server
- [ ] Verified API works at `/api/analytics-visitors`
- [ ] See visitor count on homepage

---

Need help? Check the [Google Analytics Data API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1)
