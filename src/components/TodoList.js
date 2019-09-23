import React from 'react';
import TodoItem from "./TodoItem";

const TodoList=(props) =>
<div>
  <table className="table">
    <thead>
    </thead>
    {props.todos.map(todo => <TodoItem handleRemove={props.handleRemove} handleToogle={props.handleToogle}  key={todo.id} {...todo}/>)}
  </table>
  </div>

  export default TodoList;
  