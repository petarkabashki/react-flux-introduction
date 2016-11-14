import React from 'react'
import AddTodo from '../Components/AddTodo';
import TodoList from '../Components/TodoList';

class TodoContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    setTimeout(function(){
      this.setState({
        todos: [
          'buy milk',
          'walk the cat'
        ]
      })
    }.bind(this), 2000)
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
