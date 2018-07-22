import React from 'react';
import ProjectCarousel from './ProjectCarousel';

const ProjectDetails = (props) => {
  const { project } = props;
  return (
    <div className="project-details-component">
      <div className="project-top">
        <h3>{project.date}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.hostedLink ? <span><a href={project.hostedLink}>Visit Site</a> - </span> : null }
          <span><a href={project.githubLink}>GitHub Repository</a></span>
        </div>
      </div>
      <div className="project-bottom">
        <div className="project-tools">
          <h4>Built With:</h4>
          <ul>
            {project.tech.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        {project.images.length ?
          <ProjectCarousel images={project.images} />
          :
          null
        }
      </div>
    </div>
  );
};

export default ProjectDetails;
