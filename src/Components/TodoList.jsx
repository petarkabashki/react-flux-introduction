import React from 'react'

const TodoList  = (props) => {
  const {todos} = props;
  const {deleteTodo} =props;

  if (todos.length === 0) {
    return <p>No todos</p>
  }

  return (
    <ul>
        {todos.map((item, index) => <li key={item + index}><span>{item}</span> <button onClick={() => {
            deleteTodo(index);
        }}> X</button></li>)}
    </ul>
  )
}
export default TodoList;
