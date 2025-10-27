/**
 * Employment Equity Act - Configuration File
 * Author: SpecCon / TAP Business
 * Description: Centralized configuration for easy maintenance
 */

const EEConfig = {

  /* ========================================
     API ENDPOINTS
     ======================================== */
  api: {
    formSubmit: 'https://formsubmit.co/ajax/hermias@speccon.co.za',
    contactEmail: 'hermias@speccon.co.za',
  },

  /* ========================================
     REPORTING DEADLINES
     ======================================== */
  deadlines: {
    reportingStart: '2025-09-01T00:00:00',
    manualSubmissionClose: '2025-10-01T00:00:00',
    onlineSubmissionClose: '2026-01-15T23:59:59',
  },

  /* ========================================
     FORM MESSAGES
     ======================================== */
  messages: {
    formSuccess: 'Thanks! Your demo request is on its way. We will be in touch shortly.',
    formError: 'Sorry, we could not send your request. Please try again or email hermias@speccon.co.za.',
    formSubmitting: 'Sending…',
    formDefault: 'Book my demo',
  },

  /* ========================================
     COMPANY INFORMATION
     ======================================== */
  company: {
    name: 'SpecCon / TAP Business',
    website: 'https://employmentequityact.co.za',
    phone: '012 667 4962',
    email: 'help@speccon.co.za',
  },

  /* ========================================
     EXTERNAL LINKS
     ======================================== */
  links: {
    tapApp: 'https://app.tap.co.za',
    elearning: 'https://elearning.co.za/',
    employmentEquity: 'https://employmentequityact.co.za/',
    learningManagementSystem: 'https://learningmanagementsystem.co.za/',
    skillsDevelopment: 'https://skillsdevelopment.co.za/',
    specconAcademy: 'https://www.specconacademy.co.za/',
    bbbee: 'https://bbbee.co.za/',
  },

  /* ========================================
     FEATURE FLAGS
     ======================================== */
  features: {
    enableAnalytics: true,
    enableFormValidation: true,
    enableLocalStorage: true,
    debugMode: false,
  },

  /* ========================================
     COLOR SCHEME (for reference)
     ======================================== */
  colors: {
    primary: '#12265E',
    secondary: '#92ABC4',
    accent: '#FFA600',
    text: '#333333',
    background: '#FFFFFF',
  },

};

// Make config available globally
if (typeof window !== 'undefined') {
  window.EEConfig = EEConfig;
}
