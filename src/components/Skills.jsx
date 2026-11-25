import React from 'react';
import { skillsData } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Toolkit</span>
          <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Cleanly grouped practical skills with no arbitrary progress bars.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-card-header">
                <h3 className="category-title">{group.category}</h3>
                <p className="category-description">{group.description}</p>
              </div>

              <div className="skill-tags-wrapper" role="list" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag ${skill.highlight ? 'skill-tag-highlight' : ''}`}
                    role="listitem"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
