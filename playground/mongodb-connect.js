// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log(err);
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').insertOne({
      name: 'Ethan',
      age: 25,
      location: '666 Gail Ave, SunnyVale'
    },(err, result) => {
      if(err) {
        return console.log(err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
