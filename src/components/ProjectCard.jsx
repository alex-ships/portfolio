import React from 'react';

export const ProjectCard = ({ project }) => {
  const { title, description, tags, liveUrl, githubUrl, badge, category } = project;

  return (
    <article className="project-card">
      <div className="card-top">
        <div className="card-header-row">
          <h3 className="card-title">{title}</h3>
          {badge ? (
            <span className="project-badge">{badge}</span>
          ) : (
            category && <span className="project-category-label">{category}</span>
          )}
        </div>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-bottom">
        <ul className="tag-list" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>

        <div className="card-links">
          {liveUrl && liveUrl !== '#' ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
              aria-label={`Open live demo for ${title}`}
            >
              <span>Live Demo</span>
              <svg className="link-arrow" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 12l8-8m0 0H6m6 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          ) : (
            <span className="project-link live-link disabled" title="Demo in development">
              <span>Demo Coming Soon</span>
            </span>
          )}

          {githubUrl && githubUrl !== '#' ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link repo-link"
              aria-label={`View source code for ${title} on GitHub`}
            >
              <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          ) : (
            <span className="project-link repo-link disabled">
              <span>Private Repo</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
