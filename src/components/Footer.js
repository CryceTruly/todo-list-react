import React from 'react'

export default props =>{
const {incompleteTodos,todos}=props;
let completion=((todos.length-incompleteTodos.length)/todos.length)*100

return(
  <footer className="container">
    <span className="mr-4">
      <strong className='badge badge-lg badge-primary'>{incompleteTodos.length}</strong> Todos left
    </span>
    <span>All Todos</span>{''} <span className='badge badge-lg badge-info'>{todos.length}</span>


<div className='mt-4'>
<h5>Completed {todos.length-incompleteTodos.length} of {todos.length} tasks</h5>
<div className="progress">
    
    <div className="progress-bar" role="progressbar" style={{width: `${completion}%`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
  </div>
</div>
   
  </footer>

);
}
