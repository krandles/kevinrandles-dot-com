import React from 'react';

const ProjectDetails = (props) => {
  const { project } = props;
  return (
    <div className="project-details-component">
      <h3>{project.date}</h3>
      <p>{project.description}</p>
      <div>
        {project.hostedLink ? <span><a href={project.hostedLink}>{project.hostedLinkText}</a> - </span> : null }
        <span><a href={project.githubLink}>GitHub</a></span>
      </div>
      <div>
        <h4>Tech/Tools:</h4>
        <ul>
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
