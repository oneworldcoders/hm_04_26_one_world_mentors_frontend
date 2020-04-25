import React from 'react';
import { shallow } from 'enzyme'
import Login, { handleSubmit, email, password } from '../pages/Login';


describe('Login Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders a form element', () => {
    const form = wrapper.find('form')
    expect(form.length).toBe(1)
  });

  it('renders an image', () => {
    const form = wrapper.find('img')
    expect(form.length).toBe(1)
  });
});


describe('Login Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should call handleSubmit', () =>{
    const handleSubmit = jest.fn()
    wrapper.find("form")
        .simulate("submit", { preventDefault()  {}, })    
    expect(handleSubmit).toHaveBeenCalled
  });

  it('handles password change', () =>{
    const onPasswordChange = jest.fn()
    const event = { target: {value: 'x'}, }
    wrapper.find("#loginPasswordInput")
        .simulate("change", event)    
    expect(onPasswordChange).toHaveBeenCalled
  });

  it('handles email change', () =>{
    const handleEmailChange = jest.fn()
    wrapper.find("#loginEmailInput")
        .simulate("change", { target: {value: ''}, })    
    expect(handleEmailChange).toHaveBeenCalled
  });

});


describe('Login Action', () => {
  xit('submits successfully', () => {
    handleSubmit()
  })
});
