# Quick Reference Guide

## 📁 New Files Created

| File | Purpose | Status |
|------|---------|--------|
| `assets/css/custom.css` | All your custom styles | ✅ Ready |
| `assets/js/custom.js` | All your custom scripts | ✅ Ready |
| `assets/js/config.js` | Configuration settings | ✅ Ready |
| `index-clean-template.html` | Clean HTML reference | ✅ Ready |
| `RESTRUCTURING_GUIDE.md` | Detailed implementation guide | ✅ Ready |
| `CODE_IMPROVEMENTS_SUMMARY.md` | Complete overview | ✅ Ready |

---

## ⚡ Quick Implementation (2 Steps)

### Step 1: Add to `<head>` section (after main.css)
```html
<!-- Custom CSS File -->
<link href="assets/css/custom.css" rel="stylesheet">
```

### Step 2: Add before `</body>` (after vendor scripts)
```html
<!-- Custom JavaScript -->
<script src="assets/js/custom.js"></script>
```

**Then:** Delete all inline `<style>` and `<script>` blocks from index.html

---

## 🎯 What Each File Does

### `custom.css` (8 Sections)
```
1. General Styles          → Basic page styling
2. Pricing Section         → Pricing table styles
3. Footer Styling          → Footer colors and layout
4. Why Comply Section      → Cards, chips, hover effects
5. EEA Deadlines Section   → Progress bar, timeline, cards
6. EE Platform Section     → Feature cards, icons
7. Section Titles          → Typography and sizing
8. Resources & FAQs        → Accordion styling
```

### `custom.js` (4 Functions)
```
1. initializeEEAAccordion()      → Expand/collapse EEA sections
2. initializeDeadlineProgress()  → Calculates deadline progress
3. initializeFAQAccordion()      → Expand/collapse FAQs
4. initializeDemoForm()          → Handles form submission
```

### `config.js` (Configuration)
```
• API endpoints             → formsubmit.co URL, email
• Reporting deadlines       → Sept 2025 - Jan 2026 dates
• Form messages            → Success/error messages
• Company information      → Contact details
• External links           → TAP, eLearning, etc.
• Feature flags            → Enable/disable features
• Color scheme             → Brand colors
```

---

## 🔧 Common Updates

### Update Email Address
**File:** `assets/js/config.js`
```javascript
api: {
  formSubmit: 'https://formsubmit.co/ajax/YOUR-NEW-EMAIL@domain.com',
  contactEmail: 'YOUR-NEW-EMAIL@domain.com',
}
```

### Update Deadlines
**File:** `assets/js/config.js`
```javascript
deadlines: {
  reportingStart: '2026-09-01T00:00:00',  // Update year
  manualSubmissionClose: '2026-10-01T00:00:00',
  onlineSubmissionClose: '2027-01-15T23:59:59',
}
```

### Update Colors
**File:** `assets/css/custom.css`
```css
/* Find and replace these color values: */
#12265E  → Primary blue
#92ABC4  → Secondary blue
#FFA600  → Accent orange
```

### Update Form Messages
**File:** `assets/js/config.js`
```javascript
messages: {
  formSuccess: 'Your custom success message',
  formError: 'Your custom error message',
}
```

---

## 🐛 Troubleshooting

### Page Looks Different?
1. ✅ Check `custom.css` is linked in `<head>`
2. ✅ Clear browser cache (Ctrl+F5)
3. ✅ Check browser console (F12) for errors
4. ✅ Verify file path is correct

### Form Not Working?
1. ✅ Check `custom.js` is linked before `</body>`
2. ✅ Check `config.js` email address is correct
3. ✅ Check browser console for errors
4. ✅ Verify FormSubmit.co is not blocked

### Accordion Not Working?
1. ✅ Check Bootstrap JS is loaded
2. ✅ Check `custom.js` is loaded after Bootstrap
3. ✅ Check accordion IDs match in HTML
4. ✅ Check browser console for errors

### Progress Bar Not Showing?
1. ✅ Check element ID is `eeaDeadlineProgress`
2. ✅ Check dates in `config.js` are correct
3. ✅ Check `custom.js` is loaded
4. ✅ Check browser console for errors

---

## 📋 Testing Checklist

Copy and paste this into your testing document:

```markdown
## Visual Tests
- [ ] Page looks identical to before
- [ ] All colors are correct
- [ ] Mobile view works
- [ ] Desktop view works
- [ ] Footer displays correctly

## Functionality Tests
- [ ] Navigation menu works
- [ ] "Expand All" button works
- [ ] "Collapse All" button works
- [ ] Deadline progress bar shows
- [ ] FAQ accordion works
- [ ] Form validation works
- [ ] Form submission works
- [ ] Success/error messages show

## Technical Tests
- [ ] No console errors
- [ ] CSS file loads (Network tab)
- [ ] JS file loads (Network tab)
- [ ] All external links work
- [ ] All internal links work
- [ ] LocalStorage saves form data

## Browser Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers
```

---

## 📞 Quick Contacts

| Need Help With | Contact |
|----------------|---------|
| Technical Issues | help@speccon.co.za |
| General Enquiries | 012 667 4962 |
| Form Submissions | Check hermias@speccon.co.za |

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| Bootstrap Docs | https://getbootstrap.com/docs/5.3/ |
| FormSubmit.co | https://formsubmit.co/ |
| MDN Web Docs | https://developer.mozilla.org/ |
| Can I Use | https://caniuse.com/ |

---

## 💾 Backup Before Changes

**IMPORTANT:** Before implementing changes:

```bash
# Create backup of index.html
cp index.html index.html.backup

# Or on Windows:
copy index.html index.html.backup
```

---

## ⏱️ Implementation Time

| Task | Est. Time |
|------|-----------|
| Add CSS link | 30 seconds |
| Add JS link | 30 seconds |
| Remove inline styles | 2 minutes |
| Remove inline scripts | 2 minutes |
| Test functionality | 5 minutes |
| **TOTAL** | **~10 minutes** |

---

## 🎓 Learn More

For detailed instructions, see:
- 📖 `RESTRUCTURING_GUIDE.md` - Step-by-step guide
- 📊 `CODE_IMPROVEMENTS_SUMMARY.md` - Complete overview
- 📄 `index-clean-template.html` - Clean HTML example

---

**Last Updated:** 2025
**Version:** 1.0
**Status:** Ready for Implementation ✅
