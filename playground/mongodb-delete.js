const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db) {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");
  var collection = db.collection('Users');
  //delete one

  // collection.deleteOne({text: 'Eat Lunch'}, function(err, results) {
  //   if (err) {
  //     throw new Error("New error");
  //   }
  //   console.log(results);
  // });


  //delete many
  // collection.deleteMany({text: 'Eat Lunch'}, function(err, results){
  //   if (err) {
  //     throw new Error("New error");
  //   }
  //   console.log(results);
  // });

  //findanddeleteone
  // collection.findOneAndDelete({completed: false}, function(err, data) {
  //   if (err) {
  //     throw new Error("New Error");
  //   }
  //   console.log(data);
  // })

  
  collection.deleteMany({name: "Bishav"}).then(function(results) {
    console.log(results);
  })

  // db.close();
});
