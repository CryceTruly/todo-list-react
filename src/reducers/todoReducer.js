import {  CREATE_NEW_TODO,GET_ALL_TODOS,DELETE_TODO,TOGGLE_TODO_CHECKED} from '../actions/types';

const initialState = {
  todos: []
 
};

export default function(state = initialState, action) {
  
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case CREATE_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
      case DELETE_TODO:
          return {
            ...state,
            todos:state.todos.filter(t=>t.id!==action.payload)
          };

          case TOGGLE_TODO_CHECKED:
          return {
            ...state,
            todos:action.payload
          };

      
    default:
      return state;
  }
}