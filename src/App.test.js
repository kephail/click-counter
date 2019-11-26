import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 *
 * Factory function to create a ShallowWrapper
 * for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s)
 * with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

it("Renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it("Renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

it("Starts with counter set to 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("count");
  expect(initialCounterState).toBe(0);
});

describe("Increment Button", () => {
  it("Renders without error", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  it("Should increment counter when clicked", () => {
    const count = 7;
    const wrapper = setup(null, { count });

    // Find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");

    // Find count and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(parseInt(counterDisplay.text())).toEqual(count + 1);
  });

  it("Should clear the error if the error is being displayed.", () => {
    const wrapper = setup(null, { error: true });

    // check if error-message component is visible
    let errorDiv = findByTestAttr(wrapper, "error-message");
    expect(errorDiv.length).toBe(1);

    // Find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");

    // check if error-message component is not visible
    errorDiv = findByTestAttr(wrapper, "error-message");
    expect(errorDiv.length).toBe(0);
  });
});

describe("Decrement Button", () => {
  it("Renders without error", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  it("Should decrement counter when decrement button is clicked", () => {
    const count = 7;
    const wrapper = setup(null, { count });

    // Find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    // Find count and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(count - 1);
  });

  it("Should not allow the count to go below 0", () => {
    const count = 0;
    const wrapper = setup();

    // Find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    // Find count and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(count);
  });

  it("Should display an error if clicked when the count is 0", () => {
    const wrapper = setup();

    // Find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    // check if error-message component is visible
    const errorDiv = findByTestAttr(wrapper, "error-message");
    expect(errorDiv.length).toBe(1);
  });
});
