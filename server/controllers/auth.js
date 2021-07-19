const errorResponse=require('../lib/handlers/error-response-sender');
const successResponse=require('../lib/handlers/success-response-sender');
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports={
    register:async(req,res)=>{
        try{
            if(!req.body.password || req.body.password != req.body.confirmation_password){
                return errorResponse(res,400,'Bad request. Passwords do not match');
            }

            const user=await User.findOne({email:req.body.email});
            if(user){
                return errorResponse(res,400,'User exists with the provided email');
            }

            req.body.password=bcrypt.hashSync(req.body.password);

            await User.create(req.body);

            successResponse(res,'User registered');
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    login:async(req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email})
            if(!user){
                return errorResponse(res,400,'Bad Request. User with the provided email does not exist.');
            }
            if(!bcrypt.compare(req.body.password,user.password)){
                return errorResponse(res,400,'Incorrect password.');
            }

            const payload={
                id:user.id,
                email:user.email
            }

            const token= jwt.sign(payload,'88WEJEOIER8**EFH3988',{
                expiresIn:'60m'
            });
            successResponse(res,'JWT successfully generated',token);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
};