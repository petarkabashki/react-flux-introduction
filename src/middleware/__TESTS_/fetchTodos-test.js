var Promise = require('es6-promise').Promise;
import fetchTodos from '../fetchTodos'

describe('fetchTodos', () => {

    it('should dispatch todos/fetch/error action when fetch fails', (done) => {

      global.fetch = (url) => Promise.reject()

      const mockedDispatch = action => {
          expect(action.type).toEqual('todos/fetch/error')
          done()
      }

      fetchTodos(mockedDispatch)({type: 'todos/fetch'})

    })

    it('should dispatch todos/update action when fetch succeeds', (done) => {

        global.fetch = (url) => Promise.resolve({json : () => []})

        const mockedDispatch = action => {
            expect(action.type).toEqual('todos/update')
            done()
        }

        fetchTodos(mockedDispatch)({type: 'todos/fetch'})

    })

})
