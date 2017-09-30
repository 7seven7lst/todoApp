// Require dependencies
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

// Define Article schema
const TodoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
});
 
 // Export the model
module.exports = mongoose.model('Todo', TodoSchema);
