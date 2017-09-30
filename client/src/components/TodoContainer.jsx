import React from 'react';
import axios from 'axios';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';

class TodoContainer extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    axios.get('/api/todos?status=incomplete')
    .then(result=>{
      this.setState({
        todos: result.data
      })
    })
  }

  addTodo(todo){
    axios.post('/api/todos', 
      {
        description: todo
      }
    )
    .then(()=>{
      return axios.get('/api/todos?status=incomplete')
    })
    .then(result=>{
      this.setState({
        todos: result.data
      })
    })
  }

  completeTodo(todo){
    todo.completed = !todo.completed;
    axios.put(`/api/todo/${todo._id}`, todo)
    .then(()=>{
      return axios.get('/api/todos?status=incomplete')
    })
    .then(result =>{
      this.setState({
        todos: result.data
      })
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo}/>
        <AddTodo addComment={this.addTodo} />
      </div>
    );
  }

}

export default TodoContainer;
