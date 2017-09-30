import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import Todo from './Todo.jsx';

class TodoList extends React.Component {

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
    let { todos, completeTodo } = this.props;
    return (
      <ul>
        {
          _.map(todos, todo =>(<Todo key={todo._id} todo={todo} completeTodo={completeTodo}/>))
        }
      </ul>
    );
  }

}

export default TodoList;
