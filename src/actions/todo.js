import {CREATE_NEW_TODO,DELETE_TODO,TOGGLE_TODO_CHECKED } from './types';


export const createTodo = todo => {
      return{
        type: CREATE_NEW_TODO,
        payload: todo
      }
};

export const deleteTodo = todo => {
  return{
    type: DELETE_TODO,
    payload: todo
  }
}

  export const  handleItemCompleteChecked = todos => {
    return{
      type: TOGGLE_TODO_CHECKED,
      payload: todos
    } 
};
