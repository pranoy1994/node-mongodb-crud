var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/Todo");
var {Users} = require("./models/Users");

var app = express();

app.use(bodyParser.json());
//----------------------------------------
app.post('/todos', (req, res) => {
   console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});


//---------------------------------------

app.get('/todos', (req, res) =>{
   Todo.find().then((doc)=>{
       res.send({doc});
   },(err)=>{
       res.status(400).send(err);
   });
});



app.listen(3000, ()=>{
   console.log("Server is up on port 3000"); 
});

module.exports = {app};