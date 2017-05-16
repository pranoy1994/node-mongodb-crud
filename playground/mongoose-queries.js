const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {Users} = require('./../server/models/Users');
//  591addba5789f31f40983adf
/*

var id = "691addba5789f31f40983adfyyu";

if(!ObjectId.isValid(id)){
    console.log("ID is not valid..");
}

Todo.find({
    _id: id
}).then((todos) =>{
    if(todos.length === 0) { return console.log("Id not found !!"); }
    console.log("Todos: "+ todos);
},(err)=>{
    console.log("Error !", err)
;});

Todo.findOne({
    _id: id
}).then((todo) =>{
    if(!todo) { return console.log("Id not found !!"); }
    console.log("Todo: "+ todo);
},(err)=>{
    console.log("Error !", err)
;});

Todo.findById(id).then((todo) =>{
    if(!todo) { return console.log("Id not found !!"); }
    console.log("Todo: "+ todo);
    
},(err)=>{
    console.log("Error !", err)
;});
*/

var id2 = "6919a6371391a21f7428ea26";

Users.findById(id2).then((doc)=>{
    if(!doc) return console.log("User not found..");
    console.log("User found- >");
    console.log("Email->"+ doc.email);
},(err) => {
    console.log("Connection Problem.. ");
});
