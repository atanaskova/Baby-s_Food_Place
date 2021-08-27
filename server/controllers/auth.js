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
                expiresIn:'60m'
            });

            res.status(200).json({result,token});

            // successResponse(res,`User registered.`);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    // confirmation:async (req, res) => {
    //     try {
    //       const { user: { id } } = jwt.verify(req.params.token, SECRET_AUTH_KEY);
    //       await User.findByIdAndUpdate({where: { id }},req.user.confirmed=true);
    //     } catch (error) {
    //         errorResponse(res,500,error.message);
    //     }
      
    //     return res.redirect('http://localhost:3001/api/user/login');
    // },
    login:async(req,res)=>{
        try{
            const result=await User.findOne({email:req.body.email})
            if(!result){
                return errorResponse(res,400,'Bad Request. User with the provided email does not exist.');
            }
            // if (!result.confirmed) {
            //     return errorResponse(res,400,'Please confirm your email to login');
            // }
            if(!bcrypt.compare(req.body.password,result.password)){
                return errorResponse(res,400,'Incorrect password.');
            }

            logInMailer(result);    
            
            const payload={
                id:result._id,
                email:result.email
            }
        
            const token=jwt.sign(payload,process.env.SECRET_AUTH_KEY,{
                expiresIn:'60m'
            });

            res.status(200).json({result,token});
            // successResponse(res,`You are successfully logged in! ${token}`);
        }catch(error){
            errorResponse(res,500,error.message);
        }
    },
    // logout:async(req,res)=>{
    //     try{
    //         const payload={
    //             id:req.user.id,
    //             email:req.user.email
    //         }

    //         const token=jwt.sign(payload,'Invalid secret key',{
    //             expiresIn:'1'
    //         });
            
    //         successResponse(res,'You have been logged out',token);
    //     }catch(error){
    //         errorResponse(res,500,error.message);
    //     }
    // },
    changePassword:async(req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email});
            if(!user){
                return errorResponse(res,403,'Forbidden');
            }
            if(!bcrypt.compareSync(req.body.password,user.password)){
                return errorResponse(res,401,'Unauthorized');
            }
            if(req.body.new_password===req.body.confirmation_password){
                req.body.password==req.new_password;
            }else{
                return errorResponse(res,400,'Passwords do not match');
            }

            req.body.password=bcrypt.hashSync(req.body.password);

            const updateUser=await User.findByIdAndUpdate(user._id,req.body);
            if(updateUser){
                return successResponse(res,'Password is successfully changed');
            }
            return errorResponse(res,404,'Not Found');
        }catch(error){
            errorResponse(res,500,'Internal Server Error');
        }
    },
    forgotPassword:async(req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email});
            if(!user){
                errorResponse(res,404,'Not Found');
            }
            const getLink=await User.findByIdAndUpdate(user._id,req.body);
            if(getLink){
                resetMailer(req.user);
            }
            successResponse(res,'Email has been sent, follow the instructions');
        }catch(error){
            errorResponse(res,500,'Internal Server Error');
        }
    },
    resetPassword:async(req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email});
            if(!user)
            errorResponse(res,403,'Forbidden');
            if(req.body.password===req.body.confirmation_password){
                req.body.password==req.body.new_password;
            }else{
                errorResponse(res,400,'Passwords do not match');
            }

            req.body.password=bcrypt.hashSync(req.body.password);

            const updateUser=await User.findByIdAndUpdate(user._id,req.body);
            if(updateUser){
                successResponse(res,'Password is successfully changed');
            }else
            return errorResponse(res,404,'Not Found');
        }catch (error){
            errorResponse(res,500,'Internal Server Error');
        }
    },
};