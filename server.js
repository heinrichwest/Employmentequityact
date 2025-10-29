/**
 * Backend Server for Employment Equity Act Website
 * Author: SpecCon / TAP Business
 * Description: Secure backend to hide API keys and handle form submissions
 */

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

/* ========================================
   FORM SUBMISSION ENDPOINT
   ======================================== */
app.post('/api/submit-form', async (req, res) => {
  try {
    // Get form data from request body
    const formData = req.body;

    // Add metadata
    formData._subject = 'SpecCon EE demo request';
    formData._replyto = formData.email || '';
    formData._template = 'table';

    // Get FormSubmit endpoint from environment variable
    const formSubmitEndpoint = process.env.FORMSUBMIT_ENDPOINT;

    if (!formSubmitEndpoint) {
      throw new Error('FormSubmit endpoint not configured');
    }

    // Forward request to FormSubmit
    const response = await fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit request failed with status ${response.status}`);
    }

    const result = await response.json();

    // Return success response
    res.json({
      success: true,
      message: 'Form submitted successfully',
      data: result
    });

  } catch (error) {
    console.error('Form submission error:', error);

    // Return error response
    res.status(500).json({
      success: false,
      message: 'Failed to submit form',
      error: error.message
    });
  }
});

/* ========================================
   HEALTH CHECK ENDPOINT
   ======================================== */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Employment Equity Backend'
  });
});

/* ========================================
   START SERVER
   ======================================== */
app.listen(PORT, () => {
  console.log(`Employment Equity backend server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
