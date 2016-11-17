var Promise = require('es6-promise').Promise;
import fetchTodos from '../fetchTodos'

describe('fetchTodos', () => {

  const mockedFetch = () => Promise.resolve([{title: 'bla'}])
  const mockedDispatch = () => {}

  beforeEach(() => {
    global.fetch = (url) => (new Promise((res, rej) => {
      setTimeout(() => {
          rej('bam');
          console.error('bam')
      }, 500)
    }))
    // fetchTodos.__set__('fetch', mockedFetch);
    // fetchTodos.__set__('fetch', mockedFetch)
  })

  it('fetch if action is todos/fetch', (done) => {

      // const mockedFetch = (url) => {
      //   expect(url).toEqual('https://jsonplaceholder.typicode.com/todos')
      //   done()
      // }

      fetchTodos(mockedDispatch)({type: 'todos/fetch'})
          .catch((err) => {
              console.error('bas')
              done(err)
          })
          .then(() => done())

  })
})
