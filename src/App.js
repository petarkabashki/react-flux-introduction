import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoContainer from './Containers/TodoContainer'
import Dispatcher from './flux-infra/TodoDispatcher'
import { dispatch } from './flux-infra/TodoDispatcher'
import middleware from './middleware'


// Init middleware list
middleware.forEach(mw => Dispatcher.register(mw(dispatch)))

class App extends Component {

    componentDidMount() {
      dispatch({type: 'todos/fetch'})
    }

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
        )
  }
}

export default App
