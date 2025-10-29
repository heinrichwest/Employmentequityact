# Employment Equity Act Website - Setup Guide

## Security Improvements

All API keys and sensitive endpoints are now secured on the backend server. The FormSubmit endpoint is no longer exposed in client-side code.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your actual configuration:
   ```
   PORT=3000
   FORMSUBMIT_ENDPOINT=https://formsubmit.co/ajax/your-email@domain.com
   CONTACT_EMAIL=your-email@domain.com
   ```

3. **Start the Backend Server**

   For production:
   ```bash
   npm start
   ```

   For development (with auto-reload):
   ```bash
   npm run dev
   ```

4. **Access the Website**

   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## What Changed?

### Before (Insecure)
- API endpoint exposed in client-side JavaScript: `assets/js/custom.js`
- Anyone could see the FormSubmit email address in browser DevTools

### After (Secure)
- Backend server proxies all API calls
- API keys stored in environment variables
- `.gitignore` prevents committing sensitive data

## Files Created

1. **server.js** - Backend server that handles API calls securely
2. **package.json** - Node.js dependencies configuration
3. **.env** - Environment variables (DO NOT COMMIT)
4. **.env.example** - Example environment file for reference
5. **.gitignore** - Prevents committing sensitive files

## Files Modified

1. **assets/js/custom.js** - Updated to use `/api/submit-form` instead of direct FormSubmit URL
2. **assets/js/config.js** - Updated API endpoint configuration

## Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Configure `.env` file with your actual values
- [ ] Test locally: `npm start` and visit http://localhost:3000
- [ ] Set environment variables on your hosting platform
- [ ] Never commit `.env` file to Git
- [ ] Update CORS settings in `server.js` if needed

## Testing

Check if the backend is running:
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-10-29T...",
  "service": "Employment Equity Backend"
}
```

## Support

For questions or issues, contact:
- Email: hermias@speccon.co.za
- Website: https://employmentequityact.co.za

---

Copyright © 2025 SpecCon / TAP Business. All rights reserved.
