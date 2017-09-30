import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';

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
    let { todos } = this.props;
    return (
      <ul>
        {
          _.map(todos, todo =>{
            console.log('todo is >>>', todo);
            return (<li key={todo.id}>{todo.description}</li>)
          })
        }
      </ul>
    );
  }

}

export default TodoList;
