import React from 'react'
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';

import TodoStore from '../flux-infra/TodoStore';
import {Container as FluxStoreWrapper} from 'flux/utils';

import {dispatch} from '../flux-infra/TodoDispatcher';

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
      dispatch({type: 'todo/create', text: newTodo})
  }
  deleteTodo(index){
        dispatch({type:'todo/delete',index :index});
  }

  render(){
    const {todos} = this.state;

    return (
      <div>
        <AddTodo onAdd={this.addTodo.bind(this)} />
        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default FluxStoreWrapper.create(TodoContainer);
