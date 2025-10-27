# Project Structure - Visual Guide

## 📊 Before vs After

### BEFORE Restructuring ❌
```
index.html (5,630+ lines)
├── <head>
│   ├── Vendor CSS files
│   ├── main.css
│   └── ❌ INLINE <style> block #1
│       ❌ INLINE <style> block #2
│       ❌ INLINE <style> block #3
│       ... (8 inline style blocks)
│
├── <body>
│   ├── Header
│   ├── Hero Section
│   ├── Why Comply Section
│   │   └── ❌ INLINE <style> block
│   │       ❌ INLINE <script> block
│   ├── Deadlines Section
│   │   └── ❌ INLINE <style> block
│   │       ❌ INLINE <script> block
│   ├── EE Platform Section
│   │   └── ❌ INLINE <style> block (duplicate!)
│   │       ❌ INLINE <style> block (duplicate!)
│   ├── Pricing Section
│   ├── Demo Form Section
│   │   └── ❌ INLINE <script> block
│   ├── Resources/FAQs Section
│   │   └── ❌ INLINE <style> block
│   │       ❌ INLINE <script> block
│   ├── Footer
│   └── Vendor JS files
│
└── Problems:
    • Hard to find specific code
    • Duplicate code scattered around
    • No caching benefits
    • Difficult to maintain
    • Poor team collaboration
```

### AFTER Restructuring ✅
```
employmentequityact/
│
├── index.html (clean, ~1,200 lines)
│   ├── <head>
│   │   ├── Vendor CSS files
│   │   ├── main.css
│   │   └── ✅ custom.css (single link)
│   │
│   └── <body>
│       ├── Header
│       ├── Hero Section
│       ├── Why Comply Section (clean HTML only)
│       ├── Deadlines Section (clean HTML only)
│       ├── EE Platform Section (clean HTML only)
│       ├── Pricing Section (clean HTML only)
│       ├── Demo Form Section (clean HTML only)
│       ├── Resources/FAQs Section (clean HTML only)
│       ├── Footer
│       ├── Vendor JS files
│       ├── ✅ custom.js (single script)
│       └── ✅ config.js (optional)
│
├── assets/
│   ├── css/
│   │   ├── main.css (template)
│   │   └── ✅ custom.css (all your styles)
│   │
│   └── js/
│       ├── main.js (template)
│       ├── ✅ custom.js (all your scripts)
│       └── ✅ config.js (configuration)
│
└── Benefits:
    ✅ Easy to find and edit code
    ✅ No duplicate code
    ✅ Browser caching works
    ✅ Simple to maintain
    ✅ Great for teams
```

---

## 🗂️ File Relationships

```
┌─────────────────────────────────────────────────────┐
│                   Browser                           │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │           index.html (Loads...)              │ │
│  └──────────────────────────────────────────────┘ │
│         │                    │                     │
│         ├─── Styles ─────────┼─── Scripts          │
│         ▼                    ▼                     │
│  ┌─────────────┐      ┌──────────────┐            │
│  │  main.css   │      │   main.js    │            │
│  │  (Template) │      │  (Template)  │            │
│  └─────────────┘      └──────────────┘            │
│         │                    │                     │
│         ▼                    ▼                     │
│  ┌─────────────┐      ┌──────────────┐            │
│  │ custom.css  │◄────►│  config.js   │            │
│  │ (Your Code) │      │ (Settings)   │            │
│  └─────────────┘      └──────────────┘            │
│                              │                     │
│                              ▼                     │
│                       ┌──────────────┐            │
│                       │  custom.js   │            │
│                       │ (Your Code)  │            │
│                       └──────────────┘            │
└─────────────────────────────────────────────────────┘

Legend:
────►  Direct dependency
◄────►  Uses configuration from
```

---

## 📋 Code Flow

### Page Load Sequence
```
1. Browser requests index.html
   │
   ├─► 2. HTML <head> loads
   │   ├─► Bootstrap CSS
   │   ├─► Vendor CSS files
   │   ├─► main.css (template)
   │   └─► ✅ custom.css (your styles applied!)
   │
   ├─► 3. HTML <body> renders
   │   ├─► Header displays
   │   ├─► Sections display
   │   └─► Footer displays
   │
   └─► 4. Scripts execute
       ├─► Bootstrap JS
       ├─► Vendor JS files
       ├─► main.js (template)
       ├─► ✅ config.js (loads settings)
       └─► ✅ custom.js (initializes features!)
           ├─► Accordion setup
           ├─► Progress bar calculation
           ├─► Form handlers
           └─► Ready! 🎉
```

---

## 🔧 How Files Work Together

### Style Application
```
User sees a card → Browser applies styles in order:

1. Browser default styles
   ↓
2. Bootstrap styles (vendor)
   ↓
3. main.css (template base)
   ↓
4. ✅ custom.css (YOUR styles - highest priority!)
   ↓
5. Final appearance ✨
```

### JavaScript Execution
```
User submits form → JavaScript handles it:

1. Bootstrap JS (loaded)
   ↓
2. main.js - template features (loaded)
   ↓
3. ✅ config.js - loads settings
   │  ├─ API endpoint: formsubmit.co
   │  ├─ Email: hermias@speccon.co.za
   │  └─ Messages: success/error text
   ↓
4. ✅ custom.js - your form handler
   │  ├─ Gets config from step 3
   │  ├─ Validates form data
   │  ├─ Saves to localStorage
   │  ├─ Sends to API
   │  └─ Shows success/error message
   ↓
5. Form submitted! ✨
```

---

## 📁 Directory Tree

```
employmentequityact/
│
├── 📄 index.html                          Main page
├── 📄 index-clean-template.html           ✨ Clean reference
├── 📄 RESTRUCTURING_GUIDE.md              ✨ How-to guide
├── 📄 CODE_IMPROVEMENTS_SUMMARY.md        ✨ Overview
├── 📄 QUICK_REFERENCE.md                  ✨ Quick tips
├── 📄 PROJECT_STRUCTURE.md                ✨ This file
│
├── 📁 assets/
│   │
│   ├── 📁 css/
│   │   ├── 📄 main.css                    Template styles
│   │   └── 📄 custom.css                  ✨ YOUR styles
│   │
│   ├── 📁 js/
│   │   ├── 📄 main.js                     Template scripts
│   │   ├── 📄 custom.js                   ✨ YOUR scripts
│   │   └── 📄 config.js                   ✨ Configuration
│   │
│   ├── 📁 img/
│   │   ├── 🖼️ logo.png
│   │   ├── 🖼️ favicon.png
│   │   └── 🖼️ hero-collaboration.jpg
│   │
│   └── 📁 vendor/
│       ├── 📁 bootstrap/
│       ├── 📁 aos/
│       ├── 📁 glightbox/
│       └── 📁 swiper/
│
└── 📁 [other HTML pages]
    ├── 📄 penalties.html
    ├── 📄 legal-obligation.html
    ├── 📄 b-bbee-benefits.html
    └── 📄 ...

Legend:
📄 = File
📁 = Folder
🖼️ = Image
✨ = Newly created
```

---

## 🎯 What's In Each File

### `custom.css` (350 lines, 8 sections)
```css
/* 1. General Styles */
.visually-hidden { ... }
main .section { ... }

/* 2. Pricing Section */
.pricing .table { ... }

/* 3. Footer Styling */
#footer { background: #12265E; }

/* 4. Why Comply Section */
#why-comply .chip { ... }
#why-comply .card:hover { ... }

/* 5. EEA Deadlines Section */
#eea-deadlines .date-chip { ... }
#eea-deadlines #eeaDeadlineProgress { ... }

/* 6. EE Platform Section */
#ee-platform .feature-card { ... }
#ee-platform .icon-pill { ... }

/* 7. Section Titles */
.section-title h2 { ... }

/* 8. Resources & FAQs */
#resources-faqs .accordion-item { ... }
```

### `custom.js` (200 lines, 4 functions)
```javascript
// 1. EEA Accordion
function initializeEEAAccordion() {
  // Expand/Collapse All functionality
}

// 2. Deadline Progress
function initializeDeadlineProgress() {
  // Calculate and display progress
}

// 3. FAQ Accordion
function initializeFAQAccordion() {
  // FAQ expand/collapse
}

// 4. Demo Form
function initializeDemoForm() {
  // Form submission & validation
}
```

### `config.js` (100 lines, 6 sections)
```javascript
const EEConfig = {
  api: { ... },           // Endpoints
  deadlines: { ... },     // Dates
  messages: { ... },      // Text
  company: { ... },       // Contact info
  links: { ... },         // External URLs
  features: { ... }       // Feature flags
};
```

---

## 🔄 Update Workflow

### When You Need to Update Styles:
```
1. Open: assets/css/custom.css
2. Find: The section you need (use comments)
3. Edit: Make your changes
4. Save: File
5. Test: Refresh browser (Ctrl+F5)
```

### When You Need to Update Scripts:
```
1. Open: assets/js/custom.js
2. Find: The function you need
3. Edit: Make your changes
4. Save: File
5. Test: Check browser console (F12)
```

### When You Need to Update Settings:
```
1. Open: assets/js/config.js
2. Find: The setting you need
3. Edit: Update value
4. Save: File
5. Test: Verify change takes effect
```

---

## 🎨 Style Organization Map

### Where to Find Specific Styles:

| I want to change... | Open this file | Look for section |
|---------------------|----------------|------------------|
| Primary color | `custom.css` | Search for `#12265E` |
| Accent color | `custom.css` | Search for `#FFA600` |
| Footer background | `custom.css` | Section 3: Footer |
| Card hover effect | `custom.css` | Section 4: Why Comply |
| Progress bar color | `custom.css` | Section 5: Deadlines |
| Button styles | `main.css` | Bootstrap overrides |
| Font family | `index.html` | `<head>` fonts |
| Section spacing | `custom.css` | Section-specific |

---

## 🎯 Quick Navigation

### Find Code Fast:

```
Need to update form email?
→ assets/js/config.js → Line 12

Need to change footer color?
→ assets/css/custom.css → Line 29

Need to update deadlines?
→ assets/js/config.js → Line 19

Need to fix accordion?
→ assets/js/custom.js → Line 10

Need to change card styles?
→ assets/css/custom.css → Line 60
```

---

**Visual Guide Version:** 1.0
**Last Updated:** 2025
**Status:** Complete and Ready to Use ✅
