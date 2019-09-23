import React from 'react'

export default props =>
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.incompleteTodos.length}</strong> todos left
    </span>
    <ul className="filters">
      <li>All</li>{''} {props.todos.length}
    </ul>
  </footer>
