import React from "react";
import {shallow,mount } from "enzyme";
import  TodoItem  from "../../components/TodoItem";
describe("TodoApp", () => {
let shallowWrapper,mountWrapper;
  

beforeAll=(()=>{
  const props = {
    handleRemove:jest.fn(),handleToogle:jest.fn(),
    todos:[{
        id:1,name:'test',isCompleted:false
    }]
  };
  shallowWrapper = shallow(<TodoItem {...props}/>);
  mountWrapper=mount(<TodoItem {...props}/>);
  
});
  

  it("should render a todo list", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

});
