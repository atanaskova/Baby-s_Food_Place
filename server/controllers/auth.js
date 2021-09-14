const errorResponse=require('../lib/handlers/error-response-sender');
const successResponse=require('../lib/handlers/success-response-sender');
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const registerMailer=require('../lib/handlers/mail-handler/register-mail');
const logInMailer=require('../lib/handlers/mail-handler/login-mail');
const resetMailer=require('../lib/handlers/mail-handler/reset-mail');
require('dotenv').config();

module.exports={
    register:async(req,res)=>{
        try{
            if(!req.body.password || req.body.password != req.body.confirmation_password){
                return errorResponse(res,400,'Bad request. Passwords do not match');
            }

            var user=await User.findOne({email:req.body.email});
            if(user){
                return errorResponse(res,400,'User exists with the provided email');
            }

            req.body.password=bcrypt.hashSync(req.body.password,10);

            const result=await User.create(req.body);

            registerMailer(result);

            const payload={
                id:result._id,
                email:result.email
            }

            const token=jwt.sign(payload,process.env.SECRET_AUTH_KEY,{
                expiresIn:'120m'
            });

            res.status(200).json({result,token});

            // successResponse(res,`User registered.`);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    login:async(req,res)=>{
        try{
            const result=await User.findOne({email:req.body.email})
            if(!result){
                return errorResponse(res,400,'Bad Request. User with the provided email does not exist.');
            }

            
            if(!bcrypt.compareSync(req.body.password,result.password)){
                return errorResponse(res,400,'Incorrect password.');
            }

            logInMailer(result);    
            
            const payload={
                id:result._id,
                email:result.email
            }
        
            const token=jwt.sign(payload,process.env.SECRET_AUTH_KEY,{
                expiresIn:'120m'
            });

            res.status(200).json({result,token});
            // successResponse(res,`You are successfully logged in! ${token}`);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    forgotPassword:async(req,res)=>{
        try{
            resetMailer(req.body.email);
            successResponse(res,'Email has been sent, follow the instructions');
        }catch(error){
            errorResponse(res,500,'Internal Server Error');
        }
    },
    resetPassword:async(req,res)=>{
        try{
            const filter={email:req.body.email};
            const new_password=bcrypt.hashSync(req.body.new_password,10);

            const user=await User.findOne(filter)
            if(!user){
                return errorResponse(res,400,'Bad Request. User with the provided email does not exist.');
            }

            const changedUser=await User.findOneAndUpdate(filter,{password:new_password});

            res.json(changedUser);
            // successResponse(res,'Password is successfully changed');
        }catch (error){
            errorResponse(res,500,error.message);
            // errorResponse(res,500,'Internal Server Error');
        }
    },
    userUpdate:async(req,res)=>{
        const {id}=req.params;
         try{
             req.body.password=bcrypt.hashSync(req.body.password,10);
             
             const result=await User.findByIdAndUpdate(id,req.body);
 
             res.json({result});
             // successResponse(res,`User is updated`, result);
         }catch(error){
             errorResponse(res,500,{
                 ...req.body,
                 _id:req.params.id,
                 error:error.message
             })
         }
     }, 
};