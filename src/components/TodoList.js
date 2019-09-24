import React from 'react';
import TodoItem from "./TodoItem";

const TodoList=(props) =>
<div>
  <ul className='list-group'>
  {props.todos.map(todo => <TodoItem handleRemove={props.handleRemove} handleToogle={props.handleToogle}  key={todo.id} {...todo}/>)}
  </ul>
   
  </div>

  export default TodoList;
  