const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
   console.log('Connected to MongoDB server');
  
    //deleteMany
    /*db.collection('Todos').deleteMany({text: "Walk the dog"}).then((result)=>{
        console.log("result: "+result);
    },(err)=>{
        
    });*/
    //deleteOne.. same as delete many but it delets only the first match
    
    
    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result)=>{
        console.log(result);
    });
    */
    //5917cf72bee55ee097da4829
    
    /*db.collection('Users').deleteMany({firstName:"Pranoy"}).then((result)=>{
        console.log(result);
    },(err)=>{
       console.log("Some Error occured..", e); 
    });*/
    
    db.collection('Users').findOneAndDelete({_id: new ObjectId("5917cf72bee55ee097da4829")}).then((result) =>{
        console.log(result);
    });
    
    
  
   // db.close();
});