import React from 'react'

const TodoList  = (props) => {
  const {todos} = props;

  if (todos.length === 0) {
    return <p>No todos</p>
  }

  return (
    <ul>
      {todos.map((item, index) => <li key={item + index}>{item}</li>)}
    </ul>
  )
}
export default TodoList;
