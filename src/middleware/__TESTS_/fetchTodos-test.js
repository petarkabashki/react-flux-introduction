import fetchTodos from '../fetchTodos'

describe('fetchTodos', () => {

  const mockedFetch = () => Promise.resolve([{title: 'bla'}])
  const mockedDispatch = () => {}

  beforeEach(() => {
    global.fetch = (url) => (Promise.resolve({text: 'limbo'}))
    // fetchTodos.__set__('fetch', mockedFetch);
    // fetchTodos.__set__('fetch', mockedFetch)
  })

  it('fetch if action is todos/fetch', (done) => {

      const mockedFetch = (url) => {
        expect(url).toEqual('https://jsonplaceholder.typicode.com/todos')
        done()
      }

      fetchTodos(mockedDispatch)({type: 'todos/fetch'})

  })
})
