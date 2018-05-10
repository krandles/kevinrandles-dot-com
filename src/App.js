import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import ContactIcons from './components/ContactIcons';
import ContentHeader from './components/ContentHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-content">
          <PageHeader />
          <ContactIcons />
          <ContentHeader />
          <p>Not much to see here yet...</p>
        </div>
      </div>
    );
  }
}

export default App;
