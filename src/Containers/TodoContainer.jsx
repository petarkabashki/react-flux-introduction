import React from 'react'
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';

class TodoContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        'buy milk',
        'walk the cat'
      ]
    }
  }

  render(){
    const {todos} = this.state;
    return (
      <div>
        <AddTodo/>
        <TodoList todos={todos}/>
      </div>
    )
  }
}
export default TodoContainer;
