const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove()

// Todo.remove({}).then(function(results) {
//   console.log(results);
// });

//Todo.findOneAndRemove
Todo.findByIdAndRemove('58c5c53a60c5b8d9fe401720').then(function(docs) {
  console.log(docs);
});

//Todo.findByIdAndRemove
