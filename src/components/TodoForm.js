import React from 'react'

export default props =>
  <form onSubmit={props.handleSubmit}>
     <input
      type='text'
      className="new-todo"
      name="name"
      required
      onChange={props.handleNewTodoChange} 
      autoFocus
      placeholder="What needs to be done?"/>
  </form>
