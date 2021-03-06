// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log(err);
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({name: "Ethan"}).toArray().then((docs) => {
      console.log('Users:');
      console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
      console.log('Unable to fetch Users', err);
    });

    db.close();
});
