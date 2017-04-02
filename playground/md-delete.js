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

  //deleteMany
  // db
  // .collection('Todos')
  // .deleteMany({text:'Eat Lunch'})
  // .then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos')
  //   .deleteOne({
  //     text: 'Eat Lunch'
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });
  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed:'false'
  // }).then(()=>{
  //   console.log(result);
  // });
  //db.close();
});
