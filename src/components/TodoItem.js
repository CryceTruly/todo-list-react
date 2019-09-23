import React from 'react'

const TodoItem = props =>
  <tbody  className={props.isCompleted? "completed":null}>
    <tr className="view"><td>{props.id}</td><td style={{textDecoration:props.isCompleted?'line-through':''}}><label>{props.name}</label></td>
    <td><input className="toggle" type="checkbox" checked={props.isCompleted}  onChange={()=>props.handleToogle(props.id)}/></td>
    <td><button className='remove' onClick={()=>props.handleRemove(props.id)}>x</button></td>
    </tr>
  </tbody>

  export default TodoItem;