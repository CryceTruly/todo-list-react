import {  CREATE_NEW_TODO,DELETE_TODO,TOGGLE_TODO_CHECKED} from '../actions/types';

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
        return {
          ...state,
          todos:state.todos.filter(t=>t.id!==action.payload
          ) 
        };
    case TOGGLE_TODO_CHECKED:
      const newState={
        ...state,
        todos:action.payload
      }
        return newState;  
    default:
      return state;
  }
}
