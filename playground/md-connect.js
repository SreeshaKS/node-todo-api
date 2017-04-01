//Mongo client lets you connect ot a mongo server and issue commands
//Object ID(_id) : 58df54677bd8681655a041bf }- 12 byte value
//First 4 bytes : time stamp
//next 3 bytes : machine identifier
//next 2 byte : process ID
//next 3 byte : random value

//const MongoClient = require('mongodb').MongoClient;
//use destructuring to pull off the object property 'MongoClient'
//from the object returned by the require statement
const {MongoClient , ObjectID} = require('mongodb');

//Create a new instanc of ObjectID
var obj = new ObjectID();
console.log(obj);
//Object Descturcturing : Converting properties
//of an object into a variable
var user = { name:'Sreesha', age:22 };
//The below code removes the name property from the user object
//and stores it in the 'name varible'
var {name} = user;
console.log(name);

//If database TodoApp does not exist, it is automaticaly created
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //return makes sure the rest of the function is not excecuted.
    //If an error does occur ,
    //the message gets logged and the function will stop.
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Collection is an array of tuples , or JSON objects
  // db.collection('Todos').insertOne({
  //   test: 'Something to do ',
  //   completed: 'false'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   //ops attribute will store all the documents that were inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into the Users(name , age, location)
  // db.collection('Users').insertOne(
  //   {
  //     name :'Sreesha',
  //     age:'22',
  //     location:'Bangalore - 560019'
  //   },(err,result)=>{
  //     if(err){
  //         return console.log('Unable to insert data');
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  //   }
  // );

  db.close();
});
