export default (dispatch) => (action) => {

  console.log('action', action.type);

  if (action.type === 'todo/create'){

    setTimeout(() => {
      dispatch({
        type: 'later on'
      })
    }, 500);

  }

}
