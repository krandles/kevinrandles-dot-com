import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kevin Randles</h1>
        <div className="contact-logos-container">
          <div>
            <a href="https://github.com/krandles" target="_blank" rel="noopener noreferrer" >
              <img className="contact-icons" src="./images/github.svg" alt=""/>
            </a>
          </div>
          <div>
            <a href="mailto:krandles@gmail.com" target="_blank" rel="noopener noreferrer" >
              <img className="contact-icons" src="./images/gmail.svg" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/krandles" target="_blank" rel="noopener noreferrer" >
              <img className="contact-icons" src="./images/linkedin.svg" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://medium.com/@krandles" target="_blank" rel="noopener noreferrer" >
              <img className="contact-icons" src="./images/medium.svg" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/krandles" target="_blank"  >
              <img className="contact-icons" src="./images/twitter.svg" alt=""/>
            </a>
          </div>
        </div>
        <p>Not much to see here yet...</p>
      </div>
    );
  }
}

export default App;
