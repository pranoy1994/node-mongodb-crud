const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
   console.log('Connected to MongoDB server');
   /*db.collection('Todos').insertOne({
       text: 'Somthing to do',
       completed: false
   },(err, res) => {
       if(err){
           return console.log('Unable to insert', err);
       }
       console.log(JSON.stringify(res.ops, undefined, 2));
   });
    */
   /* 
    db.collection('Users').insertOne({
        firstName: "Pranoy",
        lastName: "Biswas",
        age: 22
    },(err, res) =>{
       if(err){
           return console.log("Unable to insert..", err);
       } 
        console.log("inserted", JSON.stringify(res.ops, undefined, 2));
    });
    
    */
    db.close();
});