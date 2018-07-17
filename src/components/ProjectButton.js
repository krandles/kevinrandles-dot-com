import React from 'react';

const ProjectButton = props => (
  <div className={props.selectedProject === props.project.name ? 'project-title project-title-selected' : 'project-title'}>
    <button
      className={props.selectedProject === props.project.name ? 'project-button selected-project' : 'project-button'}
      onClick={(e) => {
        e.target.blur();
        props.setProject(props.project.name);
      }}
    >
      {props.project.displayName}
    </button>
  </div>
);

export default ProjectButton;
