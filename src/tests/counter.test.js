import React from 'react'
import Enzyme,{mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Counter from '../components/Home/Counter'
Enzyme.configure({adapter:new Adapter()})

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Counter/>);
  });
  test("Failed Test Case",()=>{
    const foo=false
    expect(foo).toBe(true)
  })
  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrrment button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});