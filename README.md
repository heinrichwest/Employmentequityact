# Employment Equity Act Website - SpecCon / TAP Business

A professional website for Employment Equity compliance services, now with **secure backend API integration**.

## 🔒 Security Update

All API keys and sensitive endpoints are now secured on the backend server. The FormSubmit endpoint is no longer exposed in client-side code.

## 🚀 Quick Start

See [SETUP.md](SETUP.md) for detailed installation instructions.

### Basic Setup

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your actual values

# Start the server
npm start
```

Visit `http://localhost:3000` to view the website.

## 📁 Project Structure

```
employmentequityact/
├── server.js              # Backend server (secures API keys)
├── package.json           # Node.js dependencies
├── .env                   # Environment variables (NEVER COMMIT)
├── .env.example           # Example environment file
├── .gitignore            # Git ignore rules
├── index.html            # Main website
└── assets/               # Frontend assets
    ├── js/               # JavaScript files
    ├── css/              # Stylesheets
    └── img/              # Images
```

## 🔐 Security Features

1. **Backend Proxy**: All API calls route through the backend server
2. **Environment Variables**: Sensitive data stored securely in `.env`
3. **Git Protection**: `.gitignore` prevents committing secrets
4. **CORS Configuration**: Controlled cross-origin access

## 📚 Documentation

- [SETUP.md](SETUP.md) - Detailed setup and deployment guide
- [.env.example](.env.example) - Environment variables template

## 🆘 Support

- **Email**: hermias@speccon.co.za
- **Website**: https://employmentequityact.co.za

---

Copyright © 2025 SpecCon / TAP Business. All rights reserved.
