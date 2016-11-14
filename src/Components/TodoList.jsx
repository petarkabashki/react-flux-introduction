import React from 'react'

const TodoList  = (props) => {
  const {todos} = props;
  return (
      <ul>
        {todos.map(item => <li>{item}</li>)}
      </ul>
  )
}
export default TodoList;
