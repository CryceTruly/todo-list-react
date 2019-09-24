import React from 'react'

export default props =>
  <form onSubmit={props.handleSubmit}>
    <div className='row'>
      <div className='col-md-10'>
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
      </div>

      <div className='col-md-2'><button className='btn btn-info' onClick={props.handleSubmit}>Add New</button></div>
    </div>
   
  </form>
