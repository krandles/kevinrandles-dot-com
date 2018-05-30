import React from 'react';

const ProjectDetails = (props) => {
  const { project } = props;
  return (
    <div className="project-details-component">
      <div className="project-top">
        <h3>{project.date}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.hostedLink ? <span><a href={project.hostedLink}>{project.hostedLinkText}</a> - </span> : null }
          <span><a href={project.githubLink}>GitHub Repo</a></span>
        </div>
      </div>
      <div className="project-bottom">
        <div className="project-tools">
          <h4>Tech/Tools:</h4>
          <ul>
            {project.tech.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        {project.images.length ?
          <div className="project-image">
            <img src={project.images[0]} alt="" />
          </div>
          :
          null
        }
      </div>
    </div>
  );
};

export default ProjectDetails;
