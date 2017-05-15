const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
   console.log('Connected to MongoDB server');
  //------------------------------------------------------------
    
    /*db.collection('Todos').findOneAndUpdate({
     _id: new ObjectId("591971dabee55ee097da50c5")
  }, {
      $set: {
          completed: true
      }
  },{
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  });*/
    
    //---------------------------------------------------------
    
    db.collection('Users').findOneAndUpdate({
     _id: new ObjectId("591991e077d77b1b3c69e375")
  }, {
      $set: {
          firstName: "Peter"
      },
        
        $inc: {
            age: 1
        }
  },{
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  });
    
    
    
    
    
  // db.close();
});