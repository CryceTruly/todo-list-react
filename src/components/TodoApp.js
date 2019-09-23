import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

export default class TodoApp extends Component {
 state = {
      todos: []
 }
handleNewTodoChange=(evt)=>{
  this.setState({[evt.target.name]:evt.target.value});
}
handleRemove=(id)=>{
    this.setState({todos:this.state.todos.filter(t=>t.id!==id)})
}
todoExists=todo=>{
  let exists=false
  this.state.todos.forEach(item=>{
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
    id:this.state.todos.length+1
  }

    if(!this.todoExists(todo.name)){
      this.setState({todos:[...this.state.todos,todo]})}


    }
    

handleToogle=id=>{
    const targetTodo=this.state.todos.find(t=>t.id===id)
    const updated={
      ...targetTodo,
      isCompleted:!  targetTodo.isCompleted
    }
    const todos=this.state.todos.map(t=>t.id===updated.id?updated:t)
    this.setState({ todos:todos});
  }
  

  render () {
    return (
        <div>
          <header className="header">
            <h1 className='heading'>TodoList</h1>
            <TodoForm 
            handleNewTodoChange={this.handleNewTodoChange}
            handleSubmit={this.handleSubmit}
          
            />
          </header>
          <section className="main">
            {this.state.todos.length===0?(<p className='info'>No todos today,woo!</p>):(
               <TodoList todos={this.state.todos} handleRemove={this.handleRemove}  handleToogle={this.handleToogle}/>
          )}
           </section>
           <Footer todos={this.state.todos} incompleteTodos={this.state.todos.filter(one=>one.isCompleted===false)}/>
      
          </div>
    )
  }
}
