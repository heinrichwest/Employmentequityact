# Employment Equity Act Website - Code Restructuring Guide

## Overview
This guide will help you restructure your code for better organization, maintainability, and readability.

## What We've Done

### 1. Created External CSS File
**File:** `assets/css/custom.css`

This file now contains all your custom inline styles, organized into clear sections:
- General Styles
- Pricing Section
- Footer Styling
- Why Comply Section
- EEA Deadlines Section
- EE Platform Section
- Section Title Styling
- Resources & FAQs Section

### 2. Created External JavaScript File
**File:** `assets/css/custom.js`

This file contains all your custom JavaScript functionality:
- EEA Accordion (Expand/Collapse All)
- EEA Deadline Progress Bar
- FAQ Expand/Collapse All
- Demo Request Form Submission

---

## How to Implement the Restructuring

### Step 1: Update the `<head>` Section

**Find this section in index.html (around line 171-248):**
```html
<link href="assets/css/main.css" rel="stylesheet">

<!-- Minimal, non-theming CSS: sticky nav + current link underline. -->

<style>.visually-hidden { position: absolute; left: -9999px; }</style>

<style>
  main .section { color: var(--default-color); }
  main .section h1, main .section h2, main .section h3 { color: var(--heading-color); }
  .pricing .table { color: var(--default-color); }

  /* Footer styling */
  #footer {
    background-color: #12265E !important;
  }
  /* ... more styles ... */
</style>
</head>
```

**Replace with:**
```html
<link href="assets/css/main.css" rel="stylesheet">

<!-- Custom CSS File -->
<link href="assets/css/custom.css" rel="stylesheet">

</head>
```

### Step 2: Remove All Inline `<style>` Blocks

Search for and **DELETE** these inline style blocks in your index.html:

1. **Line ~1240-1290**: The `#why-comply .chip` styles
2. **Line ~1307-1410**: The `#why-comply .reason-card` styles
3. **Line ~2507-2698**: The `#eea-deadlines` styles
4. **Line ~3923-4202**: The `#ee-platform` styles (appears twice)
5. **Line ~4925-4931**: The `#resources-faqs` styles
6. **Line ~5287-5599**: All the remaining duplicate styles

**These are all now in `assets/css/custom.css`**

### Step 3: Remove Inline JavaScript

**Find this section (around line 1434-1674):**
```html
<script>
  (function () {
    const acc = document.getElementById('eeaAccordion');
    const expandAll = document.getElementById('eeaExpandAll');
    const collapseAll = document.getElementById('eeaCollapseAll');
    // ... EEA accordion code ...
  })();
</script>
```

**DELETE IT** - It's now in `assets/js/custom.js`

---

**Find this section (around line 2723-2842):**
```html
<script>
  (function () {
    // Define the window
    const start = new Date('2025-09-01T00:00:00');
    // ... deadline progress code ...
  })();
</script>
```

**DELETE IT** - It's now in `assets/js/custom.js`

---

**Find this section (around line 4932-4951):**
```html
<script>
  (function () {
    const wrap = document.getElementById('faqMain');
    // ... FAQ accordion code ...
  })();
</script>
```

**DELETE IT** - It's now in `assets/js/custom.js`

---

**Find this section (around line 5001-5069):**
```html
<script>
  (function () {
    const form = document.getElementById('demoRequestForm');
    // ... form submission code ...
  })();
</script>
```

**DELETE IT** - It's now in `assets/js/custom.js`

### Step 4: Add Custom JavaScript File

**Find this section at the end of your file (around line 5071-5112):**
```html
<!-- Dewi vendor JS (no extra template content) -->
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/js/main.js"></script>
```

**Add this line AFTER the vendor scripts:**
```html
<!-- Dewi vendor JS (no extra template content) -->
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/js/main.js"></script>

<!-- Custom JavaScript -->
<script src="assets/js/custom.js"></script>
```

---

## Benefits of This Restructuring

### ✅ **Better Organization**
- All custom styles in one place
- All custom JavaScript in one place
- Easier to find and modify code

### ✅ **Improved Maintainability**
- Changes only need to be made in one file
- No duplicate code scattered throughout HTML
- Clear section comments for navigation

### ✅ **Better Performance**
- Browser can cache external CSS and JS files
- Reduces HTML file size
- Parallel loading of resources

### ✅ **Easier Collaboration**
- Team members can work on different files
- Version control is cleaner
- Merge conflicts are reduced

### ✅ **Cleaner HTML**
- Focus on content structure
- Easier to read and understand
- Professional code organization

---

## File Structure After Restructuring

```
employmentequityact/
├── assets/
│   ├── css/
│   │   ├── main.css              (Template CSS)
│   │   └── custom.css            (✨ Your custom styles)
│   ├── js/
│   │   ├── main.js               (Template JS)
│   │   └── custom.js             (✨ Your custom scripts)
│   ├── vendor/
│   │   └── ...                   (Third-party libraries)
│   └── img/
│       └── ...                   (Images)
├── index.html                     (✨ Clean, organized HTML)
├── penalties.html
├── legal-obligation.html
└── ...
```

---

## Testing After Restructuring

After making these changes, test the following:

1. ✅ **Visual Appearance** - Everything looks the same
2. ✅ **Accordion Functionality** - Expand/Collapse All buttons work
3. ✅ **Progress Bar** - Deadline progress bar displays correctly
4. ✅ **Form Submission** - Demo request form submits properly
5. ✅ **Responsive Design** - Mobile and desktop views work
6. ✅ **Console Errors** - Check browser console for errors

---

## Quick Implementation Checklist

- [ ] Add `<link href="assets/css/custom.css" rel="stylesheet">` to `<head>`
- [ ] Remove all `<style>` blocks from HTML
- [ ] Remove all inline `<script>` blocks from HTML
- [ ] Add `<script src="assets/js/custom.js"></script>` before `</body>`
- [ ] Test all functionality
- [ ] Clear browser cache and reload
- [ ] Check browser console for errors

---

## Need Help?

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Verify file paths are correct
3. Clear your browser cache
4. Make sure all files are saved

---

## Additional Recommendations

### Consider Creating:

1. **`assets/css/variables.css`** - For color schemes and reusable values
2. **`assets/js/config.js`** - For configuration values (API endpoints, dates, etc.)
3. **Documentation folder** - For technical documentation
4. **`.editorconfig` file** - For consistent code formatting across editors

### Code Quality Tools:

- **Prettier** - Auto-format HTML, CSS, and JavaScript
- **ESLint** - JavaScript linting and error checking
- **Stylelint** - CSS linting and best practices

---

**Created by:** SpecCon Development Team
**Last Updated:** 2025
**Version:** 1.0
