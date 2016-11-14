import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  render() {
    const todos = [
      'buy milk',
      'walk the cat'
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Flux Introduction</h2>
        </div>
        <p className="App-intro">
          <AddTodo/>
          <TodoList todos={todos}/>
        </p>
      </div>
    );
  }
}

export default App;
