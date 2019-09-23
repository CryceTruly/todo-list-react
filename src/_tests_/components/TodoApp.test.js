import React from "react";
import { shallow,mount } from "enzyme";
import  TodoApp  from "../../components/TodoApp";
import store from '../../store';

describe("TodoApp", () => {
  const props = {
    deleteTodo:jest.fn(),createTodo:jest.fn(),handleItemCompleteChecked :jest.fn(),
    todos:[]
  };
  it("should render parcels view", () => {
    const wrapper = mount(<TodoApp {...props} store={store}/>);
    expect(wrapper).toMatchSnapshot();
  });
});