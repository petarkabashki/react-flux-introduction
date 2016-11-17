export default dispatch => action => {

  if (action.type === 'todos/fetch'){

    return Promise.resolve({
      type: 'todos/update',
      todos: ['Salt', 'Pepper']
    }).then(dispatch)

  }

}
