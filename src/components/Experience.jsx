import React from 'react';
import { timelineData } from '../data/timeline';

export const Experience = () => {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Journey & Milestones</span>
          <h2 id="experience-heading" className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            Academic foundation and specialized software engineering training.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true"></div>

          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true">
                  <span className="marker-dot"></span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-badges">
                      <span className="timeline-type-pill">{item.type}</span>
                      {item.status && <span className="timeline-status-pill">{item.status}</span>}
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <h3 className="timeline-item-title">{item.title}</h3>
                  <div className="timeline-institution-line">
                    <span className="timeline-institution">{item.institution}</span>
                    <span className="timeline-separator">•</span>
                    <span className="timeline-location">{item.location}</span>
                  </div>

                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
