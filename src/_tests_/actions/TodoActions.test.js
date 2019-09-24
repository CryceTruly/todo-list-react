import configureMockStore from "redux-mock-store";
import {
    handleItemCompleteChecked, deleteTodo, createTodo,
} from "../../actions/todo";

import {
    CREATE_NEW_TODO,DELETE_TODO,TOGGLE_TODO_CHECKED
} from "../../actions/types";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe("Todo Actions", () => {

  it("Should create todo", () => {
    const store = mockStore({});
    const todo={id:9,name:'test',isCompleted:false}
    const expectedActions = [{
        type: CREATE_NEW_TODO,
        payload: todo
    }];
     store.dispatch(createTodo(todo))
      expect(store.getActions()).toEqual(expectedActions);
    
  });


  it("Should delete a todo", () => {
    const store = mockStore({});
    const todo={id:9,name:'test',isCompleted:false}
    const expectedActions = [{
        type: DELETE_TODO,
        payload: todo.id
    }];
     store.dispatch(deleteTodo(todo.id))
      expect(store.getActions()).toEqual(expectedActions);
    
  });

  it("Should toggle todo complete checked", () => {
    const store = mockStore({});
    const todos=[{id:9,name:'test',isCompleted:false},{id:10,name:'test2',isCompleted:true}]
    const expectedActions = [{
        type: TOGGLE_TODO_CHECKED,
        payload: todos
    }];
     store.dispatch(handleItemCompleteChecked(todos))
      expect(store.getActions()).toEqual(expectedActions);
    
  });

});
