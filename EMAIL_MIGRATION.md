# Email Configuration Migration - Nodemailer to ZeptoMail

## Summary of Changes

This project has been successfully migrated from **Nodemailer** to **ZeptoMail** for email delivery.

## What Changed

### 1. Environment Variables (`.env.local`)

The following environment variables were updated:

**Old (Nodemailer):**

```env
MAIL_HOST=smtp.zoho.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=smahlangu@mobisynco.com
MAIL_PASSWORD=EirUqeq8bpwG
MAIL_FROM_NAME=Ekuphumuleni
MAIL_FROM_EMAIL=smahlangu@mobisynco.com
```

**New (ZeptoMail):**

```env
ZEPTOMAIL_HOST=api.zeptomail.eu
ZEPTOMAIL_TOKEN=Zoho-enczapikey yA6KbHta6ASixTpUSUA93ZKJ8Yo1pag62nzlsn3lLpAmf4XphqE2gxttcYe6djDf0dKH4flYPtpHJIC+t9wMeJllNtQCfJTGTuv4P2uV48xh8ciEYNYjh5WtBrERFKBBdx8hCSU5QPkpWA==
ZEPTOMAIL_MAIL_AGENT_ALIAS=3cffdfa6c02404cf
MAIL_FROM_NAME=Ekuphumuleni
MAIL_FROM_EMAIL=no-reply@ekuphumuleni.ngo
# Multiple recipients supported (comma-separated)
MAIL_TO_EMAIL=administration@ekuphumuleni.org.zw,administration@ekuphumuleni.ngo,omotola@featnode.tech
```

### 2. API Route (`src/app/api/contact/route.ts`)

- **Removed:** Nodemailer library and SMTP configuration
- **Added:** ZeptoMail REST API integration using native `fetch()`
- **No breaking changes:** The contact form still works exactly the same way

### 3. Dependencies (`package.json`)

- **Removed:** `nodemailer` and `@types/nodemailer`
- **Benefit:** Reduced bundle size (82 packages removed)

### 4. Documentation (`docs/RULES.md`)

- Updated email configuration examples to use ZeptoMail
- Updated environment variable documentation

## Benefits of ZeptoMail

1. **No SMTP Connection:** Uses REST API instead of SMTP, which is more reliable
2. **Better Deliverability:** ZeptoMail is optimized for transactional emails
3. **No Additional Dependencies:** Uses native `fetch()` - no extra npm packages needed
4. **EU Hosted:** Uses `api.zeptomail.eu` for GDPR compliance
5. **Verified Domain:** Using `no-reply@ekuphumuleni.ngo` (verified domain)
6. **Multiple Recipients:** Supports sending to multiple email addresses simultaneously

## Multiple Recipients Feature

Contact form submissions are now sent to **three email addresses**:

- `administration@ekuphumuleni.org.zw`
- `administration@ekuphumuleni.ngo`
- `omotola@featnode.tech`

To modify recipients, update the `MAIL_TO_EMAIL` variable in `.env.local`:

```env
# Single recipient
MAIL_TO_EMAIL=admin@example.com

# Multiple recipients (comma-separated)
MAIL_TO_EMAIL=admin1@example.com,admin2@example.com,admin3@example.com
```

The API automatically parses comma-separated emails and sends to all recipients.

## Testing the Integration

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Navigate to the contact form:**

   - Go to `http://localhost:3000/contact`

3. **Submit a test message:**

   - Fill in the contact form
   - You should receive:
     - A notification email at **all three recipient addresses**:
       - `administration@ekuphumuleni.org.zw`
       - `administration@ekuphumuleni.ngo`
       - `omotola@featnode.tech`
     - A confirmation email to the email address you submitted

4. **Check for errors:**
   - Open browser DevTools Console
   - Check terminal logs for any ZeptoMail API errors

## How It Works

### Email Flow

1. **User submits contact form** → POST to `/api/contact`
2. **API validates the data** → Returns errors if validation fails
3. **API prepares two emails:**
   - **Owner notification email** → Sent to `info@ekuphumuleni.ngo`
   - **User confirmation email** → Sent to the email they provided
4. **Sends both emails via ZeptoMail REST API**
5. **Returns success/error response to the form**

### ZeptoMail REST API Call

```typescript
const response = await fetch(
  `https://${process.env.ZEPTOMAIL_HOST}/v1.1/email`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: process.env.ZEPTOMAIL_TOKEN!,
    },
    body: JSON.stringify({
      from: {
        address: 'no-reply@ekuphumuleni.ngo',
        name: 'Ekuphumuleni',
      },
      to: [
        {
          address: recipientEmail,
          name: recipientName,
        },
      ],
      subject: 'Email Subject',
      htmlbody: htmlContent,
      textbody: plainTextContent,
    }),
  }
);
```

## Troubleshooting

### Email not sending?

1. **Check environment variables are set correctly:**

   ```bash
   # In terminal
   cd "e:\dev\Mahlangu Dev\ekuphumuleni"
   cat .env.local
   ```

2. **Verify ZeptoMail token is correct:**

   - Token should start with `Zoho-enczapikey`
   - Check for any trailing spaces or line breaks

3. **Check API logs:**

   - Look at terminal output for error messages
   - ZeptoMail API errors will be logged

4. **Verify sender domain:**
   - `no-reply@ekuphumuleni.ngo` must be verified in ZeptoMail dashboard
   - Check https://www.zoho.com/zeptomail/

### Common Errors

**Error: "Missing ZeptoMail configuration"**

- Solution: Make sure `.env.local` exists with all required variables

**Error: "ZeptoMail API error: 401"**

- Solution: Token is invalid or expired - get a new token from ZeptoMail

**Error: "ZeptoMail API error: 403"**

- Solution: Sender email is not verified - verify `no-reply@ekuphumuleni.ngo`

## Rollback (If Needed)

If you need to rollback to Nodemailer:

1. **Reinstall dependencies:**

   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. **Restore old environment variables:**

   ```env
   MAIL_HOST=smtp.zoho.com
   MAIL_PORT=587
   MAIL_SECURE=false
   MAIL_USER=smahlangu@mobisynco.com
   MAIL_PASSWORD=EirUqeq8bpwG
   ```

3. **Restore old API route code** (check git history)

## Next Steps

1. ✅ Test the contact form thoroughly
2. ✅ Monitor ZeptoMail dashboard for delivery stats
3. ✅ Update DNS records if needed for better deliverability (SPF, DKIM, DMARC)
4. ✅ Consider setting up email templates in ZeptoMail dashboard

## Questions?

If you have any issues or questions about this migration, check:

- ZeptoMail documentation: https://www.zoho.com/zeptomail/help/
- ZeptoMail dashboard: https://www.zoho.com/zeptomail/

---

**Migration completed on:** November 23, 2025
**Migration type:** Nodemailer → ZeptoMail REST API
