import React from 'react';
import { profileData } from '../data/profile';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Subtle Visual Accent Badge */}
        <div className="hero-accent-badge">
          <span className="accent-dot" aria-hidden="true"></span>
          <span>{profileData.location} • Computer Science @ DeKUT</span>
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m <span className="text-gradient">{profileData.name}</span>
        </h1>

        <p className="hero-subtitle">
          Frontend developer and Computer Science student building practical, fast, and accessible web tools.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Contact Me</span>
          </a>
          <a
            href={profileData.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Resume</span>
          </a>
        </div>

        {/* Minimal Visual Accent: Tech Stack Ribbon */}
        <div className="hero-stack-ribbon" aria-label="Core focus technologies">
          <span className="stack-label">Core Focus:</span>
          <div className="stack-chips">
            <span className="stack-chip">React</span>
            <span className="stack-chip">Vite</span>
            <span className="stack-chip">NestJS</span>
            <span className="stack-chip">PostgreSQL</span>
            <span className="stack-chip">Prisma</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
