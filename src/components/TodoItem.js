import React from 'react'

function TodoItem(props) {
  return (
    <li  className='list-group-item'>
    <input className="toggle mr-4" type="checkbox" checked={props.isCompleted}  onChange={()=>props.handleToogle(props.id)}/>
   
   <strong>{props.id}#</strong> <span style={{textDecoration:props.isCompleted?'line-through':''}}><label>{props.name}</label></span>
   <button className='btn btn-danger btn-sm float-right' onClick={()=>props.handleRemove(props.id)}>x</button>
  
  </li>
  )
}

export default TodoItem;