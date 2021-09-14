const express=require('express');
const router=express.Router();
const controller=require('../../../controllers/auth');

router
    .post('/register',controller.register)
    .post('/login',controller.login)
    .patch('/:id',controller.userUpdate)
    .post('/forgot-password',controller.forgotPassword)
    .post('/reset-password',controller.resetPassword)
module.exports=router;