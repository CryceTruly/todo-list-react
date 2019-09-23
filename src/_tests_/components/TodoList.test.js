import React from "react";
import {shallow } from "enzyme";
import  TodoList  from "../../components/TodoList";
describe("TodoApp", () => {
  const props = {
    handleRemove:jest.fn(),handleToogle:jest.fn(),
    todos:[]
  };
  it("should render a todo list", () => {
    const wrapper = shallow(<TodoList {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});