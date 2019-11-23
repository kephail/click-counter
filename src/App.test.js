import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * 
 * Factory function to create a shallowWrapper 
 * for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {*} state - initial state for setup.
 * @returns {shallowWrapper}
*/
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />)
}

it('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

it('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

it('starts with counter set to 0', () => {

});

it('should increment counter when increment button is clicked', () => {

});