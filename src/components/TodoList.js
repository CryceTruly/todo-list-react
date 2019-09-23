import React from 'react'

const TodoItem = props =>
  <tbody data-cy='listItem' className={props.isCompleted? "completed":null}>
    <tr className="view"><td>{props.id}</td><td style={{textDecoration:props.isCompleted?'line-through':''}}><label>{props.name}</label></td>
    <td><input className="toggle" type="checkbox" checked={props.isCompleted}  onChange={()=>props.handleToogle(props.id)}/></td>
    <td><button className='remove' onClick={()=>props.handleRemove(props.id)}>x</button></td>
    </tr>
  </tbody>

export default props =>
<div>
  <table className="todo-list">
    <thead>
    </thead>
    {props.todos.map(todo => <TodoItem handleRemove={props.handleRemove} handleToogle={props.handleToogle}  key={todo.id} {...todo}/>)}
  </table>
  </div>
  