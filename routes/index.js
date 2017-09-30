const path = require('path');
const Todo = require('../models/Todo.js');

module.exports = app => {
  // get todo based on type
  app.get('/api/todos', (req, res) => {
    const { status } = req.query;
    let completed;
    if (status === 'complete') {
      completed = true;
    } else {
      completed = false;
    }

    Todo.find({completed: completed})
    .then(todos=>{
      res.json(todos);
    })
    .catch(err=>{
      console.log("error retrieving todos");
      res.status(500).end();
    })
  });

  // add new todo
  app.post('/api/todos', (req, res) =>{
    const newTodo = req.body;
    Todo.create(newTodo)
    .then(()=>{
      res.json(200);
    })
    .catch(err=>{
      console.log("error adding todos");
      res.status(500).end();
    })
  });

  // update / toggle todo status
  app.put('/api/todo/:id', (req, res)=>{
    const { id } = req.params;
    const todo = req.body;
    Todo.update({_id: id}, {completed: todo.completed})
    .then(()=>{
      res.json(200);
    })
    .catch(err=>{
      console.log("error updating todo");
      res.status(500).end();
    })
  })
}
