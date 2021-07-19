const Recipe=require('../models/recipe');
const User=require('../models/user');
const successResponse=require('../lib/handlers/success-response-sender');
const errorResponse=require('../lib/handlers/error-response-sender');

module.exports={
    fetchAll: async(req,res)=>{
        try{
            const recipes=await Recipe.find().populate('user',['email','first_name','last_name'])
            successResponse(res,'List of all recipes',recipes);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
    create: async(req,res)=>{
        try{
            let data={
                ...req.body,
                user:req.user.id
            }
            const recipe=await Recipe.create(data);

            successResponse(res,'New recipe created', recipe);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    }
};