import React from 'react';
import ProjectButton from './ProjectButton';
import ProjectDetails from './ProjectDetails';
import projects from '../data/projects';

const ContentProjects = props => (
  <div className="main-content">
    <div className="projects">
      <div className="project-titles">
        {projects.map(project => (
          <ProjectButton
            key={project.name}
            project={project}
            selectedProject={props.selectedProject}
            setProject={props.setProject}
          />
        ))}
      </div>
      <div className="project-details">
        <ProjectDetails
          project={projects.find(project => project.name === props.selectedProject)}
        />
      </div>
    </div>
  </div>
);

export default ContentProjects;
