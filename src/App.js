import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Warning! This site is radioactive!  <br/><span class="danger">PLEASE MOVE AWAY AT FULL SPEED!</span>
          </p>
          <a
            className="App-link"
            href="https://www.ready.gov/nuclear-explosion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Survival Tips
          </a>
        </header>
      </div>
    );
  }
}

export default App;
