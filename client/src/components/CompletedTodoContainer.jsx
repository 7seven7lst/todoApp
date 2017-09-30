import React from 'react';
import axios from 'axios';
import TodoList from './TodoList.jsx';

class CompletedTodoContainer extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    axios.get('/api/todos?status=complete')
    .then(result=>{
      console.log("result is >>>", result.data);
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
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

}

export default CompletedTodoContainer;
