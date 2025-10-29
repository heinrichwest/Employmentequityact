# Security Changes Summary

## Overview

This document outlines the security improvements made to the Employment Equity Act website to hide API keys and sensitive endpoints from the client-side code.

## Issues Identified

### Before Security Update

1. **Exposed FormSubmit Endpoint** in `assets/js/custom.js:114`
   - Direct URL: `https://formsubmit.co/ajax/hermias@speccon.co.za`
   - Visible to anyone viewing the source code or using browser DevTools

2. **Exposed Configuration** in `assets/js/config.js:13`
   - API endpoints hardcoded in client-side JavaScript
   - Email addresses visible in source code

## Security Improvements Implemented

### 1. Backend Server Created
**File**: `server.js`

- Express.js backend server that proxies API calls
- Hides sensitive endpoints from client-side code
- Handles form submissions securely
- Includes health check endpoint

### 2. Environment Variables
**Files**: `.env`, `.env.example`

- All sensitive data moved to environment variables
- `.env` contains actual secrets (never committed to Git)
- `.env.example` provides template for setup

**Environment Variables**:
- `PORT` - Server port configuration
- `FORMSUBMIT_ENDPOINT` - FormSubmit API endpoint
- `CONTACT_EMAIL` - Contact email address

### 3. Git Protection
**File**: `.gitignore`

Prevents committing:
- `.env` files
- `node_modules/`
- Log files
- Temporary files
- IDE/editor configuration

### 4. Frontend Updates
**Modified Files**:
- `assets/js/custom.js` - Line 115: Changed to use `/api/submit-form`
- `assets/js/config.js` - Line 14: Updated to use backend endpoint

### 5. Dependencies Management
**File**: `package.json`

Added dependencies:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `node-fetch` - HTTP client for API calls
- `nodemon` - Development auto-reload (dev dependency)

### 6. Documentation
**Files Created**:
- `README.md` - Updated with security information
- `SETUP.md` - Detailed setup instructions
- `SECURITY_CHANGES.md` - This document

## Architecture

### Before
```
Browser → Direct API Call → FormSubmit.co
         (API key exposed)
```

### After
```
Browser → Backend Server → FormSubmit.co
         (clean)          (API key secured)
```

## How It Works

1. **User submits form** on the website
2. **Frontend** sends data to `/api/submit-form` (backend endpoint)
3. **Backend server** receives the request
4. **Server** adds metadata and forwards to FormSubmit using secured API key
5. **FormSubmit** processes the form
6. **Server** returns response to frontend
7. **Frontend** displays success/error message to user

## API Endpoints

### Public Endpoints (Frontend can call)
- `POST /api/submit-form` - Submit demo request form
- `GET /api/health` - Server health check

### Protected Endpoints (Hidden from frontend)
- FormSubmit endpoint stored in environment variables
- Only accessible from backend server

## Setup Requirements

To run the secured website:

1. Install Node.js (v14+)
2. Run `npm install`
3. Copy `.env.example` to `.env`
4. Configure environment variables in `.env`
5. Start server with `npm start`
6. Access at `http://localhost:3000`

## Deployment Considerations

### Important Security Notes

1. **Never commit** `.env` file to Git
2. **Always set** environment variables on hosting platform
3. **Update CORS** settings in `server.js` for production domain
4. **Use HTTPS** in production
5. **Keep dependencies** updated for security patches

### Environment Variables on Hosting Platforms

- **Heroku**: Settings → Config Vars
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment
- **VPS/Dedicated**: Manually create `.env` file on server

## Testing

### Test Backend Health
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

### Test Form Submission
```bash
curl -X POST http://localhost:3000/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Co"}'
```

## Benefits

✅ **API keys hidden** from client-side code
✅ **Environment-based** configuration
✅ **Git protection** prevents accidental commits
✅ **CORS control** for security
✅ **Easy deployment** across platforms
✅ **Centralized logging** and error handling
✅ **Professional architecture** following best practices

## Maintenance

### Updating API Keys

1. Edit `.env` file
2. Update the `FORMSUBMIT_ENDPOINT` value
3. Restart the server: `npm start`

### Adding New API Endpoints

1. Add environment variable to `.env` and `.env.example`
2. Create route handler in `server.js`
3. Update frontend code to use new endpoint
4. Update documentation

## Support

For questions about these security changes:
- Email: hermias@speccon.co.za
- Website: https://employmentequityact.co.za

---

**Security Audit Completed**: October 29, 2025
**Implemented By**: Claude (Anthropic AI Assistant)
**Reviewed By**: SpecCon / TAP Business Team
