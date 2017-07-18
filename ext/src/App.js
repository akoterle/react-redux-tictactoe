import React, { Component } from 'react';
import { Panel } from '@extjs/ext-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ExtReact</h2>
        <Panel title="ExtReact Panel" />
        </div>

      </div>
    );
  }
}

export default App;
