import React from 'react';

const projects = {
  tapped: {
    githubLink: 'https://github.com/krandles/bottle-share-frontend',
    hostedLink: 'http://tapped.kevinrandles.com',
    description: '',
    tech: ['React', 'Redux', 'React Router', 'Semantic UI', 'Rails', 'PostgreSQL'],
    date: 'March 2018 - present'
  },
  tileMatcher: {
    githubLink: 'https://github.com/krandles/Tile-Matcher-Frontendd',
    hostedLink: 'http://tile-matcher.kevinrandles.com',
    description: 'A Concentration-style tile-matching game',
    tech: ['JavaScript', 'Rails', 'HTML', 'CSS'],
    date: 'February 2018'
  },
  getErDone: {
    githubLink: 'https://github.com/krandles/get-er-done',
    hostedLink: 'http://geterdone.kevinrandles.com',
    description: 'A todo-list app incorporating gamification elements',
    tech: ['Rails', 'Bootstrap'],
    date: 'February 2018'
  },
  badreads: {
    githubLink: 'https://github.com/krandles/bottle-share-frontend',
    hostedLink: 'http://tapped.kevinrandles.com',
    description: '',
    tech: ['Ruby', 'Nokogiri', 'Sinatra'],
    date: 'January 2018'
  }
};

const ContentProjects = props => (
  <div className="main-content">
    <div className="projects">
      <div className="project-titles">
        <div className="project-title">
          <button
            className={props.selectedProject === 'tapped' ? 'selected' : null}
            onClick={(e) => {
              e.target.blur();
              props.setProject('tapped');
            }}
          >
            TAPPED
          </button>
        </div>
        <div className="project-title">
          <button
            className={props.selectedProject === 'tile-matcher' ? 'selected' : null}
            onClick={(e) => {
              e.target.blur();
              props.setProject('tile-matcher');
            }}
          >
            TILE MATCHER
          </button>
        </div>
        <div className="project-title">
          <button
            className={props.selectedProject === 'get-er-done' ? 'selected' : null}
            onClick={(e) => {
              e.target.blur();
              props.setProject('get-er-done');
            }}
          >
            GET &#39;ER DONE
          </button>
        </div>
        <div className="project-title">
          <button
            className={props.selectedProject === 'badreads' ? 'selected' : null}
            onClick={(e) => {
              e.target.blur();
              props.setProject('badreads');
            }}
          >
            MEDIOCRE READS
          </button>
        </div>
      </div>
      <div className="project-details">
        <p>blah blah blah</p>
      </div>
    </div>
  </div>
);

export default ContentProjects;
