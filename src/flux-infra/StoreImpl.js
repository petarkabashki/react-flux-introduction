export const getInitialState = () => [
  'Shave',
  'Have coffee'
];

export const reduce = (state, action) => {
  switch (action.type) {
      case 'todo/create':
      return [...state, action.text];

      case 'todo/delete':
          return state.filter((item,index)=>index!=action.index);

    default:
      return state;
  }
}
