const path = require('path');

let todos = [
  {
    id: 1,
    description: "Test1", 
    completed: false,
  },
  {
    id: 2,
    description: "Test2", 
    completed: false,
  }
]

module.exports = app => {
  app.get('/api/todos', (req, res) => {
    res.json(todos);
  });

  app.post('/api/add/todo', (req, res) =>{
    todos.push({id: 3, description: "haha", completed: false});
    res.json(200);
  });

  app.put('api/todo/:id', (req, res)=>{
    res.json(200);
  })
}
