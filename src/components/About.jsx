import React from 'react';
import { profileData } from '../data/profile';

export const About = () => {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 id="about-heading" className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Photo / Avatar Placeholder */}
          <div className="about-photo-wrapper">
            <div className="photo-card">
              <div className="photo-frame">
                <svg
                  className="photo-avatar-placeholder"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Alex Mumina Ndolo monogram avatar"
                >
                  <circle cx="100" cy="100" r="95" fill="var(--color-bg-secondary)" stroke="var(--color-accent-teal)" strokeWidth="3" />
                  <circle cx="100" cy="76" r="36" fill="var(--color-surface-elevated)" stroke="var(--color-border)" strokeWidth="2" />
                  <path
                    d="M42 162C42 130.5 68 105 100 105C132 105 158 130.5 158 162V172C142 186 122 194 100 194C78 194 58 186 42 172V162Z"
                    fill="var(--color-surface-elevated)"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                  />
                  {/* Subtle Initials Monogram */}
                  <text
                    x="100"
                    y="84"
                    textAnchor="middle"
                    fill="var(--color-accent-teal)"
                    fontSize="24"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    AN
                  </text>
                </svg>
              </div>

              <div className="photo-caption">
                <span className="caption-name">{profileData.name}</span>
                <span className="caption-sub">{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Short Bio (3 to 4 sentences) */}
          <div className="about-content">
            <div className="about-bio">
              {profileData.bioSentences.map((sentence, idx) => (
                <p key={idx} className="bio-paragraph">
                  {sentence}
                </p>
              ))}
            </div>

            {/* Quick Fact Badges */}
            <div className="about-meta-grid">
              <div className="meta-card">
                <span className="meta-label">Location</span>
                <span className="meta-value">{profileData.location}</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Education</span>
                <span className="meta-value">BSc CS @ DeKUT</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Focus</span>
                <span className="meta-value">Frontend & Full Stack</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Status</span>
                <span className="meta-value text-accent">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
