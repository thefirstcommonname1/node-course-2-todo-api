const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db) {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("58c23f4560c5b8d9fe3fea88")}, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then(function(result) {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58c2eab060c5b8d9fe3fef4b")
  }, {
    $set: {
      name : "Bishav"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(function(result) {
    console.log(result);
  })

  // db.close();
});
