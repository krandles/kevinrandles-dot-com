import React from 'react';
import ProjectDetails from './ProjectDetails';
import projects from '../data/projects';

const ContentProjects = props => (
  <div className="main-content">
    <div className="projects">
      <div className="project-titles">
        <div className={props.selectedProject === 'tapped' ? 'project-title project-title-selected' : 'project-title'}>
          <button
            className={props.selectedProject === 'tapped' ? 'project-button selected-project' : 'project-button'}
            onClick={(e) => {
              e.target.blur();
              props.setProject('tapped');
            }}
          >
            TAPPED
          </button>
        </div>
        <div className={props.selectedProject === 'tileMatcher' ? 'project-title project-title-selected' : 'project-title'}>
          <button
            className={props.selectedProject === 'tileMatcher' ? 'project-button selected-project' : 'project-button'}
            onClick={(e) => {
              e.target.blur();
              props.setProject('tileMatcher');
            }}
          >
            TILE MATCHER
          </button>
        </div>
        <div className={props.selectedProject === 'getErDone' ? 'project-title project-title-selected' : 'project-title'}>
          <button
            className={props.selectedProject === 'getErDone' ? 'project-button selected-project' : 'project-button'}
            onClick={(e) => {
              e.target.blur();
              props.setProject('getErDone');
            }}
          >
            GET &#39;ER DONE
          </button>
        </div>
        <div className={props.selectedProject === 'mediocreReads' ? 'project-title project-title-selected' : 'project-title'}>
          <button
            className={props.selectedProject === 'mediocreReads' ? 'project-button selected-project-last' : 'project-button'}
            onClick={(e) => {
              e.target.blur();
              props.setProject('mediocreReads');
            }}
          >
            MEDIOCRE READS
          </button>
        </div>
      </div>
      <div className="project-details">
        <ProjectDetails project={projects[props.selectedProject]} />
      </div>
    </div>
  </div>
);

export default ContentProjects;
