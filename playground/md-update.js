const {
  MongoClient,
  ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {
  name: 'Sreesha',
  age: 22
};
var {
  name
} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate( /*Filter*/ {
  //     _id: new ObjectID('58e09d324c735199ffddbafa')
  //   }, /*Update*/ {
  //     //Update operators
  //     $set: {
  //       completed: true
  //     }
  //   }, /*Options*/ {
  //     returnOriginal: false
  //   }).then((result) => {
  //       console.log(result);
  //   });

    db.collection('Todos').findOneAndUpdate( /*Filter*/ {
        _id: new ObjectID('58df4ff51311cd1431934178')
      }, /*Update*/ {
        //Update operators
        $set: {
          name: 'Andrew'
        },
        $inc:{
          age:1
        }
      }, /*Options*/ {
        returnOriginal: false
      }).then((result) => {
          console.log(result);
      });

//db.close();
});
