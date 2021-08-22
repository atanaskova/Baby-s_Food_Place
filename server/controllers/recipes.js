const Recipe=require('../models/recipe');
require('../models/user');
const likesMailer=require('../lib/handlers/mail-handler/likes-mail');
const successResponse=require('../lib/handlers/success-response-sender');
const errorResponse=require('../lib/handlers/error-response-sender');
const unauthorizedErrorHandler=require('../lib/handlers/unauthorized-error-handler');

module.exports={
    fetchAll: async(req,res)=>{
        try{
            const recipes=await Recipe.find()
            // .populate('user',['email','first_name','last_name'])
            res.send(recipes);
            // successResponse(res,'List of all recipes',recipes);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
    create: async(req,res)=>{
        // let data={
        //         ...req.body,
        //         user:req.user.id
        // } OVA E ZA DOLU ZA VO TRY
        try{
            const recipe=await Recipe.create(req.body);
            successResponse(res,'New recipe created', recipe);
        }catch(error){
            errorResponse(res,500,error.message)
        }
    },
    // patchUpdate:async(req,res)=>{
    //     try{
    //         const recipe=await Recipe.findByIdAndUpdate(req.params.id,req.body);
    //         successResponse(res,`Recipe ${req.params.recipe_title} is updated`, recipe);
    //     }catch(error){
    //         errorResponse(res,500,{
    //             ...req.body,
    //             _id:req.params.id,
    //             error:error.message
    //         })
    //     }
    // },
    delete:async(req,res)=>{
        try{
            await Recipe.findByIdAndRemove({_id:req.params.id});
            successResponse(res,`Recipe ${req.params.recipe_title} is deleted`);

        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    like:async(req,res)=>{
        try{
            if(!req.userId) return unauthorizedErrorHandler(err,req,res,next);

            const recipe=await Recipe.findById(req.params.id);

            if(!recipe.likes.includes(req.userId)){
                await recipe.updateOne({$push:{likes:req.userId}});
                successResponse(res,200,'The recipe has been liked!');
                likesMailer(req.user);
            }else{
                await recipe.updateOne({$pull:{likes:req.userId}});
                successResponse(res,200,'The recipe has been disliked!');
            }


            const updatedRecipe=await Recipe.findByIdAndUpdate(req.params.id,recipe,{new:true});
            res.json(updatedRecipe);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
};