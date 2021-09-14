const Recipe=require('../models/recipe');
const likesMailer=require('../lib/handlers/mail-handler/likes-mail');
const successResponse=require('../lib/handlers/success-response-sender');
const errorResponse=require('../lib/handlers/error-response-sender');
const unauthorizedErrorHandler=require('../lib/handlers/unauthorized-error-handler');

module.exports={
    fetchAll: async(req,res)=>{
        try{
            const recipes=await Recipe.find()
            // .populate('user',['email','name','surname'])
            res.send(recipes);
            // successResponse(res,'List of all recipes',recipes);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
    create: async(req,res)=>{
        try{
            const recipe=await Recipe.create({...req.body,user:req.userId,created:new Date().toISOString()});
            successResponse(res,'New recipe created', recipe);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
    delete:async(req,res)=>{
        try{
            await Recipe.findByIdAndRemove({_id:req.params.id});
            successResponse(res,`Recipe ${req.params.recipe_title} is deleted`);

        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    like:async(req,res)=>{
            const {id}=req.params;

            if(!req.userId) return unauthorizedErrorHandler(err,req,res,next);

            const recipe=await Recipe.findById(id);
            const index=recipe.likes.findIndex((id)=>id===String(req.userId));

            if(index===-1){
                recipe.likes.push(req.userId);
                likesMailer(recipe.user);
                // successResponse(res,200,'The recipe has been liked!');
            }else{
               recipe.likes=recipe.likes.filter((id)=>id!==String(req.userId));
                // successResponse(res,200,'The recipe has been disliked!');
            }
            
            const updatedRecipe=await Recipe.findByIdAndUpdate(id,recipe,{new:true});
            res.status(200).json(updatedRecipe);
    },
    fetchByCategory: async(req,res)=>{
        const {category}=req.params;
        try{
            const recipes=await Recipe.find({category:category})
            res.send(recipes);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
};