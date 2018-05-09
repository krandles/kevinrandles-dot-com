import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">KEVIN RANDLES</h1>
        <div className="contact-logos-container">
          <div>
            <a href="https://github.com/krandles" target="_blank" rel="noopener noreferrer">
              <img className="contact-icons" src="./images/github.svg" alt="github"/>
            </a>
          </div>
          <div>
            <a href="mailto:krandles@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="contact-icons" src="./images/gmail.svg" alt="gmail"/>
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/krandles" target="_blank" rel="noopener noreferrer">
              <img className="contact-icons" src="./images/linkedin.svg" alt="linkedin"/>
            </a>
          </div>
          <div>
            <a href="https://medium.com/@krandles" target="_blank" rel="noopener noreferrer">
              <img className="contact-icons" src="./images/medium.svg" alt="medium"/>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/krandles" target="_blank" rel="noopener noreferrer">
              <img className="contact-icons" src="./images/twitter.svg" alt="twitter"/>
            </a>
          </div>
        </div>
        <p>Not much to see here yet...</p>
      </div>
    );
  }
}

export default App;
