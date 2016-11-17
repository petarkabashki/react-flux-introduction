export const getInitialState = () => [];

export const reduce = (state, action) => {
  switch (action.type) {
      case 'todo/create':
        return [...state, action.text];

      case 'todo/delete':
        return state.filter((item, index) => index !== action.index );

      case 'todos/update':
        return [...state, ...action.todos];

    default:
      return state;
  }
}
