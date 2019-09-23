import React from "react";
import {shallow } from "enzyme";
import  TodoItem  from "../../components/TodoList";
describe("TodoApp", () => {
    let wrapper;
  const props = {
    handleRemove:jest.fn(),handleToogle:jest.fn(),
    todos:[{
        id:1,name:'test',isCompleted:false
    }]
  };

  beforeAll(()=>{
     wrapper = shallow(<TodoItem {...props}/>);
  })
  it("should render a todo list", () => {
   
    expect(wrapper).toMatchSnapshot();
  });


  it('should toggle todo completion',()=>{
console.log(wrapper.instance());

  })
});