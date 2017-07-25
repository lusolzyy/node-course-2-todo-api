// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log(err);
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete All that match requirement
    //
    // db.collection('Users').deleteMany({name: "Ethan"}).then((result) => {
    //   console.log(result);
    // });
    //


    //delete the first One

    // db.collection('Users').deleteOne({name: "Ethan"}).then((result) => {
    //   console.log(result);
    // });

    //find the first One And Delete

    db.collection('Users').findOneAndDelete({name: "Ethan"}).then((result) => {
      console.log(result);
    });


    db.close();
});
