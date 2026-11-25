import React, { useState } from 'react';
import { profileData } from '../data/profile';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: '',
    message: '',
    mailtoFallback: '',
  });

  const validateForm = (data) => {
    const nextErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!data.email.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.message.trim() || data.message.trim().length < 10) {
      nextErrors.message = 'Please write a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API unavailable; mailto link remains accessible
    }
  };

  const buildMailtoLink = (data) => {
    const subject = encodeURIComponent(data.subject.trim() || `Portfolio Inquiry from ${data.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\n\n${data.message.trim()}`
    );
    return `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus({ submitting: false, submitted: false, error: '', message: '', mailtoFallback: '' });
      return;
    }

    setErrors({});
    setFormStatus({ submitting: true, submitted: false, error: '', message: '', mailtoFallback: '' });

    const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;
    const mailtoUrl = buildMailtoLink(formData);

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        setFormStatus({
          submitting: false,
          submitted: true,
          error: '',
          message: 'Thank you for reaching out! Your message has been sent.',
          mailtoFallback: '',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: 'Could not reach the message service right now. You can send directly via your email app below.',
          message: '',
          mailtoFallback: mailtoUrl,
        });
      }
      return;
    }

    window.location.href = mailtoUrl;
    setFormStatus({
      submitting: false,
      submitted: true,
      error: '',
      message: `Opening your email client to send to ${profileData.contact.email}.`,
      mailtoFallback: mailtoUrl,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let&apos;s Connect</span>
          <h2 id="contact-heading" className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Socials */}
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Contact Information</h3>
            <p className="info-panel-intro">
              I am open to software development opportunities, project collaborations, and open-source ideas.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-row">
                <a href={`mailto:${profileData.contact.email}`} className="contact-detail-item contact-detail-grow">
                  <div className="detail-icon-wrap" aria-hidden="true">
                    <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Email</span>
                    <span className="detail-value">{profileData.contact.email}</span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-email-btn"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`} className="contact-detail-item">
                <div className="detail-icon-wrap" aria-hidden="true">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{profileData.contact.phone}</span>
                </div>
              </a>

              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <div className="detail-icon-wrap" aria-hidden="true">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">GitHub</span>
                  <span className="detail-value">{profileData.contact.githubHandle}</span>
                </div>
              </a>

              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <div className="detail-icon-wrap" aria-hidden="true">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">LinkedIn</span>
                  <span className="detail-value">{profileData.contact.linkedinHandle}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <span id="contact-name-error" className="form-error-text" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <span id="contact-email-error" className="form-error-text" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <span id="contact-message-error" className="form-error-text" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="btn btn-primary btn-submit"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus.submitted && (
                <div className="form-alert-success" role="status">
                  <svg className="alert-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span>{formStatus.message}</span>
                    {formStatus.mailtoFallback && (
                      <>
                        {' '}
                        <a href={formStatus.mailtoFallback} className="alert-inline-link">
                          Open email app
                        </a>
                      </>
                    )}
                  </div>
                </div>
              )}

              {formStatus.error && (
                <div className="form-alert-error" role="alert">
                  <span>{formStatus.error}</span>
                  {formStatus.mailtoFallback && (
                    <a href={formStatus.mailtoFallback} className="alert-inline-link">
                      Compose in email app
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
