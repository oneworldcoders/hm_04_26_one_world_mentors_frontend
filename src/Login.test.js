import React from 'react';
import { shallow } from 'enzyme'
import Login from './Login';


describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test('renders a form element', () => {
    const form = wrapper.find('form')
    expect(form.length).toBe(1)
  });

  test('renders an image', () => {
    const form = wrapper.find('img')
    expect(form.length).toBe(1)
  });
});
