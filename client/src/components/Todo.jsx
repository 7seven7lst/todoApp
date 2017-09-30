import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';

class Todo extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render the component.
   */
  render() {
    let { todo , completeTodo } = this.props;
    return (
      <li key={todo._id} onClick={()=>completeTodo(todo)}>{todo.description}</li>
    );
  }

}

export default Todo;
