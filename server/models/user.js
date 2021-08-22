var mongoose=require("mongoose");

var usersSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:['Please provide the first name of the user']
    },
    last_name:{
        type:String,
        required:['Please provide the last name of the user']
    },
    email:{
        type:String,
        required:['Please provide the email of the user']
    },
    birthday:{
        type:Date,
        required:['Please provide your birth date']
    },
    password:{
        type:String,
        required:['Please provide the password']
    },
    picture:{
        type:String,
    },
});

module.exports=mongoose.model("User",usersSchema);