import React from 'react';

const ContentHeader = props => (
  <div className="content-header">
    <button
      onClick={(e) => {
        e.target.blur();
        props.setContent('about');
      }}
      className={props.selectedContent === 'about' ? 'selected' : null}
    >
      ABOUT
    </button>
    <button
      onClick={(e) => {
        e.target.blur();
        props.setContent('projects');
      }}
      className={props.selectedContent === 'projects' ? 'selected' : null}
    >
      PROJECTS
    </button>
    <button
      onClick={(e) => {
        e.target.blur();
        props.setContent('cv');
      }}
      className={props.selectedContent === 'cv' ? 'selected' : null}
    >
      CV
    </button>
  </div>
);

export default ContentHeader;
