import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './Containers/TodoContainer';

class App extends Component {

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React Flux Introduction</h2>
            </div>
            <p className="App-intro">
            </p>
            <TodoContainer />
          </div>
        );
  }
}

export default App;

