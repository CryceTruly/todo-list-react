import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {createTodo,deleteTodo,handleItemCompleteChecked} from '../actions/todo';
import {connect} from 'react-redux';
import Footer from './Footer';
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
  let exists=false
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
    id:this.props.todos.length+1
  }

    if(!this.todoExists(todo.name)){
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
    return (
        <div className='container'>
          <header className="header">
            <h1 className='heading'>TodoList</h1>
            <TodoForm 
            handleNewTodoChange={this.handleNewTodoChange}
            handleSubmit={this.handleSubmit}
            />
          </header>
          <div>
            <section className="main">
            { todos.length===0?(<p className='info'>No todos today,woo!</p>):(
               <TodoList todos={todos} handleRemove={this.handleRemove}  handleToogle={this.handleToogle}/>
          )}
           </section>
           <Footer todos={todos} incompleteTodos={todos.filter(one=>one.isCompleted===false)}/>
           </div>
          </div>
    )
  }
}


export const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { deleteTodo,createTodo,handleItemCompleteChecked })(TodoApp);