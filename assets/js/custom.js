/**
 * Employment Equity Act - Custom JavaScript
 * Author: SpecCon / TAP Business
 * Description: Custom functionality for the Employment Equity compliance website
 */

/* ========================================
   1. EEA ACCORDION - EXPAND/COLLAPSE ALL
   ======================================== */
(function initializeEEAAccordion() {
  const acc = document.getElementById('eeaAccordion');
  if (!acc) return;

  const expandAll = document.getElementById('eeaExpandAll');
  const collapseAll = document.getElementById('eeaCollapseAll');

  function allButtons() {
    return Array.from(acc.querySelectorAll('.accordion-button'));
  }

  if (expandAll) {
    expandAll.addEventListener('click', () => {
      allButtons().forEach(btn => {
        const target = document.querySelector(btn.getAttribute('data-bs-target'));
        if (target && !target.classList.contains('show')) {
          new bootstrap.Collapse(target, { toggle: true });
        }
      });
      expandAll.blur();
    });
  }

  if (collapseAll) {
    collapseAll.addEventListener('click', () => {
      allButtons().forEach(btn => {
        const target = document.querySelector(btn.getAttribute('data-bs-target'));
        if (target && target.classList.contains('show')) {
          new bootstrap.Collapse(target, { toggle: true });
        }
      });
      collapseAll.blur();
    });
  }
})();

/* ========================================
   2. EEA DEADLINE PROGRESS BAR
   ======================================== */
(function initializeDeadlineProgress() {
  // Define the reporting window
  const start = new Date('2025-09-01T00:00:00');
  const manualClose = new Date('2025-10-01T00:00:00'); // informational milestone
  const end = new Date('2026-01-15T23:59:59');
  const now = new Date();

  // Calculate progress percentage
  const percent = (now <= start) ? 0 :
                  (now >= end) ? 100 :
                  Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));

  // Update progress bar
  const bar = document.getElementById('eeaDeadlineProgress');
  if (bar) {
    bar.style.width = percent.toFixed(2) + '%';
  }
})();

/* ========================================
   3. FAQ EXPAND/COLLAPSE ALL
   ======================================== */
(function initializeFAQAccordion() {
  const wrap = document.getElementById('faqMain');
  if (!wrap) return;

  const expandBtn = document.getElementById('faqExpandAll');
  const collapseBtn = document.getElementById('faqCollapseAll');

  const panels = () => Array.from(wrap.querySelectorAll('.accordion-collapse'));

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      panels().forEach(p => {
        if (!p.classList.contains('show')) {
          new bootstrap.Collapse(p, { toggle: true });
        }
      });
      expandBtn.blur();
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      panels().forEach(p => {
        if (p.classList.contains('show')) {
          new bootstrap.Collapse(p, { toggle: true });
        }
      });
      collapseBtn.blur();
    });
  }
})();

/* ========================================
   4. DEMO REQUEST FORM SUBMISSION
   ======================================== */
(function initializeDemoForm() {
  const form = document.getElementById('demoRequestForm');
  if (!form) return;

  const statusEl = document.getElementById('demoFormStatus');
  const submitBtn = form.querySelector('button[type="submit"]');
  const defaultText = submitBtn?.dataset?.defaultText || submitBtn?.textContent || 'Submit';
  const submittingText = submitBtn?.dataset?.submitText || 'Sending…';
  const endpoint = 'https://formsubmit.co/ajax/hermias@speccon.co.za';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Validate form
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Reset validation and status
    form.classList.remove('was-validated');
    statusEl.classList.add('d-none');

    // Disable submit button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = submittingText;
    }

    // Prepare form data
    const formData = Object.fromEntries(new FormData(form).entries());
    formData._subject = 'SpecCon EE demo request';
    formData._replyto = formData.email || '';
    formData._template = 'table';

    // Save to localStorage for reference
    localStorage.setItem('lastEnquiryData', JSON.stringify(formData));

    try {
      // Submit to API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // FormSubmit returns JSON on success
      await response.json();

      // Show success message
      statusEl.className = 'alert alert-success mt-4';
      statusEl.textContent = 'Thanks! Your demo request is on its way. We will be in touch shortly.';
      statusEl.classList.remove('d-none');
      form.reset();

    } catch (error) {
      console.error('Demo request submission failed', error);

      // Show error message
      statusEl.className = 'alert alert-danger mt-4';
      statusEl.textContent = 'Sorry, we could not send your request. Please try again or email hermias@speccon.co.za.';
      statusEl.classList.remove('d-none');

    } finally {
      // Re-enable submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultText;
      }
    }
  });
})();
