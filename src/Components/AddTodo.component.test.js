import React from 'react'
import { shallow } from 'enzyme'
import AddTodo from './AddTodo.jsx'

describe('<AddTodo />', () => {

  it('says yop', () => {
    let flag = false
    const props = {onAdd : () => {flag = true}}
    const wrapper = shallow(<AddTodo {...props} />)
    wrapper.find('button').simulate('click');
    expect(flag).toEqual(true)
  });

});
