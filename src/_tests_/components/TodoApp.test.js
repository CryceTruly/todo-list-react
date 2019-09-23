import React from "react";
import {mount } from "enzyme";
import  TodoApp,{mapStateToProps}  from "../../components/TodoApp";
import store from '../../store';
import { Provider } from 'react-redux';


describe("TodoApp", () => {
  let wrapper;
  const props = {
    deleteTodo:jest.fn(),createTodo:jest.fn(),handleItemCompleteChecked :jest.fn(),
    todos:[]
  };
  it("should render TodoApp view", () => {
     wrapper = mount(<Provider store={store}><TodoApp {...props}/></Provider> );
     wrapper.setProps({ props: props});
    expect(wrapper).toMatchSnapshot();
  });


  it('should mapStateToProps',()=>{
    const todoState = {
      todos:{
        todos:[{
          username: "crycetruly",
          email: "crycetruly@gmail.com",
          image: "image",
          bio: "images",
        }]
      } 

    };
    const appState = todoState.todos.todos;
    const componentState = mapStateToProps(todoState);
    expect(componentState.todos).toEqual(appState);
  });
  });