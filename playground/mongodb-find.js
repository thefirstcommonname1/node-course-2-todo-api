const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db) {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");

  // db.collection('Todos').find({
  //   _id: new ObjectID("589fd58fe346108607bd11e1")
  // }).toArray().then(function (docs) {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, function (err) {
  //   console.log("Unable to fetch todos:", err)
  // });
  db.collection('Users').find({name: "Bishav"}).count(function(err, data) {
    if (err) {
      throw new Error("New error");
    }
    console.log(data);
  });
  // db.close();
});
