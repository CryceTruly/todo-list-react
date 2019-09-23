import React from "react";
import {shallow } from "enzyme";
import  TodoItem  from "../../components/TodoItem";
describe("TodoApp", () => {

  const props = {
    handleRemove:jest.fn(),handleToogle:jest.fn(),
    todos:[{
        id:1,name:'test',isCompleted:false
    }]
  };


    const wrapper = shallow(<TodoItem {...props}/>);

  it("should render a todo list", () => {
    const wrapper = shallow(<TodoItem {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });


  it('should toggle todo completion',()=>{
    const wrapper = shallow(<TodoItem {...props}/>);
    expect(wrapper.find('.toggle')).toBeTruthy()

  })
});