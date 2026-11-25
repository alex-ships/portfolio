import React from 'react';
import { profileData } from '../data/profile';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="copyright-text">
            &copy; {currentYear} <span className="footer-name">{profileData.name}</span>. Built with React & Vite.
          </p>
        </div>

        <div className="footer-right">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Alex Ndolo on GitHub"
          >
            GitHub
          </a>
          <span className="footer-sep" aria-hidden="true">•</span>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Alex Ndolo on LinkedIn"
          >
            LinkedIn
          </a>
          <span className="footer-sep" aria-hidden="true">•</span>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="footer-link"
          >
            Email
          </a>
          <span className="footer-sep" aria-hidden="true">•</span>
          <a href="#hero" className="footer-link">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
