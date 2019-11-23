import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {

});

it('renders counter display', () => {

});

it('starts with counter set to 0', () => {

});

it('should increment counter when increment button is clicked', () => {

});