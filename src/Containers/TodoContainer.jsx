import React from 'react'
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';

import TodoStore from '../flux-infra/TodoStore';
import {Container} from 'flux/utils';

class TodoContainer extends React.Component {

    static getStores(){
        return [TodoStore];
    }

    static calculateState(prevState) {
        return {
            todos: TodoStore.getState()
        };
    }

  addTodo(newTodo) {
    const todos = this.state.todos;

    this.setState({
      todos: [...todos, newTodo]
    })
  }

  render(){
    const {todos} = this.state;

    return (
      <div>
        <AddTodo onAdd={this.addTodo.bind(this)} />
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default Container.create(TodoContainer);