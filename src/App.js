import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import ContactIcons from './components/ContactIcons';
import ContentHeader from './components/ContentHeader';
import ContentAbout from './components/ContentAbout';
import ContentProjects from './components/ContentProjects';
import ContentCV from './components/ContentCV';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: 'about',
      selectedProject: 'tapped',
      customBackgroundColor: '#000'
    };
    this.appRef = React.createRef();
  }

  componentDidMount() {
    document.body.style.setProperty('--background-color', this.state.customBackgroundColor);
    // if (this.appRef) {
    //   console.log(this.appRef);
    //   this.appRef.node.style.setProperty('--background-color', this.state.customBackgroundColor);
    // }
  }

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
    // const styles = {
    //   appStyle: {
    //     '--background-color': 'black'
    //   }
    // };

    return (
      <div className="App" ref={this.appRef}>
        <div>
          <PageHeader />
          <ContentHeader selectedContent={this.state.mainContent} setContent={this.setContent} />
          {this.switchContent()}
        </div>
        <ContactIcons />
      </div>
    );
  }
}

export default App;
