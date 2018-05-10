import React from 'react';

const ContentHeader = props => (
  <div className="content-header">
    <span
      onClick={() => { props.setContent('about'); }}
      className={props.activeContent === 'about' ? 'active' : null}
    >
      ABOUT&nbsp;&nbsp;
    </span>
    <span
      onClick={() => { props.setContent('projects'); }}
      className={props.activeContent === 'projects' ? 'active' : null}
    >
      PROJECTS&nbsp;&nbsp;
    </span>
    <span
      onClick={() => { props.setContent('cv'); }}
      className={props.activeContent === 'cv' ? 'active' : null}
    >
      CV
    </span>
  </div>
);


export default ContentHeader;
