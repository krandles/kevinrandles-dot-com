import React from 'react';
import ProjectDetails from './ProjectDetails';

const projects = {
  tapped: {
    githubLink: 'https://github.com/krandles/bottle-share-frontend',
    hostedLink: 'http://tapped.kevinrandles.com',
    hostedLinkText: 'tapped.kevinrandles.com',
    description: 'A multi-purpose app for craft beer enthusiasts, Tapped features beer & brewery listings/reviews and craft beer-related event listings. Users can create and manage public or private events, discuss and post photos of events, and contribute to beer reviews/listings.',
    tech: ['React', 'Redux', 'React Router', 'Semantic UI', 'Rails', 'PostgreSQL'],
    date: 'March 2018 (ongoing)',
    images: ['images/tapped1.png']
  },
  tileMatcher: {
    githubLink: 'https://github.com/krandles/Tile-Matcher-Frontendd',
    hostedLink: 'http://tile-matcher.kevinrandles.com',
    hostedLinkText: 'tile-matcher.kevinrandles.com',
    description: 'A Concentration-style tile-matching game built with vanilla JavaScript, with support for multiple tilesets loaded from a Rails API.',
    tech: ['JavaScript', 'Rails', 'HTML', 'CSS'],
    date: 'February 2018',
    images: ['images/tile-matcher1.png']
  },
  getErDone: {
    githubLink: 'https://github.com/krandles/get-er-done',
    hostedLink: 'http://geterdone.kevinrandles.com',
    hostedLinkText: 'get-er-done.kevinrandles.com',
    description: "A todo-list app incorporating gamification elements, Get 'Er Done allows users to manage tasks by project or category, earning experience points towards levelling up when tasks or projects are completed.",
    tech: ['Ruby', 'Rails', 'Bootstrap'],
    date: 'February 2018',
    images: ['images/geterdone1.png']
  },
  mediocreReads: {
    githubLink: 'https://github.com/krandles/mediocre-reads-cli',
    hostedLink: '',
    hostedLinkText: '',
    description: "A Ruby CLI app that interfaces with the Goodreads API, giving users the ability to search authors and books, and list books they've reviewed.",
    tech: ['Ruby', 'Nokogiri', 'Sinatra', 'SQLite'],
    date: 'January 2018',
    images: []
  }
};

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
