var mongoose=require("mongoose");

var recipesSchema=mongoose.Schema({
    recipe_title:{
        type:String,
        required:['Please provide the title of the recipe']
    },
    category:{
        type:String,
        required:['Please provide the category of the recipe']
    },
    preparation_time:{
        type:String,
        required:['Please provide the preparation time']
    },
    no_people:{
        type:String,
        required:['Please provide the number of people']
    },
    recipe_description:{
        type:String,
        required:['Please provide a short description']
    },
    recipe_details:{
        type:String,
        required:['Please provide the recipe details']
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
});

module.exports=mongoose.model("Recipe", recipesSchema)