import {ReduceStore} from 'flux/utils';
import TodoDispatcher from './TodoDispatcher';
import {getInitialState, reduce} from './StoreImpl';

export class TodoStore extends ReduceStore {
  getInitialState(){
      return getInitialState();
  }

  reduce (state, action) {
    return reduce(state, action)
  }
}


// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new TodoStore(TodoDispatcher);
export default instance;
