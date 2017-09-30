import React from 'react';


const AddTodo = ({ addComment }) => {
  let input;
  return(
    <div className="container">
      <form >
        <h4>Add Todo:</h4> <br/>
        <input
        name="newComment"
        onChange={e=>{input = e.target.value}}
        />
        <br />
        <button onClick={(e)=>{e.preventDefault();addComment(input);}}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
