const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "58c2ff11cfa3883815d6c53e";

if (!ObjectID.isValid(id)) {
  console.log("id not valid");
}

User.findById(id).then(function(todo) {
  console.log("Todo", todo);
}).catch(function(e){
  console.log(e);
});
// Todo.find({
//   _id: id
// }).then(function(todos){
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(function(todo){
//   console.log("Todos", todo);
// });

// Todo.findById(id).then(function(todo){
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by Id", todo);
// }).catch(function(e) {
//   console.log(e);
// });
