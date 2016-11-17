export default dispatch => action => {

  if (action.type === 'todos/fetch'){

    return fetch('https://jsonplaceholder.typicode.com/todos')

      .then(response => ({
        type: 'todos/update',
        todos: response
          .json()
          .map(i => i.title)
          .filter((_, index) => index < 11)
      }))

      .then(dispatch)

      .catch(err => {
          dispatch({ type: 'todos/fetch/error', err })
      })

  }

}
