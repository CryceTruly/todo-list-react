import React from 'react'
import TodoApp from './components/TodoApp';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <TodoApp/>
            </Provider> 
         )
    }
   
}

export default App
