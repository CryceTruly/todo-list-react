import React from 'react'

export default props =>
  <form onSubmit={props.handleSubmit}>
    <div className='form-group'>
    <input
      type='text'
      className="new-todo form-control"
      name="name"
      required
      onChange={props.handleNewTodoChange} 
      autoFocus
      placeholder="What needs to be done?"/>
    </div>
    
  </form>
