import React from 'react';
import { profileData } from '../data/profile';

export const Navbar = ({ darkMode, onToggleTheme, isMenuOpen, onToggleMenu, onCloseMenu, activeSection }) => {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container nav-container">
        <a href="#hero" className="brand-logo" aria-label={`${profileData.name} - Home`} onClick={onCloseMenu}>
          <span className="brand-accent">&lt;</span>
          <span className="brand-name">{profileData.shortName}</span>
          <span className="brand-accent">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-links">
            {profileData.navLinks.map(({ label, href }) => {
              const section = href.replace('#', '');
              return (
                <li key={section}>
                  <a
                    href={href}
                    className={`nav-link ${activeSection === section ? 'active' : ''}`}
                    aria-current={activeSection === section ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={profileData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-resume-link"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={onToggleMenu}
            className="mobile-menu-btn"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className={`hamburger-bar ${isMenuOpen ? 'open-1' : ''}`} />
            <span className={`hamburger-bar ${isMenuOpen ? 'open-2' : ''}`} />
            <span className={`hamburger-bar ${isMenuOpen ? 'open-3' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-nav-menu"
        className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            {profileData.navLinks.map(({ label, href }) => {
              const section = href.replace('#', '');
              return (
                <li key={section}>
                  <a
                    href={href}
                    className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                    onClick={onCloseMenu}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={profileData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={onCloseMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
