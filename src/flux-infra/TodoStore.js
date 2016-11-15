import {ReduceStore} from 'flux/utils';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
  getInitialState() {
    return [
        'Shave',
        'Have coffee'
    ];
  }

  reduce (state, action) {
    switch (action.type) {
        case 'todo/create':
        return [...state, action.text];

      default:
        return state;
    }
  }
}


// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new TodoStore(TodoDispatcher);
export default instance;
