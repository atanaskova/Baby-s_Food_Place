var mongoose=require("mongoose");

var usersSchema=mongoose.Schema({
    name:{
        type:String,
        required:['Please provide the first name of the user']
    },
    surname:{
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
    imageUrl:{
        type:String,
    },
});

module.exports=mongoose.model("User",usersSchema);