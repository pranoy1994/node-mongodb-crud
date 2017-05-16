
var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
   
    email:{
        type:String,
        minlength:1,
        reqired:true,
        trim:true
    }
    
});

module.exports = {Users};

/*
var newUser = new Users({
    email:"  pranoybiswas1994@gmail.com"
});*/

/*
newUser.save().then((res)=>{
    console.log(res);
},(err)=>{
    console.log("Some error occured!");
});*/