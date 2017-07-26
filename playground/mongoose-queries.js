const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59790d777a3917241bdf496c';
//return the todos array
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

//return only one object
Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findById(id).then((todos) => {
  console.log('Todos', todos);
});
