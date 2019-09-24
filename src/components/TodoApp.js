import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {createTodo,deleteTodo,handleItemCompleteChecked} from '../actions/todo';
import {connect} from 'react-redux';
import Footer from './Footer';
import Moment from "react-moment";


class TodoApp extends Component {

 state = {
      
 }
handleNewTodoChange=(evt)=>{
  this.setState({[evt.target.name]:evt.target.value});
}
handleRemove=(id)=>{
    this.props.deleteTodo(id);
}
todoExists=todo=>{
  let exists=false;
    this.props.todos.forEach(item=>{
      if(todo===Object.values(item)[0]){
          exists= true;
      }
  })
  return exists;
}

handleSubmit=(event)=>{
  event.preventDefault();
  const todo={
    name:this.state.name,
    isCompleted :false,
    id:this.props.todos.length+1,
    createdAt:new Date().toUTCString()
  }
    if(todo.name && !this.todoExists(todo.name)){
      this.props.createTodo(todo);
    }
    }
    

handleToogle=id=>{
    const targetTodo=this.props.todos.find(t=>t.id===id)
    const updated={
      ...targetTodo,
      isCompleted:!  targetTodo.isCompleted
    }
    const todos=this.props.todos.map(t=>t.id===updated.id?updated:t)
    this.props.handleItemCompleteChecked(todos)
  }
  

  render () {
    const {todos}=this.props;
    const unCompletedTodos=todos.filter(todo=>todo.isCompleted===false)
    return (
        <div className='container my-5'>

<div className="card">
        <div className="card-body">

        <h5 className="card-title">TodoList</h5>
        <h6 className="card-subtitle mb-2 text-muted">All Left</h6>
          <div className='row'>
          <div className='col-md-3'>
          <div className="list-group">
            {unCompletedTodos.length===0?(<p className='lead'>Nothing todo</p>):(null)}
            {unCompletedTodos.map(todo=>(
              <button  className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">#{todo.id}</h5>
                  <small> {<Moment fromNow>{todo.createdAt}</Moment>}</small>
                </div>
                <p className="mb-1"></p>
                <small className='text-truncate' style={{overflow:'hidden'}}>{todo.name}</small>
              </button>
            
            ))}
              </div>
              </div>
          
            <div className='col-md-9'>

            <TodoForm 
            handleNewTodoChange={this.handleNewTodoChange}
            handleSubmit={this.handleSubmit}
            />
                 <section className="mb-5">
            { todos.length===0?(<h3 className='text-info lead my-5'>No todos today,woo!</h3>):(
               <TodoList todos={todos} handleRemove={this.handleRemove}  handleToogle={this.handleToogle}/>
          )}
           </section>

           <Footer todos={todos} incompleteTodos={todos.filter(one=>one.isCompleted===false)}/>
         
            </div>
          </div>
      </div>
    </div>
    </div>
    )
  }
}


export const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { deleteTodo,createTodo,handleItemCompleteChecked })(TodoApp);
