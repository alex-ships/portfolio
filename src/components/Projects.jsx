import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((p) => p.category).filter(Boolean)));
    return ['All', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 id="projects-heading" className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of practical web applications, cloud tools, and workflow systems.
          </p>
        </div>

        <div className="projects-filter-bar" role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`filter-pill ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
