import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import ContentHeader from './components/ContentHeader';
import ContentAbout from './components/ContentAbout';
import ContentProjects from './components/ContentProjects';
import ContentCV from './components/ContentCV';
import PageFooter from './components/PageFooter';
import './App.css';

class App extends Component {
  state = {
    mainContent: 'about',
    selectedProject: 'tapped',
  };

  setContent = (content) => {
    this.setState({
      mainContent: content
    });
  }

  setProject = (project) => {
    this.setState({
      selectedProject: project
    });
  }

  switchContent = () => {
    switch (this.state.mainContent) {
      case 'about':
        return <ContentAbout />;
      case 'projects':
        return <ContentProjects setProject={this.setProject} selectedProject={this.state.selectedProject} />;
      case 'cv':
        return <ContentCV />;
      default:
        return <ContentAbout />;
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <PageHeader />
          <ContentHeader selectedContent={this.state.mainContent} setContent={this.setContent} />
          {this.switchContent()}
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default App;
