import React from 'react'
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';

class TodoContainer extends React.Component {

  render(){
    const todos = [
      'buy milk',
      'walk the cat'
    ];
    return (
      <div>
        <AddTodo/>
        <TodoList todos={todos}/>
      </div>
    )
  }
}
export default TodoContainer;
