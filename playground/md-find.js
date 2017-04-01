const {MongoClient , ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = { name:'Sreesha', age:22 };
var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //find() returns a cursor object
  //which can be used to call various methods to retreive data
  //toArray() returns a promise

  // db.collection('Todos').find({
  //   _id: new ObjectID("58df4eb7259fa713d1490f04")
  // }).toArray().then(
  //   (docs)=>{
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //     console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then(
  //   (count)=>{
  //     console.log('Todos Count : ',count);
  // },(err)=>{
  //     console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name:'Jen'}).toArray().then(
    (docs)=>{
      console.log('Todos');
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('Unable to fetch todos',err);
  });
  db.close();
});
