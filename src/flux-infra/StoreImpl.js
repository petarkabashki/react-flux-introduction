export const getInitialState = () => [
  'Shave',
  'Have coffee'
];

export const reduce = (state, action) => {
  switch (action.type) {
      case 'todo/create':
      return [...state, action.text];

    default:
      return state;
  }
}
