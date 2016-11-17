import {getInitialState, reduce} from '../StoreImpl'

describe('reduce', () => {

    it('returns original state for invalid action',() => {
        const state = ['testState']
        const action = {
          type:'todo/dummy',
          text:'dummy'
        }
        const reduceCalled = reduce(state,action)
        expect(reduceCalled).toEqual(state)
    })

    it('on delete action remove the specific text from state array',() => {
        const state = ['s1','s2','s3']
        const action = {
          type: 'todo/delete',
          index: 1
        }
        const deleted = reduce(state,action)
        expect(deleted).toEqual(['s1','s3'])
    })
})
